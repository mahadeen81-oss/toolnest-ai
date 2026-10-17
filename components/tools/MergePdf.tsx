"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";

type PdfItem = { id: number; file: File };
type MergeResult = { url: string; pages: number };

export default function MergePdf() {
  const [files, setFiles] = useState<PdfItem[]>([]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<MergeResult | null>(null);
  const nextId = useRef(0);
  const downloadUrl = useRef<string | null>(null);
  const active = useRef(true);

  useEffect(() => {
    active.current = true;
    return () => {
      active.current = false;
      if (downloadUrl.current) URL.revokeObjectURL(downloadUrl.current);
    };
  }, []);

  function clearResult() {
    if (downloadUrl.current) URL.revokeObjectURL(downloadUrl.current);
    downloadUrl.current = null;
    setResult(null);
    setError("");
  }

  function selectFiles(event: ChangeEvent<HTMLInputElement>) {
    const selected = Array.from(event.currentTarget.files || []);
    event.currentTarget.value = "";
    clearResult();
    const accepted = selected.filter(
      (file) => file.type === "application/pdf" || /\.pdf$/i.test(file.name),
    );
    setFiles((current) => [
      ...current,
      ...accepted.map((file) => ({ id: ++nextId.current, file })),
    ]);
    if (accepted.length !== selected.length) {
      setError("Only PDF files can be merged. Other selected files were skipped.");
    }
  }

  function move(index: number, direction: -1 | 1) {
    clearResult();
    setFiles((current) => {
      const target = index + direction;
      if (target < 0 || target >= current.length) return current;
      const reordered = [...current];
      [reordered[index], reordered[target]] = [reordered[target], reordered[index]];
      return reordered;
    });
  }

  function remove(id: number) {
    clearResult();
    setFiles((current) => current.filter((item) => item.id !== id));
  }

  async function merge() {
    if (files.length < 2) {
      setError("Choose at least two PDF files to merge.");
      return;
    }
    clearResult();
    setBusy(true);
    try {
      const { PDFDocument, EncryptedPDFError } = await import("pdf-lib");
      const merged = await PDFDocument.create();
      for (const item of files) {
        try {
          const source = await PDFDocument.load(await item.file.arrayBuffer());
          if (source.getPageCount() === 0) {
            throw new Error("This PDF has no pages.");
          }
          const pages = await merged.copyPages(source, source.getPageIndices());
          pages.forEach((page) => merged.addPage(page));
        } catch (fileError) {
          if (
            fileError instanceof EncryptedPDFError ||
            (fileError instanceof Error && /encrypted|password/i.test(fileError.message))
          ) {
            throw new Error(
              `“${item.file.name}” is encrypted or password-protected. Save an unlocked copy using an app you trust, then try again. No files were uploaded.`,
            );
          }
          throw new Error(
            `Couldn't read “${item.file.name}”. It may be invalid, damaged, or unsupported. Open it in a PDF reader and export a fresh copy before trying again.`,
          );
        }
      }
      const bytes = await merged.save();
      if (!active.current) return;
      const url = URL.createObjectURL(
        new Blob([new Uint8Array(bytes)], { type: "application/pdf" }),
      );
      downloadUrl.current = url;
      setResult({ url, pages: merged.getPageCount() });
    } catch (mergeError) {
      if (active.current) {
        setError(mergeError instanceof Error ? mergeError.message : "Couldn't merge these PDFs. Please try again.");
      }
    } finally {
      if (active.current) setBusy(false);
    }
  }

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <label htmlFor="merge-pdf-files" className="mb-2 block text-sm font-medium text-slate-700">
        Choose two or more PDF files
      </label>
      <input
        id="merge-pdf-files"
        type="file"
        multiple
        accept=".pdf,application/pdf"
        disabled={busy}
        onChange={selectFiles}
        className="block w-full rounded-xl border border-slate-300 text-sm text-slate-600 file:mr-3 file:border-0 file:bg-brand-500 file:px-4 file:py-3 file:font-semibold file:text-white disabled:opacity-50"
      />
      <p className="mt-3 text-xs leading-5 text-slate-500">
        Add files in batches if needed. Every page of each PDF is included in the file order below.
        Password-protected PDFs cannot be merged here.
      </p>
      {files.length > 0 ? (
        <ol className="mt-5 space-y-3" aria-label="PDF files in merge order">
          {files.map((item, index) => (
            <li key={item.id} className="flex min-w-0 flex-col gap-3 rounded-2xl border border-slate-200 p-3 sm:flex-row sm:items-center">
              <div className="min-w-0 flex-1">
                <p className="break-words text-sm font-semibold text-slate-800">
                  {index + 1}. {item.file.name}
                </p>
                <p className="mt-1 text-xs text-slate-500">
                  {(item.file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <button type="button" disabled={busy || index === 0} onClick={() => move(index, -1)} aria-label={`Move ${item.file.name} up`} className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-600 disabled:opacity-40">
                  Move up
                </button>
                <button type="button" disabled={busy || index === files.length - 1} onClick={() => move(index, 1)} aria-label={`Move ${item.file.name} down`} className="rounded-lg border border-slate-300 px-3 py-2 text-xs font-semibold text-slate-600 disabled:opacity-40">
                  Move down
                </button>
                <button type="button" disabled={busy} onClick={() => remove(item.id)} aria-label={`Remove ${item.file.name}`} className="rounded-lg border border-rose-200 px-3 py-2 text-xs font-semibold text-rose-700 disabled:opacity-40">
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-5 rounded-2xl bg-slate-50 p-6 text-center text-sm text-slate-500">
          Selected PDFs will appear here. Your original files are not changed.
        </p>
      )}
      {error && <p role="alert" className="mt-4 rounded-xl bg-rose-50 p-4 text-sm text-rose-700">{error}</p>}
      <button type="button" onClick={merge} disabled={busy || files.length < 2} className="mt-5 w-full rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto">
        {busy ? "Merging PDFs…" : "Merge PDFs"}
      </button>
      {result && (
        <div className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 p-4" role="status">
          <p className="text-sm text-emerald-900">Ready: {result.pages} pages in one PDF. Open the download to review it before sharing.</p>
          <a href={result.url} download="merged.pdf" className="mt-3 inline-block rounded-xl bg-brand-500 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-600">
            Download merged PDF
          </a>
        </div>
      )}
    </div>
  );
}
