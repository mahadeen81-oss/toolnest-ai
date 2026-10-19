"use client";

import { useMemo, useState } from "react";

export default function RemoveDuplicateLines() {
  const [text, setText] = useState("");
  const [ignoreCase, setIgnoreCase] = useState(false);
  const [trimSpaces, setTrimSpaces] = useState(false);
  const [removeEmpty, setRemoveEmpty] = useState(false);
  const [sortAlphabetically, setSortAlphabetically] = useState(false);
  const [status, setStatus] = useState("");

  const result = useMemo(() => {
    const lines = text ? text.split(/\r\n|\n|\r/) : [];
    const seen = new Set<string>();
    const unique: string[] = [];
    let duplicates = 0;
    let empty = 0;
    for (const original of lines) {
      const line = trimSpaces ? original.trim() : original;
      if (removeEmpty && line.trim().length === 0) {
        empty += 1;
        continue;
      }
      const key = (trimSpaces ? line.trim() : line);
      const normalized = ignoreCase ? key.toLocaleLowerCase() : key;
      if (seen.has(normalized)) {
        duplicates += 1;
      } else {
        seen.add(normalized);
        unique.push(line);
      }
    }
    if (sortAlphabetically) unique.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: ignoreCase ? "base" : "variant" }));
    return { text: unique.join("\n"), duplicates, empty, removed: duplicates + empty, kept: unique.length };
  }, [text, ignoreCase, trimSpaces, removeEmpty, sortAlphabetically]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(result.text);
      setStatus("Cleaned text copied to your clipboard.");
    } catch {
      setStatus("Couldn't copy automatically. Select the result and use your device's Copy command.");
    }
  }

  function updateOption(update: () => void) {
    update();
    setStatus("");
  }

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <label htmlFor="duplicate-lines-input" className="mb-2 block text-sm font-medium text-slate-700">Paste your lines</label>
      <textarea id="duplicate-lines-input" rows={9} value={text} onChange={(event) => { setText(event.target.value); setStatus(""); }} placeholder={"Add one item per line…\nThe first matching line is kept."} className="w-full resize-y rounded-xl border border-slate-300 px-3.5 py-3 text-sm leading-6 text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
      <fieldset className="mt-5">
        <legend className="text-sm font-semibold text-slate-800">Cleanup options</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 text-sm text-slate-700"><input type="checkbox" checked={ignoreCase} onChange={() => updateOption(() => setIgnoreCase(!ignoreCase))} className="mt-0.5 accent-violet-600" /><span><span className="font-medium">Ignore letter case</span><span className="mt-1 block text-xs leading-5 text-slate-500">Treat “Note” and “note” as the same line.</span></span></label>
          <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 text-sm text-slate-700"><input type="checkbox" checked={trimSpaces} onChange={() => updateOption(() => setTrimSpaces(!trimSpaces))} className="mt-0.5 accent-violet-600" /><span><span className="font-medium">Trim spaces</span><span className="mt-1 block text-xs leading-5 text-slate-500">Remove spaces at the start and end of kept lines.</span></span></label>
          <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 text-sm text-slate-700"><input type="checkbox" checked={removeEmpty} onChange={() => updateOption(() => setRemoveEmpty(!removeEmpty))} className="mt-0.5 accent-violet-600" /><span><span className="font-medium">Remove empty lines</span><span className="mt-1 block text-xs leading-5 text-slate-500">Whitespace-only lines count as empty.</span></span></label>
          <label className="flex items-start gap-3 rounded-xl border border-slate-200 p-3 text-sm text-slate-700"><input type="checkbox" checked={sortAlphabetically} onChange={() => updateOption(() => setSortAlphabetically(!sortAlphabetically))} className="mt-0.5 accent-violet-600" /><span><span className="font-medium">Sort A–Z</span><span className="mt-1 block text-xs leading-5 text-slate-500">Sort the unique lines alphabetically.</span></span></label>
        </div>
      </fieldset>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-xl bg-violet-50 px-4 py-3 text-sm text-violet-900" aria-live="polite">
        <span><strong>{result.removed}</strong> {result.removed === 1 ? "line" : "lines"} removed</span><span>{result.duplicates} duplicate{result.duplicates === 1 ? "" : "s"}</span><span>{result.empty} empty</span><span>{result.kept} kept</span>
      </div>
      <label htmlFor="duplicate-lines-result" className="mb-2 mt-5 block text-sm font-medium text-slate-700">Cleaned text</label>
      <textarea id="duplicate-lines-result" rows={9} readOnly value={result.text} placeholder="Your unique lines will appear here…" className="w-full resize-y rounded-xl border border-slate-300 bg-slate-50 px-3.5 py-3 text-sm leading-6 text-slate-800 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
      <div className="mt-4 flex flex-wrap gap-3">
        <button type="button" disabled={!result.text} onClick={copy} className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50">Copy result</button>
        <button type="button" disabled={!text} onClick={() => { setText(""); setStatus("Text cleared."); }} className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">Clear</button>
      </div>
      <p role="status" aria-live="polite" className="mt-3 text-sm text-slate-500">{status}</p>
    </div>
  );
}
