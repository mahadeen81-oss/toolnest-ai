import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    default: "Browse Free Tools",
    template: "%s | ToolNest AI",
  },
  description:
    "Browse PDF, image, writing, text, and calculator tools by category. Open a tool to see what it does and how to use it.",
};

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return children;
}
