import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";
import ToolGuide from "@/components/tools/ToolGuide";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";

export const metadata: Metadata = {
  title: "Social Media Post Generator",
  description:
    "Draft posts for social platforms from your topic, audience, and tone, then adapt each version to the platform and your own voice.",
};

export default function SocialMediaPostGeneratorPage() {
  const tool = getToolBySlug("social-media-post-generator");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Social Media Post Generator</h1>
      </div>
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
      <ToolGuide toolId="social-media-post-generator" />
    </div>
  );
}
