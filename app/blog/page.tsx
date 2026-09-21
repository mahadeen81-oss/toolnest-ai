import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides and honest advice for using AI tools in everyday work.",
};

const articles = [
  {
    href: "/blog/how-to-write-better-ai-prompts",
    title: "How to Write Better Prompts for AI Writing Tools",
    excerpt:
      "Learn a few simple ways to give AI better direction, from adding context to refining the first result.",
    icon: "✍️",
    color: "bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white",
  },
  {
    href: "/blog/ai-tools-for-content-creators",
    title: "5 Ways AI Tools Can Speed Up Your Content Workflow",
    excerpt:
      "See how creators can use AI for social posts, research summaries, scripts, ideas, and audience-friendly rewrites.",
    icon: "⚡",
    color: "bg-gradient-to-br from-amber-100 via-orange-50 to-white",
  },
  {
    href: "/blog/ai-generated-content-review-tips",
    title: "Why You Should Always Review AI-Generated Content",
    excerpt:
      "AI can help you move faster, but a thoughtful human review is what makes the final content accurate and useful.",
    icon: "✓",
    color: "bg-gradient-to-br from-teal-100 via-emerald-50 to-white",
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="max-w-2xl">
        <span className="inline-block rounded-full bg-gradient-to-r from-brand-500 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          ToolNest AI Blog
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Practical ideas for working with AI
        </h1>
        <p className="mt-3 text-base leading-7 text-slate-500">
          Helpful guides for writing, content creation, and everyday productivity.
          No jargon, no hype &mdash; just useful ways to get better results from AI.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {articles.map((article) => (
          <article
            key={article.href}
            className="flex h-full flex-col overflow-hidden rounded-3xl border border-violet-100 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-violet-200 hover:shadow-xl"
          >
            <div className={`flex h-40 items-center justify-center ${article.color}`}>
              <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-md">
                {article.icon}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h2 className="text-xl font-semibold leading-snug text-slate-900">
                {article.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">{article.excerpt}</p>
              <Link
                href={article.href}
                className="mt-5 inline-flex w-fit text-sm font-semibold text-brand-600 hover:underline"
              >
                Read More <span className="ml-1" aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}