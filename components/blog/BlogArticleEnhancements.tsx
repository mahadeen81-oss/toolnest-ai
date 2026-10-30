"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BLOG_ARTICLE_METADATA } from "@/lib/blog-article-metadata";

const artwork: Record<string, string> = {
  product:
    '<path d="M230 115h180l-18 190H248z" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10" stroke-linejoin="round"/><path d="M276 117V92a44 44 0 0 1 88 0v25" fill="none" stroke="#4c1d95" stroke-width="10"/><path d="M276 182h88M276 218h60" stroke="#7c3aed" stroke-width="10" stroke-linecap="round"/><path d="m424 174 12 25 27 4-20 19 5 27-24-13-24 13 5-27-20-19 27-4z" fill="#f59e0b"/>',
  resume:
    '<rect x="228" y="66" width="184" height="230" rx="14" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><circle cx="281" cy="126" r="28" fill="#c4b5fd"/><path d="M246 190c4-30 65-30 70 0M337 105h46M337 137h46M250 226h140M250 260h100" fill="none" stroke="#7c3aed" stroke-width="10" stroke-linecap="round"/>',
  grammar:
    '<rect x="205" y="82" width="230" height="196" rx="22" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><text x="235" y="168" font-size="58" font-family="sans-serif" font-weight="700" fill="#4c1d95">Aa</text><path d="m265 218 22 22 47-52" fill="none" stroke="#10b981" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>',
  prompt:
    '<path d="M205 92h230v155H315l-66 48v-48h-44z" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10" stroke-linejoin="round"/><path d="M250 145h140M250 184h92" stroke="#7c3aed" stroke-width="10" stroke-linecap="round"/><path d="m414 61 9 19 20 9-20 9-9 20-9-20-20-9 20-9z" fill="#f59e0b"/>',
  content:
    '<rect x="182" y="93" width="112" height="174" rx="14" fill="#f5f3ff" stroke="#7c3aed" stroke-width="9"/><rect x="310" y="93" width="148" height="80" rx="14" fill="#eef2ff" stroke="#4f46e5" stroke-width="9"/><rect x="310" y="187" width="148" height="80" rx="14" fill="#ecfeff" stroke="#0891b2" stroke-width="9"/><path d="M204 130h68M204 164h50M330 122h106M330 216h106" stroke="#7c3aed" stroke-width="9" stroke-linecap="round"/>',
  review:
    '<rect x="194" y="82" width="168" height="194" rx="16" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><path d="M226 129h100M226 165h70M226 201h55" stroke="#7c3aed" stroke-width="10" stroke-linecap="round"/><circle cx="382" cy="207" r="48" fill="#fff" stroke="#4c1d95" stroke-width="10"/><path d="m416 242 36 36M359 207l16 16 30-34" fill="none" stroke="#10b981" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>',
  "cover-letter":
    '<rect x="202" y="72" width="170" height="222" rx="14" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><path d="M236 124h100M236 160h100M236 196h78M236 232h65" stroke="#7c3aed" stroke-width="10" stroke-linecap="round"/><path d="M348 225h94v64h-94l-47-32z" fill="#fff" stroke="#4c1d95" stroke-width="9" stroke-linejoin="round"/><path d="m303 257 92 2 47-34" fill="none" stroke="#7c3aed" stroke-width="8" stroke-linejoin="round"/>',
  "image-pdf":
    '<rect x="218" y="77" width="176" height="215" rx="16" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><circle cx="273" cy="128" r="17" fill="#f59e0b"/><path d="m235 218 48-53 34 34 23-23 39 42v36H235z" fill="#a7f3d0" stroke="#0f766e" stroke-width="8" stroke-linejoin="round"/><path d="M263 268h84" stroke="#7c3aed" stroke-width="9" stroke-linecap="round"/>',
  "word-count":
    '<rect x="213" y="63" width="172" height="236" rx="15" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><path d="M245 112h109M245 150h109M245 188h70" stroke="#7c3aed" stroke-width="10" stroke-linecap="round"/><circle cx="368" cy="233" r="48" fill="#ede9fe" stroke="#4c1d95" stroke-width="8"/><text x="341" y="244" font-size="32" font-family="sans-serif" font-weight="700" fill="#4c1d95">123</text>',
  "merge-pdf":
    '<rect x="210" y="70" width="126" height="174" rx="12" fill="#fff" stroke="#7c3aed" stroke-width="9"/><rect x="303" y="112" width="126" height="174" rx="12" fill="#f5f3ff" stroke="#4c1d95" stroke-width="9"/><path d="M245 116h56M338 159h56M338 194h56M338 229h40" stroke="#7c3aed" stroke-width="9" stroke-linecap="round"/><circle cx="300" cy="265" r="34" fill="#fff" stroke="#10b981" stroke-width="8"/><path d="M300 247v36m-18-18h36" stroke="#10b981" stroke-width="8" stroke-linecap="round"/>',
  "compress-image":
    '<rect x="200" y="84" width="240" height="190" rx="18" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><circle cx="265" cy="136" r="19" fill="#f59e0b"/><path d="m220 232 57-61 39 39 39-49 68 71z" fill="#a7f3d0" stroke="#0f766e" stroke-width="8" stroke-linejoin="round"/><path d="M290 62v26m-12-14 12 14 12-14m-12 40V88M350 292v-25m-12 13 12-13 12 13m-12-37v24" fill="none" stroke="#7c3aed" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>',
  case:
    '<rect x="198" y="83" width="244" height="194" rx="20" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><text x="234" y="190" font-size="74" font-family="sans-serif" font-weight="700" fill="#4c1d95">Aa</text><path d="M249 226h142m-22-22 22 22-22 22" fill="none" stroke="#7c3aed" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>',
  "split-pdf":
    '<rect x="196" y="66" width="140" height="208" rx="14" fill="#fff" stroke="#7c3aed" stroke-width="9"/><path d="M224 115h83M224 150h83M224 185h54" stroke="#7c3aed" stroke-width="9" stroke-linecap="round"/><path d="M328 173h45m0 0-22-22m22 22-22 22" fill="none" stroke="#10b981" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><rect x="374" y="111" width="92" height="92" rx="12" fill="#f5f3ff" stroke="#4c1d95" stroke-width="9"/><path d="M394 142h52m-52 29h52" stroke="#7c3aed" stroke-width="8" stroke-linecap="round"/>',
  duplicates:
    '<rect x="193" y="73" width="254" height="218" rx="18" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><path d="M226 120h94M226 160h94M226 200h94M226 240h94" stroke="#7c3aed" stroke-width="10" stroke-linecap="round"/><path d="M354 120h52M354 160h52" stroke="#c4b5fd" stroke-width="10" stroke-linecap="round"/><path d="m357 222 18 18 39-45" fill="none" stroke="#10b981" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>',
  password:
    '<rect x="202" y="151" width="236" height="145" rx="22" fill="#ede9fe" stroke="#4c1d95" stroke-width="10"/><path d="M251 153v-40a69 69 0 0 1 138 0v40" fill="none" stroke="#7c3aed" stroke-width="13"/><circle cx="320" cy="215" r="17" fill="#4c1d95"/><path d="M320 230v31" stroke="#4c1d95" stroke-width="11" stroke-linecap="round"/><circle cx="270" cy="326" r="6" fill="#7c3aed"/><circle cx="320" cy="326" r="6" fill="#7c3aed"/><circle cx="370" cy="326" r="6" fill="#7c3aed"/>',
  email:
    '<rect x="192" y="94" width="256" height="178" rx="19" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><path d="m204 118 116 89 116-89M204 253l78-65m154 65-78-65" fill="none" stroke="#4c1d95" stroke-width="9" stroke-linejoin="round"/><path d="M396 73h58m0 0-22-22m22 22-22 22" fill="none" stroke="#10b981" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>',
  summary:
    '<rect x="184" y="80" width="155" height="202" rx="15" fill="#fff" stroke="#7c3aed" stroke-width="9"/><path d="M212 122h99M212 157h99M212 192h80M212 227h62" stroke="#7c3aed" stroke-width="9" stroke-linecap="round"/><path d="M350 179h48m0 0-20-20m20 20-20 20" fill="none" stroke="#0f766e" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/><rect x="396" y="111" width="82" height="132" rx="12" fill="#ecfeff" stroke="#0f766e" stroke-width="8"/><path d="M414 151h45m-45 35h45m-45 35h28" stroke="#0f766e" stroke-width="8" stroke-linecap="round"/>',
  video:
    '<rect x="180" y="91" width="280" height="178" rx="20" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><path d="m284 132 94 48-94 48z" fill="#ec4899" stroke="#4c1d95" stroke-width="8" stroke-linejoin="round"/><path d="M205 300h230m-190 0v-15m45 15v-24m45 24v-13m45 13v-22" stroke="#7c3aed" stroke-width="9" stroke-linecap="round"/>',
  social:
    '<path d="M191 96h160v119H258l-47 37v-37h-20z" fill="#f5f3ff" stroke="#7c3aed" stroke-width="9" stroke-linejoin="round"/><path d="M286 159h165v111h-32v35l-48-35h-85z" fill="#ecfeff" stroke="#0f766e" stroke-width="9" stroke-linejoin="round"/><path d="M218 144h107m-107 35h76m18 18h107m-107 33h71" stroke="#7c3aed" stroke-width="8" stroke-linecap="round"/>',
  headline:
    '<rect x="190" y="88" width="260" height="202" rx="18" fill="#f5f3ff" stroke="#7c3aed" stroke-width="10"/><path d="M222 135h194" stroke="#4c1d95" stroke-width="17" stroke-linecap="round"/><path d="M222 177h162M222 211h175M222 245h109" stroke="#7c3aed" stroke-width="9" stroke-linecap="round"/><path d="m423 65 9 19 20 9-20 9-9 20-9-20-20-9 20-9z" fill="#f59e0b"/>',
};

