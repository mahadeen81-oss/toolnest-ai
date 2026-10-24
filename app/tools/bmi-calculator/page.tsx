import type { Metadata } from "next";
import BmiCalculator from "@/components/tools/BmiCalculator";

export const metadata: Metadata = {
  title: "BMI Calculator",
  description: "Calculate adult body mass index from kilograms and centimeters or pounds, feet, and inches, with the standard category shown.",
};

export default function BmiCalculatorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <span className="mb-3 inline-block rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold text-violet-700">Productivity</span>
      <h1 className="text-2xl font-bold text-slate-900">BMI Calculator</h1>
      <p className="mt-2 max-w-2xl text-slate-500">Get a quick BMI figure and adult category. Switching units converts your numbers instead of reinterpreting them.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">The measurements you enter are calculated locally by this tool. It makes no API calls and stores nothing.</p>
      <div className="mt-8"><BmiCalculator /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">About this tool</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Body mass index divides weight in kilograms by height in meters squared. It is a quick screening number for adults, not a diagnosis, because it cannot separate muscle from fat or reflect where weight is carried. This calculator accepts metric or imperial input and shows the standard adult category for your result. When you switch units it converts the values you already typed, keeping the same real measurements, rather than treating the same digits as a different weight. Imperial height uses whole feet plus inches below 12. Different health bodies and regions sometimes recommend different cut-offs for specific populations, so a healthcare professional can interpret your number properly alongside other measures such as waist size, blood tests, and family history.</p>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">How to use this tool</h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Choose metric or imperial units.</li>
          <li>Enter your weight and height.</li>
          <li>Read your BMI and category.</li>
          <li>Switch units any time; the tool converts your entries.</li>
        </ol>
        <h3 className="mt-6 font-semibold text-slate-900">Worked examples</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>70 kg at 175 cm gives a BMI of 22.9, in the healthy weight range of 18.5 to 24.9.</li>
          <li>154 lb at 5 feet 9 inches gives about 22.7.</li>
          <li>95 kg at 170 cm gives 32.9, which is above the 30 threshold.</li>
        </ul>
        <h2 className="mt-8 text-xl font-semibold text-slate-900">Frequently asked questions</h2>
        <h3 className="mt-4 font-semibold text-slate-900">Does this work for children?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">No. Children and teens are assessed using age and sex percentile charts, so ask a pediatric professional.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Is BMI always accurate?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">No. It can mislead during pregnancy or for people with high muscle mass.</p>
        <h3 className="mt-4 font-semibold text-slate-900">Is this medical advice?</h3>
        <p className="mt-1 text-sm leading-6 text-slate-600">No. General information only, not medical advice. Talk to a clinician about your health.</p>
      </section>
    </div>
  );
}
