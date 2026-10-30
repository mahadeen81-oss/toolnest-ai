import type { Metadata } from "next";
import MergePdf from "@/components/tools/MergePdf";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";
import ToolGuide from "@/components/tools/ToolGuide";

export const metadata: Metadata = {
  title: "Merge PDF",
  description: "Combine two or more PDFs in your browser. Reorder files and download one merged PDF without uploading your documents.",
};

export default function MergePdfPage() {
  const illustration = getToolBySlug("merge-pdf")?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Merge PDF</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">Arrange two or more PDF files in the order you need, then save one combined document.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">Your files and their text never leave your device. All processing happens in this browser, with no uploads or API calls.</p>
      <div className="mt-8"><MergePdf /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">How to use Merge PDF</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Select at least two PDF files from your phone or computer. You can add
          more files in another selection, move each document up or down, and remove
          anything you do not need. The order shown is the order of the finished
          document; all pages within each original file stay together. Choose Merge
          PDFs, then use the download link when the combined file is ready.
          Your originals remain untouched, and no files are uploaded. Open the
          downloaded PDF to check its page count and contents before sharing it.
        </p>
        <h3 className="mt-6 font-semibold text-slate-900">Three tips for a reliable merge</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Arrange the main document first and supporting material afterward. Use descriptive filenames to make the list easier to review on a small screen.</li>
          <li>Encrypted or damaged files may not open here. Save a valid, unlocked copy in a trusted PDF reader if you have permission to do so.</li>
          <li>Keep original signed or interactive documents separately. Bookmarks, signatures, and form behavior may not carry across a page-based merge, so check the result carefully.</li>
        </ol>
      </section>
      <ToolGuide toolId="merge-pdf" />
    </div>
  );
}
