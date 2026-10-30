import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write a Professional Resume in 2026",
  description:
    "Write a standout 2026 resume with practical advice on structure, action verbs, measurable achievements, ATS tailoring, and mistakes to avoid.",
};

export default function ProfessionalResumePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
        &larr; Back to Blog
      </Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-gradient-to-r from-sky-400 to-blue-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Career writing
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          How to Write a Professional Resume in 2026
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          A practical guide to presenting your experience clearly, showing your
          impact, and tailoring your resume for both hiring teams and ATS systems.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
        <div className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Do this scan before opening a template
          </h2>
          <p className="mt-3">
            A resume is easier to shape after you know what the application
            needs. Read the posting once for the role, then make a short
            evidence checklist:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5">
            <li>Which responsibilities appear central to the position?</li>
            <li>Which skills can you support with a real example?</li>
            <li>What format and contact details does the employer request?</li>
            <li>Which older details can be removed because they do not help?</li>
          </ul>
          <p className="mt-3">
            This is not a request to copy every phrase from the posting. It is a
            way to choose relevant proof before you spend time on formatting.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Start with the role, not a template</h2>
          <p className="mt-3">
            Before editing your resume, read the job description and identify
            what the employer needs most. Note the main responsibilities,
            required skills, and language used for the role. Then choose examples
            from your actual experience that show those strengths. A resume is
            not a complete record of everything you have done; it is a concise
            case for why your background fits this specific opportunity. Keep
            your claims accurate, and leave out details that do not help a
            recruiter understand your qualifications.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Use a clear, familiar structure</h2>
          <p className="mt-3">
            Put your name and current contact information at the top, followed
            by a short professional summary if it helps explain your focus.
            Organize the rest with familiar headings such as Experience,
            Education, and Skills. Most applicants benefit from reverse
            chronological order, with the latest role first. Use consistent
            dates, spacing, and bullet formatting so a reader can scan the page
            quickly. One or two pages can both work; prioritize relevant
            evidence instead of shrinking the font to fit every detail.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Turn duties into measurable achievements</h2>
          <p className="mt-3">
            Strong experience bullets explain what you did and why it mattered.
            Start with a specific action, add the task or challenge, and finish
            with a result when you can support one. For example, “Helped improve
            onboarding” says little about the work. A clearer version, if it
            matches what you did, could be, “Rewrote onboarding guides and
            organized setup instructions for new hires.” Add figures such as
            revenue, time saved, customer volume, error rates, or project size
            only when you can support them. If you do not know an exact
            percentage, describe the scope or outcome without inventing a
            number.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Turn a broad duty into a specific bullet
          </h2>
          <p className="mt-3">
            Begin with the plain version: “Responsible for scheduling
            deliveries.” It describes an area of work but leaves the reader
            unsure what you handled. A possible rewrite, only if accurate, is:
            “Coordinated delivery schedules, confirmed changes with drivers,
            and flagged conflicts before dispatch.”
          </p>
          <ol className="mt-4 list-decimal space-y-2 pl-5">
            <li>Use a verb that reflects your actual role, not a more senior one.</li>
            <li>Explain the process or people your work supported.</li>
            <li>Add an outcome only when you can explain how you know it happened.</li>
          </ol>
          <p className="mt-3">
            If you do not have a measured result, detail can still come from
            scope: the type of schedule, the team involved, or the problem you
            helped prevent. Do not turn a plausible outcome into a claim unless
            you can support it. A resume bullet should be brief enough to scan
            and specific enough to discuss honestly in an interview.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Choose action verbs that name your contribution</h2>
          <p className="mt-3">
            Words such as led, designed, analyzed, negotiated, automated, and
            launched help readers picture your role. Pick a verb that matches
            what you actually did: do not say “led” if you only contributed to
            the project. Avoid repeating vague openers like responsible for,
            assisted with, or worked on. You can use the same skill in different
            ways across your resume: “analyzed customer feedback,” “trained new
            staff,” or “streamlined monthly reporting.” Specific verbs make
            bullets direct without adding extra adjectives.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Tailor for ATS without writing for a robot</h2>
          <p className="mt-3">
            Applicant tracking systems help employers organize applications,
            and many scan for relevant experience and skills. Use a simple
            layout with conventional section names, readable fonts, and text
            instead of important information embedded in graphics. Include
            phrases from the job description when they accurately describe your
            abilities; for example, use the same wording the employer uses for a
            required certification or software skill. Do not stuff keywords into hidden
            text or claim qualifications you do not have. Follow the requested
            file format, and check that your contact details and headings remain
            readable when copied into plain text.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Avoid common resume mistakes</h2>
          <p className="mt-3">
            A generic resume that barely reflects the role makes relevant
            experience harder to find. Long paragraphs, unexplained acronyms,
            inconsistent dates, and decorative layouts can also slow readers
            down. Remove outdated or unrelated details unless they show a
            transferable skill. Never exaggerate a title, responsibility, or
            result: employers may ask about it in an interview. Finally, check
            spelling, grammar, links, and phone numbers. A careful proofread
            catches small errors that can distract from otherwise strong work.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Make the final edit easy to scan</h2>
          <p className="mt-3">
            Read each bullet and ask whether it gives useful evidence for the
            target role. Put the most relevant accomplishments near the top of
            each section, trim repeated information, and use consistent verb
            tense: past tense for previous jobs and present tense for ongoing
            responsibilities. If you are stuck turning a task into a concise
            accomplishment, try the{" "}
            <Link href="/tools/resume-bullet-generator" className="font-semibold text-brand-600 hover:underline">
              Resume Bullet Point Generator
            </Link>{" "}
            to get a starting point for clearer bullets. Review every suggestion
            and keep only details that are true to your experience. Your final
            resume should sound like you and make your fit easy to understand.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Run a final accuracy pass
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Check that each date, title, skill, and link is correct.</li>
            <li>Remove details that do not help explain your fit for this role.</li>
            <li>Read every bullet aloud and keep only claims you can defend.</li>
            <li>Confirm the saved file opens and its headings remain readable.</li>
          </ul>
          <p className="mt-3">
            The final question is simple: could you describe the work behind
            every line without needing to reinterpret it? If not, revise the
            wording or leave the claim out. Open each portfolio or project link
            to confirm it still shows the work you intend to share.
          </p>
        </div>
      </div>
    </article>
  );
}