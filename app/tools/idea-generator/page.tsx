import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";
import ToolGuide from "@/components/tools/ToolGuide";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";

export const metadata: Metadata = {
  title: "AI Idea Generator",
  description: "Get 10 fresh content or business ideas for any topic.",
};

export default function IdeaGeneratorPage() {
  const tool = getToolBySlug("idea-generator");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">AI Idea Generator</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">
        Enter a topic or category and get 10 practical content or business ideas.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="idea-generator"
          fields={[
            { id: "topic", label: "Topic or category", type: "text", placeholder: "e.g. Home fitness for beginners", required: true },
          ]}
        />
      </div>
      <ToolGuide toolId="idea-generator" />
    </div>
  );
}
