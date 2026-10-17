"use client";

import { useState } from "react";

const CASES = ["UPPERCASE", "lowercase", "Title Case", "Sentence case", "camelCase", "snake_case", "kebab-case"] as const;
type CaseStyle = (typeof CASES)[number];

function capitalize(word: string): string {
  return word.replace(/^\p{L}/u, (letter) => letter.toUpperCase());
}

function splitWords(text: string): string[] {
  return text
    .replace(/([\p{Ll}\p{N}])(\p{Lu})/gu, "$1 $2")
    .replace(/(\p{Lu})(\p{Lu}\p{Ll})/gu, "$1 $2")
    .match(/[\p{L}\p{N}]+/gu) || [];
}

function convertCase(text: string, style: CaseStyle): string {
  if (style === "UPPERCASE") return text.toUpperCase();
  if (style === "lowercase") return text.toLowerCase();
  if (style === "Sentence case") {
    return text.toLowerCase().replace(
      /(^|[.!?]\s+)([\s"'“‘([{]*)(\p{L})/gu,
      (_, boundary: string, prefix: string, letter: string) => boundary + prefix + letter.toUpperCase(),
    );
  }
  if (style === "Title Case") {
    const lower = text.toLowerCase();
    const total = lower.match(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu)?.length || 0;
    const smallWords = new Set(["a", "an", "and", "as", "at", "but", "by", "for", "in", "nor", "of", "on", "or", "per", "the", "to", "via", "vs"]);
    let index = 0;
    return lower.replace(/[\p{L}\p{N}]+(?:['’][\p{L}\p{N}]+)*/gu, (word, offset: number) => {
      const important = index === 0 || index === total - 1 || /[:.!?]\s*$/.test(lower.slice(0, offset));
      index += 1;
      return important || !smallWords.has(word) ? capitalize(word) : word;
    });
  }
  const words = splitWords(text).map((word) => word.toLowerCase());
  if (style === "camelCase") {
    return words.map((word, index) => index === 0 ? word : capitalize(word)).join("");
  }
  return words.join(style === "snake_case" ? "_" : "-");
}

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("Copied to clipboard.");
    } catch {
      setStatus("Couldn't copy automatically. Select the text and use your device's Copy command.");
    }
  }

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <label htmlFor="case-converter-text" className="mb-2 block text-sm font-medium text-slate-700">Type or paste your text</label>
      <textarea id="case-converter-text" rows={10} value={text} onChange={(event) => { setText(event.target.value); setStatus(""); }} placeholder="Paste a heading, sentence, or phrase here…" className="w-full resize-y rounded-xl border border-slate-300 px-3.5 py-3 text-sm leading-6 text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100" />
      <div className="mt-4 flex flex-wrap gap-2">
        {CASES.map((style) => (
          <button type="button" key={style} disabled={!text} onClick={() => { setText(convertCase(text, style)); setStatus(`Converted to ${style}.`); }} className="rounded-xl border border-violet-200 bg-violet-50 px-3.5 py-2.5 text-sm font-semibold text-violet-700 transition hover:bg-violet-100 disabled:cursor-not-allowed disabled:opacity-50">
            {style}
          </button>
        ))}
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-500">
        Conversion replaces the text above. Check proper names and acronyms after changing case.
        camelCase, snake_case, and kebab-case remove punctuation and join words.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <button type="button" disabled={!text} onClick={copy} className="rounded-xl bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-50">Copy</button>
        <button type="button" disabled={!text} onClick={() => { setText(""); setStatus("Text cleared."); }} className="rounded-xl border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-50">Clear</button>
      </div>
      <p role="status" className="mt-3 text-sm text-slate-500">{status}</p>
    </div>
  );
}
