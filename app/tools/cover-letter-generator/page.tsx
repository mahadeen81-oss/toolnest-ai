import type { Metadata } from "next";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";
import ToolRunner from "@/components/tools/ToolRunner";
import ToolGuide from "@/components/tools/ToolGuide";

export const metadata: Metadata = {
  title: "Cover Letter Generator",
  description:
    "Create a tailored, ready-to-send cover letter using your real experience, skills, target job, and preferred tone.",
};

export default function CoverLetterGeneratorPage() {
  const tool = getToolBySlug("cover-letter-generator");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Cover Letter Generator</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">
        Share the target role and the experience you want to highlight. The generator
        turns those facts into a focused letter without inventing achievements.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="cover-letter-generator"
          fields={[
            {
              id: "job_title",
              label: "Job title",
              type: "text",
              placeholder: "e.g. Customer Success Manager",
              required: true,
            },
            {
              id: "company",
              label: "Company (optional)",
              type: "text",
              placeholder: "e.g. Northstar Labs",
              required: false,
            },
            {
              id: "background",
              label: "Key experience and skills",
              type: "textarea",
              placeholder:
                "Describe relevant roles, skills, projects, and achievements you can support with facts.",
              required: true,
            },
            {
              id: "tone",
              label: "Tone",
              type: "select",
              options: ["Professional", "Warm", "Confident"],
              required: true,
            },
          ]}
        />
      </div>

      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">How to use the Cover Letter Generator</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Enter the exact job title, add the company name if you know it, and describe
          the experience and skills that matter for this application. Choose a tone and
          generate a draft. Read it against the job description, correct anything that
          does not sound like you, and make sure every claim is accurate before sending.
          You can paste concise notes rather than polished prose. Relevant details make
          it easier to check the draft against your actual record.
        </p>
        <h3 className="mt-6 font-semibold text-slate-900">Three tips for a stronger letter</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>
            Share two or three specific examples that match the role instead of listing
            every skill you have.
          </li>
          <li>
            Include numbers only when you can verify them. Concrete responsibilities
            and outcomes are more useful than unsupported claims.
          </li>
          <li>
            Tailor the opening and final paragraph for each employer, then check names,
            dates, and contact details before you submit the letter. Read the final
            version aloud and remove any sentence that sounds generic or unlike you.
          </li>
        </ol>
      </section>
      <ToolGuide toolId="cover-letter-generator" />
    </div>
  );
}
