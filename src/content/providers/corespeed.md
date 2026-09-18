---
id: corespeed
name: CoreSpeed
urls:
  home: https://corespeed.io
description: A managed connector service that gives AI agents access to a user's other apps, memory and tools through one MCP endpoint.
status: out-of-scope
criterion: 1
addedAt: 2026-09-18
checkedAt: 2026-09-18
figure:
  emoji: 🔌
  color: rgb(30, 40, 52)
  textColor: rgb(224, 232, 240)
  text: One endpoint that connects an agent to a user's other apps.
ai: authored
---

CoreSpeed sells access to a single MCP endpoint that an AI agent — the [home page](https://corespeed.io) names Claude Code, Codex and Cursor as examples — calls to reach a user's other apps through OAuth, a durable memory store, and a set of built-in tools such as media generation and web search. The [documentation](https://corespeed.io/docs) describes connecting and authorizing existing third-party applications through a dashboard; the command-line tool it lists is for authentication and key management, not for deploying code. A companion domain, `corespeed.app`, serves auto-generated URLs for a separate agent-hosting feature, but the product the company's own pages describe and price is the connector endpoint.

**Criterion 1 fails.** The company's own structured description of itself, published on its home page, calls it a "DeveloperApplication" — a single managed tool a customer connects to and configures, not code the customer deploys and can change. That is a SaaS product, not hosting.

**This reverses if CoreSpeed's separate deployment feature turns out to run customer-written code that the customer can change or export**, which the documentation read here did not establish either way.
