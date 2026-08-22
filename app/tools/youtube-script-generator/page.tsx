import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "YouTube Script Generator",
  description: "Build a structured script with an intro, body and conclusion.",
};

export default function YouTubeScriptGeneratorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">YouTube Script Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Describe your video and we'll structure a script with an introduction, main points and conclusion.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="youtube-script-generator"
          fields={[
            { id: "topic", label: "Video topic", type: "text", placeholder: "e.g. How to start a podcast", required: true },
            { id: "duration", label: "Target duration", type: "select", options: ["1-3 minutes", "5 minutes", "10 minutes", "15+ minutes"] },
            { id: "style", label: "Style", type: "select", options: ["Conversational", "Educational", "Energetic", "Calm"] },
          ]}
        />
      </div>
    </div>
  );
}
