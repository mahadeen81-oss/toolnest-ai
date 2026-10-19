import { Children, isValidElement, type ReactElement, type ReactNode } from "react";
import Link from "next/link";
import BlogPage from "@/app/blog/page";

function collectArticles(node: ReactNode, out: ReactElement[]) {
  Children.forEach(node, (child) => {
    if (!isValidElement(child)) return;
    if (child.type === "article") {
      out.push(child);
      return;
    }
    collectArticles((child.props as { children?: ReactNode }).children, out);
  });
}

export default function HomeLatestArticles() {
  const articles: ReactElement[] = [];
  collectArticles(BlogPage(), articles);
  if (articles.length < 3) {
    throw new Error(`HomeLatestArticles: expected at least 3 blog articles, found ${articles.length}`);
  }
  const latest = articles.slice(-3).reverse();

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Latest articles</h2>
        <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
          View all articles &rarr;
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-3">{latest}</div>
    </section>
  );
}
