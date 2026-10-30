import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";
import ToolGuide from "@/components/tools/ToolGuide";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";

export const metadata: Metadata = {
  title: "Title Generator",
  description: "Generate 10 engaging titles for any topic in seconds.",
};

export default function TitleGeneratorPage() {
  const tool = getToolBySlug("title-generator");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Title Generator</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">
        Enter a topic and get 10 engaging title options to choose from.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="title-generator"
          fields={[
            { id: "topic", label: "Topic", type: "text", placeholder: "e.g. Budget travel tips for students", required: true },
          ]}
        />
      </div>
      <ToolGuide toolId="title-generator" />
    </div>
  );
}
