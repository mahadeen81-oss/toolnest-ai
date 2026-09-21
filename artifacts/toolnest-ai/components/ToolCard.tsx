import Link from "next/link";
import { ToolMeta } from "@/types/tool";

const CATEGORY_STYLES: Record<string, { icon: string; badge: string }> = {
  Writing: {
    icon: "from-fuchsia-500 to-purple-600",
    badge: "from-fuchsia-500 to-purple-600",
  },
  Productivity: {
    icon: "from-teal-400 to-cyan-600",
    badge: "from-teal-400 to-cyan-600",
  },
  Marketing: {
    icon: "from-orange-400 to-pink-500",
    badge: "from-orange-400 to-pink-500",
  },
  "Content Creation": {
    icon: "from-indigo-500 to-blue-600",
    badge: "from-indigo-500 to-blue-600",
  },
};

export default function ToolCard({ tool }: { tool: ToolMeta }) {
  const style = CATEGORY_STYLES[tool.category] || CATEGORY_STYLES.Writing;

  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex flex-col rounded-3xl border border-violet-100 bg-white/95 p-6 shadow-sm transition duration-200 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
    >
      <div className="flex items-center gap-3">
        <span className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${style.icon} text-2xl text-white shadow-md transition duration-200 group-hover:scale-105 group-hover:shadow-lg`}>
          {tool.icon}
        </span>
        <span className={`rounded-full bg-gradient-to-r ${style.badge} px-3 py-1 text-xs font-semibold text-white shadow-sm`}>
          {tool.category}
        </span>
      </div>
      <h3 className="mt-5 text-lg font-bold text-slate-900">{tool.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">{tool.description}</p>
      <span className="mt-4 text-sm font-semibold text-brand-600 transition group-hover:underline">
        Try it &rarr;
      </span>
    </Link>
  );
}
