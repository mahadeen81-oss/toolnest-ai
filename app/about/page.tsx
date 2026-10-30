import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About ToolNest AI",
  description:
    "Meet the creator of ToolNest AI, learn why the site was built, how its browser-based and AI tools work, and how to get in touch.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">About ToolNest AI</h1>
      <div className="mt-8 space-y-8 text-base leading-7 text-slate-600">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Who we are</h2>
          <p>
            ToolNest AI is created by Mohammad almahadeen, a self-taught
            developer from Jordan. I build everything from a smartphone. That
            includes the small decisions behind each page: how to label an
            input, where to put an example, how to make a result readable on a
            narrow screen, and how to keep a task direct. I started this project
            because everyday writing and file jobs should not require a
            complicated setup or a powerful computer.
          </p>
          <p>
            ToolNest is an independent project. I handle product decisions,
            writing, coding, and maintenance myself. There is no large support
            team behind the site, and I will not pretend that every result can
            be guaranteed. Feedback helps me decide what to review, explain, or
            build next.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Our purpose</h2>
          <p>
            The goal is to offer free, fast, privacy-friendly tools for writers,
            students, and job seekers. A useful tool should make its purpose
            clear, ask only for the information it needs, and help you move on
            with your work. You should not need an account or a lesson in prompt
            engineering just to try a basic writing or productivity task.
          </p>
          <p>
            “Fast” here describes the direct experience, not a performance
            guarantee. Choose a task, enter the relevant details, and review
            the result. Some tasks need AI and an internet connection; others
            are simple utilities designed to work locally in your browser.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">How the tools work</h2>
          <p>
            AI writing tools send the text and instructions you submit through
            ToolNest’s server to Google Gemini, which generates a response.
            That means AI prompts do leave your device. The returned text is
            shown for you to review; ToolNest does not offer an account,
            saved-history, or library feature for prompts and results. I do not
            intentionally save submitted text or generated results to a
            ToolNest user database.
          </p>
          <p>
            Text, image, and PDF utilities run in your browser where the task
            allows it. For example, word counting and case conversion process
            text locally, while the image and PDF utilities process selected
            files on your device. Those browser-based tasks do not upload their
            working text or files to the ToolNest generation API. Downloads
            are saved by your browser or device, and your browser may clear
            them.
          </p>
          <p>
            Your chosen color theme is saved in your browser so it can be
            restored next time. If site analytics are enabled, basic usage
            information may also be collected as described in the{" "}
            <Link href="/privacy-policy" className="font-semibold text-brand-600 hover:underline">
              Privacy Policy
            </Link>
            . I cannot speak for the separate technical logs or retention
            practices of Google, your browser, or the hosting provider. Avoid
            submitting confidential information to an AI tool.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Why trust us</h2>
          <p>
            Trust starts with describing a tool honestly. AI can misunderstand
            context, make up details, or give incomplete or outdated guidance.
            A polished answer is not proof that it is correct. Treat generated
            text as a draft, check names, figures, quotations, and claims, and
            make sure the final wording reflects what you actually know.
          </p>
          <p>
            Browser-based utilities have limits too: a file may be too large
            for a phone, a scanned PDF may not contain searchable text, and a
            converted image can look different from its source. Keep an
            original copy when it matters, check the downloaded result, and
            choose another method when the tool does not fit the job. I aim to
            explain these limits instead of promising perfect results.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
          <p>
            If you spot a problem, need clarification, or have an idea for a
            practical tool, I would like to hear from you. Visit the{" "}
            <Link href="/contact" className="font-semibold text-brand-600 hover:underline">
              Contact page
            </Link>{" "}
            or email{" "}
            <a
              href="mailto:Mahadeen81@gmail.com"
              className="font-semibold text-brand-600 hover:underline"
            >
              Mahadeen81@gmail.com
            </a>
            . Please do not include passwords, private documents, or other
            sensitive information in a feedback message.
          </p>
        </section>
      </div>
    </div>
  );
}
