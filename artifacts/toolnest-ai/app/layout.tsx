import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "ToolNest AI — Simple AI Tools for Everyday Work",
    template: "%s | ToolNest AI",
  },
  description:
    "ToolNest AI provides practical, easy-to-use AI tools for writing, content creation and productivity — no learning curve required.",
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
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-white text-slate-900 antialiased`}>
        <GoogleAnalytics />
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
