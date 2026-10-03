import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "10 Common Grammar Mistakes and How to Avoid Them",
  description:
    "Review 10 frequent English grammar mistakes with simple examples and fixes, including commonly confused words and comma splices.",
};

export default function GrammarMistakesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
        &larr; Back to Blog
      </Link>
      <div className="mt-6">
        <span className="inline-block rounded-full bg-gradient-to-r from-rose-400 to-pink-500 px-3 py-1 text-xs font-semibold text-white shadow-sm">
          Grammar &amp; writing
        </span>
        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          10 Common Grammar Mistakes and How to Avoid Them
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-500">
          These quick explanations show how to spot frequent grammar mix-ups
          and make your writing clearer with simple edits.
        </p>
      </div>

      <div className="mt-10 space-y-8 text-base leading-7 text-slate-600">
        <div>
          <h2 className="text-xl font-semibold text-slate-900">1. Your and you’re</h2>
          <p className="mt-3">
            Your shows that something belongs to you; you’re is the contraction
            of you are. The two can sound identical, so check what the sentence
            means. <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;Your going to like this book.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;You’re going to like this book.&rdquo; A useful test is to
            replace the word with you are. If the sentence still works, use
            you’re.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">2. There, their, and they’re</h2>
          <p className="mt-3">
            There points to a place or introduces a statement, their means
            something belongs to them, and they’re means they are.{" "}
            <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;Their leaving there coats over their.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;They’re leaving their coats over there.&rdquo; Pause at each
            word and identify its job: location, ownership, or a shortened
            phrase. That small check catches most mix-ups.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">3. Its and it’s</h2>
          <p className="mt-3">
            It’s means it is or it has. Its is the possessive form, like her or
            his, and does not use an apostrophe.{" "}
            <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;The printer lost it’s connection.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;The printer lost its connection.&rdquo; Try expanding it’s
            into it is. If that replacement does not make sense, use its.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">4. Affect and effect</h2>
          <p className="mt-3">
            Affect is usually a verb meaning to influence; effect is usually a
            noun meaning a result.{" "}
            <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;The new schedule had a positive affect.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;The new schedule had a positive effect.&rdquo; In another
            sentence, &ldquo;The schedule affected attendance&rdquo; uses affect as
            the action. Remember the usual pattern, then check for exceptions
            only when the sentence is unusually formal or technical.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">5. Subject-verb agreement</h2>
          <p className="mt-3">
            A singular subject takes a singular verb, and a plural subject
            takes a plural verb. Extra words between them can hide the subject.{" "}
            <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;The list of supplies are on the desk.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;The list of supplies is on the desk.&rdquo; The subject is
            list, not supplies. Find the main subject first, then match the
            verb to it.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">6. Pronoun agreement</h2>
          <p className="mt-3">
            A pronoun should clearly match the noun it refers to in number and
            person. If the noun is plural, use a plural pronoun.{" "}
            <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;The employees left her badges at reception.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;The employees left their badges at reception.&rdquo; Also
            check that a pronoun has one clear reference. When a sentence could
            point to two people or things, repeat the noun instead of making
            readers guess.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">7. Comma splices</h2>
          <p className="mt-3">
            A comma splice joins two complete sentences with only a comma.
            Give each sentence a proper connection.{" "}
            <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;The train was delayed, we took a taxi.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;The train was delayed, so we took a taxi.&rdquo; You could
            also use a period or a semicolon. A comma alone is not strong
            enough to join two independent clauses.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">8. Apostrophes in plurals</h2>
          <p className="mt-3">
            Apostrophes usually show possession or a contraction, not a
            regular plural.{" "}
            <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;We ordered three sandwich’s.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;We ordered three sandwiches.&rdquo; To show ownership, add
            an apostrophe in the right place: &ldquo;the sandwich’s filling&rdquo;
            belongs to one sandwich, while &ldquo;the sandwiches’ fillings&rdquo;
            belong to several. First decide whether the word is plural or
            possessive.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">9. Fewer and less</h2>
          <p className="mt-3">
            Use fewer with items you can count separately, and less with an
            amount or quantity treated as a whole.{" "}
            <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;There were less chairs in the room.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;There were fewer chairs in the room.&rdquo; By contrast,
            less noise and less time are standard because noise and time are
            amounts in these examples. Ask whether you can count the items one
            by one.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">10. Then and than</h2>
          <p className="mt-3">
            Then refers to time or what happens next. Than compares things.{" "}
            <span className="font-semibold text-slate-900">Incorrect:</span>{" "}
            &ldquo;This route is shorter then the old one.&rdquo;{" "}
            <span className="font-semibold text-slate-900">Correct:</span>{" "}
            &ldquo;This route is shorter than the old one.&rdquo; In a sequence,
            use then: &ldquo;Check the address, then send the letter.&rdquo;
            The letters differ by one, so proofread comparison sentences
            carefully.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Give your writing one final check</h2>
          <p className="mt-3">
            Many grammar errors disappear when you read a sentence slowly and
            check what each word is doing. Look for the subject and verb,
            confirm that pronouns have clear references, and read punctuation
            aloud to hear where ideas should pause. For a quick second pass,
            paste your draft into the{" "}
            <Link href="/tools/grammar-checker" className="font-semibold text-brand-600 hover:underline">
              Grammar Checker
            </Link>{" "}
            to catch common mistakes automatically. Review its suggestions
            before accepting them; context matters, and your judgment helps
            preserve the meaning and voice you intend.
          </p>
        </div>
      </div>
    </article>
  );
}