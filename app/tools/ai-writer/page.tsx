import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";
import ToolGuide from "@/components/tools/ToolGuide";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";

export const metadata: Metadata = {
  title: "AI Writer",
  description: "Turn a topic and a tone into original, ready-to-use text.",
};

export default function AIWriterPage() {
  const tool = getToolBySlug("ai-writer");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">AI Writer</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">
        Enter a topic and choose a tone. We'll write original text you can use as-is or edit further.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="ai-writer"
          fields={[
            { id: "topic", label: "Topic", type: "text", placeholder: "e.g. Benefits of remote work", required: true },
            { id: "tone", label: "Tone", type: "select", options: ["Professional", "Friendly", "Casual", "Creative"] },
          ]}
        />
      </div>
      <ToolGuide toolId="ai-writer" />
    </div>
  );
}
