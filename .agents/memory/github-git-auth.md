---
name: GitHub CLI-backed Git pushes
description: Resolving HTTPS Git push failures when GitHub CLI authentication works.
---

GitHub CLI authentication does not guarantee that Git itself has a credential helper configured. If `gh auth status` and `gh api user` succeed but `git push` rejects credentials, run `gh auth setup-git`, retry the push, and verify the remote branch matches local HEAD. Never print token values.

**Why:** In this Replit workspace, GH_TOKEN authenticated the GitHub CLI, but the Git credential helper was missing until explicitly configured.

**How to apply:** After an authentication-rejected push, verify CLI access without exposing credentials, configure Git with `gh auth setup-git`, retry once, and compare `git rev-parse HEAD` with `git ls-remote`.