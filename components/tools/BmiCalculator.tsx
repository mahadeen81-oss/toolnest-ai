"use client";

import { useMemo, useState } from "react";
import { calculateBmi, imperialToMetric } from "@/lib/browser-tool-calculations";

type System = "metric" | "imperial";
const field = "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";
const num = (s: string) => (s.trim() === "" ? null : Number(s.trim()));
const round = (n: number, d: number) => String(Number(n.toFixed(d)));

export default function BmiCalculator() {
  const [system, setSystem] = useState<System>("metric");
  const [kg, setKg] = useState("");
  const [cm, setCm] = useState("");
  const [lb, setLb] = useState("");
  const [ft, setFt] = useState("");
  const [inch, setInch] = useState("");

  function switchTo(next: System) {
    if (next === system) return;
    if (next === "imperial") {
      const w = num(kg), h = num(cm);
      setLb(w !== null && Number.isFinite(w) && w > 0 ? round(w / 0.45359237, 2) : "");
      if (h !== null && Number.isFinite(h) && h > 0) {
        const totalIn = h / 2.54;
        let feet = Math.floor(totalIn / 12);
        let rest = Math.round((totalIn - feet * 12) * 100) / 100;
        if (rest >= 12) { feet += 1; rest = 0; }
        setFt(String(feet)); setInch(String(rest));
      } else { setFt(""); setInch(""); }
    } else {
      const w = num(lb), f = num(ft), i = num(inch);
      setKg(w !== null && Number.isFinite(w) && w > 0 ? round(w * 0.45359237, 2) : "");
      if (f !== null && i !== null && Number.isFinite(f) && Number.isFinite(i) && Number.isInteger(f) && f >= 0 && i >= 0 && i < 12 && f * 12 + i > 0) setCm(round((f * 12 + i) * 2.54, 2));
      else setCm("");
    }
    setSystem(next);
  }

  const outcome = useMemo(() => {
    const values = system === "metric" ? [kg, cm] : [lb, ft, inch];
    if (values.some((v) => v.trim() === "")) return { message: system === "metric" ? "Enter weight and height to see your BMI." : "Enter pounds, feet, and inches (0 is fine for inches) to see your BMI." };
    const parsed = values.map((v) => Number(v.trim()));
    if (parsed.some((n) => !Number.isFinite(n))) return { error: "Enter valid numbers in every field." };
    try {
      const metric = system === "metric" ? { weightKg: parsed[0], heightCm: parsed[1] } : imperialToMetric(parsed[0], parsed[1], parsed[2]);
      return { result: calculateBmi(metric.weightKg, metric.heightCm) };
    } catch (err) {
      return { error: err instanceof Error ? err.message : "Couldn't calculate BMI." };
    }
  }, [system, kg, cm, lb, ft, inch]);

  const input = (id: string, label: string, value: string, set: (v: string) => void) => (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">{label}</label>
      <input id={id} type="text" inputMode="decimal" value={value} onChange={(event) => set(event.target.value)} className={field} />
    </div>
  );

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <label htmlFor="bmi-system" className="mb-2 block text-sm font-medium text-slate-700">Units</label>
      <select id="bmi-system" value={system} onChange={(event) => switchTo(event.target.value as System)} className={`${field} sm:w-72`}>
        <option value="metric">Metric (kg, cm)</option>
        <option value="imperial">Imperial (lb, feet, inches)</option>
      </select>
      <div className={`mt-4 grid gap-4 ${system === "metric" ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}>
        {system === "metric" ? (<>{input("bmi-kg", "Weight (kg)", kg, setKg)}{input("bmi-cm", "Height (cm)", cm, setCm)}</>) : (<>{input("bmi-lb", "Weight (lb)", lb, setLb)}{input("bmi-ft", "Height (feet)", ft, setFt)}{input("bmi-in", "Height (additional inches)", inch, setInch)}</>)}
      </div>
      <div aria-live="polite" className="mt-5">
        {outcome.error && <p role="alert" className="rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-700">{outcome.error}</p>}
        {outcome.message && <p className="text-sm text-slate-500">{outcome.message}</p>}
        {outcome.result && (
          <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Your BMI</p>
            <p className="mt-2 text-3xl font-bold text-slate-900">{outcome.result.bmi.toFixed(1)} <span className="text-base font-semibold text-violet-800">{outcome.result.category}</span></p>
            <p className="mt-2 text-xs leading-5 text-slate-600">Adult categories: under 18.5 underweight, 18.5 to 24.9 healthy weight, 25 to 29.9 overweight, 30 and above obesity.</p>
          </div>
        )}
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-500">For adults aged 20 and over. BMI does not apply the same way to children or teens, and it can mislead for pregnancy or high muscle mass.</p>
      <p className="mt-2 rounded-xl bg-amber-50 p-3 text-sm font-medium text-amber-900">General information only, not medical advice.</p>
    </div>
  );
}
