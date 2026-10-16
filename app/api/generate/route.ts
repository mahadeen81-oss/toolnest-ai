import { NextRequest, NextResponse } from "next/server";
import { buildPrompt, callGemini, isValidToolId } from "@/lib/gemini";

// Allow enough time for retries when Gemini is busy.
export const maxDuration = 30;

const MAX_ATTEMPTS = 3;
const RETRY_DELAYS_MS = [1000, 2000];

function isRetryableError(err: unknown): boolean {
  const message = err instanceof Error ? err.message : String(err);
  return /\((429|500|502|503|504)\)/.test(message);
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function callGeminiWithRetry(prompt: string): Promise<string> {
  let lastError: unknown;
  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    try {
      return await callGemini(prompt);
    } catch (err) {
      lastError = err;
      console.error(`[/api/generate] attempt ${attempt + 1} failed:`, err);
      if (!isRetryableError(err) || attempt === MAX_ATTEMPTS - 1) {
        break;
      }
      await sleep(RETRY_DELAYS_MS[attempt] ?? 2000);
    }
  }
  throw lastError;
}

// This route runs on the server only. The Gemini API key is read from
// process.env inside lib/gemini.ts and is never sent to the browser.
export async function POST(req: NextRequest) {
  let body: { toolId?: string; inputs?: Record<string, string> };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { toolId, inputs } = body;

  if (!toolId || !isValidToolId(toolId)) {
    return NextResponse.json({ error: "Unknown or missing toolId." }, { status: 400 });
  }

  if (!inputs || Object.keys(inputs).length === 0) {
    return NextResponse.json({ error: "No inputs provided." }, { status: 400 });
  }

  const MAX_INPUT_LENGTH = 8000;
  for (const [key, value] of Object.entries(inputs)) {
    if (typeof value !== "string") {
      return NextResponse.json({ error: `Invalid value for "${key}".` }, { status: 400 });
    }
    if (value.length > MAX_INPUT_LENGTH) {
      return NextResponse.json(
        { error: `"${key}" is too long. Please shorten it and try again.` },
        { status: 400 }
      );
    }
  }

  try {
    const prompt = buildPrompt(toolId, inputs);
    const text = await callGeminiWithRetry(prompt);
    return NextResponse.json({ text });
  } catch (err) {
    console.error("[/api/generate]", err);
    if (isRetryableError(err)) {
      return NextResponse.json(
        { error: "Our AI is busy right now. Please try again in a few seconds." },
        { status: 503 }
      );
    }
    return NextResponse.json(
      { error: "Something went wrong while generating your result. Please try again." },
      { status: 500 }
    );
  }
}
