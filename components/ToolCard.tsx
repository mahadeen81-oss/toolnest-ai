import Link from "next/link";
import { ToolMeta } from "@/types/tool";

export default function ToolCard({ tool }: { tool: ToolMeta }) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-500 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-lg">
          {tool.icon}
        </span>
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-500">
          {tool.category}
        </span>
      </div>
      <h3 className="mt-4 text-base font-semibold text-slate-900">{tool.name}</h3>
      <p className="mt-1.5 flex-1 text-sm text-slate-500">{tool.description}</p>
      <span className="mt-4 text-sm font-semibold text-brand-600 group-hover:underline">
        Try it &rarr;
      </span>
    </Link>
  );
}
