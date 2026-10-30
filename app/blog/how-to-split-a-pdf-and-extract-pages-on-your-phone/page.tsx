import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Split a PDF and Extract Pages",
  description:
    "Extract PDF pages on your phone with clear page ranges, choose combined or separate downloads, and check the result without uploading your document.",
};

export default function SplitPdfPhoneGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
        &larr; Back to Blog
      </Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-gradient-to-r from-indigo-400 to-violet-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Document productivity
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          How to Split a PDF and Extract Pages on Your Phone
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Save just the pages you need, keep the original, and review your
          download before sharing it.
        </p>
      </div>
      <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Decide what the recipient actually needs</h2>
          <p className="mt-3">
            A long PDF often contains more than the person receiving it needs:
            an entire course pack instead of one worksheet, or a complete
            application bundle instead of its supporting letter. Extracting
            pages creates a smaller document containing your selection while
            leaving the source unchanged. Before starting, check whether the
            recipient needs a continuous section, scattered pages, or individual
            files. Read any submission instructions about filenames and document
            order. A shorter PDF is not automatically the right submission if
            the request specifically asks for the complete original. Keep a
            separate copy of that original so you can recover anything omitted.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Check physical page positions, not printed labels</h2>
          <p className="mt-3">
            Open the source in a PDF reader and identify each page by its
            position in the file. A cover counts as page one even if it has
            no printed number. A report with introductory pages might print
            “1” on the fourth physical page. The splitter uses physical
            positions, starting at one, rather than the document’s printed
            labels. Write down the positions you need before switching back
            to the browser. If the reader displays custom page labels, use
            its thumbnails or position indicator to confirm your count. This
            small check prevents extracting the right-looking numbers from
            the wrong part of the document.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Select your PDF and confirm the page count</h2>
          <p className="mt-3">
            Open the{" "}
            <Link href="/tools/split-pdf" className="font-semibold text-brand-600 hover:underline">
              Split PDF tool
            </Link>{" "}
            in your phone’s browser and choose one PDF through the file picker.
            Wait for the page count to appear before entering your selection.
            The chosen document is read and processed on your device, not
            uploaded to a conversion server. The website still loads over the
            internet; local processing does not promise that every part of the
            site works offline. If your file lives in a cloud drive, your
            phone may download it from that provider first. Compare the
            displayed count with your reader so you know you selected the
            intended file, particularly when several versions have similar names.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Enter ranges with a predictable order</h2>
          <p className="mt-3">
            Use commas to separate selections and a hyphen for an inclusive
            range. For example, “1-3, 5, 8-10” selects pages one through three,
            page five, and pages eight through ten. You can also enter
            individual numbers. Selections follow the order you enter, so
            “5, 1-3” puts page five first in a combined result. Keep every
            position within the displayed page count. Reversed ranges such
            as “7-4” are rejected, as are repeated or overlapping pages.
            Instead of “1-3, 3-5”, enter “1-5”. Remove a trailing comma if
            it leaves an empty selection after your last number.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Choose a combined document or separate pages</h2>
          <p className="mt-3">
            Choose one combined PDF when the selected pages belong together,
            such as a chapter or an application attachment. Choose separate
            PDFs when each selected page needs its own file. In separate
            mode, a range does not become one document per range: every
            selected page gets an individual PDF and its own download link.
            That distinction matters if you need several multi-page sections.
            For those, extract one section at a time in combined mode, saving
            each result before changing the selection. Confirm the output mode
            before starting so you do not create many individual files when
            you intended to send one attachment.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Download before leaving the browser tab</h2>
          <p className="mt-3">
            Start the extraction and wait for the download links. Tap each
            required link and locate the saved result in your browser’s
            downloads list or your phone’s Files app. A download link on
            the page is not the same as a file already saved to storage.
            Keep the tab open until you have checked the downloads. Changing
            the selection, choosing another source, or leaving the page can
            remove the temporary links. Give the saved file a meaningful
            name that identifies the section without exposing unnecessary
            personal details. For separate pages, check that you downloaded
            every file you plan to send.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Handle locked or unreadable sources carefully</h2>
          <p className="mt-3">
            An encrypted PDF cannot be extracted by this tool, even if a
            different reader opens it using a remembered password. The
            splitter does not bypass document protection. If you are
            authorized, use a trusted PDF application to create an unlocked
            copy through its supported controls, or ask the sender for an
            appropriate version. An invalid-file error may indicate an
            incomplete download or a file that is not really a PDF.
            Reopen the original and, when necessary, retrieve it again from
            its legitimate source. Renaming another file type with a PDF
            extension will not convert it into a valid document.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Know what extraction does not preserve or fix</h2>
          <p className="mt-3">
            Page extraction does not improve blurry scans, recognize text,
            compress large images, or repair damaged content. Document-level
            features such as bookmarks, interactive forms, and digital
            signatures may not survive in the same form. A visible signature
            image is not proof that a cryptographic signature remains valid.
            Preserve signed originals and follow the recipient’s instructions
            when authenticity matters. Extraction is also not a redaction or
            metadata-cleaning workflow. Selecting fewer pages does not
            establish that the new file is safe to disclose. For confidential
            material, use an appropriate redaction process and inspect the
            result rather than relying on page selection alone.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Work within your phone’s available memory</h2>
          <p className="mt-3">
            Local processing uses the browser’s memory, which can be limited
            on a phone. A scanned document with large images may be harder
            to process than a longer text-only PDF. Keep other demanding
            tabs closed and avoid repeatedly pressing the extraction button.
            If the browser becomes unresponsive, try a smaller source or
            use a device with more available memory. Selecting fewer pages
            can reduce the output work, but the browser still needs to
            read the source. Extraction may make a file smaller, yet it
            is not a guaranteed compression method. Check the saved size
            against the receiving service’s attachment limit.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Verify the saved file, then share it deliberately</h2>
          <p className="mt-3">
            Open the downloaded PDF in a reader, not just its thumbnail.
            Check the page count, first and last pages, orientation, and
            the sequence around every gap in your selection. Review form
            values and small print that could be easy to overlook on a
            phone screen. If the result is wrong, return to your original
            and make a fresh extraction instead of overwriting your only
            source. Share through the channel the recipient requested.
            On a borrowed or shared phone, remember that the downloaded
            file remains after you close the website. Remove local copies
            when appropriate and check the device’s downloads folder.
          </p>
        </div>
      </div>
    </article>
  );
}
