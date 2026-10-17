"use client";

import { useMemo, useState } from "react";

function countWords(text: string): number {
  return (
    text.match(/[\p{L}\p{N}]+(?:['’\-][\p{L}\p{N}]+)*/gu)?.length ?? 0
  );
}

function countSentences(text: string): number {
  const matches = text.match(/[.!?]+(?:["'’”)\]]+)?(?=\s|$)/gu);
  return matches?.length ?? 0;
}

export default function WordCounter() {
  const [text, setText] = useState("");

  const counts = useMemo(() => {
    const trimmed = text.trim();
    const words = countWords(text);
    const paragraphs = trimmed
      ? trimmed.split(/\n\s*\n+/).filter((paragraph) => paragraph.trim()).length
      : 0;

    return [
      { label: "Words", value: words.toLocaleString() },
      { label: "Characters (with spaces)", value: text.length.toLocaleString() },
      {
        label: "Characters (without spaces)",
        value: text.replace(/\s/g, "").length.toLocaleString(),
      },
      { label: "Sentences", value: countSentences(text).toLocaleString() },
      { label: "Paragraphs", value: paragraphs.toLocaleString() },
      {
        label: "Estimated reading time",
        value: words === 0 ? "0 min" : `${Math.ceil(words / 200)} min`,
      },
    ];
  }, [text]);

  return (
    <div className="space-y-5">
      <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
        <label htmlFor="word-counter-text" className="mb-2 block text-sm font-medium text-slate-700">
          Paste or type your text
        </label>
        <textarea
          id="word-counter-text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          rows={10}
          placeholder="Start writing or paste text here..."
          className="w-full resize-y rounded-xl border border-slate-300 px-3.5 py-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
        />
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs text-slate-500" aria-live="polite">
            Counts update as you type. Your text stays in this browser.
          </p>
          <button
            type="button"
            onClick={() => setText("")}
            disabled={!text}
            className="shrink-0 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-600 transition hover:border-slate-400 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Clear
          </button>
        </div>
      </div>

      <dl className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {counts.map((count) => (
          <div
            key={count.label}
            className="rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/80 via-white to-cyan-50/50 p-4"
          >
            <dt className="text-xs font-medium leading-5 text-slate-500">{count.label}</dt>
            <dd className="mt-1 text-2xl font-bold text-slate-900">{count.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
