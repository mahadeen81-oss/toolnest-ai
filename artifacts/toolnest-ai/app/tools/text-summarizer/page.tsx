import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "Text Summarizer",
  description: "Paste any text and get a clear, concise summary.",
};

export default function TextSummarizerPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Text Summarizer</h1>
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
    </div>
  );
}
