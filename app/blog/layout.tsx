import type { ReactNode } from "react";
import BlogArticleEnhancements from "@/components/blog/BlogArticleEnhancements";

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <BlogArticleEnhancements>{children}</BlogArticleEnhancements>;
}
