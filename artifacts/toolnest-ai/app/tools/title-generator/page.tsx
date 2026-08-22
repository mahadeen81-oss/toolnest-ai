import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "Title Generator",
  description: "Generate 10 engaging titles for any topic in seconds.",
};

export default function TitleGeneratorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Title Generator</h1>
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
    </div>
  );
}
