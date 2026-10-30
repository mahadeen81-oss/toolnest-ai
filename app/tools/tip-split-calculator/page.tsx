import type { Metadata } from "next";
import ToolIllustration from "@/components/ToolIllustration";
import ToolGuide from "@/components/tools/ToolGuide";
import { getToolBySlug } from "@/lib/tools-config";
import TipSplitCalculator from "@/components/tools/TipSplitCalculator";

export const metadata: Metadata = {
  title: "Tip and Bill Split Calculator",
  description: "Calculate tip, total, and each person's share of a bill using quick 10, 15, 18, or 20 percent buttons or a custom tip.",
};

export default function TipSplitCalculatorPage() {
  const tool = getToolBySlug("tip-split-calculator");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <span className="mb-3 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">Productivity</span>
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Tip and Bill Split Calculator</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">Add a tip and split the check between friends, using amounts in currencies with two decimal places.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">Your amounts are calculated locally by this tool. It makes no API calls and saves nothing.</p>
      <div className="mt-8"><TipSplitCalculator /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">About this tool</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Splitting a restaurant check involves two steps that are easy to blur: choosing a tip and sharing the total fairly. This calculator applies your chosen tip percentage to the bill before tip, adds it to get the total, and divides that total by the number of people. The bill and tip are rounded to cents before splitting. If the final total cannot be divided equally, the tool says exactly how many people pay the lower share and how many pay one cent more, so the shares add up to the rounded total. Customs differ between countries and venues, and some bills already include a service charge, so check your receipt first.</p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">How to use this tool</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Enter the bill before tip.</li>
          <li>Tap a quick tip button or choose Custom.</li>
          <li>Enter a whole number of people.</li>
          <li>Read tip, total, and each share.</li>
        </ol>
        <h3 className="mt-6 font-semibold text-slate-900">Worked examples</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>A 60.00 bill with 20% tip is 12.00 tip and 72.00 total.</li>
          <li>72.00 split among 3 people is 24.00 each.</li>
          <li>A 50.00 bill with 15% tip is 57.50, split by 3: two people pay 19.17 and one pays 19.16, which adds up to exactly 57.50.</li>
        </ul>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Frequently asked questions</h2>
        <h3 className="mt-4 font-semibold text-slate-900">Why might shares differ by a cent?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">Money is split in whole cents, so when the total cannot divide evenly some people pay one cent more.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Does it support currencies?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">Amounts have no symbol, so any currency with two decimal places works.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Is the tip calculated before tax?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">It uses whatever bill amount you enter, so include or exclude tax as you prefer.</p>
      </section>
      <ToolGuide toolId="tip-split-calculator" />
    </div>
  );
}
