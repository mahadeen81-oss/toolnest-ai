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
}
