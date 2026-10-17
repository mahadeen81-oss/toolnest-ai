import type { Metadata } from "next";
import CaseConverter from "@/components/tools/CaseConverter";

export const metadata: Metadata = {
  title: "Case Converter",
  description: "Convert text to uppercase, lowercase, title case, sentence case, camelCase, snake_case, or kebab-case locally in your browser.",
};

export default function CaseConverterPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Case Converter</h1>
      <p className="mt-2 max-w-2xl text-slate-500">Change capitalization or turn a phrase into a code-friendly name, then copy the result.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">Your text never leaves your device. Conversion happens locally in this browser, with no uploads or API calls. Copy sends the result only to your device clipboard.</p>
      <div className="mt-8"><CaseConverter /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">How to use Case Converter</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Paste a phrase, heading, or paragraph into the text box, then choose a
          format. The converted version replaces the text in the same box, where
          you can make any final edits. Copy places the current text on your
          clipboard; Clear empties the box. Uppercase and lowercase affect every
          letter. Title Case uses a common English convention that keeps short
          connecting words lowercase unless they begin or end the title.
          Sentence case capitalizes sentence openings, while the three identifier
          formats join words without spaces.
        </p>
        <h3 className="mt-6 font-semibold text-slate-900">Three tips for consistent text</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Follow the style guide for your project. Title-case conventions differ, so a publication may require a small adjustment after automatic conversion.</li>
          <li>Review names, brands, and acronyms manually. A case converter cannot know that NASA or a particular product name needs special capitalization.</li>
          <li>Keep a copy of important source text before conversion. Joined formats remove punctuation and word boundaries, and Clear cannot restore a previous draft.</li>
        </ol>
      </section>
    </div>
  );
}
