import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "Social Media Post Generator",
  description: "Generate platform-ready posts for Instagram, LinkedIn, X and more.",
};

export default function SocialMediaPostGeneratorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Social Media Post Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Enter a topic, pick a platform and tone, and get a post that fits that platform's style.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="social-media-post-generator"
          fields={[
            { id: "topic", label: "Topic", type: "text", placeholder: "e.g. Launching our new feature", required: true },
            { id: "platform", label: "Platform", type: "select", options: ["Instagram", "Facebook", "LinkedIn", "X"] },
            { id: "tone", label: "Tone", type: "select", options: ["Friendly", "Professional", "Playful", "Bold"] },
          ]}
        />
      </div>
    </div>
  );
}
