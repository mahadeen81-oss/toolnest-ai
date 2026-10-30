export type ToolGuideSection =
  | { type: "steps"; title: string; items: string[] }
  | {
      type: "example";
      title: string;
      context: string;
      inputLabel: string;
      input: string;
      outputLabel: string;
      output: string;
      note: string;
    }
  | { type: "tips"; title: string; items: string[] }
  | { type: "limits"; title: string; text: string }
  | {
      type: "faq";
      title: string;
      items: { question: string; answer: string; privacy?: boolean }[];
    };

export type ToolGuideData = {
  title: string;
  introduction: string;
  sections: ToolGuideSection[];
};

export type RelatedToolLink = {
  href: string;
  name: string;
  description: string;
};

export const TOOL_GUIDES: Record<string, ToolGuideData> = {
  "title-generator": {
    title: "A practical guide to choosing a strong title",
    introduction:
      "A title sets expectations before a reader reaches the first paragraph. This tool returns ten options from a topic, offering several ways to frame one subject. Use it when a headline feels vague or a draft needs a clearer angle. Choose the option that accurately describes the finished piece and suits its reader, not the most dramatic wording.",
    sections: [
      {
        type: "steps",
        title: "Build a useful shortlist",
        items: [
          "Describe the subject in Topic and add its reader or situation. “Vegetarian lunches for busy workdays” is clearer than “food.”",
          "Generate the list and compare all ten options for different promises, formats, and details before choosing a favorite.",
          "Keep two or three candidates; reject any that promise an answer or example your finished article does not provide.",
          "Edit in your own voice, verify names and numbers, then read the title aloud without the article beside you.",
        ],
      },
      {
        type: "example",
        title: "Example: give a broad subject a clear angle",
        context:
          "Suppose you are writing a short article for readers who want weekday lunch ideas but have limited time to cook.",
        inputLabel: "Topic entered",
        input: "Vegetarian lunches for busy workdays",
        outputLabel: "One possible title from the list",
        output: "5 Vegetarian Lunch Ideas for Busy Workdays",
        note:
          "This is an illustrative option, not a promise that every generated title will fit. Use a number only when your finished article really contains that many ideas.",
      },
      {
        type: "tips",
        title: "Make the final choice yours",
        items: [
          "Name what readers will learn, compare, or solve; a real question is clearer than a broad topic label.",
          "Choose an accurate promise over “ultimate” or “revolutionary”; strong adjectives add expectations, not useful detail.",
          "If suggestions repeat, add an audience, setting, or format before generating another list.",
          "Check the title in your own layout; the generator cannot preview every search result or social card.",
        ],
      },
      {
        type: "limits",
        title: "What a title suggestion cannot confirm",
        text:
          "The generator cannot verify your article or predict which title readers will prefer. A polished line can still exaggerate or imply evidence you do not have. Check each claim against the finished piece and avoid promising a result it cannot support.",
      },
      {
        type: "faq",
        title: "Questions before you publish",
        items: [
          {
            question: "Should I use the first suggestion?",
            answer:
              "Compare several with your draft, then choose the one that describes its main value most precisely.",
          },
          {
            question: "Will a suggested title improve search ranking?",
            answer:
              "No ranking is guaranteed. Use natural wording and make sure the article answers the topic.",
          },
          {
            question: "What happens to the topic I enter?",
            answer:
              "The topic you enter is sent to Google Gemini to generate title ideas. ToolNest does not create accounts or keep a history of inputs on its pages. Do not include passwords, confidential details, or other sensitive text.",
            privacy: true,
          },
        ],
      },
    ],
  },

  "grammar-checker": {
    title: "A careful editing pass for grammar and punctuation",
    introduction:
      "The Grammar Checker returns a corrected version followed by brief explanations. Use it for a paragraph, email, or draft section when you want another pass on grammar, spelling, and punctuation. Compare each change with your original: the tool can help spot issues, but it cannot decide what you meant or preserve your voice automatically.",
    sections: [
      {
        type: "example",
        title: "Example: check agreement in a sentence",
        context:
          "A plural phrase near a singular subject can distract from the word that controls the verb.",
        inputLabel: "Text to check",
        input: "The report, along with the charts, were sent yesterday.",
        outputLabel: "A possible corrected version",
        output:
          "The report, along with the charts, was sent yesterday.\n\nExplanation: “Was sent” agrees with the singular subject “report.”",
        note:
          "For a real document, check surrounding sentences before deciding whether an edit preserves your intended meaning.",
      },
      {
        type: "steps",
        title: "Review suggestions without losing your voice",
        items: [
          "Paste a passage with complete sentences for context; leave out personal details the checker does not need.",
          "Generate a result and read the corrected version first, watching for changed names, dates, or emphasis.",
          "Compare each edit with your source. Keep clear fixes and restore wording that changes your intent or style.",
          "Apply approved edits to your original, then read the revised passage aloud for awkward rhythm.",
        ],
      },
      {
        type: "tips",
        title: "Keep an editing pass focused",
        items: [
          "Work in short sections so you can compare each edit and keep important transitions in view.",
          "Keep an untouched copy of important work so you can restore wording changed unintentionally.",
          "Include complete sentences; fragments with missing context are harder to assess.",
          "Double-check names, technical terms, quotations, and regional spelling even when a correction looks plausible.",
        ],
      },
      {
        type: "limits",
        title: "Where a grammar check can be mistaken",
        text:
          "The checker may misread dialect, humor, technical terms, or wording that depends on earlier context. It does not verify facts, and its explanation may simplify a subtle rule. Review each change and follow the style guide for your audience.",
      },
      {
        type: "faq",
        title: "Common proofreading questions",
        items: [
          {
            question: "Can I paste a full document?",
            answer:
              "Work in sections for easier review. Each input is limited to 8,000 characters.",
          },
          {
            question: "What if it says there are no errors?",
            answer:
              "That is not proof of perfection. Check facts, names, tone, and context before sharing.",
          },
          {
            question: "Is my draft saved on ToolNest?",
            answer:
              "To suggest corrections, this tool sends your text to Google Gemini. ToolNest offers no accounts and keeps no input history on its pages. Leave out passwords, confidential writing, and sensitive information.",
            privacy: true,
          },
        ],
      },
    ],
  },

  "idea-generator": {
    title: "Turn a loose topic into ideas you can actually use",
    introduction:
      "A useful idea should fit a reader, a format, and the time or resources available. This tool returns ten content or business ideas from a topic. Use it to start a class project, newsletter plan, or small-business brainstorm. Before adopting one, identify who benefits, what it needs, and how you could test it. The list is a prompt for your judgement, not research or a guarantee that an idea will work.",
    sections: [
      {
        type: "steps",
        title: "Give the generator a better starting point",
        items: [
          "Enter a plain-language topic, adding its audience or situation when it matters.",
          "Read all ten ideas and mark the ones that are distinct and relevant to your audience.",
          "For one promising option, note a manageable first step: a question, outline, or small test.",
        ],
      },
      {
        type: "example",
        title: "Example: move from subject to possible projects",
        context:
          "A student can start broadly, then select a manageable direction for a project.",
        inputLabel: "Starting topic",
        input: "Reducing food waste at home",
        outputLabel: "Two illustrative ideas from a ten-item list",
        output:
          "1. Create a weekly “use first” shelf in the refrigerator.\n2. Make a simple meal plan from ingredients already in the pantry.",
        note:
          "These examples are brainstorming prompts, not research findings; check facts and local constraints before acting.",
      },
      {
        type: "faq",
        title: "Questions about using generated ideas",
        items: [
          {
            question: "Does the tool return exactly ten ideas?",
            answer:
              "It requests ten numbered ideas, but responses may differ. Count the list and try again if it is incomplete.",
          },
          {
            question: "Can I use an idea for a business?",
            answer:
              "Check demand, costs, permissions, and relevant professional advice before investing time or money.",
          },
          {
            question: "Are my plans stored after generation?",
            answer:
              "Keep passwords and any confidential or sensitive plans out of your prompt. Your topic is sent to Google Gemini for ideas; ToolNest does not create accounts or keep an input history on its pages.",
            privacy: true,
          },
        ],
      },
      {
        type: "limits",
        title: "What a brainstorm does not establish",
        text:
          "The tool cannot verify originality, local practicality, cost, safety, or competition. It does not check school, workplace, or legal requirements. Verify important details with reliable sources and people familiar with your situation.",
      },
      {
        type: "tips",
        title: "Make a second pass more specific",
        items: [
          "Name a specific audience instead of repeating a broad topic.",
          "Add a real constraint, such as time, materials, space, or format.",
          "Combine suggestions only if the result still solves one clear problem.",
          "Record why you chose an idea and what remains to be checked.",
        ],
      },
    ],
  },

  "text-summarizer": {
    title: "Make a summary that preserves the point",
    introduction:
      "A short summary is useful only when it keeps the details its reader needs. This tool condenses pasted text, usually to under 120 words unless more is needed. Try it on an email thread, article excerpt, or report section. Decide the purpose first: study notes and a briefing for a colleague may need different information.",
    sections: [
      {
        type: "steps",
        title: "Prepare, generate, then compare",
        items: [
          "Copy the relevant section, including a heading or brief context when needed.",
          "Paste it into Text to summarize and select Generate.",
          "Check that the main claim, qualification, decision, and next step survived.",
          "Edit for your reader and restore details whose omission could change the meaning.",
        ],
      },
      {
        type: "example",
        title: "Example: retain a decision and its condition",
        context:
          "An internal note explains a delay and a condition for keeping the new installation date.",
        inputLabel: "Source passage",
        input:
          "Equipment delivery moves from Tuesday to Thursday because a connector has not arrived. Friday installation is possible if it reaches the office by Wednesday afternoon; otherwise, the team will confirm a new date.",
        outputLabel: "Possible short summary",
        output:
          "Delivery moves to Thursday while the team waits for a connector. Friday installation depends on the package arriving by Wednesday afternoon.",
        note:
          "The arrival condition matters as much as the date. Verify both before forwarding the summary.",
      },
      {
        type: "limits",
        title: "What a short summary may leave out",
        text:
          "A summary can omit a caveat, blur disagreement, or turn a tentative claim into a firm one. The model does not know your reader’s priorities or fact-check the source. Verify names, dates, amounts, and recommendations against the full passage.",
      },
      {
        type: "faq",
        title: "Questions from readers and students",
        items: [
          {
            question: "Will the summary always be under 120 words?",
            answer:
              "The prompt usually asks for fewer than 120 words, but the result can vary. Check it against your limit.",
          },
          {
            question: "Can it summarize several documents together?",
            answer:
              "It takes one text input. Summarize sources separately and compare each result with its original before combining them.",
          },
          {
            question: "Does ToolNest keep the source text?",
            answer:
              "Google Gemini receives the passage you submit to produce a summary. ToolNest does not offer accounts, and its pages do not keep a history of your inputs. Please omit passwords and confidential or sensitive material.",
            privacy: true,
          },
        ],
      },
      {
        type: "tips",
        title: "Check the summary for meaning, not just length",
        items: [
          "Check words like “unless,” “may,” and “only if”; removing one can reverse a condition.",
          "For study notes, add a needed definition or example after comparing with the source.",
          "For email threads, confirm the decision, owner, and next step are clear.",
        ],
      },
    ],
  },

  "resume-bullet-generator": {
    title: "Turn job duties into evidence-based resume bullets",
    introduction:
      "A useful resume bullet shows what you did, the scope of the work, and any result you can support. Enter a job title and responsibilities or achievements to draft five to seven numbered bullets. Use it when accurate notes sound like routine duties. Keep your facts nearby: the draft should organize your experience, not invent results. Write only details you can explain from memory or verify with records.",
    sections: [
      {
        type: "example",
        title: "Example: describe the work before polishing it",
        context:
          "This example keeps the supplied workload and task without adding an unsupported outcome.",
        inputLabel: "Role and notes",
        input:
          "Customer service assistant. Answered about 25 customer calls each shift and logged follow-ups.",
        outputLabel: "Possible resume bullet",
        output:
          "Handled about 25 customer calls per shift and recorded follow-up actions.",
        note:
          "Use the number only if you can explain it. Leave out metrics you cannot support.",
      },
      {
        type: "steps",
        title: "Give the tool evidence, not just a job title",
        items: [
          "Enter the role you held in Job Title, using a truthful and recognizable title.",
          "Describe actual duties and include tools, scale, or results only when you know them.",
          "Generate the list and keep bullets relevant to the position; remove repeated or unrelated duties.",
          "Check each verb and figure, then confirm you could explain the bullet in an interview.",
        ],
      },
      {
        type: "tips",
        title: "Strengthen a bullet without inflating it",
        items: [
          "Name your own action; do not imply you led work that you supported as a team member.",
          "Add customer, report, or location counts only when you can support the figures.",
          "Mention relevant tools with the task they helped you complete.",
          "Use the job description to select evidence, never to claim duties you did not perform.",
        ],
      },
      {
        type: "limits",
        title: "What the draft cannot verify for you",
        text:
          "The generator cannot verify your work history, metrics, or confidentiality obligations. It may overstate your role or imply an outcome. Remove unsupported claims and protect employer information.",
      },
      {
        type: "faq",
        title: "Resume questions worth checking",
        items: [
          {
            question: "Should every bullet include a number?",
            answer:
              "No. Include only relevant figures you can explain; a clear duty is better than a guessed metric.",
          },
          {
            question: "Can the tool write my entire resume?",
            answer:
              "It drafts bullets from your role and notes; it does not verify a full work history or application requirements.",
          },
          {
            question: "Are my job details saved?",
            answer:
              "When you ask for bullet suggestions, your details go to Google Gemini. ToolNest has no account creation and keeps no history of submitted inputs on its pages. Avoid passwords, confidential employer information, or sensitive personal text.",
            privacy: true,
          },
        ],
      },
    ],
  },

  "text-rewriter": {
    title: "Change the wording while keeping the meaning",
    introduction:
      "The Text Rewriter offers Professional, Simple, Engaging, and Concise styles. Use it when wording feels too formal, too long, or difficult for its reader. A rewrite is only a suggestion. Decide which facts, names, and commitments must stay unchanged, then compare the output with your source. For announcements or instructions, retain required caveats and confirm the revised text still matches the original.",
    sections: [
      {
        type: "tips",
        title: "Choose a style that fits the situation",
        items: [
          "Choose Professional for workplace text; check it adds no promise or commitment.",
          "Use Simple for direct wording, while keeping necessary qualifications.",
          "Try Engaging for approachable copy; remove humor that does not suit the subject.",
          "Select Concise to trim repetition, then check that deadlines and conditions remain.",
        ],
      },
      {
        type: "example",
        title: "Example: make a long sentence more direct",
        context:
          "The goal is to state the action directly while keeping its reason.",
        inputLabel: "Original wording",
        input:
          "The team made a decision to postpone the launch because several important checks were not finished.",
        outputLabel: "Possible Simple rewrite",
        output:
          "The team postponed the launch because several important checks were not finished.",
        note:
          "If only one kind of check was unfinished, add that detail so the sentence stays precise.",
      },
      {
        type: "steps",
        title: "Make a controlled rewrite",
        items: [
          "Paste complete sentences into Text to rewrite so references and conditions have context.",
          "Choose one style from the menu and focus this pass on a single editing goal.",
          "Generate and compare sentence by sentence, checking people, facts, actions, and certainty.",
          "Copy only accepted wording; read it with surrounding sentences and adjust it to your voice.",
        ],
      },
      {
        type: "faq",
        title: "Before you use a rewritten passage",
        items: [
          {
            question: "Will it preserve my meaning exactly?",
            answer:
              "That is the goal, but wording can shift meaning. Compare names, facts, conditions, and tone with your source.",
          },
          {
            question: "Which style should I choose?",
            answer:
              "Match the audience and purpose. Try another style only after reviewing the first draft.",
          },
          {
            question: "Where does the text go, and is a copy saved?",
            answer:
              "ToolNest does not create user accounts or maintain an input history on its pages. Text Rewriter sends the passage you provide to Google Gemini to produce a new version. Do not paste passwords or confidential or sensitive text.",
            privacy: true,
          },
        ],
      },
      {
        type: "limits",
        title: "What rewriting is not able to decide",
        text:
          "The model cannot judge approved wording or relationship-specific tone. It may remove nuance or make uncertain information sound definite. Keep the original, verify important wording with the right person, and never use a rewrite to change facts or disguise copied work.",
      },
    ],
  },

  "ai-writer": {
    title: "A guide to drafting clear, original writing",
    introduction:
      "AI Writer creates a draft from a topic and tone. Use it when you need a starting paragraph, explainer, or first version to edit. Treat the result as a draft: add your own details, check factual statements, and adjust the wording for its readers.",
    sections: [
      {
        type: "steps",
        title: "Move from topic to a useful first draft",
        items: [
          "Choose one topic and reader instead of asking for several unrelated pieces at once.",
          "Select a suitable tone, generate the draft, and mark sentences that need your own details or evidence.",
          "Edit structure and claims before sharing; keep only lines that match your purpose and voice.",
        ],
      },
      {
        type: "example",
        title: "Example: outline a small reading habit",
        context:
          "A writer wants a friendly opening for a short piece about fitting reading into a busy routine.",
        inputLabel: "Topic and tone",
        input: "Ways to fit reading into a busy day — Friendly",
        outputLabel: "Possible draft passage",
        output:
          "Reading does not need to take an entire evening. A few pages during a break or before bed can make room for a quieter moment. Choose a book you want to read, keep it nearby, and build the habit at a pace that suits you.",
        note:
          "Add your own circumstances or examples instead of presenting general advice as personal experience.",
      },
      {
        type: "tips",
        title: "Make the draft sound like it belongs to you",
        items: [
          "Use the tone menu as a starting signal, then revise phrases that sound unlike you.",
          "Narrow the topic by naming its reader and purpose; “explain this to a first-time renter” gives a clearer direction than “write about housing.”",
          "Replace broad advice with an example you know to be true and are allowed to share.",
          "Check factual claims independently; the tool does not provide sources for them.",
        ],
      },
      {
        type: "limits",
        title: "What a first draft cannot establish",
        text:
          "The generator does not research a topic or know which details are current for your situation. It can produce confident wording that is incomplete or mistaken, and it may add assumptions that were not in your prompt. Verify facts, permissions, names, and dates before using the text.",
      },
      {
        type: "faq",
        title: "Questions about AI Writer",
        items: [
          {
            question: "How long is the generated draft?",
            answer:
              "The prompt asks for about 150 to 300 words. The response can vary, so check its length and trim or expand it yourself.",
          },
          {
            question: "Can it add sources to support claims?",
            answer:
              "It does not research or cite sources. Find reliable references separately and verify each factual statement.",
          },
          {
            question: "What happens to my topic?",
            answer:
              "To generate a draft, Google Gemini receives the topic and tone you enter. ToolNest has no user sign-up, and its pages do not collect earlier prompts into a history. Leave passwords and confidential text out.",
            privacy: true,
          },
        ],
      },
    ],
  },

  "product-description-generator": {
    title: "Write product copy from verified details",
    introduction:
      "A listing should explain what an item is and which details may help a buyer decide. This generator turns a product name and feature list into a draft. Start with accurate specifications, then compare every claim with the product and its marketplace.",
    sections: [
      {
        type: "example",
        title: "Example: translate features into clear listing copy",
        context:
          "A shop owner has confirmed the capacity, material, lid, and carry loop for a reusable bottle.",
        inputLabel: "Product and verified features",
        input:
          "Stainless steel water bottle; 750 ml capacity; screw-top lid; carry loop. Professional tone.",
        outputLabel: "Possible description excerpt",
        output:
          "Carry water in a 750 ml stainless steel bottle with a screw-top lid and carry loop. The loop offers another way to hold it or attach it to a bag, while the capacity and material make the listing easy to compare.",
        note:
          "The output should not imply insulation, leak resistance, or other features unless you provide and verify them.",
      },
      {
        type: "limits",
        title: "Keep marketing language tied to evidence",
        text:
          "The generator cannot inspect a product, confirm its specifications, or check whether a claim meets a marketplace rule. It may overstate a benefit or infer a feature from the name. Review every measurement, compatibility statement, material, safety claim, and warranty against your own product records.",
      },
      {
        type: "steps",
        title: "Prepare a listing draft",
        items: [
          "Enter the product name buyers will recognize, avoiding internal codes unless they appear in the listing.",
          "Add verified features such as dimensions, material, included parts, or intended use; leave uncertain details out.",
          "Choose Professional, Persuasive, or Casual and generate the description.",
          "Compare each sentence with the product and the marketplace rules, then edit for your brand and required format.",
        ],
      },
      {
        type: "faq",
        title: "Product copy questions",
        items: [
          {
            question: "Will the generator verify product claims?",
            answer:
              "No. It works from the details you provide. Confirm specifications and any performance or safety statement before publishing.",
          },
          {
            question: "Can I use the result on any store?",
            answer:
              "Use it as a draft, then check the listing rules, required fields, and style for your specific marketplace.",
          },
          {
            question: "Where do the product details go?",
            answer:
              "Google Gemini receives the product name, details, and tone you enter. ToolNest has no account-creation feature and its pages do not keep an input history. Do not submit passwords or confidential text.",
            privacy: true,
          },
        ],
      },
      {
        type: "tips",
        title: "Give the tool facts it can use responsibly",
        items: [
          "Separate confirmed specifications from opinions so you can audit the wording afterward.",
          "Describe the intended buyer or use case only when it is accurate for the product.",
          "Prefer a concrete feature and its practical relevance over unsupported superlatives.",
          "Remove claims about certifications, reviews, discounts, or compatibility unless you can verify them.",
        ],
      },
    ],
  },

  "social-media-post-generator": {
    title: "Shape a post for its platform and audience",
    introduction:
      "A social post needs a clear point, a suitable voice, and a reason for its reader to care. This tool drafts one post from a topic, platform, and tone. Add real announcement details, check the call to action, and adapt the draft before publishing.",
    sections: [
      {
        type: "tips",
        title: "Give the post a real purpose",
        items: [
          "Decide whether the post should explain, invite, announce, or start a discussion before entering a topic.",
          "Name the intended audience or the detail they need; this helps avoid a generic opening.",
          "Use a tone that fits your account and the subject rather than choosing the boldest option by default.",
        ],
      },
      {
        type: "example",
        title: "Example: announce a project handoff checklist",
        context:
          "A small design team wants a professional LinkedIn post about a checklist it has actually prepared.",
        inputLabel: "Topic, platform, and tone",
        input:
          "A checklist for clearer project handoffs — LinkedIn — Professional",
        outputLabel: "Possible post",
        output:
          "A smoother project handoff starts with shared context. Our checklist helps teams record owners, open questions, and next steps before work changes hands. What detail do you always include in a handoff?",
        note:
          "Use the team wording only if the checklist exists and is ready to share. Replace it with accurate details about your own announcement.",
      },
      {
        type: "faq",
        title: "Before you post",
        items: [
          {
            question: "Does the tool publish to my account?",
            answer:
              "No. It returns text for you to review and post through your own platform account.",
          },
          {
            question: "Will every post include hashtags?",
            answer:
              "The prompt asks for hashtags only when appropriate. Check relevance and current platform conventions before keeping them.",
          },
          {
            question: "What information is sent for a post?",
            answer:
              "The post topic, platform, and tone go to Google Gemini to create the draft. You do not register for a ToolNest account, and the pages provide no saved list of earlier inputs. Keep passwords and confidential text out.",
            privacy: true,
          },
        ],
      },
      {
        type: "steps",
        title: "Turn an idea into a reviewable post",
        items: [
          "Write the subject as one plain sentence and include the key fact or announcement that must stay accurate.",
          "Choose the platform and tone that match the intended account and audience.",
          "Generate the post, then check names, links, dates, offers, and any claim about a product or event.",
          "Adjust line breaks and the call to action for the platform before posting manually.",
        ],
      },
      {
        type: "limits",
        title: "What the draft cannot know about your account",
        text:
          "The generator cannot see your audience, brand guide, previous posts, or live platform rules. It may suggest a tone or call to action that does not fit your organization. Review claims and permissions, and confirm the post works in the context of your account.",
      },
    ],
  },

  "email-reply-generator": {
    title: "Draft a thoughtful reply without missing your point",
    introduction:
      "Email Reply Generator uses an incoming message, your key points, and a tone to suggest a reply body. It can help organize a response when you know what to say but need phrasing. Review the recipient, commitments, and final draft before sending.",
    sections: [
      {
        type: "faq",
        title: "Questions before replying",
        items: [
          {
            question: "Will the tool send the email?",
            answer:
              "No. It drafts a body for you to copy, check, and send from your own email account.",
          },
          {
            question: "Can it decide what I should promise?",
            answer:
              "No. State your intended commitments in Key points and verify dates, names, and obligations before using the draft.",
          },
          {
            question: "How is the message handled?",
            answer:
              "The email and key points you provide are sent to Google Gemini to create a reply. ToolNest offers no accounts; its pages do not keep an input history. Remove passwords and confidential text before submitting.",
            privacy: true,
          },
        ],
      },
      {
        type: "steps",
        title: "Build a reply that says what you intend",
        items: [
          "Paste only the relevant part of the incoming email, keeping enough context to understand the request.",
          "List the points you actually want to include, especially the answer, action, and any timing.",
          "Pick a tone that suits the relationship, then generate a draft.",
          "Check every commitment and detail, add a greeting or sign-off if needed, and send it yourself.",
        ],
      },
      {
        type: "example",
        title: "Example: confirm a deadline clearly",
        context:
          "A colleague asks whether updated workshop notes can be shared before Friday. The reply should confirm a Thursday delivery and offer a useful format.",
        inputLabel: "Message and key points",
        input:
          "Email: “Could you send the updated workshop notes before Friday?” Key points: Thank them, confirm Thursday afternoon, ask whether PDF is useful. Tone: Friendly.",
        outputLabel: "Possible reply body",
        output:
          "Thanks for checking in. I’ll send the updated workshop notes on Thursday afternoon. Would a PDF be useful?",
        note:
          "The reply is intentionally limited to the supplied points; add a greeting or context if the conversation needs it.",
      },
      {
        type: "limits",
        title: "Keep control of the relationship and commitments",
        text:
          "The tool cannot see earlier messages that you did not include, your calendar, or what you are authorized to promise. It may soften a boundary or make an uncertain date sound definite. Compare the draft with the full thread and adjust it before sending.",
      },
      {
        type: "tips",
        title: "Make the inputs easier to review",
        items: [
          "Remove unrelated paragraphs and signatures so the request stays visible.",
          "Write key points as actions or answers instead of broad goals such as “be helpful.”",
          "Use Brief for a concise response, or Formal when the relationship calls for more distance.",
        ],
      },
    ],
  },

  "youtube-script-generator": {
    title: "Plan a video script that sounds natural aloud",
    introduction:
      "A useful video script gives viewers a reason to stay and moves through points in a clear order. This generator drafts spoken narration with an introduction, main points, and conclusion from a topic, duration, and style. Add your examples and footage notes, then read it aloud and adjust the pacing.",
    sections: [
      {
        type: "limits",
        title: "Treat timing and facts as estimates to review",
        text:
          "The selected duration is guidance, not a measured runtime. Speaking pace, pauses, demonstrations, and edits change the final length. The generator also does not research your subject or know which visuals you have. Verify factual claims and time a read-through before recording.",
      },
      {
        type: "steps",
        title: "Set up a script for the video you can make",
        items: [
          "Describe one video topic and the useful takeaway a viewer should leave with.",
          "Choose a target duration and a style that fits both the subject and your delivery.",
          "Review the Introduction, Main Points, and Conclusion; check that the middle answers the opening.",
          "Add real demonstrations or visual notes, then rehearse and revise for breath and pacing.",
        ],
      },
      {
        type: "tips",
        title: "Improve the script before you record",
        items: [
          "Open with a specific viewer question or problem instead of a long channel introduction.",
          "Break complicated explanations into short spoken sentences and define unfamiliar terms.",
          "Use examples you can demonstrate or substantiate; remove claims you cannot support.",
        ],
      },
      {
        type: "example",
        title: "Example: structure a short balcony-gardening video",
        context:
          "A creator is planning an educational video about starting a small balcony herb garden.",
        inputLabel: "Topic, duration, and style",
        input:
          "How to start a small balcony herb garden — 1–3 minutes — Educational",
        outputLabel: "Possible script excerpt",
        output:
          "Introduction: Want to grow herbs on a balcony? First check the light and where a container can sit safely. Main Points: Choose pots with drainage, place them where you can reach them, and label what you plant. Conclusion: Start with herbs you use, then adjust as you learn about your space.",
        note:
          "This illustrative excerpt is not a full script or duration guarantee. Adapt it to the actual space and plants shown.",
      },
      {
        type: "faq",
        title: "Planning a video with a generated script",
        items: [
          {
            question: "Will the script fit the selected duration?",
            answer:
              "The duration guides the draft but does not guarantee runtime. Rehearse it with the intended pauses and demonstrations.",
          },
          {
            question: "Does it include camera directions?",
            answer:
              "The prompt requests spoken narration. Add shot, graphic, and demonstration notes that match your available footage.",
          },
          {
            question: "What does the tool send to Gemini?",
            answer:
              "Your selected topic, duration, and style are sent to Google Gemini for script generation. ToolNest operates without user accounts; its tool pages do not save a log of submitted inputs. Never paste passwords or confidential text.",
            privacy: true,
          },
        ],
      },
    ],
  },
  "cover-letter-generator": {
    title: "Write a specific, evidence-based letter",
    introduction:
      "Turn role details and real experience into a first draft. Add a few relevant facts, edit for the employer and your voice, then verify every sentence before sending.",
    sections: [
      {
        type: "steps",
        title: "Draft in three passes",
        items: [
          "Enter the listing’s job title and, if known, the employer’s name.",
          "Add relevant skills or tasks using facts you can explain.",
          "Choose a tone, generate, and verify each claim against your notes.",
        ],
      },
      {
        type: "example",
        title: "Example: link experience to a role",
        context:
          "A support worker applies for a customer success role and wants to avoid unsupported achievements.",
        inputLabel: "Details",
        input:
          "Answered customer questions, noted recurring issues, and helped train new colleagues.",
        outputLabel: "Possible sentence",
        output:
          "My support experience taught me to listen closely, track recurring concerns, and share useful guidance with teammates.",
        note:
          "Add a measurable result only if you can verify and discuss it.",
      },
      {
        type: "tips",
        title: "Polish before sending",
        items: [
          "Connect one job requirement to a specific task you handled.",
          "Replace broad adjectives with actions from your experience.",
          "Check names, greeting, contact details, and closing.",
        ],
      },
      {
        type: "limits",
        title: "Limits to keep in mind",
        text:
          "The tool cannot verify your history or know what an employer values. It may sound generic or misstate a detail. Confirm every sentence, remove claims you cannot support, and follow the application instructions.",
      },
      {
        type: "faq",
        title: "Letter questions",
        items: [
          {
            question: "Can I send the draft unchanged?",
            answer:
              "Review it first, tailor the opening, and proofread names and claims.",
          },
          {
            question: "What if I do not know the company?",
            answer:
              "Leave the optional field blank and use the listing’s greeting guidance.",
          },
          {
            question: "What happens to my application details?",
            answer:
              "Your job and experience details are forwarded to Google Gemini to create a letter. ToolNest offers no account registration, and this screen has no archive of earlier requests. Leave passwords and confidential employer information out.",
            privacy: true,
          },
        ],
      },
    ],
  },
  "word-counter": {
    title: "Use counts to edit with purpose",
    introduction:
      "Watch the totals while preparing an assignment, application, post, or short response. Different limits measure different things, so match the displayed count to the destination’s instructions and confirm its own rules.",
    sections: [
      {
        type: "example",
        title: "Example: fit a form limit",
        context:
          "A form asks for fewer than 100 words and also sets a character cap.",
        inputLabel: "Sample text",
        input:
          "I scheduled volunteers and sent supply reminders before each event.",
        outputLabel: "Check",
        output:
          "10 words; 67 characters with spaces.",
        note:
          "Check the receiving form too; it may count punctuation or line breaks differently.",
      },
      {
        type: "steps",
        title: "Three steps for a quick count",
        items: [
          "Type or paste the passage; totals update as it changes.",
          "Choose words, either character count, sentences, or paragraphs.",
          "Edit your draft and select Clear before measuring another text.",
        ],
      },
      {
        type: "faq",
        title: "Counting questions",
        items: [
          {
            question: "How does the time estimate work?",
            answer:
              "It uses 200 words per minute; real reading speed varies.",
          },
          {
            question: "Why do counts sometimes differ?",
            answer:
              "Apps may treat hyphens, symbols, and line breaks differently. Follow the receiving form’s count for strict limits.",
          },
          {
            question: "Does counting send text anywhere?",
            answer:
              "Browser-side JavaScript measures your text without routing it through a text service. There is no account step or page for revisiting earlier entries; clear the field on shared devices.",
            privacy: true,
          },
        ],
      },
      {
        type: "tips",
        title: "Use the totals wisely",
        items: [
          "Do not add filler just to approach a maximum.",
          "Use characters with spaces unless instructions say otherwise.",
          "Trim repetition without removing context your reader needs.",
        ],
      },
      {
        type: "limits",
        title: "Counting limitations",
        text:
          "Platforms can treat hyphens, emoji, or languages without spaces differently. Reading time is approximate, and counts cannot tell whether a draft is clear or complete.",
      },
    ],
  },
  "case-converter": {
    title: "Match capitalization to the destination",
    introduction:
      "Convert a heading, label, or phrase, then check the result against its destination. Title-case rules vary, while identifier styles remove spaces and punctuation. Automatic conversion is a starting point, not a style guide. Sentence case often suits paragraphs; uppercase is usually clearer for short labels than long passages.",
    sections: [
      {
        type: "tips",
        title: "Three checks after conversion",
        items: [
          "Keep the original before using a joined identifier format.",
          "Restore preferred casing for names, acronyms, and brands.",
          "Check your publisher’s rules for title capitalization.",
        ],
      },
      {
        type: "steps",
        title: "Convert in three steps",
        items: [
          "Paste text into the field.",
          "Choose a case style and inspect the replacement.",
          "Correct exceptions, then copy or clear the result.",
        ],
      },
      {
        type: "example",
        title: "Example: make a code label",
        context:
          "Turn a report heading into a lower-case identifier.",
        inputLabel: "Input",
        input: "Monthly Sales Report",
        outputLabel: "snake_case",
        output: "monthly_sales_report",
        note:
          "Add any required prefix or special acronym styling afterward.",
      },
      {
        type: "limits",
        title: "Limitations",
        text:
          "The converter does not know brand rules or every language’s conventions. Identifier formats discard punctuation, and automatic capitalization may not suit a name. Compare with the original before using the result.",
      },
      {
        type: "faq",
        title: "Format questions",
        items: [
          {
            question: "Is Title Case universal?",
            answer:
              "No. Apply the capitalization rule required by your publication.",
          },
          {
            question: "Can I restore the original?",
            answer:
              "There is no undo control, so save a copy first.",
          },
          {
            question: "Is a conversion sent to a service?",
            answer:
              "Case changes stay within this browser tab. Copy touches the clipboard only after your click; this utility has no sign-in or record of conversions to browse later.",
            privacy: true,
          },
        ],
      },
    ],
  },
  "image-to-pdf": {
    title: "Turn selected pictures into a PDF",
    introduction:
      "Combine photographed notes, receipts, or scans in one document. Arrange the previews first, then choose A4 or a page fitted to each image for your intended use.",
    sections: [
      {
        type: "example",
        title: "Example: combine receipts",
        context:
          "Three JPG receipts need to be sent as one document.",
        inputLabel: "Files",
        input: "March, April, and May receipts",
        outputLabel: "PDF",
        output: "Three pages in the order shown in the preview list.",
        note:
          "Reorder if needed, then open the file to check readability.",
      },
      {
        type: "tips",
        title: "Before exporting",
        items: [
          "Choose sharp JPG or PNG images; export cannot fix blur.",
          "Use A4 for familiar print pages or Fit to preserve image proportions.",
          "Check order before downloading forms or records.",
        ],
      },
      {
        type: "steps",
        title: "Make a file in three steps",
        items: [
          "Select JPG or PNG images and wait for previews.",
          "Reorder or remove pages, then choose a page size.",
          "Download one PDF and inspect its pages before sharing.",
        ],
      },
      {
        type: "faq",
        title: "Export questions",
        items: [
          {
            question: "Which formats can I select?",
            answer:
              "JPG/JPEG and PNG are supported; other selections are skipped.",
          },
          {
            question: "How are pages ordered?",
            answer:
              "Each image becomes a page in the order shown in the list.",
          },
          {
            question: "Where does image conversion happen?",
            answer:
              "The browser reads the JPG or PNG bytes and jsPDF creates the document here; this tool has no upload step. It also provides no account or file gallery.",
            privacy: true,
          },
        ],
      },
      {
        type: "limits",
        title: "Limitations",
        text:
          "Exporting cannot sharpen a photo or correct perspective. A picture-based PDF is not searchable OCR text, and its size can vary. Use a sharp, high-resolution source when a photo contains small text.",
      },
    ],
  },
  "compress-image": {
    title: "Balance image quality and file size",
    introduction:
      "The tool creates JPEG copies without changing pixel dimensions. Compare each result with its source: a quality setting that suits a photo may harm small text or sharp graphics.",
    sections: [
      {
        type: "limits",
        title: "Know what compression changes",
        text:
          "JPEG is lossy; fine edges can soften, and transparent PNG areas turn white. An already optimized image may grow. Keep the original when transparency or exact pixels matter.",
      },
      {
        type: "steps",
        title: "Compress in three steps",
        items: [
          "Select JPG or PNG files and set the quality slider.",
          "Compress, then compare sizes and inspect each preview.",
          "Adjust quality if needed and download acceptable JPEGs separately.",
        ],
      },
      {
        type: "example",
        title: "Illustrative example: results vary by image",
        context:
          "A 2.4 MB image might produce a 620 KB JPEG at 75% quality; actual results vary by image.",
        inputLabel: "Original",
        input: "2.4 MB photo",
        outputLabel: "Example result",
        output: "620 KB JPEG, about 74% smaller.",
        note:
          "Results depend on image content; inspect detail at full size.",
      },
      {
        type: "tips",
        title: "Practical checks",
        items: [
          "Start near the middle of the slider and inspect detail.",
          "Keep transparent art in PNG; this tool fills clear areas white.",
          "If the output grows, use the source file instead.",
        ],
      },
      {
        type: "faq",
        title: "Compression questions",
        items: [
          {
            question: "Does quality resize the image?",
            answer:
              "No. The canvas keeps the source pixel width and height.",
          },
          {
            question: "Can I keep my original?",
            answer:
              "Yes. The result is a separate JPEG download.",
          },
          {
            question: "Is an image sent to a server?",
            answer:
              "Canvas re-encodes each picture in this browser rather than sending it to a remote processor. No sign-in is involved, and the tool offers no list of past compression jobs.",
            privacy: true,
          },
        ],
      },
    ],
  },
  "merge-pdf": {
    title: "Combine documents in the right order",
    introduction:
      "Collect related documents into one file for review or sharing. The list order determines the output; all pages from each source stay together. Use readable, unlocked PDFs and check the merged copy.",
    sections: [
      {
        type: "steps",
        title: "Merge in three steps",
        items: [
          "Select two or more PDF files; add more if needed.",
          "Reorder the list and remove any incorrect selection.",
          "Merge, download, then review the combined document.",
        ],
      },
      {
        type: "limits",
        title: "Limitations",
        text:
          "Page copying may not preserve bookmarks, signatures, or form behavior. Encrypted, damaged, or unsupported files can fail. Keep originals and inspect the new PDF in a reader.",
      },
      {
        type: "tips",
        title: "Useful habits",
        items: [
          "Place a cover sheet before the main report and appendices.",
          "Open source files first if you suspect damage.",
          "Retain signed originals and documents with important forms.",
        ],
      },
      {
        type: "example",
        title: "Example: project packet",
        context:
          "A student needs a cover sheet, report, and two appendices together.",
        inputLabel: "File order",
        input: "cover, report, appendix A, appendix B",
        outputLabel: "Output",
        output: "One PDF with the four sources in sequence.",
        note:
          "Check section boundaries after export. If the device slows down, merge smaller groups and review each file.",
      },
      {
        type: "faq",
        title: "Merge questions",
        items: [
          {
            question: "Can I reorder the files?",
            answer:
              "Yes. Use the move controls before merging.",
          },
          {
            question: "Why is a password-protected PDF rejected?",
            answer:
              "This tool cannot open encrypted PDFs. If permitted, export an unlocked copy with a trusted PDF app.",
          },
          {
            question: "Where does the merge take place?",
            answer:
              "pdf-lib reads each source in the browser, writes a combined blob, and starts a local download; there is no server submission. The tool has no account gate or saved-file shelf.",
            privacy: true,
          },
        ],
      },
    ],
  },
  "split-pdf": {
    title: "Keep the pages needed for your task",
    introduction:
      "Extract selected pages into one smaller PDF or separate files. Enter numbers from the PDF sequence; printed page labels can differ from the actual order. A range includes both endpoints: 2-4 selects pages 2, 3, and 4.",
    sections: [
      {
        type: "tips",
        title: "Check your selection",
        items: [
          "Use the displayed total; printed labels may start later.",
          "Separate entries with commas and ranges with a hyphen.",
          "Keep the source if signatures or form fields matter.",
        ],
      },
      {
        type: "example",
        title: "Example: select pages",
        context:
          "A 12-page guide has a checklist on pages two, three, and nine.",
        inputLabel: "Page selection",
        input: "2-3, 9",
        outputLabel: "Combined mode",
        output: "One PDF with three pages in the entered order.",
        note:
          "Choose Separate PDFs for one download per page.",
      },
      {
        type: "limits",
        title: "Limitations",
        text:
          "The new PDF may not retain bookmarks, signatures, or interactive fields. Damaged or encrypted files can fail. The source is unchanged; inspect each download before relying on it.",
      },
      {
        type: "steps",
        title: "Extract in three steps",
        items: [
          "Choose a PDF and wait for its page count.",
          "Enter selections, such as 1-3, 5, 8-10, then pick an output mode.",
          "Select Split PDF and open the resulting downloads to verify them.",
        ],
      },
      {
        type: "faq",
        title: "Page extraction questions",
        items: [
          {
            question: "Can I mix ranges and single pages?",
            answer:
              "Yes. Enter 1-3, 5, 8-10; duplicates and overlaps are rejected.",
          },
          {
            question: "What makes a range invalid?",
            answer:
              "Use ascending numbers within the displayed page count.",
          },
          {
            question: "Is the source sent to a backend?",
            answer:
              "pdf-lib reads and extracts pages in the browser; the source is not sent to remote processing. No sign-in or library of earlier extracts is part of this tool.",
            privacy: true,
          },
        ],
      },
    ],
  },
  "remove-duplicate-lines": {
    title: "Remove repeated lines with clear rules",
    introduction:
      "Lists copied from several sources may repeat names or entries. This tool keeps the first match and reports what it removes. Choose rules for case, spaces, blank lines, and ordering.",
    sections: [
      {
        type: "faq",
        title: "List-cleaning questions",
        items: [
          {
            question: "Which duplicate remains?",
            answer:
              "The first match stays; later matches count as duplicates.",
          },
          {
            question: "Will the list be alphabetized?",
            answer:
              "Only when you enable Sort A–Z; otherwise order is preserved.",
          },
          {
            question: "Is the text sent elsewhere?",
            answer:
              "The comparison happens in browser memory as you edit, with no endpoint contact. This utility has no user profile or past-text library; Copy requires your click.",
            privacy: true,
          },
        ],
      },
      {
        type: "steps",
        title: "Clean the list in three steps",
        items: [
          "Paste one entry per line and review the live result.",
          "Choose which case, spacing, and blank-line differences to ignore.",
          "Sort if order is unimportant, then copy or clear the text.",
        ],
      },
      {
        type: "example",
        title: "Example: remove repeated names",
        context:
          "A pasted list repeats one contact and adds spaces around another.",
        inputLabel: "Input",
        input: "Sam Lee\nRita Noor\nSam Lee\n  Rita Noor  ",
        outputLabel: "Trim spaces on",
        output: "Sam Lee\nRita Noor",
        note:
          "The first spelling remains; inspect it before copying.",
      },
      {
        type: "limits",
        title: "Limitations",
        text:
          "Matching uses whole lines, not partial phrases or multi-line records. It cannot know whether differently written names refer to one person. Trimming changes spaces around retained lines; blank lines are counted separately when that option is enabled.",
      },
      {
        type: "tips",
        title: "Choose options carefully",
        items: [
          "Keep case-sensitive matching for codes with meaningful capitals.",
          "Trim spaces when pasted lines may have accidental padding.",
          "Avoid sorting sequences where dates or priority matter.",
        ],
      },
    ],
  },
};

