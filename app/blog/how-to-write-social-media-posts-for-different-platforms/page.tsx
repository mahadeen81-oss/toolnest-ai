import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Write Social Media Posts for Different Platforms",
  description:
    "Adapt one message for LinkedIn, Instagram, X, and Facebook with practical examples, accessible formatting, and a platform-aware editing checklist.",
};

export default function SocialMediaPlatformsGuidePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
        &larr; Back to Blog
      </Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Social media writing
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          How to Write Social Media Posts for Different Platforms
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          Keep the facts consistent while adapting the opening, context, and next step for each audience.
        </p>
      </div>
      <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Start with a message brief, not a caption</h2>
          <p className="mt-3">
            Writing for several platforms does not mean inventing several
            different stories. First record the facts, intended audience,
            useful takeaway, and one action you want the reader to
            consider. For a hypothetical repair workshop, your brief
            might say that beginners will learn basic clothing repairs,
            participants should bring one garment, and registration details
            are available on the organizer’s page. Add the confirmed
            date, location, cost, and accessibility information before
            drafting an announcement. Do not make up missing details
            to complete the caption. This shared brief prevents one
            platform promising a free event while another mentions a
            fee. Adapt the presentation only after the underlying
            information is accurate and complete.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Write for the audience you actually have</h2>
          <p className="mt-3">
            Platform labels are a starting point, not a substitute
            for knowing your readers. A professional association’s
            Instagram audience may expect technical detail, while a
            local business’s LinkedIn followers may prefer practical
            community news. Review the questions people ask, the
            context in which they follow you, and the information
            they need to act. Choose one purpose for each post:
            explain, announce, invite, or help someone decide.
            Trying to teach a complete lesson and sell several
            services at once usually creates a confusing caption.
            Keep your organization’s voice recognizable across channels,
            but adjust how much background you provide. Someone
            encountering you for the first time needs more context
            than an established customer.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Use LinkedIn for a relevant professional angle</h2>
          <p className="mt-3">
            On LinkedIn, connect the message to a real work-related
            question when that connection exists. For the fictional
            repair workshop, an organizer could explain how teaching
            beginners changed the way they write instructions: “Our
            first repair lesson started with too many specialist
            terms. We now demonstrate one stitch before naming
            the technique.” This is an illustrative draft, not
            a claim about a real event; publish that story only
            if it reflects your experience. Follow with the lesson
            and relevant workshop details. Use short paragraphs
            rather than a wall of text. Avoid manufacturing a
            dramatic career lesson for a straightforward announcement,
            and do not attribute opinions or achievements to
            colleagues without their agreement.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Let Instagram copy work with the visual</h2>
          <p className="mt-3">
            For an Instagram post, decide what the image or video
            already explains and what the caption needs to add.
            A close-up of a repaired seam could accompany an
            illustrative opening such as “A loose hem does not
            have to end a garment’s useful life.” Follow with
            the workshop’s actual purpose, who it is for, and
            the next step. Do not hide essential details only
            inside an image that may be difficult to read.
            Add meaningful alternative text using the platform’s
            accessibility controls where available, and caption
            spoken video. Check the current options for links
            in your chosen post format instead of assuming a
            pasted address will be clickable. Avoid decorative
            characters that make ordinary words harder to read.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Make X posts stand on their own</h2>
          <p className="mt-3">
            For X, narrow the post to one clear point and
            keep enough context for someone who has not seen
            earlier messages. An illustrative version is: “Learning
            to repair a loose hem? Our beginner workshop covers
            simple hand-sewing techniques. Bring one garment to
            practice on. Check the registration page for the
            confirmed date, location, and booking details.” Add
            the real link when publishing. Check the current
            account and composer limits rather than relying on
            an old character-limit rule. If the explanation
            needs several posts, give the opening a complete
            summary and make the sequence easy to follow.
            Do not split a short announcement into a thread
            merely to delay information or encourage extra clicks.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Give Facebook readers practical local context</h2>
          <p className="mt-3">
            For a Facebook page or community group, useful
            logistical detail may matter more than a clever
            slogan. Explain who can attend, what to bring,
            how to register, and where questions should go.
            An illustrative opening could be “New to sewing?
            This beginner clothing-repair workshop starts with
            basic hand stitches; no machine is needed.”
            Use that wording only if the workshop actually
            works that way. In groups, read the posting
            rules before sharing promotional content. Do not
            imply a moderator or community endorses your
            event without permission. If plans change, update
            the original announcement as well as posting
            an update, so a shared or saved version does
            not continue directing people to outdated details.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Generate variations, then check each one</h2>
          <p className="mt-3">
            The{" "}
            <Link href="/tools/social-media-post-generator" className="font-semibold text-brand-600 hover:underline">
              Social Media Post Generator
            </Link>{" "}
            can help draft alternative wording for a selected
            platform. Provide the actual message and desired tone,
            then compare its output with your brief. Remove
            invented discounts, deadlines, testimonials, or promises.
            An AI draft can also choose a call to action
            that your account cannot support, so inspect links
            and publishing options yourself. This tool sends
            submitted text through the site’s server to an
            AI service. Keep unpublished client plans and
            personal information out unless you have permission
            to share them. Use the draft to explore wording,
            not to outsource the responsibility for what your
            account says. The final version should still sound
            like the person or organization publishing it.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-slate-900">Review the published experience, not just the draft</h2>
          <p className="mt-3">
            Preview each post on a phone when possible.
            Check line breaks, cropped images, captions, link
            destinations, and whether the opening makes sense
            before any text is expanded. Use hashtags only
            when they meaningfully identify the topic; they
            are not a substitute for clear copy. Make sure
            the chosen action leads to a working destination
            with matching details. After publishing, read actual
            questions and correct misunderstandings. Compare results
            against the purpose you chose, rather than judging
            an informational post only by reactions. Platform
            features and audience habits change, so treat
            these examples as editing principles rather than
            guaranteed performance formulas. Consistent facts,
            useful context, and accessible presentation matter
            more than copying the same caption everywhere.
          </p>
        </div>
      </div>
    </article>
  );
}
