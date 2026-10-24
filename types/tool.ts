export type FieldType = "text" | "textarea" | "select";

export interface ToolField {
  id: string;
  label: string;
  type: FieldType;
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

export interface ToolMeta {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  icon: string; // simple text/emoji glyph, keeps the bundle light
  illustration?: ToolIllustrationName;
}

export type ToolIllustrationName = "merge-pdf" | "qr-code-generator" | "word-counter"
  | "product-description-generator"
  | "ai-writer"
  | "text-summarizer"
  | "text-rewriter"
  | "social-media-post-generator"
  | "youtube-script-generator"
  | "idea-generator"
  | "title-generator"
  | "resume-bullet-generator"
  | "grammar-checker"
  | "email-reply-generator"
  | "cover-letter-generator"
  | "image-to-pdf"
  | "compress-image"
  | "case-converter"
  | "split-pdf"
  | "remove-duplicate-lines"
  | "password-generator"
  | "unit-converter"
  | "percentage-calculator"
  | "age-calculator"
  | "bmi-calculator"
  | "tip-split-calculator";