export const TOOL_RELATED_TOOLS: Record<string, RelatedToolLink[]> = {
  "age-calculator": [
    {
      href: "/tools/bmi-calculator",
      name: "BMI Calculator",
      description:
        "Calculate a separate height-and-weight measure; BMI is general information, not medical advice.",
    },
    {
      href: "/tools/tip-split-calculator",
      name: "Tip & Split Calculator",
      description:
        "Estimate per-person costs when planning a birthday or milestone gathering.",
    },
  ],
  "bmi-calculator": [
    {
      href: "/tools/age-calculator",
      name: "Age Calculator",
      description:
        "Calculate calendar age separately from the height-and-weight measurement.",
    },
    {
      href: "/tools/unit-converter",
      name: "Unit Converter",
      description:
        "Convert height or weight units before entering measurements.",
    },
  ],
  "idea-generator": [
    {
      href: "/tools/social-media-post-generator",
      name: "Social Media Post Generator",
      description:
        "Turn a brainstormed topic into platform-specific post drafts.",
    },
    {
      href: "/tools/title-generator",
      name: "Title Generator",
      description:
        "Explore headline angles for an idea you may develop into an article.",
    },
  ],
  "percentage-calculator": [
    {
      href: "/tools/tip-split-calculator",
      name: "Tip & Split Calculator",
      description:
        "Apply a tip rate and divide the resulting bill among a group.",
    },
    {
      href: "/tools/compress-image",
      name: "Compress Image",
      description:
        "Review the percentage saved after compressing an image.",
    },
  ],
  "qr-code-generator": [
    {
      href: "/tools/image-to-pdf",
      name: "Image to PDF",
      description:
        "Combine a QR-code image with other pages in a shareable PDF.",
    },
    {
      href: "/tools/social-media-post-generator",
      name: "Social Media Post Generator",
      description:
        "Draft copy for an event or campaign linked by your QR code.",
    },
  ],
  "tip-split-calculator": [
    {
      href: "/tools/age-calculator",
      name: "Age Calculator",
      description:
        "Check a birthday or milestone date while planning a shared outing.",
    },
    {
      href: "/tools/percentage-calculator",
      name: "Percentage Calculator",
      description:
        "Work out a tip or another percentage before splitting the bill.",
    },
    {
      href: "/tools/unit-converter",
      name: "Unit Converter",
      description:
        "Convert recipe quantities when planning food for a group.",
    },
  ],
  "unit-converter": [
    {
      href: "/tools/bmi-calculator",
      name: "BMI Calculator",
      description:
        "Convert height or weight measures before calculating BMI.",
    },
    {
      href: "/tools/percentage-calculator",
      name: "Percentage Calculator",
      description:
        "Calculate a discount rate or change alongside unit conversions.",
    },
    {
      href: "/tools/tip-split-calculator",
      name: "Tip & Split Calculator",
      description:
        "Estimate the shared meal cost after planning serving quantities.",
    },
  ],
  "social-media-post-generator": [
    {
      href: "/tools/idea-generator",
      name: "Idea Generator",
      description:
        "Find a starting topic before drafting posts for a platform.",
    },
    {
      href: "/tools/qr-code-generator",
      name: "QR Code Generator",
      description:
        "Create a scannable link for an event or resource mentioned in a post.",
    },
  ],
  "title-generator": [
    {
      href: "/tools/idea-generator",
      name: "Idea Generator",
      description:
        "Brainstorm a subject before turning one idea into a headline.",
    },
    {
      href: "/tools/social-media-post-generator",
      name: "Social Media Post Generator",
      description:
        "Draft a social post after settling on its topic and angle.",
    },
  ],
  "image-to-pdf": [
    {
      href: "/tools/qr-code-generator",
      name: "QR Code Generator",
      description:
        "Add a generated QR-code image to a printable or shareable PDF.",
    },
    {
      href: "/tools/merge-pdf",
      name: "Merge PDF",
      description:
        "Combine the finished PDF with other documents.",
    },
  ],
  "compress-image": [
    {
      href: "/tools/percentage-calculator",
      name: "Percentage Calculator",
      description:
        "Calculate or compare percentage changes alongside saved image size.",
    },
    {
      href: "/tools/image-to-pdf",
      name: "Image to PDF",
      description:
        "Compress image files before arranging them into a PDF.",
    },
  ],
};
