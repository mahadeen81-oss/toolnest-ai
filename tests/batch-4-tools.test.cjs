const { test } = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const Module = require("node:module");
const ts = require("typescript");
const QRCode = require("qrcode");

// Compile the actual browser helpers in memory: no generated files or test dependencies.
const filename = path.resolve(__dirname, "../lib/browser-tool-calculations.ts");
const compiled = ts.transpileModule(fs.readFileSync(filename, "utf8"), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
}).outputText;
const calculations = new Module(filename, module);
calculations.filename = filename;
calculations.paths = module.paths;
calculations._compile(compiled, filename);
const { convertUnit, calculatePercentage, calculateAge, calculateBmi, imperialToMetric, calculateTip, formatNumber } = calculations.exports;
const close = (actual, expected, epsilon = 1e-8) => assert.ok(Math.abs(actual - expected) < epsilon, `${actual} != ${expected}`);

test("QR: text, URL, and Unicode produce valid PNGs at the selected size", async () => {
  for (const [text, size] of [["Hello ToolNest", 192], ["https://usetoolnest.net/tools", 256], ["مرحبا — café", 512]]) {
    const qr = QRCode.create(text, { errorCorrectionLevel: "M" });
    assert.ok(qr.modules.size >= 21);
    assert.ok(qr.segments.length > 0);
    const png = await QRCode.toBuffer(text, { width: size, margin: 4, errorCorrectionLevel: "M" });
    assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a");
    assert.equal(png.readUInt32BE(16), size);
    assert.equal(png.readUInt32BE(20), size);
    console.log(`QR: ${JSON.stringify(text)} → ${size}×${size} PNG`);
  }
  assert.throws(() => QRCode.create(""), /No input text/);
  assert.throws(() => QRCode.create("x".repeat(10000)));
});

test("Units: all five categories and reversible conversions", () => {
  close(convertUnit(100, "length", "cm", "m"), 1);
  close(convertUnit(10, "weight", "kg", "lb"), 22.0462262185);
  close(convertUnit(32, "temperature", "f", "c"), 0);
  close(convertUnit(3.785411784, "volume", "l", "us-gallon"), 1);
  close(convertUnit(60, "speed", "mph", "kph"), 96.56064);
  close(convertUnit(273.15, "temperature", "k", "c"), 0);
  close(convertUnit(-273.15, "temperature", "c", "k"), 0);
  for (const [value, category, from, to] of [[5, "length", "mi", "km"], [20, "weight", "lb", "kg"], [100, "temperature", "c", "f"]]) {
    close(convertUnit(convertUnit(value, category, from, to), category, to, from), value);
  }
  assert.throws(() => convertUnit(-1, "temperature", "k", "c"), /absolute zero/);
  assert.throws(() => convertUnit(Infinity, "length", "m", "cm"), /finite/);
  assert.throws(() => convertUnit(1, "length", "m", "kg"), /valid units/);
  console.log("Units: 100 cm = 1 m; 32°F = 0°C; 60 mph = 96.56064 km/h (weight/volume also verified)");
});

test("Percentages: all modes, decreases, and zero denominators", () => {
  assert.equal(calculatePercentage("of", 20, 150), 30);
  assert.equal(calculatePercentage("is", 30, 200), 15);
  close(calculatePercentage("adjust", 10, 80, "increase"), 88);
  close(calculatePercentage("adjust", 10, 80, "decrease"), 72);
  assert.equal(calculatePercentage("change", 80, 100), 25);
  assert.equal(calculatePercentage("change", 100, 80), -20);
  assert.throws(() => calculatePercentage("is", 1, 0), /cannot be zero/);
  assert.throws(() => calculatePercentage("change", 0, 10), /greater than zero/);
  assert.throws(() => calculatePercentage("of", Infinity, 10), /finite/);
  console.log("Percentages: 20% of 150 = 30; 30 is 15% of 200; 80 → 100 = +25%; 80 − 10% = 72");
});

