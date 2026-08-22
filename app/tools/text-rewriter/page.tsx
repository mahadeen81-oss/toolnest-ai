import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "Text Rewriter",
  description: "Rewrite text in a professional, simple, or engaging style.",
};

export default function TextRewriterPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Text Rewriter</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Paste in text and choose a style. We'll rewrite it while keeping the original meaning.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="text-rewriter"
          fields={[
            { id: "text", label: "Text to rewrite", type: "textarea", placeholder: "Paste your text here...", required: true },
            { id: "style", label: "Style", type: "select", options: ["Professional", "Simple", "Engaging", "Concise"] },
          ]}
        />
      </div>
    </div>
  );
}
