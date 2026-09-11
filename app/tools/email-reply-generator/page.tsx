import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "Email Reply Generator",
  description: "Draft a professional email reply based on the message you received and what you want to say.",
};

export default function EmailReplyGeneratorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Email Reply Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Share the email and your key points to draft a clear reply in the tone you want.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="email-reply-generator"
          fields={[
            {
              id: "original_email",
              label: "Email you received",
              type: "textarea",
              placeholder: "Paste the email you're replying to...",
              required: true,
            },
            {
              id: "key_points",
              label: "What do you want to say?",
              type: "textarea",
              placeholder: "e.g. Confirm the meeting, ask to reschedule to next week",
              required: true,
            },
            {
              id: "tone",
              label: "Tone",
              type: "select",
              options: ["Professional", "Friendly", "Formal", "Brief"],
            },
          ]}
        />
      </div>
    </div>
  );
}