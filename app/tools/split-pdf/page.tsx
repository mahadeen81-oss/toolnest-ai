import type { Metadata } from "next";
import ToolIllustration from "@/components/ToolIllustration";
import { getToolBySlug } from "@/lib/tools-config";
import SplitPdf from "@/components/tools/SplitPdf";
import ToolGuide from "@/components/tools/ToolGuide";

export const metadata: Metadata = {
  title: "Split PDF",
  description: "Extract selected pages from a PDF in your browser and download them together or separately. Your files stay on your device.",
};

export default function SplitPdfPage() {
  const tool = getToolBySlug("split-pdf");
  const illustration = tool?.illustration;
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <div className="flex items-center gap-4">
        {illustration && <ToolIllustration name={illustration} category={tool?.category} size={72} />}
        <h1 className="text-2xl font-bold text-slate-900">Split PDF</h1>
      </div>
      <p className="mt-2 max-w-2xl text-slate-500">Pick the pages you need, then save them as one document or individual PDFs.</p>
      <p className="mt-6 rounded-3xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm leading-6 text-emerald-900">Your files and text never leave your device. Processing stays in this browser, with no uploads or API calls.</p>
      <div className="mt-8"><SplitPdf /></div>
      <section className="mt-12 rounded-3xl border border-violet-100 bg-white/90 p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-semibold text-slate-900">How to use Split PDF</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">Choose one PDF and wait for its page count to appear. Enter the pages you want as comma-separated numbers and ranges, such as 1-3, 5, 8-10. Ranges include both ends; repeated or overlapping pages are rejected so the result is predictable. Select one combined PDF to keep your chosen pages in the order entered, or separate PDFs to get one download link per page. Choose Split PDF and save the result to your device. Your original remains unchanged, and the file is processed in your browser without uploads or API calls. Page-based copying may not preserve bookmarks, digital signatures, or interactive form behavior, so review the output before relying on it.</p>
        <h3 className="mt-6 font-semibold text-slate-900">Three tips for a clean extract</h3>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm leading-6 text-slate-600">
          <li>Check the displayed page count against your PDF viewer first. Printed page labels can differ from the actual PDF page numbers used here.</li>
          <li>Use commas between page selections and a hyphen for a continuous run. Avoid overlapping ranges, such as 1-4, 4-6, because a page should only be included once.</li>
          <li>Keep a copy of the original document, especially when it contains signatures or fillable fields. Open each downloaded PDF to check its order and contents.</li>
        </ol>
      </section>
      <ToolGuide toolId="split-pdf" />
    </div>
  );
}
