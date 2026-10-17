import type { Metadata } from "next";
import CompressImage from "@/components/tools/CompressImage";

export const metadata: Metadata = {
  title: "Compress Image",
  description: "Compress JPG and PNG images locally into JPEG files. Adjust quality, compare file sizes and savings, and download without uploads.",
};

export default function CompressImagePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Compress Image</h1>
      <p className="mt-2 max-w-2xl text-slate-500">Compare smaller JPEG versions of your JPG or PNG images, with an adjustable quality level and individual downloads.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">Your files and their content never leave your device. Images are processed locally in this browser, with no uploads or API calls.</p>
      <div className="mt-8"><CompressImage /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">How to use Compress Image</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Select one or more JPG or PNG files, choose a quality level, and press
          Compress selected images. Each card shows the original size, new size,
          percentage saved, and a preview of the result. Download images
          individually when you are happy with them. Changing the quality slider
          clears the previous results so you can make a fresh comparison.
          The tool keeps the original pixel dimensions and exports JPEG copies;
          it does not overwrite your source files. All work happens on your device.
        </p>
        <h3 className="mt-6 font-semibold text-slate-900">Three tips for smaller, useful files</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Start around 80% quality, then lower it gradually. Inspect important details at full size before deciding whether the savings are worthwhile.</li>
          <li>Keep transparent logos and crisp screenshots in their original format when transparency or exact edges matter. This tool makes transparent PNG areas white.</li>
          <li>An already optimized picture can become larger after conversion. Check the displayed savings instead of assuming every output is smaller, and keep your original for future edits.</li>
        </ol>
      </section>
    </div>
  );
}
