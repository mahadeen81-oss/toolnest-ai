import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How ToolNest AI collects and uses information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-slate-400">Last updated: August 23, 2026</p>

      <div className="mt-8 space-y-6 text-slate-600">
        <p>
          ToolNest AI is a website providing simple AI-powered tools for writing,
          content creation and productivity. This policy explains what information
          we collect and how we use it.
        </p>

        <div>
          <h2 className="font-semibold text-slate-900">Information we collect</h2>
          <p className="mt-2">
            When you use a tool, the text you submit (e.g. a topic, or text to
            summarize/rewrite) is sent to Google's Gemini API to generate a
            response. We do not require an account and do not collect your name,
            email, or payment information to use the tools. We may collect basic,
            non-identifying usage data (such as which tools are used) through
            standard analytics, if enabled.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">How we use information</h2>
          <p className="mt-2">
            Submitted text is used only to generate the requested output via the
            Gemini API. We do not sell your data. We do not use your submitted text
            to train our own models.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Third-party services</h2>
          <p className="mt-2">
            We use Google's Gemini API to generate content. Once ads are enabled,
            we will use Google AdSense, which may use cookies to show relevant ads;
            you can control ad personalization through Google's Ad Settings.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Cookies</h2>
          <p className="mt-2">
            We may use minimal cookies for basic site functionality and, once
            enabled, for advertising (Google AdSense).
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Your rights</h2>
          <p className="mt-2">
            You may contact us at any time to ask what data we hold about you or
            to request its deletion, using the contact details below.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            Questions about this policy can be sent to Mahadeen81@gmail.com.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Governing law</h2>
          <p className="mt-2">
            This policy is governed by the laws of the Hashemite Kingdom of Jordan.
          </p>
        </div>
      </div>
    </div>
  );
}
