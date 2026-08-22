"use client";

import { useMemo, useState } from "react";
import { TOOLS } from "@/lib/tools-config";
import ToolCard from "@/components/ToolCard";
import SearchBar from "@/components/SearchBar";
import AdPlaceholder from "@/components/AdPlaceholder";

const CATEGORIES = ["All", ...Array.from(new Set(TOOLS.map((t) => t.category)))];

export default function ToolsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOOLS.filter((t) => {
      const matchesQuery =
        !q ||
        t.name.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      const matchesCategory = category === "All" || t.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">AI Tools</h1>
        <p className="mt-2 text-slate-500">
          Browse every tool in one place. New ones are added regularly.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <SearchBar value={query} onChange={setQuery} />
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-semibold transition ${
                category === c
                  ? "bg-brand-500 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-4">
        <div className="lg:col-span-3">
          {filtered.length === 0 ? (
            <p className="text-sm text-slate-500">No tools match your filters.</p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
              {filtered.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          )}
        </div>
        <aside className="lg:col-span-1">
          <AdPlaceholder variant="sidebar" />
        </aside>
      </div>
    </div>
  );
}
