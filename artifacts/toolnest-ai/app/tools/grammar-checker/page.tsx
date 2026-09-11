import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "Grammar Checker",
  description: "Check your text for grammar, spelling and punctuation issues, with corrections explained.",
};

export default function GrammarCheckerPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Grammar Checker</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Paste your text to find grammar, spelling, and punctuation issues with clear explanations.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="grammar-checker"
          fields={[
            {
              id: "text",
              label: "Text to check",
              type: "textarea",
              placeholder: "Paste your text here...",
              required: true,
            },
          ]}
        />
      </div>
    </div>
  );
}