import type { Metadata } from "next";
import ToolGuide from "@/components/tools/ToolGuide";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "Grammar Checker",
  description: "Check your text for grammar, spelling and punctuation issues, with corrections explained.",
};

export default function GrammarCheckerPage() {
  const tool = getToolBySlug("grammar-checker");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Grammar Checker</h1>
      </div>
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
      <ToolGuide toolId="grammar-checker" />
    </div>
  );
}