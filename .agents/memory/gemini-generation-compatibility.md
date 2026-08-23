---
name: Gemini generation compatibility
description: Provider-specific compatibility lesson for Gemini generation request settings.
---

Optional thinking controls are not accepted consistently across Gemini model variants; a simple request with an increased output cap is the compatible baseline for direct text generation.

**Why:** The provider returned `INVALID_ARGUMENT` when thinking controls were included, while the same request succeeded after that optional setting was removed.

**How to apply:** Prefer `maxOutputTokens` for length control and only add model-specific thinking fields after confirming that the active provider model accepts them.