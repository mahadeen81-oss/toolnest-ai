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
};
