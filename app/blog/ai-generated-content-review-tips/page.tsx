import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why You Should Always Review AI-Generated Content",
  description:
    "A balanced guide to fact-checking, editing, and responsibly reviewing content created with AI tools.",
};

export default function ReviewTipsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
        &larr; Back to Blog
      </Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          Responsible AI use
        </span>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Why You Should Always Review AI-Generated Content
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          AI can make a first draft much faster, but a careful human review is
          still essential before anything is shared or published.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">AI output can sound confident and be wrong</h2>
          <p className="mt-3">
            An AI system predicts useful language from patterns in its training,
            not from a guarantee that every statement is true. It may invent a
            detail, mix up dates, or present an uncertain claim with a polished
            tone. Before you publish, check names, numbers, quotations, product
            details, and any statement that could affect a reader&apos;s decision.
            For current events or specialized subjects, go back to reliable
            primary sources and confirm the information yourself.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Edit for the voice you actually want</h2>
          <p className="mt-3">
            Generated writing often has a recognizable rhythm: broad
            introductions, tidy transitions, and more enthusiasm than the situation
            needs. That is not automatically a problem, but it may not sound like
            you or your organization. Read the draft aloud and remove phrases you
            would never say. Replace general claims with specific examples, adjust
            the level of formality, and make sure the opening gives the reader a
            reason to continue.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Keep your own judgment in the process</h2>
          <p className="mt-3">
            AI tools are helpful for getting started, exploring alternatives, or
            handling repetitive wording. They should not decide what you believe,
            what advice is safe to give, or what a customer needs to know. The
            person using the tool remains responsible for the final message. Be
            especially careful with medical, legal, financial, academic, and
            personal content, where a plausible-sounding mistake can have serious
            consequences.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Review for the intended audience</h2>
          <p className="mt-3">
            A draft can be factually sound and still miss its audience. Check
            whether the language is understandable to the people reading it, whether
            the examples are relevant, and whether the requested action is clear.
            Remove unnecessary jargon and explain terms that a beginner may not
            know. If the content is for a particular community, make sure it does
            not make assumptions that could feel careless or out of place.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Think of AI as a first draft</h2>
          <p className="mt-3">
            The most useful mindset is to treat AI-generated text as working
            material, not a finished product. It can give you structure, options,
            and momentum, while you supply experience, accuracy, taste, and
            accountability. A few minutes of editing may be all a short piece needs;
            a longer or higher-stakes piece deserves a deeper review. Used this way,
            AI supports better work without replacing the human responsibility behind
            it. If a result is not right, revise the request or start over rather
            than forcing a weak draft into publication.
          </p>
        </div>
      </div>
    </article>
  );
}