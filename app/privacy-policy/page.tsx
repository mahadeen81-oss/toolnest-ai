import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ToolNest AI collects and uses information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: [add date before launch]</p>

      <div className="mt-8 space-y-6 text-slate-600">
        <p>
          This is placeholder policy text. Replace it with a policy reviewed for your
          jurisdiction before applying for AdSense or launching publicly &mdash; this
          page is required by AdSense and should accurately describe your actual
          data practices.
        </p>

        <div>
          <h2 className="font-semibold text-slate-900">Information we collect</h2>
          <p className="mt-2">
            Describe here what you collect: text users submit to AI tools, basic
            usage analytics, cookies, and any data collected by ad partners once
            ads are enabled.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">How we use information</h2>
          <p className="mt-2">
            Explain that submitted text is sent to Google's Gemini API to generate
            a response, and describe any logging or analytics you actually perform.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Third-party services</h2>
          <p className="mt-2">
            Disclose the Gemini API and, once enabled, Google AdSense and any
            analytics or affiliate providers you use.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to hello@toolnest.ai.
          </p>
        </div>
      </div>
    </div>
  );
}
