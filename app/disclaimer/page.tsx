import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer and Site Limits",
  description:
    "Understand the limits of ToolNest AI tools and articles, including AI accuracy, professional advice, availability, and third-party links.",
};

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold text-slate-900">Disclaimer</h1>
      <p className="mt-2 text-sm text-slate-600">
        Last updated: <time dateTime="2026-10-21">October 21, 2026</time>
      </p>

      <div className="mt-8 space-y-6 text-slate-600">
        <p>
          ToolNest AI provides tools and articles for general informational
          purposes and everyday assistance. Read this disclaimer before relying
          on a tool output or information on the site.
        </p>

        <div>
          <h2 className="font-semibold text-slate-900">Not professional advice</h2>
          <p className="mt-2">
            The tools, articles, and generated results are not professional,
            legal, financial, or medical advice. They are not a substitute for
            guidance from a qualified professional who understands your
            circumstances. Seek appropriate professional advice when a decision
            requires it.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Review AI-generated results</h2>
          <p className="mt-2">
            AI-generated results can be inaccurate, incomplete, or outdated.
            They may contain unsupported statements or misunderstand the
            information you provide. You must review results before using or
            sharing them, check important facts against reliable sources, and
            make sure the output is appropriate for your intended use.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">No guarantee of availability or results</h2>
          <p className="mt-2">
            ToolNest AI does not guarantee uninterrupted availability,
            error-free operation, or a particular result from any tool or
            article. Access can be interrupted and processing can fail. Keep
            original files and review downloaded results before relying on
            them. Do not use the site as your only source of information for
            an important decision.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Your decisions and use of results</h2>
          <p className="mt-2">
            You are responsible for deciding whether and how to use information
            and results from ToolNest AI. The site does not make decisions for
            you and is not responsible for decisions you make using its tools,
            generated outputs, or articles.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Third-party websites</h2>
          <p className="mt-2">
            The site may link to third-party websites for reference or
            convenience. Those websites are operated by others, and their
            content, services, and privacy practices can change. A link does
            not mean ToolNest AI endorses or guarantees the information or
            services on that website. Review the destination and its policies
            before sharing information or relying on its content.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Possible future advertising</h2>
          <p className="mt-2">
            ToolNest AI may show advertising in the future.
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-slate-900">Contact</h2>
          <p className="mt-2">
            If you have a question about this disclaimer, visit the{" "}
            <Link href="/contact" className="font-semibold text-brand-600 hover:underline">
              Contact page
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
