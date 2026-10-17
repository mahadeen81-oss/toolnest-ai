import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Title Case vs Sentence Case: When to Use Each Text Format",
  description:
    "Compare title case and sentence case, choose a consistent style for headings, and understand uppercase, lowercase, and code-friendly naming formats.",
};

export default function TitleAndSentenceCaseGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
        &larr; Back to Blog
      </Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Writing guide
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          Title Case vs Sentence Case: When to Use Each Text Format
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Choose capitalization that fits the context, then apply it consistently
          without losing names, acronyms, or the meaning of your text.
        </p>
      </div>
      <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Start with the difference readers actually see</h2>
          <p className="mt-3">
            Title case capitalizes the main words in a heading, while sentence
            case generally capitalizes the opening word and any proper names.
            Compare “A Practical Guide to Better Notes” with “A practical guide
            to better notes.” The words carry the same basic meaning, but the
            presentation feels different. Title case often signals a formal
            title or publication heading. Sentence case often resembles natural
            prose and fits instructions or interface labels. Neither style is
            automatically more professional. The useful question is which one
            matches the surrounding material and helps readers recognize the
            information hierarchy without creating visual inconsistency.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Know the limits of a general title-case rule</h2>
          <p className="mt-3">
            Many English title-case conventions capitalize nouns, verbs,
            adjectives, adverbs, and the first and last word of a title.
            Short connecting words such as “and,” “of,” and “the” often remain
            lowercase in the middle. The difficulty is that style guides
            disagree about some prepositions, word lengths, hyphenated terms,
            and words after punctuation. A converter can apply a consistent
            rule, but it cannot guarantee compliance with every publisher’s
            requirements. If your project names a particular style guide, use
            that guide as the final authority. An automated starting point is
            still useful, provided you know which exceptions require a human
            check.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Use sentence case for clear instructions</h2>
          <p className="mt-3">
            Sentence case works well for instructions, short explanations, and
            many interface labels because it follows a familiar reading
            pattern. “Download your report” gives a direct instruction without
            making every word compete for emphasis. For a complete sentence,
            capitalize its first word and retain proper names, acronyms, and
            any other required capitalization. A converter that first
            lowercases the text may turn a brand or acronym into the wrong
            form, so review those details manually. Sentence case is not a
            rule to lowercase everything after the first letter. The normal
            conventions of the language still apply, including a capital
            “I” in English.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Let the publication or product set the style</h2>
          <p className="mt-3">
            Before changing a heading, look at the material around it. A
            journal, company website, school assignment, or product team may
            already have a documented convention. Following that convention
            usually matters more than choosing your personal favorite. If
            there is no guide, make a small decision that others can repeat:
            for example, sentence case for interface labels and title case for
            named reports. Record representative examples, including a heading
            with a short connecting word and one containing a brand name.
            A practical example resolves ambiguity faster than a vague
            instruction to “make titles consistent.” Apply the decision across
            comparable elements, not indiscriminately to every piece of text.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Keep hierarchy separate from capitalization</h2>
          <p className="mt-3">
            Capitalization can support a visual style, but it should not do
            all the work of showing structure. A heading is easier to
            recognize when spacing, font size, and semantic markup also
            distinguish it from the paragraph below. Changing a sentence to
            title case does not make it an accessible heading in a web page
            or document. Likewise, a button should remain recognizable as a
            control even if its label uses sentence case. When reviewing a
            page, ask whether readers can understand the grouping without
            relying on capital letters alone. Consistent capitalization is
            one part of a readable system, not a substitute for clear layout
            and meaningful structure.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Use uppercase and lowercase with intention</h2>
          <p className="mt-3">
            Uppercase is useful for established acronyms, brief labels, or a
            deliberate visual treatment. Long passages in all capitals can
            feel forceful and are harder to scan for many readers, so use
            them selectively. Lowercase can be appropriate for specific
            identifiers or a brand’s chosen style, but it is not automatically
            the correct format for ordinary sentences. Do not normalize the
            case of passwords, tokens, or other values whose exact spelling
            matters. Even filenames and addresses may be case-sensitive in
            some environments. Before using a whole-text transformation,
            decide whether the content is editable language or data that must
            remain exactly as provided.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Recognize formats used for names in code</h2>
          <p className="mt-3">
            camelCase joins words without spaces and capitalizes later words,
            as in “monthlySalesReport.” snake_case separates lowercase words
            with underscores, as in “monthly_sales_report.” kebab-case uses
            hyphens, as in “monthly-sales-report.” These formats are naming
            conventions rather than styles for normal paragraphs. The right
            choice depends on the language, framework, or repository you are
            working in. A converter can prepare a phrase, but it cannot know
            whether the result is a valid or available identifier in your
            environment. Check reserved words, leading numbers, existing
            names, and any project-specific rules before placing the output
            into code or using it as a public URL.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Expect punctuation and word boundaries to change</h2>
          <p className="mt-3">
            Prose-oriented case changes usually retain spaces and punctuation.
            Joined naming formats do something more destructive: they remove
            separators and reconstruct boundaries between words. A phrase
            such as “Quarterly sales: final draft” can become
            “quarterlySalesFinalDraft” or “quarterly_sales_final_draft.”
            That output may be convenient for a label or filename, but the
            original colon and spacing cannot necessarily be recovered from
            it. Existing mixed-case names and acronyms also require judgment
            when split into words. Keep an untouched copy if the original
            matters, and do not repeatedly convert a long passage between
            formats expecting every punctuation mark and capitalization choice
            to survive.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Review names, abbreviations, and sentence boundaries</h2>
          <p className="mt-3">
            Automatic conversion cannot understand every name or abbreviation
            in your draft. A person’s surname, a deliberately styled product,
            or an acronym such as NASA may need capitalization that differs
            from a general rule. Sentence detection is also approximate:
            periods can mark abbreviations or decimal numbers rather than
            the end of a sentence. After conversion, read the result instead
            of checking only that the button worked. Restore required names,
            inspect text around punctuation, and confirm that the message
            still says what you intended. This final review is especially
            important for headings that will be reused in navigation,
            printed material, or customer-facing communications.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Make a consistent edit, then copy the checked result</h2>
          <p className="mt-3">
            Use the{" "}
            <Link href="/tools/case-converter" className="font-semibold text-brand-600 hover:underline">
              Case Converter
            </Link>{" "}
            to switch between uppercase, lowercase, title case, sentence case,
            and the three joined naming formats. Paste the source, choose
            the format that fits your context, and review the text before
            copying it. Processing happens in your browser rather than
            sending the text to a server. Keep a separate original if you
            might need to restore its capitalization or punctuation. The
            goal is not to choose the most elaborate format; it is to make
            comparable text follow a clear, repeatable convention that helps
            the reader understand its purpose.
          </p>
        </div>
      </div>
    </article>
  );
}
