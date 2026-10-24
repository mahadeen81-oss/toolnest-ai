"use client";

import { useEffect, useMemo, useState } from "react";
import { calculateAge, localDateString } from "@/lib/browser-tool-calculations";

export default function AgeCalculator() {
  const [birth, setBirth] = useState("");
  const [today, setToday] = useState("");

  useEffect(() => {
    const refresh = () => setToday(localDateString());
    refresh();
    const timer = window.setInterval(refresh, 30000);
    document.addEventListener("visibilitychange", refresh);
    return () => { window.clearInterval(timer); document.removeEventListener("visibilitychange", refresh); };
  }, []);

  const outcome = useMemo(() => {
    if (!birth) return { message: "Choose a birth date to see the result." };
    if (!today) return { message: "Calculating..." };
    try { return { age: calculateAge(birth, today) }; }
    catch (err) { return { error: err instanceof Error ? err.message : "Couldn't calculate this age." }; }
  }, [birth, today]);

  const plural = (n: number, word: string) => `${n.toLocaleString()} ${word}${n === 1 ? "" : "s"}`;

  return (
    <div className="rounded-3xl border border-violet-100 bg-white/95 p-5 shadow-sm sm:p-6">
      <label htmlFor="age-birth" className="mb-2 block text-sm font-medium text-slate-700">Date of birth</label>
      <input id="age-birth" type="date" value={birth} max={today || undefined} onChange={(event) => setBirth(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100 sm:w-60" />
      <p className="mt-2 text-xs text-slate-500">{today ? `Age is measured as of today in your local time zone (${today}).` : "Age is measured as of today in your local time zone."}</p>
      <div aria-live="polite" className="mt-5">
        {outcome.error && <p role="alert" className="rounded-xl bg-rose-50 p-4 text-sm leading-6 text-rose-700">{outcome.error}</p>}
        {outcome.message && <p className="text-sm text-slate-500">{outcome.message}</p>}
        {outcome.age && (
          <div className="rounded-2xl border border-violet-200 bg-violet-50/70 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-700">Your age</p>
            <p className="mt-2 text-2xl font-bold text-slate-900">{plural(outcome.age.years, "year")}, {plural(outcome.age.months, "month")}, {plural(outcome.age.days, "day")}</p>
            <dl className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-white p-3"><dt className="text-xs text-slate-500">Total days lived</dt><dd className="text-lg font-bold text-slate-900">{outcome.age.totalDays.toLocaleString()}</dd></div>
              <div className="rounded-xl bg-white p-3"><dt className="text-xs text-slate-500">Days until next birthday</dt><dd className="text-lg font-bold text-slate-900">{outcome.age.daysUntilBirthday === 0 ? "0 (today is your birthday)" : outcome.age.daysUntilBirthday.toLocaleString()}</dd><dd className="text-xs text-slate-500">Next birthday: {outcome.age.nextBirthday}</dd></div>
            </dl>
          </div>
        )}
      </div>
      <p className="mt-4 text-xs leading-5 text-slate-500">Leap-day rule: for a February 29 birth date, the birthday is counted on February 28 in years that are not leap years.</p>
    </div>
  );
}
