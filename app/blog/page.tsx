import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical guides and honest advice for using AI tools in everyday work.",
};

const articles = [
  {
    href: "/blog/product-descriptions-that-actually-sell",
    title: "How to Write Product Descriptions That Actually Sell",
    excerpt:
      "Turn product details into clear customer benefits with sensory language, scannable copy, and a useful call to action.",
    icon: "🛍️",
    color: "bg-gradient-to-br from-emerald-100 via-teal-50 to-white",
  },
  {
    href: "/blog/how-to-write-a-professional-resume-2026",
    title: "How to Write a Professional Resume in 2026",
    excerpt:
      "Build a clear, ATS-friendly resume with stronger action verbs, measurable achievements, and fewer common mistakes.",
    icon: "📄",
    color: "bg-gradient-to-br from-sky-100 via-blue-50 to-white",
  },
  {
    href: "/blog/10-common-grammar-mistakes-and-how-to-avoid-them",
    title: "10 Common Grammar Mistakes and How to Avoid Them",
    excerpt:
      "Learn quick ways to fix frequent grammar mix-ups, from your and you’re to comma splices and subject-verb agreement.",
    icon: "Aa",
    color: "bg-gradient-to-br from-rose-100 via-pink-50 to-white",
  },
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
  {
    href: "/blog/how-to-write-a-cover-letter-that-gets-interviews",
    title: "How to Write a Cover Letter That Gets Interviews",
    excerpt:
      "Build a focused letter that connects your strongest evidence to the role, sounds like you, and gives employers a clear reason to talk.",
    icon: "📝",
    color: "bg-gradient-to-br from-indigo-100 via-violet-50 to-white",
  },
  {
    href: "/blog/how-to-convert-images-to-pdf-on-your-phone-free-no-upload",
    title: "How to Convert Images to PDF on Your Phone (Free, No Upload)",
    excerpt:
      "Choose, arrange, and export phone photos as one PDF while keeping the files on your device.",
    icon: "📄",
    color: "bg-gradient-to-br from-sky-100 via-cyan-50 to-white",
  },
  {
    href: "/blog/word-count-guide-essay-blog-post-resume",
    title: "Word Count Guide: How Long Should Your Essay, Blog Post, or Resume Be?",
    excerpt:
      "Use realistic word-count ranges for common writing tasks, then edit for purpose instead of padding to hit a number.",
    icon: "🔢",
    color: "bg-gradient-to-br from-amber-100 via-yellow-50 to-white",
  },
  {
    href: "/blog/how-to-merge-pdf-files-on-your-phone-without-uploading-them",
    title: "How to Merge PDF Files on Your Phone Without Uploading Them",
    excerpt:
      "Combine documents locally, arrange their order, and check the finished PDF before you share it.",
    icon: "📑",
    color: "bg-gradient-to-br from-violet-100 via-indigo-50 to-white",
  },
  {
    href: "/blog/how-to-compress-images-without-losing-quality-free-guide",
    title: "How to Compress Images Without Losing Quality (Free Guide)",
    excerpt:
      "Choose a sensible compression level, compare file sizes, and keep visible detail without misleading quality promises.",
    icon: "📷",
    color: "bg-gradient-to-br from-emerald-100 via-teal-50 to-white",
  },
  {
    href: "/blog/title-case-vs-sentence-case-when-to-use-each-text-format",
    title: "Title Case vs Sentence Case: When to Use Each Text Format",
    excerpt:
      "Pick a consistent capitalization style for headings and learn where code-friendly text formats fit.",
    icon: "🔤",
    color: "bg-gradient-to-br from-rose-100 via-pink-50 to-white",
  },
  {
    href: "/blog/how-to-split-a-pdf-and-extract-pages-on-your-phone",
    title: "How to Split a PDF and Extract Pages on Your Phone",
    excerpt:
      "Select the right PDF pages, choose combined or individual downloads, and check your files without uploading them.",
    icon: "✂️",
    color: "bg-gradient-to-br from-violet-100 via-indigo-50 to-white",
  },
  {
    href: "/blog/how-to-remove-duplicate-lines-from-a-list-excel-free-guide",
    title: "How to Remove Duplicate Lines From a List (Excel-Free Guide)",
    excerpt:
      "Choose sensible matching rules for case, spaces, and blank lines, then review a clean list without opening Excel.",
    icon: "≡",
    color: "bg-gradient-to-br from-rose-100 via-pink-50 to-white",
  },
  {
    href: "/blog/how-to-create-a-strong-password-you-can-actually-remember",
    title: "How to Create a Strong Password You Can Actually Remember",
    excerpt:
      "Learn when to use a memorable passphrase, when to generate random characters, and how to store and recover secrets safely.",
    icon: "🔐",
    color: "bg-gradient-to-br from-emerald-100 via-teal-50 to-white",
  },
  {
    href: "/blog/how-to-write-a-professional-email-reply-with-examples",
    title: "How to Write a Professional Email Reply (With Examples)",
    excerpt:
      "Answer requests, explain delays, and follow up politely with practical email examples and a clear next step.",
    icon: "✉️",
    color: "bg-gradient-to-br from-sky-100 via-blue-50 to-white",
  },
  {
    href: "/blog/how-to-summarize-long-text-without-losing-the-key-points",
    title: "How to Summarize Long Text Without Losing the Key Points",
    excerpt:
      "Keep the central message, evidence, and important qualifications when turning a long document into a useful summary.",
    icon: "🗒️",
    color: "bg-gradient-to-br from-teal-100 via-emerald-50 to-white",
  },
  {
    href: "/blog/how-to-write-youtube-scripts-that-keep-viewers-watching",
    title: "How to Write YouTube Scripts That Keep Viewers Watching",
    excerpt:
      "Build a focused video around a clear promise, natural narration, useful visuals, and a payoff you can deliver.",
    icon: "🎬",
    color: "bg-gradient-to-br from-red-100 via-rose-50 to-white",
  },
  {
    href: "/blog/how-to-write-social-media-posts-for-different-platforms",
    title: "How to Write Social Media Posts for Different Platforms",
    excerpt:
      "Adapt one accurate message for LinkedIn, Instagram, X, and Facebook without copying the same caption everywhere.",
    icon: "📣",
    color: "bg-gradient-to-br from-violet-100 via-fuchsia-50 to-white",
  },
  {
    href: "/blog/how-to-write-better-titles-and-headlines",
    title: "How to Write Better Titles and Headlines",
    excerpt:
      "Turn a vague topic into a specific, honest headline with practical examples and a repeatable editing routine.",
    icon: "🏷️",
    color: "bg-gradient-to-br from-amber-100 via-orange-50 to-white",
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