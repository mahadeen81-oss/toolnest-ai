import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "AI Idea Generator",
  description: "Get 10 fresh content or business ideas for any topic.",
};

export default function IdeaGeneratorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">AI Idea Generator</h1>
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
    </div>
  );
}
