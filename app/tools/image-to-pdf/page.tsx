import type { Metadata } from "next";
import ImageToPdf from "@/components/tools/ImageToPdf";

export const metadata: Metadata = {
  title: "Image to PDF",
  description:
    "Combine and reorder JPG or PNG images into one PDF on your device. Files stay in your browser and are never uploaded.",
};

export default function ImageToPdfPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Image to PDF</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Turn a set of JPG or PNG images into one ordered PDF. Choose A4 pages or
        pages fitted to each image, then download the file.
      </p>
      <div className="mt-8">
        <ImageToPdf />
      </div>

      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">How to use Image to PDF</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Choose one or more JPG or PNG files from your phone or computer. Check
          the previews, move pages up or down until they are in the right order,
          and remove any image you do not need. Select A4 to place each image
          within a standard page, or Fit page to image to make each PDF page match
          its image dimensions. Tap Download one PDF when the list is ready. All
          conversion happens in your browser; the selected files are not sent to
          a server. You can add more images before exporting if a page is missing,
          then review the full order once again.
        </p>
        <h3 className="mt-6 font-semibold text-slate-900">Three tips for a cleaner PDF</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>
            Review the page order before downloading, especially for receipts,
            forms, or multi-page notes.
          </li>
          <li>
            Use sharp, well-lit photos and crop out extra background before
            selecting them so text remains easy to read.
          </li>
          <li>
            Choose A4 for printing or sharing a familiar page size; choose Fit
            page to image when preserving the original proportions matters more.
          </li>
        </ol>
      </section>
    </div>
  );
}
