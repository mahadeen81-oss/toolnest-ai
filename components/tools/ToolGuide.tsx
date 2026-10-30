import Link from "next/link";
import { TOOL_GUIDES, type ToolGuideSection } from "@/lib/tool-guides";

function GuideSection({ section }: { section: ToolGuideSection }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white/80 p-5 sm:p-6 dark:border-slate-700 dark:bg-slate-900/50">
      <h3 className="text-lg font-semibold text-slate-900">{section.title}</h3>

      {section.type === "steps" && (
        <ol className="mt-4 list-decimal space-y-3 pl-5 leading-7 text-slate-600">
          {section.items.map((item) => <li key={item}>{item}</li>)}
        </ol>
      )}

      {section.type === "tips" && (
        <ul className="mt-4 list-disc space-y-3 pl-5 leading-7 text-slate-600">
          {section.items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      )}

      {section.type === "example" && (
        <div className="mt-4 space-y-4 leading-7 text-slate-600">
          <p>{section.context}</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <h4 className="text-sm font-semibold text-slate-900">{section.inputLabel}</h4>
              <p className="mt-2 whitespace-pre-wrap text-sm">{section.input}</p>
            </div>
            <div className="rounded-xl bg-violet-50/70 p-4 dark:bg-violet-50/70">
              <h4 className="text-sm font-semibold text-slate-900">{section.outputLabel}</h4>
              <p className="mt-2 whitespace-pre-wrap text-sm">{section.output}</p>
            </div>
          </div>
          <p className="text-sm">{section.note}</p>
        </div>
      )}

      {section.type === "limits" && (
        <p className="mt-4 leading-7 text-slate-600">{section.text}</p>
      )}

      {section.type === "faq" && (
        <dl className="mt-4 space-y-5">
          {section.items.map((item) => (
            <div key={item.question}>
              <dt className="font-medium text-slate-900">{item.question}</dt>
              <dd className="mt-1 leading-7 text-slate-600">
                {item.answer}
                {item.privacy && (
                  <>
                    {" "}
                    <Link href="/privacy-policy" className="font-medium text-brand-600 hover:underline">
                      Read the Privacy Policy.
                    </Link>
                  </>
                )}
              </dd>
            </div>
          ))}
        </dl>
      )}
    </section>
  );
}

export default function ToolGuide({ toolId }: { toolId: string }) {
  const guide = TOOL_GUIDES[toolId];
  if (!guide) return null;

  return (
    <article className="mt-14 border-t border-slate-200 pt-10 dark:border-slate-700">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
          Tool guide
        </p>
        <h2 className="mt-2 text-2xl font-bold text-slate-900">{guide.title}</h2>
        <p className="mt-3 leading-7 text-slate-600">{guide.introduction}</p>
      </header>
      <div className="mt-7 space-y-5">
        {guide.sections.map((section) => (
          <GuideSection key={section.title} section={section} />
        ))}
      </div>
    </article>
  );
}
