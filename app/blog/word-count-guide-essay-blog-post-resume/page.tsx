import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Should Essays, Blogs, and Resumes Be?",
  description:
    "Use practical word-count ranges for essays, blog posts, and resumes, then edit for purpose and clarity instead of padding to reach a number.",
};

export default function WordCountGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
        &larr; Back to Blog
      </Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Writing guide
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Word Count Guide: How Long Should Your Essay, Blog Post, or Resume Be?
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Useful ranges for common writing tasks, plus a way to decide when a
          draft is long enough without adding words just to fill space.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Start with the purpose, not a universal number</h2>
          <p className="mt-3">
            There is no single ideal length for every essay, article, or resume.
            The right count depends on what the reader needs, how complex the
            subject is, and whether a school, employer, publication, or
            application has set a limit. Treat general ranges as planning
            guidance, not rules. If an assignment says 1,200 to 1,500 words,
            follow that range before relying on a broad internet recommendation.
            If no limit exists, outline the points the reader needs and estimate
            how much space each deserves. A draft is long enough when it answers
            the question clearly and supports its main ideas without repeating
            itself.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Essays: match the assignment and the level of detail</h2>
          <p className="mt-3">
            Short classroom responses may be only a few hundred words, while a
            standard undergraduate essay can commonly fall somewhere around
            1,000 to 2,000 words. A research paper may be substantially longer
            because it needs to explain a method, analyze evidence, and cite
            sources. These are broad examples rather than promises about what a
            particular instructor expects. Read the prompt for required
            sections, source counts, and whether references are included in the
            total. For an open-ended essay, outline the argument first: an
            introduction, a focused set of supporting points, and a conclusion
            usually give you a better estimate than choosing a number and
            stretching the content to fit it.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Blog posts: let the reader’s question set the scope</h2>
          <p className="mt-3">
            A short announcement or practical update might need only 400 to
            700 words. A helpful tutorial or explainer often needs about 800 to
            1,500 words to cover its steps, examples, and common questions.
            A complex guide may need more, but only if the extra detail helps
            readers do something or understand an important distinction. These
            ranges are not search-engine requirements. A concise answer can
            serve a simple query better than a padded long post, while a
            complicated subject may need context and examples. Before drafting,
            write down the reader’s main question and the supporting questions
            you genuinely need to answer. Stop when those needs are met.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Resumes: prioritize relevance and scanning</h2>
          <p className="mt-3">
            Resumes are usually judged by how quickly a reader can identify
            relevant experience, not by hitting a word target. A one-page
            resume is often enough for students, early-career applicants, or
            people with a focused work history. Two pages can be reasonable
            when you have substantial relevant experience, technical projects,
            publications, or leadership responsibilities to explain. Norms
            vary by industry and country, so follow local expectations and the
            employer’s instructions. Keep bullets concise, lead with the
            contribution, and include evidence that helps assess scope or
            results. Do not shrink text or remove useful context solely to
            reach one page; edit for relevance first.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Other writing tasks have different limits</h2>
          <p className="mt-3">
            Social posts, application responses, abstracts, product summaries,
            and email subject lines may have strict character limits instead
            of word limits. A submission form might count spaces, punctuation,
            or line breaks in a way that differs from your writing app. For a
            timed speech, speaking pace is more useful than page count: a
            comfortable presentation often uses fewer words per minute than
            silent reading. For an email, the reader’s decision should fit
            near the top. These examples show why the format matters. Identify
            the actual constraint before editing, then check the finished
            version in the service or form that will receive it whenever
            possible.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Use word count during planning and editing</h2>
          <p className="mt-3">
            A count can help divide a large assignment into manageable parts.
            If a paper has a 1,500-word limit, you might reserve a modest
            portion for the introduction and conclusion and leave most of the
            space for evidence and analysis. The exact split depends on the
            task. After drafting, compare sections: one paragraph may be
            carrying too many ideas while another repeats the same point.
            Reduce redundant setup and add explanation where a reader might
            reasonably ask “why?” or “how do you know?” This is more useful
            than checking the total every few sentences. Count when a target
            matters, but revise for logic, support, and flow.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Know what a counter can and cannot tell you</h2>
          <p className="mt-3">
            Word-count tools apply a set of rules to text, and different
            services may handle hyphenated terms, contractions, symbols, or
            line breaks differently. A character count can be especially
            useful for a form, but the destination platform remains the final
            authority if its limit is strict. Estimated reading time is only
            an estimate: a familiar, conversational post may move quickly,
            while technical material or a dense essay takes longer. Paragraph
            and sentence totals can point out unusually long blocks, but they
            do not measure clarity. Use the numbers to notice patterns, then
            read the draft as a person would.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Trim padding and protect the useful detail</h2>
          <p className="mt-3">
            When a draft is over its limit, start by removing repeated
            conclusions, filler transitions, and examples that do not support
            the main point. Keep definitions, evidence, and caveats that a
            reader needs to understand the argument. When a draft is too short,
            do not repeat the introduction in different words. Add a specific
            example, explain the reasoning behind a claim, or address a
            relevant exception. If you cannot identify what a sentence adds,
            it may not belong. Editing is not simply making the number smaller;
            it is improving the ratio of useful information to effort for the
            reader.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Check your draft with a live counter</h2>
          <p className="mt-3">
            Paste or type your draft into the{" "}
            <Link href="/tools/word-counter" className="font-semibold text-brand-600 hover:underline">
              Word Counter
            </Link>{" "}
            to see words, characters with and without spaces, sentences,
            paragraphs, and an estimated reading time update as you edit. Use
            the totals to check a requirement or compare sections, then return
            to the writing and ask whether each point earns its place. If you
            are working toward a strict limit, leave a small buffer for
            differences between counters and the final submission form.
            A useful target gives your draft boundaries; clear thinking and
            careful editing are what make the words worth reading.
          </p>
        </div>
      </div>
    </article>
  );
}