function formatDate(value: string) {
  const [year, month, day] = value.split("-").map(Number);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export default function BlogArticleEnhancements({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const slug = pathname?.split("/").filter(Boolean).at(-1) ?? "";
  const details = BLOG_ARTICLE_METADATA[slug as keyof typeof BLOG_ARTICLE_METADATA];

  if (!details) return children;

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 360"><rect x="72" y="26" width="496" height="308" rx="28" fill="#ffffff" stroke="#ddd6fe" stroke-width="8"/>${artwork[details.illustration]}</svg>`;
  const imageSrc = `data:image/svg+xml,${encodeURIComponent(svg)}`;

  return (
    <div className="mx-auto max-w-3xl">
      <header className="px-4 pt-8 sm:px-6">
        <Image
          src={imageSrc}
          alt={details.imageAlt}
          width={960}
          height={540}
          unoptimized
          priority
          className="aspect-video w-full rounded-2xl border border-violet-100 bg-gradient-to-br from-violet-50/80 via-white to-cyan-50/50 object-contain p-3 sm:p-5 dark:border-slate-700 dark:from-slate-900/80 dark:via-slate-800 dark:to-slate-900/50"
        />
        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-600">
          <span>
            By{" "}
            <Link href="/about" className="font-semibold text-brand-600 hover:underline">
              Mohammad almahadeen
            </Link>
          </span>
          <time dateTime={details.publishedAt}>
            Published {formatDate(details.publishedAt)}
          </time>
          <time dateTime={details.updatedAt}>
            Last updated {formatDate(details.updatedAt)}
          </time>
        </div>
      </header>
      {children}
    </div>
  );
}
