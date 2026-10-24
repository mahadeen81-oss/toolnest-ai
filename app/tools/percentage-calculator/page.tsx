import type { Metadata } from "next";
import PercentageCalculator from "@/components/tools/PercentageCalculator";

export const metadata: Metadata = {
  title: "Percentage Calculator",
  description: "Work out a percentage of a number, find what percent one value is of another, adjust by a percent, or find percentage change.",
};

export default function PercentageCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <span className="mb-3 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">Productivity</span>
      <h1 className="text-2xl font-bold text-slate-900">Percentage Calculator</h1>
      <p className="mt-2 max-w-2xl text-slate-500">Four common percentage questions in one place, with labelled fields so you know which number goes where.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">Your numbers are calculated locally by this tool. It makes no API calls and stores nothing.</p>
      <div className="mt-8"><PercentageCalculator /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">About this tool</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Percentages appear in discounts, tax, grades, interest, and statistics, yet the same word covers several different questions. This calculator separates them into four modes so that each field has one clear meaning. The first two modes find a share of a base amount and express one number as a percent of another. The third applies an increase or decrease to a starting amount, such as a price rise. The fourth measures how much a value changed relative to its original. Remember that a percentage rise followed by the same percentage fall does not return you to the start, because the second change applies to a new base. Results are shown with up to six decimals and are not rounded to money.</p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">How to use this tool</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Choose the question you want answered.</li>
          <li>Read the field labels, which change with each mode.</li>
          <li>Enter both values to see the answer.</li>
          <li>For increase or decrease, pick the direction first.</li>
        </ol>
        <h3 className="mt-6 font-semibold text-slate-900">Worked examples</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>20% of 250 is 50.</li>
          <li>Increasing 80 by 15% gives 92, and decreasing it by 15% gives 68.</li>
          <li>Going from 40 to 50 is a 25% change.</li>
        </ul>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Frequently asked questions</h2>
        <h3 className="mt-4 font-semibold text-slate-900">Why can the whole not be zero?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">Dividing by zero has no answer, so the tool asks for a nonzero whole.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Why must the original value be above zero for change?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">Percentage change is measured against the starting value, which cannot be zero or negative here.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Are results rounded?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">Results show up to six decimal places.</p>
      </section>
    </div>
  );
}
