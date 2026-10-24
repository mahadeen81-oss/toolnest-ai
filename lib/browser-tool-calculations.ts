export type ConversionCategory = "length" | "weight" | "temperature" | "volume" | "speed";
type Unit = { id: string; label: string; factor: number };

export const UNIT_GROUPS: Record<ConversionCategory, { label: string; units: Unit[] }> = {
  length: { label: "Length", units: [
    { id: "m", label: "Meters", factor: 1 },
    { id: "km", label: "Kilometers", factor: 1000 },
    { id: "cm", label: "Centimeters", factor: 0.01 },
    { id: "mm", label: "Millimeters", factor: 0.001 },
    { id: "in", label: "Inches", factor: 0.0254 },
    { id: "ft", label: "Feet", factor: 0.3048 },
    { id: "yd", label: "Yards", factor: 0.9144 },
    { id: "mi", label: "Miles", factor: 1609.344 },
  ] },
  weight: { label: "Weight", units: [
    { id: "kg", label: "Kilograms", factor: 1 },
    { id: "g", label: "Grams", factor: 0.001 },
    { id: "mg", label: "Milligrams", factor: 0.000001 },
    { id: "lb", label: "Pounds", factor: 0.45359237 },
    { id: "oz", label: "Ounces", factor: 0.028349523125 },
  ] },
  temperature: { label: "Temperature", units: [
    { id: "c", label: "Celsius", factor: 1 },
    { id: "f", label: "Fahrenheit", factor: 1 },
    { id: "k", label: "Kelvin", factor: 1 },
  ] },
  volume: { label: "Volume", units: [
    { id: "l", label: "Liters", factor: 1 },
    { id: "ml", label: "Milliliters", factor: 0.001 },
    { id: "us-cup", label: "US cups", factor: 0.2365882365 },
    { id: "us-fl-oz", label: "US fluid ounces", factor: 0.0295735295625 },
    { id: "us-gallon", label: "US gallons", factor: 3.785411784 },
    { id: "imperial-gallon", label: "Imperial gallons", factor: 4.54609 },
  ] },
  speed: { label: "Speed", units: [
    { id: "mps", label: "Meters per second", factor: 1 },
    { id: "kph", label: "Kilometers per hour", factor: 1 / 3.6 },
    { id: "mph", label: "Miles per hour", factor: 0.44704 },
    { id: "knot", label: "Knots", factor: 1852 / 3600 },
    { id: "ftps", label: "Feet per second", factor: 0.3048 },
  ] },
};

export function finiteNumber(value: number, label: string): number {
  if (!Number.isFinite(value)) throw new Error(`Enter a finite number for ${label}.`);
  return value;
}

export function formatNumber(value: number, decimals = 8): string {
  finiteNumber(value, "the result");
  if (value !== 0 && (Math.abs(value) < 0.00000001 || Math.abs(value) >= 1e12)) {
    return value.toExponential(6);
  }
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: decimals }).format(Object.is(value, -0) ? 0 : value);
}

export function convertUnit(value: number, category: ConversionCategory, from: string, to: string): number {
  finiteNumber(value, "the value");
  const group = UNIT_GROUPS[category];
  const source = group?.units.find((unit) => unit.id === from);
  const target = group?.units.find((unit) => unit.id === to);
  if (!source || !target) throw new Error("Choose valid units from the same category.");
  let result: number;
  if (category === "temperature") {
    const celsius = from === "f" ? (value - 32) * 5 / 9 : from === "k" ? value - 273.15 : value;
    if (celsius < -273.15 - 1e-10) throw new Error("Temperature cannot be below absolute zero.");
    result = to === "f" ? celsius * 9 / 5 + 32 : to === "k" ? celsius + 273.15 : celsius;
    if (Math.abs(result) < 1e-12) result = 0;
  } else {
    result = value * source.factor / target.factor;
  }
  return finiteNumber(result, "the result (try a smaller value)");
}

export type PercentageMode = "of" | "is" | "adjust" | "change";
export function calculatePercentage(
  mode: PercentageMode, first: number, second: number, direction: "increase" | "decrease" = "increase",
): number {
  finiteNumber(first, "the first value");
  finiteNumber(second, "the second value");
  let result: number;
  if (mode === "of") result = first / 100 * second;
  else if (mode === "is") {
    if (second === 0) throw new Error("The whole cannot be zero when finding a percentage.");
    result = first / second * 100;
  } else if (mode === "adjust") {
    result = second * (1 + (direction === "increase" ? 1 : -1) * first / 100);
  } else if (mode === "change") {
    if (first <= 0) throw new Error("For percentage change, the starting value must be greater than zero.");
    result = (second - first) / first * 100;
  } else throw new Error("Choose a valid calculation mode.");
  return finiteNumber(result, "the result (try smaller values)");
}

