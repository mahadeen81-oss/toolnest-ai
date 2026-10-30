import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write Better Prompts for AI Writing Tools",
  description:
    "Practical beginner-friendly tips for writing specific, useful prompts that produce better AI-generated content.",
};

export default function BetterPromptsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
        &larr; Back to Blog
      </Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-gradient-to-r from-brand-500 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Writing tips
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          How to Write Better Prompts for AI Writing Tools
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Better AI writing usually starts with a clearer request. These simple
          prompt habits can help beginners get useful results faster.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
        <div className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Compare a vague request with a usable brief
          </h2>
          <p className="mt-3">
            Suppose you want help drafting a short fitness article. “Write about
            fitness” does not tell a tool who will read it, what the article
            should cover, or which claims to avoid. A stronger prompt might say:
          </p>
          <p className="mt-3">
            <span className="font-semibold text-slate-900">Broad:</span>{" "}
            “Write something about fitness.”
          </p>
          <p className="mt-3">
            <span className="font-semibold text-slate-900">More useful:</span>{" "}
            “Draft a beginner-friendly introduction to choosing a walking
            routine. Use plain language, avoid medical advice, and end with
            questions a reader can discuss with a qualified professional.”
          </p>
          <p className="mt-3">
            The second request sets an audience, scope, style, and boundary.
            It does not guarantee a good answer; it gives you a more useful
            draft to inspect.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Start with a specific task</h2>
          <p className="mt-3">
            An AI writing tool can do many things, but a broad instruction such as
            &ldquo;write something about fitness&rdquo; leaves too much open. Start by
            saying exactly what you need: a short newsletter introduction, a product
            description, a study outline, or a social post. Include the subject and
            the format you want. The more concrete the task, the easier it is for
            the tool to choose the right structure and level of detail.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Give the important context</h2>
          <p className="mt-3">
            Context tells the tool what a good answer should accomplish. Mention
            the situation, the key points that must be included, and any limits
            that matter. For example, you might ask for a 150-word announcement
            about a new opening time, explain who will read it, and provide the
            exact date. If the writing is based on information you already have,
            paste the relevant facts instead of expecting the tool to guess them.
            This is especially useful for small business owners who need copy that
            reflects their actual service rather than generic marketing language.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Assemble a prompt from five useful parts
          </h2>
          <p className="mt-3">
            You do not need special terminology. A plain-language brief can
            identify the job, the reader, the material to use, the desired
            format, and any limits. Treat these as choices, not mandatory
            fields; add only what helps the task.
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>
              <span className="font-semibold text-slate-900">Task:</span>{" "}
              name the output, such as an email reply, outline, or explanation.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Reader:</span>{" "}
              describe the audience’s knowledge and what they need to do next.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Context:</span>{" "}
              provide relevant facts, terminology, and the purpose of the piece.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Shape:</span>{" "}
              specify tone, length range, format, or required sections when
              those affect the result.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Boundaries:</span>{" "}
              say what to leave out and which statements must be based only on
              supplied information.
            </li>
          </ol>
          <p className="mt-3">
            If the request becomes a page of instructions, remove details that
            do not affect the output. A short, organized brief is easier to
            check than a long list of competing directions.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Specify the audience and tone</h2>
          <p className="mt-3">
            The same idea can sound very different in an academic essay, a customer
            email, or a friendly social post. Tell the tool who the reader is and
            how you want the writing to feel. Useful directions include
            &ldquo;professional but approachable,&rdquo; &ldquo;clear enough for a
            beginner,&rdquo; or &ldquo;warm and encouraging without sounding
            salesy.&rdquo; You can also say what to avoid, such as jargon, dramatic
            claims, or long sentences. Audience and tone instructions make the
            result easier to edit.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Treat the first result as a draft</h2>
          <p className="mt-3">
            A strong prompt does not guarantee a perfect first answer. Read the
            result, identify what is missing, and ask for a focused revision. You
            could request a shorter introduction, clearer examples, a different
            tone, or three alternative headlines. Small follow-up instructions
            usually work better than replacing the entire prompt. Iterating also
            helps you learn which details matter for the type of writing you are
            creating.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Diagnose the answer before rewriting the prompt
          </h2>
          <p className="mt-3">
            When a result misses the mark, identify the kind of miss. A wrong
            tone calls for a tone adjustment; a missing section calls for a
            format change; an unsupported detail calls for a stronger source
            restriction or a manual correction. Do not add more background unless
            the tool actually lacked it.
          </p>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="font-semibold text-slate-900">Too long?</dt>
              <dd>Ask for a shorter version and name which details should remain.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Too generic?</dt>
              <dd>Add one real example, audience detail, or constraint that changes the answer.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Too confident?</dt>
              <dd>Require uncertainty to be identified and verify factual statements yourself.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">Wrong structure?</dt>
              <dd>Specify headings, bullets, or the order in which information should appear.</dd>
            </div>
          </dl>
          <p className="mt-3">
            Changing one instruction at a time helps you see what improved the
            response. Save the useful version of your prompt so you can adapt
            it later, but revisit it when the audience or source material changes.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Use source material with care
          </h2>
          <p className="mt-3">
            If an answer must reflect a policy, report, or product record,
            provide the relevant material and say that the response should stay
            within it. Ask the tool to flag missing information instead of
            filling gaps with assumptions. Then compare the draft with the
            original source, especially for numbers, names, conditions, and
            quotations. A prompt can guide the task, but it cannot replace
            checking the result.
          </p>
          <p className="mt-3">
            Keep private information out of prompts unless you have permission
            and a clear reason to share it. Avoid passwords, confidential
            customer details, and material that should not be sent to an AI
            service. Use a generalized description when the exact identity or
            account detail is not necessary.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Try it with a real project</h2>
          <p className="mt-3">
            The easiest way to practice is to bring a real, low-risk task. Try the{" "}
            <Link href="/tools/ai-writer" className="font-semibold text-brand-600 hover:underline">
              ToolNest AI Writer
            </Link>{" "}
            with a topic and a tone, then compare the result with what you would
            have written yourself. Add useful context in your topic and refine the
            output if needed. Whether you are a student organizing an explanation,
            a content creator planning a draft, or a small business owner preparing
            an announcement, the goal is not to hand over your judgment. It is to
            use a clear first draft as a helpful starting point.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Keep a reusable prompt frame
          </h2>
          <p className="mt-3">
            Start with this outline and replace the brackets with facts you are
            comfortable sharing:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Task: create [format] about [subject].</li>
            <li>Reader: write for [audience] who need [purpose].</li>
            <li>Use these facts: [verified details].</li>
            <li>Style and shape: [tone, length, or structure].</li>
            <li>Do not: invent details or make claims beyond the supplied facts.</li>
          </ul>
          <p className="mt-3">
            Leave out passwords and confidential information. After the result
            arrives, check every factual detail and revise it in your own voice.
            Try the frame with a low-risk topic you can freely share, then edit
            the draft before using it.
          </p>
        </div>
      </div>
    </article>
  );
}