import { ToolMeta } from "@/types/tool";

export const TOOLS: ToolMeta[] = [
  {
    id: "ai-writer",
    slug: "ai-writer",
    name: "AI Writer",
    description: "Turn a topic and a tone into original, ready-to-use text.",
    category: "Writing",
    icon: "✍️",
  },
  {
    id: "text-summarizer",
    slug: "text-summarizer",
    name: "Text Summarizer",
    description: "Paste any text and get a clear, concise summary.",
    category: "Productivity",
    icon: "🗒️",
  },
  {
    id: "text-rewriter",
    slug: "text-rewriter",
    name: "Text Rewriter",
    description: "Rewrite text in a professional, simple, or engaging style.",
    category: "Writing",
    icon: "🔁",
  },
  {
    id: "social-media-post-generator",
    slug: "social-media-post-generator",
    name: "Social Media Post Generator",
    description: "Generate platform-ready posts for Instagram, LinkedIn, X and more.",
    category: "Marketing",
    icon: "📣",
  },
  {
    id: "youtube-script-generator",
    slug: "youtube-script-generator",
    name: "YouTube Script Generator",
    description: "Build a structured script with an intro, body and conclusion.",
    category: "Content Creation",
    icon: "🎬",
  },
  {
    id: "idea-generator",
    slug: "idea-generator",
    name: "AI Idea Generator",
    description: "Get 10 fresh content or business ideas for any topic.",
    category: "Content Creation",
    icon: "💡",
  },
  {
    id: "title-generator",
    slug: "title-generator",
    name: "Title Generator",
    description: "Generate 10 engaging titles for any topic in seconds.",
    category: "Content Creation",
    icon: "🏷️",
  },
];

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
