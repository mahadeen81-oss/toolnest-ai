import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers about ToolNest AI: free access, browser-only tools, AI writing, supported files, phone use, privacy, and how to get in touch.",
};

type AnswerPart = string | { label: string; href: string };
type FaqItem = { question: string; answer: AnswerPart[] };

const faqs: FaqItem[] = [
  {
    question: "What is ToolNest AI?",
    answer: [
      "ToolNest AI is a collection of tools for writing and everyday tasks involving PDFs, images, and text. Some tools use AI to generate writing, while others run entirely in your browser to convert files, count words, clean lists, or generate passwords.",
    ],
  },
  {
    question: "Is ToolNest AI free to use?",
    answer: [
      "The tools currently available on ToolNest AI are free to use. You do not need to pay to use them.",
    ],
  },
  {
    question: "Do I need to sign up or create an account?",
    answer: [
      "No sign-up or account is needed to use the current tools. Open a tool, read its instructions, and provide the text or files needed for that task.",
    ],
  },
  {
    question: "How do the browser-only tools handle my files and text?",
    answer: [
      "The browser-only PDF, image, and text utilities process selected files and entered text on your device. Those files and text do not leave your device through these tools: they are not uploaded to a processing server or sent to an AI service. The website itself still loads over the internet. Files you download are saved by your own browser or device, so you control them. We do not store them, and your browser or device may delete them automatically.",
    ],
  },
  {
    question: "How does the Password Generator work?",
    answer: [
      "The Password Generator uses your browser's cryptographic random number generator to create passwords on your device. Passwords are not sent to a server or saved by the tool; the current result stays in page memory. Copying happens only when you choose Copy. Save a password in a trusted password manager if you need to keep it, and remember that clipboard history or synchronization can retain copied text outside the tool.",
    ],
  },
  {
    question: "Do the AI writing tools send my text to an AI service?",
    answer: [
      "Yes. When you submit a request to an AI writing tool, the text you enter is sent through the site's server to an AI service to generate a result. This is different from the browser-only utilities. Avoid submitting confidential or sensitive information unless you are permitted to share it with that service.",
    ],
  },
  {
    question: "Can AI-generated results contain mistakes?",
    answer: [
      "Yes. AI-generated results can be inaccurate, incomplete, or outdated, and may misunderstand your request. Review the facts, wording, tone, and formatting before using or sharing an output. Check important information against reliable sources and seek qualified professional advice when the subject requires it.",
    ],
  },
  {
    question: "Which file types do the PDF and image tools support?",
    answer: [
      "Merge PDF accepts two or more PDF files, and Split PDF accepts one PDF. Image to PDF and Compress Image accept JPG/JPEG and PNG images. These tools do not convert Word documents or other unsupported formats merely because their filenames have been changed. Check each tool's instructions before selecting your files.",
    ],
  },
  {
    question: "Can I use ToolNest AI on my phone?",
    answer: [
      "The pages are designed to be simple to use on phones as well as larger screens. Use a current browser with the features required by the tool. File selection and download controls vary by device, and large files can exceed the memory available to a phone's browser. If processing fails, try a smaller file or a device with more available memory.",
    ],
  },
  {
    question: "What should I do if a PDF cannot be opened or processed?",
    answer: [
      "The PDF tools do not unlock encrypted or password-protected documents. If you have permission, use a trusted PDF application to save an unlocked copy through its supported controls, or ask the sender for a suitable version. An invalid file may be damaged or incompletely downloaded. Keep the original and check that it opens in a PDF reader before trying again.",
    ],
  },
  {
    question: "How can I report a problem or suggest a new tool?",
    answer: [
      "Visit the ",
      { label: "Contact page", href: "/contact" },
      " to report an issue or suggest a tool. Include the tool name, your browser and device, what you expected, and any error message. Do not send passwords, confidential documents, or sensitive personal information when describing a problem.",
    ],
  },
  {
    question: "Where can I find the Privacy Policy and Terms of Service?",
    answer: [
      "Read the ",
      { label: "Privacy Policy", href: "/privacy-policy" },
      " for information about data handling and the ",
      { label: "Terms of Service", href: "/terms-of-service" },
      " for the terms of using the site. Both pages are also linked in the footer.",
    ],
  },
];

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer.map((part) => typeof part === "string" ? part : part.label).join(""),
    },
  })),
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqPage).replace(/</g, "\\u003c"),
        }}
      />
      <h1 className="text-3xl font-bold text-slate-900">Frequently Asked Questions</h1>
      <div className="mt-8 space-y-6 text-slate-600">
        <p>
          Find practical answers about using ToolNest AI and the differences
          between browser-only utilities and AI writing tools.
        </p>
        {faqs.map(({ question, answer }) => (
          <div key={question}>
            <h2 className="font-semibold text-slate-900">{question}</h2>
            <p className="mt-2">
              {answer.map((part, index) => typeof part === "string" ? part : (
                <Link
                  key={index}
                  href={part.href}
                  className="font-semibold text-brand-600 hover:underline"
                >
                  {part.label}
                </Link>
              ))}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
