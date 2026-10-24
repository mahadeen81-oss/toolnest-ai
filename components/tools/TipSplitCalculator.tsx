"use client";

import { useMemo, useState } from "react";
import { calculateTip } from "@/lib/browser-tool-calculations";

const QUICK = [10, 15, 18, 20];
const field = "w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";
const money = (n: number) => n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function TipSplitCalculator() {
  const [bill, setBill] = useState("");
  const [preset, setPreset] = useState<number | "custom">(15);
  const [custom, setCustom] = useState("");
  const [people, setPeople] = useState("1");

  const outcome = useMemo(() => {
    const tipText = preset === "custom" ? custom : String(preset);
    if (!bill.trim() || !tipText.trim() || !people.trim()) return { message: "Enter the bill, a tip percentage, and the number of people." };
    const b = Number(bill.trim()), t = Number(tipText.trim());
    if (!Number.isFinite(b) || !Number.isFinite(t)) return { error: "Enter valid numbers for the bill and tip." };
    if (!/^\d+$/.test(people.trim())) return { error: "Enter a whole number of people, at least 1." };
    try { return { result: calculateTip(b, t, Number(people.trim())) }; }
    catch (err) { return { error: err instanceof Error ? err.message : "Couldn't calculate this split." }; }
  }, [bill, preset, custom, people]);

  const r = outcome.result;
  const uneven = r ? r.extraPeople > 0 : false;

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="tip-bill" className="mb-2 block text-sm font-medium text-slate-700">Bill amount (before tip)</label>
          <input id="tip-bill" type="text" inputMode="decimal" value={bill} onChange={(event) => setBill(event.target.value)} placeholder="e.g. 86.40" className={field} />
        </div>
        <div>
          <label htmlFor="tip-people" className="mb-2 block text-sm font-medium text-slate-700">Number of people</label>
          <input id="tip-people" type="text" inputMode="numeric" value={people} onChange={(event) => setPeople(event.target.value)} className={field} />
        </div>
      </div>
      <fieldset className="mt-4">
        <legend className="text-sm font-medium text-slate-700">Tip percentage</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {QUICK.map((p) => (
            <button type="button" key={p} aria-pressed={preset === p} onClick={() => setPreset(p)} className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${preset === p ? "border-brand-500 bg-brand-500 text-white" : "border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100"}`}>{p}%</button>
          ))}
          <button type="button" aria-pressed={preset === "custom"} onClick={() => setPreset("custom")} className={`rounded-xl border px-4 py-2.5 text-sm font-semibold transition ${preset === "custom" ? "border-brand-500 bg-brand-500 text-white" : "border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100"}`}>Custom</button>
        </div>
        {preset === "custom" && (
          <div className="mt-3 sm:w-60">
            <label htmlFor="tip-custom" className="mb-2 block text-sm font-medium text-slate-700">Custom tip (%)</label>
            <input id="tip-custom" type="text" inputMode="decimal" value={custom} onChange={(event) => setCustom(event.target.value)} className={field} />
          </div>
        )}
      </fieldset>
      <div aria-live="polite" className="mt-5">
        {outcome.error && <p role="alert" className="rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-700">{outcome.error}</p>}
        {outcome.message && <p className="text-sm text-slate-500">{outcome.message}</p>}
        {r && (
          <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-4">
            <dl className="grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-white p-3"><dt className="text-xs text-slate-500">Tip</dt><dd className="text-xl font-bold text-slate-900">{money(r.tip)}</dd></div>
              <div className="rounded-xl bg-white p-3"><dt className="text-xs text-slate-500">Total with tip</dt><dd className="text-xl font-bold text-slate-900">{money(r.total)}</dd></div>
              <div className="rounded-xl bg-white p-3"><dt className="text-xs text-slate-500">{uneven ? "Average per person" : "Per person"}</dt><dd className="text-xl font-bold text-slate-900">{money(uneven ? r.perPerson : r.baseShare)}</dd></div>
            </dl>
            {uneven && (
              <p className="mt-3 text-sm leading-6 text-slate-700">The total does not divide evenly into cents. {r.lowerPeople.toLocaleString()} {r.lowerPeople === 1 ? "person pays" : "people pay"} {money(r.baseShare)} and {r.extraPeople.toLocaleString()} {r.extraPeople === 1 ? "person pays" : "people pay"} {money(r.higherShare)}, so the shares add up to exactly {money(r.total)}.</p>
            )}
          </div>
        )}
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-500">Use a currency with two decimal places. Amounts have no currency symbol; the bill and tip are rounded to the nearest cent.</p>
    </div>
  );
}
