"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TOOLS } from "@/lib/tools-config";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";
import AdPlaceholder from "@/components/AdPlaceholder";

const CATEGORIES = ["All", ...Array.from(new Set(TOOLS.map((t) => t.category)))];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOOLS.filter(
      (t) =>
        (!q ||
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q)) &&
        (category === "All" || t.category === category)
    );
  }, [query, category]);

  const featured = TOOLS.slice(0, 3);
  const displayedTools = !query.trim() && category === "All" ? featured : filtered;

  return (
    <div>
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-violet-100 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-fuchsia-300/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28">
          <span className="inline-block rounded-full bg-gradient-to-r from-brand-500 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
            Simple AI tools for everyday work
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl">
            Powerful AI Tools.
            <br />
            Simple to Use.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            ToolNest AI gives you practical AI tools for writing, content creation and
            productivity &mdash; no setup, no learning curve, just results.
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              href="/tools"
              className="rounded-xl bg-gradient-to-r from-brand-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-500/20 transition duration-200 hover:-translate-y-0.5 hover:from-brand-600 hover:to-indigo-700 hover:shadow-xl active:translate-y-0 sm:text-base"
            >
              Explore AI Tools
            </Link>
          </div>

          <div className="mx-auto mt-12 max-w-xl">
            <SearchBar value={query} onChange={setQuery} placeholder="Search AI tools, e.g. 'summarize' or 'titles'" />
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                    category === c
                      ? "bg-gradient-to-r from-brand-500 to-indigo-600 text-white shadow-sm"
                      : "bg-slate-100 text-slate-600 hover:bg-violet-100"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-violet-100 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900">How it works</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {[
              { step: "1", title: "Write your topic", icon: "✍️" },
              { step: "2", title: "Choose a tool", icon: "🧰" },
              { step: "3", title: "Get your result", icon: "✨" },
            ].map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50/80 via-white to-cyan-50/60 p-6 text-center shadow-sm"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-indigo-600 text-xl text-white shadow-md">
                  {item.icon}
                </div>
                <div className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
                  Step {item.step}
                </div>
                <h3 className="mt-2 font-semibold text-slate-900">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <AdPlaceholder variant="banner" />
      </div>

      {/* Search results / featured tools */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-2xl font-bold text-slate-900">
            {query || category !== "All" ? "Filtered tools" : "Featured tools"}
          </h2>
          {!query && category === "All" && (
            <Link href="/tools" className="text-sm font-semibold text-brand-600 hover:underline">
              View all tools &rarr;
            </Link>
          )}
        </div>

        {displayedTools.length === 0 ? (
          <p className="text-sm text-slate-500">No tools match your search yet. Try a different keyword.</p>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {displayedTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        )}
      </section>

      {/* Why ToolNest AI */}
      <section className="border-t border-violet-100 bg-gradient-to-b from-slate-50 to-violet-50/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">Why ToolNest AI?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Genuinely simple",
                desc: "One input, one clear button, one useful result. No settings to figure out first.",
                icon: "⚡",
              },
              {
                title: "Built for mobile",
                desc: "Every tool works cleanly on a phone, not just as an afterthought.",
                icon: "📱",
              },
              {
                title: "Always expanding",
                desc: "New AI tools are added regularly based on what people actually need.",
                icon: "🧩",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-violet-100 bg-white/90 p-6 text-center shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-md">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-xl">
                  {item.icon}
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <AdPlaceholder variant="premium" />
      </div>
    </div>
  );
}
