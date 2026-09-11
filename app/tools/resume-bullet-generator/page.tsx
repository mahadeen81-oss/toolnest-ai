import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "Resume Bullet Point Generator",
  description: "Turn your job duties into strong, achievement-focused resume bullet points.",
};

export default function ResumeBulletGeneratorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Resume Bullet Point Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Describe your role and achievements to create clear, impact-focused resume bullets.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="resume-bullet-generator"
          fields={[
            {
              id: "job_title",
              label: "Job Title",
              type: "text",
              placeholder: "e.g. Marketing Manager",
              required: true,
            },
            {
              id: "responsibilities",
              label: "Describe your responsibilities or achievements",
              type: "textarea",
              placeholder: "e.g. Managed social media, increased followers, ran ad campaigns...",
              required: true,
            },
          ]}
        />
      </div>
    </div>
  );
}