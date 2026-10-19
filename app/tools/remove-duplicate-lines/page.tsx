import type { Metadata } from "next";
import RemoveDuplicateLines from "@/components/tools/RemoveDuplicateLines";

export const metadata: Metadata = {
  title: "Remove Duplicate Lines",
  description: "Find and remove repeated lines from pasted text in your browser, with options for case, spaces, empty lines, and sorting.",
};

export default function RemoveDuplicateLinesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Remove Duplicate Lines</h1>
      <p className="mt-2 max-w-2xl text-slate-500">Tidy lists and pasted text while keeping the first copy of each line.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">Your text never leaves your device. Cleanup happens in this browser, with no uploads or API calls.</p>
      <div className="mt-8"><RemoveDuplicateLines /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">How to use Remove Duplicate Lines</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Paste or type one item per line. The cleaned result updates as you change the options, and the summary separates repeated lines from empty lines removed. By default, matching is exact and the earliest occurrence stays in its original position. Turn on Ignore letter case to treat capitalization differences as duplicates, or Trim spaces to ignore and remove leading or trailing spaces. Remove empty lines excludes blank and whitespace-only entries. Sort A–Z reorders the remaining unique lines after duplicates are removed. Copy result puts only the cleaned text on your clipboard when you explicitly choose it; Clear empties the input. Everything is processed locally in this browser, with no upload or API call.</p>
        <h3 className="mt-6 font-semibold text-slate-900">Three tips for a tidy list</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Enable Trim spaces when pasted lines may contain accidental padding. Without it, a line with trailing spaces is treated as different from the same line without them.</li>
          <li>Use Ignore letter case for names or entries where capitalization does not matter. The first spelling is kept, so review the retained version if the text has meaningful case.</li>
          <li>Sorting changes the order of kept lines. Leave it off when the original sequence represents steps, priority, or chronology; copy important source text before clearing it.</li>
        </ol>
      </section>
    </div>
  );
}
