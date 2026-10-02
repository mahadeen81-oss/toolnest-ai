---
name: Gemini generation compatibility
description: Provider-specific compatibility lesson for Gemini generation request settings.
---

Optional thinking controls are not accepted consistently across Gemini model variants; a simple request with an increased output cap is the compatible baseline for direct text generation.

**Why:** The provider returned `INVALID_ARGUMENT` when thinking controls were included, while the same request succeeded after that optional setting was removed.

**How to apply:** Prefer `maxOutputTokens` for length control and only add model-specific thinking fields after confirming that the active provider model accepts them.

The Gemini API `models.list` endpoint confirms models visible to the current API key and their supported generation methods, but it does not report live capacity or availability. Use Google's model catalogue to distinguish stable releases from preview aliases; even a listed stable model can temporarily return high-demand 503 errors.

**Why:** A model being listed and supporting `generateContent` is not a guarantee of current serving capacity.

**How to apply:** Query `models.list` for actual candidates, verify release status in the official catalogue, and state that the model list cannot guarantee a candidate will avoid transient 503s.