import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the ToolNest AI team.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Contact us</h1>
      <p className="mt-4 text-slate-600">
        Questions, feedback, or a tool idea? Reach out any time.
      </p>
      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <p className="text-sm text-slate-500">Email</p>
        <a
          href="mailto:hello@toolnest.ai"
          className="text-base font-semibold text-brand-600 hover:underline"
        >
          hello@toolnest.ai
        </a>
        <p className="mt-4 text-xs text-slate-400">
          Replace this with your real contact address before launch.
        </p>
      </div>
    </div>
  );
}
