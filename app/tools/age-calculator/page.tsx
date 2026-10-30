import type { Metadata } from "next";
import ToolIllustration from "@/components/ToolIllustration";
import ToolGuide from "@/components/tools/ToolGuide";
import { getToolBySlug } from "@/lib/tools-config";
import AgeCalculator from "@/components/tools/AgeCalculator";

export const metadata: Metadata = {
  title: "Age Calculator",
  description: "Enter a birth date to see your age in years, months, and days, plus total days lived and days until your next birthday.",
};

export default function AgeCalculatorPage() {
  const tool = getToolBySlug("age-calculator");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <span className="mb-3 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">Productivity</span>
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Age Calculator</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">See exactly how old you are today and how long until the next birthday.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">The date you choose stays in this browser tab. The tool makes no API calls and saves nothing.</p>
      <div className="mt-8"><AgeCalculator /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">About this tool</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Counting age sounds simple until months and leap years get involved. This tool compares your birth date with today's local date and counts complete years first, then complete months since your last birthday, then the remaining days. It also reports the total number of days between the two dates and how many days remain until your next birthday. Because the comparison uses calendar dates rather than clock times, the result does not shift with hours or daylight saving changes. The page checks the date again periodically, so leaving it open past midnight updates the figures. It suits form filling, milestone planning, and curiosity, but legal age rules in your country may define birthdays differently for some cases.</p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">How to use this tool</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Choose a date of birth with the date picker.</li>
          <li>Read your age in years, months, and days.</li>
          <li>Check total days and the countdown to your next birthday.</li>
          <li>Return later; today's date refreshes automatically.</li>
        </ol>
        <h3 className="mt-6 font-semibold text-slate-900">Worked examples</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Born 2000-03-15, as of 2024-03-14: 23 years, 11 months, 28 days.</li>
          <li>Born 1990-06-01, as of 2024-06-01: 34 years, and today is the birthday (0 days).</li>
          <li>Born 2000-02-29, as of 2023-02-28: the birthday counts on February 28 in non-leap years.</li>
        </ul>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Frequently asked questions</h2>
        <h3 className="mt-4 font-semibold text-slate-900">What if I was born on February 29?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">In years that are not leap years, the birthday is counted on February 28.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Why is a future date rejected?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">A birth date after today cannot produce an age, so the tool asks for a valid date.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Which time zone is used?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">Today is taken from your device's local date.</p>
      </section>
      <ToolGuide toolId="age-calculator" />
    </div>
  );
}
