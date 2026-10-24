import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://usetoolnest.net"),
  alternates: { canonical: "./" },
  title: {
    default: "ToolNest AI — Simple AI Tools for Everyday Work",
    template: "%s | ToolNest AI",
  },
  description:
    "ToolNest AI provides practical, easy-to-use AI tools for writing, content creation and productivity — no learning curve required.",
  verification: {
    google: ["50c2tDCABx24CsSNRFUOhDpSZVIf-X8cXXO7Y5cAAD0", "Y50uWs365unHs_qzrDlT7pDAaOrASiElogsE6kdd7EM"],
  },
  openGraph: {
    title: "ToolNest AI — Simple AI Tools for Everyday Work",
    description:
      "Practical AI tools for writing, content creation and productivity.",
    type: "website",
    siteName: "ToolNest AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ToolNest AI — Simple AI Tools for Everyday Work",
    description:
      "Practical AI tools for writing, content creation and productivity.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark")t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";var r=document.documentElement;r.classList.toggle("dark",t==="dark");r.setAttribute("data-theme",t)}catch(e){try{var d=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.classList.toggle("dark",d==="dark");document.documentElement.setAttribute("data-theme",d)}catch(_){}}})();`,
          }}
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5265359294130836"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
