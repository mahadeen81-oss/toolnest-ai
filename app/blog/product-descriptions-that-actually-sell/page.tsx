import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write Product Descriptions That Actually Sell",
  description:
    "Learn to write persuasive product descriptions by focusing on benefits, sensory details, customer needs, scannable structure, and clear calls to action.",
};

export default function ProductDescriptionsThatSellPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
        &larr; Back to Blog
      </Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-gradient-to-r from-emerald-400 to-teal-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          E-commerce writing
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          How to Write Product Descriptions That Actually Sell
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Practical ways to turn product details into clear, persuasive copy
          that helps shoppers decide whether an item is right for them.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
        <div className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Begin with a product brief, not a sales phrase
          </h2>
          <p className="mt-3">
            Before writing, collect the information a shopper needs to make a
            decision. A small brief prevents attractive wording from outrunning
            the facts:
          </p>
          <dl className="mt-4 space-y-3">
            <div>
              <dt className="font-semibold text-slate-900">What is the item?</dt>
              <dd>Use the correct product name, model, size, and version.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">What is verified?</dt>
              <dd>List confirmed materials, dimensions, included parts, and care details.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">What might a buyer ask?</dt>
              <dd>Note fit, compatibility, setup, delivery, or maintenance questions.</dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-900">What should not be promised?</dt>
              <dd>Record limitations and claims that need evidence before publication.</dd>
            </div>
          </dl>
          <p className="mt-3">
            This brief can be a few notes. Its purpose is to give the writer a
            reliable boundary, not to become another piece of promotional copy.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Lead with what the customer gains</h2>
          <p className="mt-3">
            A product description should help someone picture how an item fits
            into their life. Start with the outcome the product supports, not a
            long list of specifications. A travel mug may have a double-wall
            design, but a shopper may care that it helps keep a drink warm while
            commuting. The feature matters because it creates a benefit. Keep
            the connection honest: explain what the product is designed to do,
            and avoid promising results that the details do not support. A
            useful first sentence quickly answers, &ldquo;Why might this be
            right for me?&rdquo;
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Write for one shopper and one need</h2>
          <p className="mt-3">
            Before drafting, decide who is most likely to use the product and
            what they need to know before buying. A parent comparing lunch
            containers may look for easy cleaning and secure lids; a commuter
            may care more about size and portability. Use the product facts to
            answer those questions directly. You do not need to describe every
            possible buyer in one listing. Clear, relevant details help shoppers
            recognize themselves in the copy, while broad claims such as
            &ldquo;perfect for everyone&rdquo; usually say very little.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Translate features into practical benefits</h2>
          <p className="mt-3">
            Make a quick two-column list: what the product has, and why that
            detail could matter to the customer. For example, a washable cover
            can mean easier cleanup after everyday use; an adjustable strap can
            make a bag more comfortable to carry. Then choose the most useful
            pairings for the description. A feature without context can sound
            like inventory data, while a benefit shows its relevance. If a
            benefit depends on a condition, include that condition. Clear copy
            helps shoppers compare options without asking them to guess what a
            specification means.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Leave a blank when a fact is missing
          </h2>
          <p className="mt-3">
            Product notes are sometimes incomplete. If a dimension, material,
            care instruction, or compatibility detail is missing, ask the
            responsible person or consult an approved source. Do not infer a
            specification from a photograph or from what similar products
            usually include. A careful description can still focus on verified
            benefits while the unanswered detail is checked.
          </p>
          <p className="mt-3">
            This also helps distinguish a benefit from a guarantee. “Designed
            for everyday carrying” describes intended use; “will never wear
            out” is an absolute promise that needs unusually strong support.
            Prefer precise wording tied to the product information you have.
            If a limitation changes how someone should use or maintain an item,
            make that condition easy to find rather than burying it near the end.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Use sensory language carefully</h2>
          <p className="mt-3">
            Specific sensory words make a product easier to imagine. Depending
            on what is known, a description might mention a soft lining, a
            textured grip, a smooth finish, or a light citrus scent. Choose
            details that come from the product itself, not from imagination.
            If a material, flavor, color, or sound is not supplied or verified,
            do not invent it. Sensory language works best when it is precise and
            restrained: one concrete detail can be more convincing than several
            dramatic adjectives. The goal is to help a customer form an accurate
            expectation before the package arrives.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Address hesitation with useful information</h2>
          <p className="mt-3">
            Shoppers often pause because they are unsure about fit, materials,
            setup, compatibility, or care. Anticipate the questions that matter
            for this item and answer them with verified facts. Include size,
            quantity, material, included accessories, or care instructions when
            those details are available. Do not hide limitations or imply a
            product works with something unless compatibility is confirmed.
            This kind of clarity builds confidence and can prevent mismatched
            expectations. It also gives customers a practical reason to choose
            your listing over one that uses only vague praise.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Mini example: turn a verified brief into copy
          </h2>
          <p className="mt-3">
            Imagine a product sheet confirms that a tote is made from cotton
            canvas, has two shoulder straps, and includes an inside pocket. A
            concise draft could say:
          </p>
          <p className="mt-3 rounded-lg border border-slate-200 p-4">
            “Carry everyday essentials in a cotton canvas tote with two
            shoulder straps and an inside pocket for keeping small items
            separate.”
          </p>
          <p className="mt-3">
            The sample uses only the facts in the brief. It does not claim a
            carrying capacity, a particular weight, or a cleaning method because
            none was supplied. If a seller later confirms dimensions or care
            instructions, those details can be added where they help shoppers
            compare. If they remain unknown, leave them out and answer the
            questions the available information can support.
          </p>
          <p className="mt-3">
            This is also a useful review exercise: underline each claim in the
            draft and point to the source detail that supports it. If a phrase
            has no source, rewrite it or remove it before the listing goes live.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Make the description easy to scan</h2>
          <p className="mt-3">
            Online shoppers often skim before they commit to reading. Use a
            short opening that names the main benefit, then organize supporting
            information into brief paragraphs or a small set of bullets. Keep
            each sentence focused, place the most important details first, and
            remove repeated claims. A clean structure works on mobile screens
            and makes specifications easier to compare. Follow the marketplace’s
            listing rules, especially for formatting and restricted claims.
            Good scannability does not mean removing useful detail; it means
            making the detail easy to find.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Finish with a clear next step</h2>
          <p className="mt-3">
            A call to action should make the next step obvious without sounding
            pushy. Invite the shopper to choose a size, explore a color, or add
            the item to their basket when that action fits the listing. Before
            publishing, check the copy against the product itself: Are every
            feature and claim accurate? Is the main benefit easy to spot? Can a
            customer quickly find the practical details they need? If you want a
            faster first draft, try the{" "}
            <Link href="/tools/product-description-generator" className="font-semibold text-brand-600 hover:underline">
              Product Description Generator
            </Link>{" "}
            with your verified product details and preferred tone. Edit its
            suggestions to match your brand, confirm every claim, and keep the
            final description clear, useful, and true to the item.
          </p>
        </div>

        <div className="rounded-xl border border-slate-200 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Listing check before publication
          </h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Does the first sentence identify the item or its main use?</li>
            <li>Can every feature and benefit be matched to a verified detail?</li>
            <li>Are important size, care, compatibility, or limitation notes easy to find?</li>
            <li>Does the call to action fit the actual next step on the page?</li>
          </ul>
          <p className="mt-3">
            If you use a generator for a first draft, provide verified facts
            and treat its wording as editable material. Publish only after the
            finished description matches the product itself.
          </p>
        </div>
      </div>
    </article>
  );
}