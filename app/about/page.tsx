import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn what ToolNest AI is and why it exists.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">About ToolNest AI</h1>
      <div className="mt-6 space-y-4 text-slate-600">
        <p>
          ToolNest AI was built around one idea: AI tools should feel as simple as a
          light switch. Open the tool you need, type what you want, get a usable
          result &mdash; no prompt engineering required.
        </p>
        <p>
          We started with seven tools covering the everyday work of writing,
          content creation and productivity, and we're expanding the collection
          based on what people actually ask for.
        </p>
        <p>
          Have a tool you wish existed?{" "}
          <a href="/contact" className="font-semibold text-brand-600 hover:underline">
            Tell us about it.
          </a>
        </p>
      </div>
    </div>
  );
}
