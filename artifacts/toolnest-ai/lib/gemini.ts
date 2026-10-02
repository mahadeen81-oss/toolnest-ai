/**
 * Server-only helper for calling the Gemini API.
 *
 * IMPORTANT: this file must never be imported from a Client Component
 * ("use client"). It reads process.env.GEMINI_API_KEY, which is only
 * available on the server because it is NOT prefixed with NEXT_PUBLIC_.
 * Next.js keeps un-prefixed env vars out of the client bundle automatically,
 * but this file is an extra safety boundary: only app/api/generate/route.ts
 * should import it.
 */

type ToolId =
  | "ai-writer"
  | "text-summarizer"
  | "text-rewriter"
  | "social-media-post-generator"
  | "youtube-script-generator"
  | "idea-generator"
  | "title-generator"
  | "resume-bullet-generator"
  | "grammar-checker"
  | "email-reply-generator";

export interface GenerateInputs {
  [key: string]: string;
}

/**
 * Builds the prompt sent to Gemini for each tool. Keeping this logic on the
 * server means the "how" of each tool (the prompt engineering) is never
 * visible in client-side JavaScript.
 */
export function buildPrompt(toolId: ToolId, inputs: GenerateInputs): string {
  switch (toolId) {
    case "ai-writer":
      return `You are a professional writer. Write original, well-structured text about the topic below.
Topic: ${inputs.topic}
Tone: ${inputs.tone || "Professional"}
Requirements: 150-300 words, no markdown headers, no placeholder text, ready to publish as-is.`;

    case "text-summarizer":
      return `Summarize the following text into a clear, concise summary that captures the key points.
Keep it under 120 words unless the original text requires more.
Text:
"""
${inputs.text}
"""`;

    case "text-rewriter":
      return `Rewrite the following text in a ${inputs.style || "Professional"} style.
Preserve the original meaning and factual content. Do not add commentary about the rewrite itself.
Text:
"""
${inputs.text}
"""`;

    case "social-media-post-generator":
      return `Write one ${inputs.platform || "general social media"} post about: ${inputs.topic}.
Tone: ${inputs.tone || "Friendly"}.
Follow the typical conventions and length for that platform (e.g. concise for X, more narrative for LinkedIn).
Include relevant hashtags only if appropriate for the platform. No markdown formatting.`;

    case "youtube-script-generator":
      return `Write a structured YouTube video script about: ${inputs.topic}.
Target duration: ${inputs.duration || "5 minutes"}.
Style: ${inputs.style || "Conversational"}.
Structure the script with three clearly labeled sections: Introduction, Main Points, Conclusion.
Write it as spoken narration, not bullet notes.`;

    case "idea-generator":
      return `Generate exactly 10 useful, specific content or business ideas related to: ${inputs.topic}.
Return them as a numbered list from 1 to 10, one idea per line, no extra commentary.`;

    case "title-generator":
      return `Generate exactly 10 engaging, click-worthy but non-clickbait titles for content about: ${inputs.topic}.
Return them as a numbered list from 1 to 10, one title per line, no extra commentary.`;

    case "resume-bullet-generator":
      return `Generate 5-7 strong, achievement-oriented resume bullet points for the job title below, based on the responsibilities or achievements described.
Use action verbs, quantify results where reasonable, keep each bullet to one line, and return the result as a numbered list.
Job title: ${inputs.job_title}
Responsibilities or achievements:
"""
${inputs.responsibilities}
"""`;

    case "grammar-checker":
      return `Check the following text for grammar, spelling, and punctuation errors.
Return the corrected version first, then a short bullet list explaining each change made.
If there are no errors, say so clearly after the original text.
Text:
"""
${inputs.text}
"""`;

    case "email-reply-generator":
      return `Write a clear, well-structured email reply based on the original email and the key points the user wants to communicate.
Tone: ${inputs.tone || "Professional"}.
Do not include a subject line; return only the email body.
Original email:
"""
${inputs.original_email}
"""
Key points to include:
"""
${inputs.key_points}
"""`;

    default:
      throw new Error(`Unknown toolId: ${toolId}`);
  }
}

export async function callGemini(prompt: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  console.info(
    "[gemini] GEMINI_API_KEY length:",
    apiKey?.length ?? 0,
  );
  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY is not set. Add it to .env.local on the server (never in client code)."
    );
  }

  const defaultModel = "gemini-3.7-flash";
  const model = process.env.GEMINI_MODEL || defaultModel;
  const requestBody = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 2048,
    },
  };

  async function requestModel(modelName: string) {
    return fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestBody),
      },
    );
  }

  let response = await requestModel(model);

  if (!response.ok) {
    const errBody = await response.text();
    if (
      response.status === 404 &&
      model !== defaultModel &&
      errBody.includes(defaultModel)
    ) {
      console.info(`[gemini] Retrying with provider-recommended model: ${defaultModel}`);
      response = await requestModel(defaultModel);
    } else {
      throw new Error(`Gemini API error (${response.status}): ${errBody}`);
    }
  }

  if (!response.ok) {
    const errBody = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${errBody}`);
  }

  const data = await response.json();
  const text: string | undefined =
    data?.candidates?.[0]?.content?.parts?.map((p: { text?: string }) => p.text || "").join("");

  if (!text) {
    throw new Error("Gemini returned an empty response.");
  }

  return text.trim();
}

export const VALID_TOOL_IDS: ToolId[] = [
  "ai-writer",
  "text-summarizer",
  "text-rewriter",
  "social-media-post-generator",
  "youtube-script-generator",
  "idea-generator",
  "title-generator",
  "resume-bullet-generator",
  "grammar-checker",
  "email-reply-generator",
];

export function isValidToolId(id: string): id is ToolId {
  return (VALID_TOOL_IDS as string[]).includes(id);
}
