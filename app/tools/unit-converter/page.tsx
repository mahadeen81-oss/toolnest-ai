import type { Metadata } from "next";
import ToolIllustration from "@/components/ToolIllustration";
import ToolGuide from "@/components/tools/ToolGuide";
import { getToolBySlug } from "@/lib/tools-config";
import UnitConverter from "@/components/tools/UnitConverter";

export const metadata: Metadata = {
  title: "Unit Converter",
  description: "Convert length, weight, temperature, volume, and speed units instantly in your browser, with a swap button for reversing units.",
};

export default function UnitConverterPage() {
  const tool = getToolBySlug("unit-converter");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <span className="mb-3 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">Productivity</span>
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Unit Converter</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">Switch between metric and imperial measures for cooking, travel, or homework.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">The numbers you type are processed on this page by the tool. It makes no API calls and does not save your entries.</p>
      <div className="mt-8"><UnitConverter /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">About this tool</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Unit conversion mistakes usually come from remembering a factor wrongly or mixing similar units. This converter keeps five categories together, length, weight, temperature, volume, and speed, and only lets you convert within one category at a time. Most units are converted through a shared base unit, while temperature uses the standard formulas for Celsius, Fahrenheit, and Kelvin. Results show up to eight decimal places, and very large or very small numbers switch to scientific notation so they stay readable. It is handy for recipes, travel distances, fuel and speed comparisons, and school science work. For anything safety critical, such as medication doses or engineering specifications, confirm important figures with the original source and a second method.</p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">How to use this tool</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Pick a category such as Length or Volume.</li>
          <li>Choose the From and To units.</li>
          <li>Type a number to see the result at once.</li>
          <li>Use Swap units to reverse the direction.</li>
        </ol>
        <h3 className="mt-6 font-semibold text-slate-900">Worked examples</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>10 miles is about 16.09344 kilometers.</li>
          <li>72 degrees Fahrenheit is about 22.22222 degrees Celsius.</li>
          <li>2 US cups is about 473.176473 milliliters.</li>
        </ul>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Frequently asked questions</h2>
        <h3 className="mt-4 font-semibold text-slate-900">Why are US and imperial gallons separate?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">They are different sizes. A US gallon is 3.785411784 liters and an imperial gallon is 4.54609 liters.</p>
        <h3 className="mt-4 font-semibold text-slate-900">What happens with a blank field?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">Nothing is converted. A blank field is not treated as zero.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Can temperature go below absolute zero?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">No. The tool shows an error for values below absolute zero, such as -300 degrees Celsius.</p>
      </section>
      <ToolGuide toolId="unit-converter" />
    </div>
  );
}
