"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

type DownloadItem = { name: string; url: string; pages: number };

export default function SplitPdf() {
  const [file, setFile] = useState<File | null>(null);
  const [pageCount, setPageCount] = useState<number | null>(null);
  const [ranges, setRanges] = useState("");
  const [mode, setMode] = useState<"combined" | "separate">("combined");
  const [downloads, setDownloads] = useState<DownloadItem[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");
  const urls = useRef<string[]>([]);
  const active = useRef(true);

  useEffect(() => {
    active.current = true;
    return () => {
      active.current = false;
      urls.current.forEach(URL.revokeObjectURL);
    };
  }, []);

  function clearDownloads() {
    urls.current.forEach(URL.revokeObjectURL);
    urls.current = [];
    setDownloads([]);
    setStatus("");
  }

  async function selectFile(event: ChangeEvent<HTMLInputElement>) {
    const selected = event.currentTarget.files?.[0] ?? null;
    event.currentTarget.value = "";
    clearDownloads();
    setFile(null);
    setPageCount(null);
    setError("");
    setRanges("");
    if (!selected) return;
    if (selected.type !== "application/pdf" && !/\.pdf$/i.test(selected.name)) {
      setError("Choose a PDF file to continue.");
      return;
    }
    setFile(selected);
    setStatus("Checking PDF pages…");
    setBusy(true);
    try {
      const { PDFDocument } = await import("pdf-lib");
      const pdf = await PDFDocument.load(await selected.arrayBuffer());
      if (!active.current) return;
      const count = pdf.getPageCount();
      if (!count) throw new Error("This PDF does not contain any pages.");
      setPageCount(count);
      setStatus(`PDF ready · ${count} ${count === 1 ? "page" : "pages"}`);
    } catch (loadError) {
      if (!active.current) return;
      setFile(null);
      const encrypted = loadError instanceof Error &&
        (/encrypted|password/i.test(loadError.message) || loadError.name === "EncryptedPDFError");
      setError(encrypted
        ? "This PDF is encrypted or password-protected. Save an unlocked copy with a PDF app you trust, then try again."
        : loadError instanceof Error && /does not contain/.test(loadError.message)
          ? loadError.message
          : "We couldn't read this PDF. It may be damaged or unsupported; open it in a PDF reader and export a fresh copy.");
      setStatus("");
    } finally {
      if (active.current) setBusy(false);
    }
  }

  function parsePages(): number[] | null {
    if (!pageCount) {
      setError("Choose a readable PDF first.");
      return null;
    }
    if (!ranges.trim()) {
      setError("Enter at least one page number or range.");
      return null;
    }
    const selected: number[] = [];
    const seen = new Set<number>();
    for (const rawPart of ranges.split(",")) {
      const part = rawPart.trim();
      const match = /^(\d+)(?:\s*-\s*(\d+))?$/.exec(part);
      if (!match) {
        setError(`“${part || rawPart}” isn't a valid page number or range. Use a format like 1-3, 5, 8-10.`);
        return null;
      }
      const start = Number(match[1]);
      const end = match[2] ? Number(match[2]) : start;
      if (start > end) {
        setError(`The range ${start}-${end} is reversed. Put the smaller page number first.`);
        return null;
      }
      if (start < 1 || end > pageCount) {
        setError(`Page numbers must be between 1 and ${pageCount}.`);
        return null;
      }
      for (let page = start; page <= end; page += 1) {
        if (seen.has(page)) {
          setError(`Page ${page} appears more than once. Remove overlapping or repeated pages.`);
          return null;
        }
        seen.add(page);
        selected.push(page);
      }
    }
    return selected;
  }

  async function split() {
    clearDownloads();
    setError("");
    const pages = parsePages();
    if (!file || !pages) return;
    setBusy(true);
    const generated: DownloadItem[] = [];
    try {
      const { PDFDocument } = await import("pdf-lib");
      const source = await PDFDocument.load(await file.arrayBuffer());
      if (source.getPageCount() !== pageCount) {
        throw new Error("The PDF changed after it was selected. Choose the file again.");
      }
      if (mode === "combined") {
        const output = await PDFDocument.create();
        const copied = await output.copyPages(source, pages.map((page) => page - 1));
        copied.forEach((page) => output.addPage(page));
        const bytes = await output.save();
        generated.push({
          name: `${file.name.replace(/\.pdf$/i, "")}-selected-pages.pdf`,
          url: URL.createObjectURL(new Blob([new Uint8Array(bytes)], { type: "application/pdf" })),
          pages: pages.length,
        });
      } else {
        for (const pageNumber of pages) {
          const output = await PDFDocument.create();
          const [copied] = await output.copyPages(source, [pageNumber - 1]);
          output.addPage(copied);
          const bytes = await output.save();
          generated.push({
            name: `${file.name.replace(/\.pdf$/i, "")}-page-${pageNumber}.pdf`,
            url: URL.createObjectURL(new Blob([new Uint8Array(bytes)], { type: "application/pdf" })),
            pages: 1,
          });
        }
      }
      if (!active.current) {
        generated.forEach((item) => URL.revokeObjectURL(item.url));
        return;
      }
      urls.current = generated.map((item) => item.url);
      setDownloads(generated);
      setStatus(`Ready · ${pages.length} ${pages.length === 1 ? "page" : "pages"} selected`);
    } catch (splitError) {
      generated.forEach((item) => URL.revokeObjectURL(item.url));
      if (active.current) {
        const encrypted = splitError instanceof Error &&
          (/encrypted|password/i.test(splitError.message) || splitError.name === "EncryptedPDFError");
        setError(encrypted
          ? "This PDF is encrypted or password-protected. Save an unlocked copy with a PDF app you trust, then try again."
          : splitError instanceof Error && /changed after/.test(splitError.message)
            ? splitError.message
            : "We couldn't split this PDF. It may be damaged or unsupported. No output was created; try exporting a fresh copy.");
      }
    } finally {
      if (active.current) setBusy(false);
    }
  }

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <label htmlFor="split-pdf-file" className="mb-2 block text-sm font-medium text-slate-700">Choose one PDF</label>
      <input id="split-pdf-file" type="file" accept=".pdf,application/pdf" disabled={busy} onChange={selectFile} className="block w-full rounded-xl border border-slate-300 text-sm text-slate-600 file:mr-3 file:border-0 file:bg-brand-500 file:px-4 file:py-3 file:font-semibold file:text-white disabled:opacity-50" />
      {file && <p className="mt-3 break-words text-sm text-slate-600">{file.name} · {pageCount === null ? "Reading…" : `${pageCount} ${pageCount === 1 ? "page" : "pages"}`}</p>}
      <label htmlFor="split-pdf-ranges" className="mb-2 mt-5 block text-sm font-medium text-slate-700">Pages to extract</label>
      <input id="split-pdf-ranges" type="text" value={ranges} disabled={busy || !pageCount} onChange={(event) => { setRanges(event.target.value); setError(""); clearDownloads(); }} placeholder="For example: 1-3, 5, 8-10" aria-describedby="split-pdf-hint" className="w-full rounded-xl border border-slate-300 px-3.5 py-3 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 disabled:bg-slate-50" />
      <p id="split-pdf-hint" className="mt-2 text-xs leading-5 text-slate-500">Enter page numbers and ranges separated by commas. Each page can appear only once.</p>
      <fieldset className="mt-5">
        <legend className="text-sm font-medium text-slate-700">Save selected pages as</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className={`flex cursor-pointer gap-3 rounded-2xl border p-4 ${mode === "combined" ? "border-violet-300 bg-violet-50" : "border-slate-200"}`}>
            <input type="radio" name="split-pdf-mode" value="combined" checked={mode === "combined"} disabled={busy} onChange={() => { setMode("combined"); clearDownloads(); }} className="mt-1 accent-violet-600" />
            <span><span className="block text-sm font-semibold text-slate-800">One PDF</span><span className="mt-1 block text-xs leading-5 text-slate-500">Put selected pages together in the order entered.</span></span>
          </label>
          <label className={`flex cursor-pointer gap-3 rounded-2xl border p-4 ${mode === "separate" ? "border-violet-300 bg-violet-50" : "border-slate-200"}`}>
            <input type="radio" name="split-pdf-mode" value="separate" checked={mode === "separate"} disabled={busy} onChange={() => { setMode("separate"); clearDownloads(); }} className="mt-1 accent-violet-600" />
            <span><span className="block text-sm font-semibold text-slate-800">Separate PDFs</span><span className="mt-1 block text-xs leading-5 text-slate-500">Create one downloadable PDF per selected page.</span></span>
          </label>
        </div>
      </fieldset>
      {error && <p role="alert" className="mt-4 rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-700">{error}</p>}
      <button type="button" onClick={split} disabled={busy || !file || !pageCount} className="mt-5 w-full rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">{busy ? "Creating PDFs…" : "Split PDF"}</button>
      {status && <p role="status" aria-live="polite" className="mt-4 text-sm text-slate-600">{status}</p>}
      {downloads.length > 0 && <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4" role="status">
        <p className="text-sm font-semibold text-emerald-900">Your PDF{downloads.length > 1 ? "s are" : " is"} ready.</p>
        <ul className="mt-3 space-y-2">
          {downloads.map((item) => <li key={item.url} className="flex flex-col gap-2 rounded-xl bg-white/80 p-3 sm:flex-row sm:items-center sm:justify-between"><span className="break-all text-sm text-slate-700">{item.name}</span><a href={item.url} download={item.name} className="shrink-0 rounded-lg bg-brand-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-brand-600">Download</a></li>)}
        </ul>
      </div>}
    </div>
  );
}
