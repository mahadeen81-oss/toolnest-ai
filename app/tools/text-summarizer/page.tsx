import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";
import ToolGuide from "@/components/tools/ToolGuide";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";

export const metadata: Metadata = {
  title: "AI Text Summarizer",
  description:
    "Turn pasted text into a shorter summary, then verify that key claims, qualifications, names, and dates remain accurate.",
};

export default function TextSummarizerPage() {
  const tool = getToolBySlug("text-summarizer");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Text Summarizer</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">
        Paste in any text &mdash; an article, report or email thread &mdash; and get a concise summary.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="text-summarizer"
          fields={[
            { id: "text", label: "Text to summarize", type: "textarea", placeholder: "Paste your text here...", required: true },
          ]}
        />
      </div>
      <ToolGuide toolId="text-summarizer" />
    </div>
  );
}