type CalendarDate = { year: number; month: number; day: number };
const DAY_MS = 86400000;
function utcDate(year: number, month: number, day: number): Date {
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}
function parseCalendarDate(value: string): CalendarDate {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) throw new Error("Choose a complete, valid birth date.");
  const [year, month, day] = match.slice(1).map(Number);
  const date = utcDate(year, month, day);
  if (year < 1 || date.getUTCFullYear() !== year || date.getUTCMonth() + 1 !== month || date.getUTCDate() !== day) {
    throw new Error("Choose a real calendar date.");
  }
  return { year, month, day };
}
function daysInMonth(year: number, month: number): number {
  return utcDate(year, month + 1, 0).getUTCDate();
}
function anniversary(birth: CalendarDate, year: number): Date {
  return utcDate(year, birth.month, Math.min(birth.day, daysInMonth(year, birth.month)));
}
function addClampedMonths(date: Date, months: number): Date {
  const monthIndex = date.getUTCFullYear() * 12 + date.getUTCMonth() + months;
  const year = Math.floor(monthIndex / 12);
  const month = monthIndex % 12 + 1;
  return utcDate(year, month, Math.min(date.getUTCDate(), daysInMonth(year, month)));
}

export function localDateString(now = new Date()): string {
  return `${String(now.getFullYear()).padStart(4, "0")}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
}

export function calculateAge(birthDate: string, asOf: string = localDateString()) {
  const birth = parseCalendarDate(birthDate);
  const today = parseCalendarDate(asOf);
  const start = utcDate(birth.year, birth.month, birth.day);
  const end = utcDate(today.year, today.month, today.day);
  if (start > end) throw new Error("Birth date cannot be in the future.");
  let years = today.year - birth.year;
  if (anniversary(birth, today.year) > end) years -= 1;
  const lastBirthday = anniversary(birth, birth.year + years);
  let months = 0;
  while (months < 11 && addClampedMonths(lastBirthday, months + 1) <= end) months += 1;
  const days = Math.round((end.getTime() - addClampedMonths(lastBirthday, months).getTime()) / DAY_MS);
  let nextBirthday = anniversary(birth, today.year);
  if (nextBirthday < end) nextBirthday = anniversary(birth, today.year + 1);
  return {
    years, months, days,
    totalDays: Math.round((end.getTime() - start.getTime()) / DAY_MS),
    daysUntilBirthday: Math.round((nextBirthday.getTime() - end.getTime()) / DAY_MS),
    nextBirthday: nextBirthday.toISOString().slice(0, 10),
  };
}

export function calculateBmi(weightKg: number, heightCm: number) {
  finiteNumber(weightKg, "weight");
  finiteNumber(heightCm, "height");
  if (weightKg <= 0 || heightCm <= 0) throw new Error("Weight and height must be greater than zero.");
  const bmi = finiteNumber(weightKg / (heightCm / 100) ** 2, "the BMI (check weight and height)");
  const category = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Healthy weight" : bmi < 30 ? "Overweight" : "Obesity";
  return { bmi, category };
}

export function imperialToMetric(weightLb: number, feet: number, inches: number) {
  for (const [value, label] of [[weightLb, "weight"], [feet, "feet"], [inches, "inches"]] as const) finiteNumber(value, label);
  if (weightLb <= 0 || feet < 0 || !Number.isInteger(feet) || inches < 0 || inches >= 12) {
    throw new Error("Enter positive pounds, whole feet, and inches from 0 up to (but not including) 12.");
  }
  const heightCm = (feet * 12 + inches) * 2.54;
  if (heightCm === 0) throw new Error("Height must be greater than zero.");
  return { weightKg: weightLb * 0.45359237, heightCm };
}

export function calculateTip(bill: number, tipPercent: number, people: number) {
  finiteNumber(bill, "the bill");
  finiteNumber(tipPercent, "the tip percentage");
  if (bill < 0 || tipPercent < 0) throw new Error("Bill and tip percentage cannot be negative.");
  if (!Number.isSafeInteger(people) || people < 1) throw new Error("Enter a whole number of people, at least 1.");
  const billCents = Math.round(bill * 100);
  const tipCents = Math.round(billCents * tipPercent / 100);
  const totalCents = billCents + tipCents;
  if (![billCents, tipCents, totalCents].every(Number.isSafeInteger)) throw new Error("The amount is too large. Use a smaller bill or tip.");
  const baseCents = Math.floor(totalCents / people);
  const extraPeople = totalCents % people;
  return {
    tip: tipCents / 100, total: totalCents / 100,
    perPerson: totalCents / people / 100,
    baseShare: baseCents / 100,
    higherShare: (baseCents + (extraPeople ? 1 : 0)) / 100,
    extraPeople,
    lowerPeople: people - extraPeople,
  };
}