test("Age: calendar components, birthdays, leap days, invalid and future dates", () => {
  const normal = calculateAge("2000-05-15", "2026-10-24");
  assert.deepEqual([normal.years, normal.months, normal.days], [26, 5, 9]);
  assert.equal(normal.nextBirthday, "2027-05-15");
  assert.equal(normal.daysUntilBirthday, 203);
  const birthday = calculateAge("2000-05-15", "2026-05-15");
  assert.deepEqual([birthday.years, birthday.months, birthday.days, birthday.daysUntilBirthday], [26, 0, 0, 0]);
  const leap = calculateAge("2000-02-29", "2025-02-28");
  assert.deepEqual([leap.years, leap.months, leap.days, leap.daysUntilBirthday], [25, 0, 0, 0]);
  assert.deepEqual([calculateAge("2026-01-31", "2026-02-28").months, calculateAge("2026-01-31", "2026-02-28").days], [1, 0]);
  assert.throws(() => calculateAge("2025-02-29", "2026-10-24"), /real calendar/);
  assert.throws(() => calculateAge("2026-10-25", "2026-10-24"), /future/);
  assert.throws(() => calculateAge("", "2026-10-24"), /complete/);
  console.log("Age: 2000-05-15 at 2026-10-24 = 26y 5m 9d, next birthday in 203 days; birthday/leap-day cases verified");
});

test("BMI: metric, imperial, categories, and invalid measurements", () => {
  const metric = calculateBmi(70, 175);
  close(metric.bmi, 22.8571428571);
  assert.equal(metric.category, "Healthy weight");
  const high = calculateBmi(95, 170);
  close(high.bmi, 32.8719723183);
  assert.equal(high.category, "Obesity");
  const converted = imperialToMetric(150, 5, 6);
  close(converted.weightKg, 68.0388555);
  close(converted.heightCm, 167.64);
  close(calculateBmi(converted.weightKg, converted.heightCm).bmi, 24.2103849738);
  assert.equal(calculateBmi(18.5, 100).category, "Healthy weight");
  assert.equal(calculateBmi(25, 100).category, "Overweight");
  assert.equal(calculateBmi(30, 100).category, "Obesity");
  assert.throws(() => calculateBmi(70, 0), /greater than zero/);
  assert.throws(() => calculateBmi(-1, 175), /greater than zero/);
  assert.throws(() => imperialToMetric(150, 5, 12), /inches/);
  console.log("BMI: 70 kg/175 cm = 22.86; 95 kg/170 cm = 32.87; 150 lb/5 ft 6 in ≈ 24.21");
});

test("Tips: ordinary splits, exact cent allocation, zero and invalid input", () => {
  const ordinary = calculateTip(100, 15, 4);
  assert.equal(ordinary.tip, 15);
  assert.equal(ordinary.total, 115);
  assert.equal(ordinary.perPerson, 28.75);
  const uneven = calculateTip(10, 0, 3);
  assert.equal(uneven.baseShare, 3.33);
  assert.equal(uneven.higherShare, 3.34);
  assert.equal(uneven.extraPeople, 1);
  assert.equal(uneven.lowerPeople, 2);
  close(uneven.higherShare * uneven.extraPeople + uneven.baseShare * uneven.lowerPeople, uneven.total);
  const custom = calculateTip(64, 12.5, 3);
  assert.equal(custom.tip, 8);
  assert.equal(custom.total, 72);
  assert.equal(custom.perPerson, 24);
  assert.equal(calculateTip(0, 15, 2).total, 0);
  assert.throws(() => calculateTip(10, 15, 0), /whole number/);
  assert.throws(() => calculateTip(10, 15, 1.5), /whole number/);
  assert.throws(() => calculateTip(-10, 15, 2), /negative/);
  assert.throws(() => calculateTip(10, Infinity, 2), /finite/);
  console.log("Tips: 100 + 15%, four people = 28.75 each; 10/3 = 3.34 + 3.33 + 3.33; 64 + 12.5%, three people = 24 each");
});

test("Display: zero, very small values, and nonfinite results", () => {
  assert.equal(formatNumber(-0), "0");
  assert.equal(formatNumber(0.0000000001), "1.000000e-10");
  assert.throws(() => formatNumber(Infinity), /finite/);
});
