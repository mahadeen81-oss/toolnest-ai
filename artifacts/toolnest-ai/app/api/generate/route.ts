import { NextRequest, NextResponse } from "next/server";
import { buildPrompt, callGemini, isValidToolId } from "@/lib/gemini";

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
    const text = await callGemini(prompt);
    return NextResponse.json({ text });
  } catch (err) {
    console.error("[/api/generate]", err);
    return NextResponse.json(
      { error: "Something went wrong while generating your result. Please try again." },
      { status: 500 }
    );
  }
}
