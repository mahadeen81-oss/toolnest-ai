import type { Metadata } from "next";
import ToolRunner from "@/components/tools/ToolRunner";

export const metadata: Metadata = {
  title: "Product Description Generator",
  description:
    "Create persuasive, ready-to-use product descriptions for Amazon, Noon, Shopify, and other e-commerce listings.",
};

export default function ProductDescriptionGeneratorPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <h1 className="text-2xl font-bold text-slate-900">Product Description Generator</h1>
      <p className="mt-2 max-w-2xl text-slate-500">
        Share a product name and its key details, choose a tone, and create
        benefit-led copy for your e-commerce listing.
      </p>
      <div className="mt-8">
        <ToolRunner
          toolId="product-description-generator"
          fields={[
            {
              id: "product_name",
              label: "Product name",
              type: "text",
              placeholder: "e.g. Insulated stainless steel water bottle",
              required: true,
            },
            {
              id: "features",
              label: "Key features and details",
              type: "textarea",
              placeholder: "Add materials, size, key features, intended uses, and other verified details.",
              required: true,
            },
            {
              id: "tone",
              label: "Tone",
              type: "select",
              options: ["Professional", "Persuasive", "Casual"],
              required: true,
            },
          ]}
        />
      </div>
    </div>
  );
}