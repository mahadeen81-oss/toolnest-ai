import type { Metadata } from "next";
import WordCounter from "@/components/tools/WordCounter";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";
import ToolGuide from "@/components/tools/ToolGuide";

export const metadata: Metadata = {
  title: "Word Counter",
  description:
    "Count words, characters, sentences, paragraphs, and estimated reading time as you write. Your text stays in your browser.",
};

export default function WordCounterPage() {
  const illustration = getToolBySlug("word-counter")?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Word Counter</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">
        Get live word and character counts, sentence and paragraph totals, and a
        quick estimate of how long your text takes to read.
      </p>
      <div className="mt-8">
        <WordCounter />
      </div>

      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">How to use the Word Counter</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Type in the text box or paste a draft from another document. The totals
          update immediately as you edit, so you can see whether you are near an
          assignment limit, a form’s character cap, or your own target. Use Clear
          to start over. The reading-time figure is an estimate based on 200 words
          per minute; actual reading speed varies with the reader and the material.
          The text is processed in the browser and is not sent to a writing service.
        </p>
        <h3 className="mt-6 font-semibold text-slate-900">Three tips for using the counts</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>
            Check the instructions for your assignment, platform, or application
            first. Their limit takes priority over a general writing guideline.
          </li>
          <li>
            Use character counts when a field has a strict cap, and leave a small
            margin because different services may count line breaks differently.
          </li>
          <li>
            Treat the totals as feedback, not a target to pad. Remove repetition
            and keep the sentences that help your reader understand the point.
            A short, complete answer is better than a longer draft with repeated ideas.
          </li>
        </ol>
      </section>
      <ToolGuide toolId="word-counter" />
    </div>
  );
}
