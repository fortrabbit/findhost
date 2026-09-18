---
id: kilo-code
name: Kilo Code
urls:
  home: https://kilo.ai
  pricing: https://kilo.ai/pricing
  docs: https://kilo.ai/docs
category:
  - lcnc
description: An open-source AI coding agent, owned by Anaconda, whose app builder deploys the apps it generates.
ownership: subsidiary
parent: anaconda
status: out-of-scope
criterion: 3
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: ownership, url: 'https://kilo.ai', checkedAt: 2026-09-18 }
  - { field: parent, url: 'https://kilo.ai', checkedAt: 2026-09-18 }
  - { field: status, url: 'https://kilo.ai/docs/deploy-secure/deploy', checkedAt: 2026-09-18 }
  - { field: status, url: 'https://kilo.ai/docs/code-with-ai/app-builder', checkedAt: 2026-09-18 }
figure:
  emoji: 🚧
  color: rgb(74, 60, 40)
  textColor: rgb(244, 238, 230)
  text: A coding agent whose own app-hosting keeps changing shape.
ai: authored
---

Kilo Code is an open-source AI coding agent, used as a VS Code and JetBrains extension, a CLI and a cloud runner, and owned by Anaconda. It has offered app hosting in two separate forms. [Kilo Deploy](https://kilo.ai/docs/deploy-secure/deploy) shipped Next.js and static sites to a production URL; its own documentation now carries the notice that "Kilo Deploy is end of life," closed to new users with support ending. [App Builder](https://kilo.ai/docs/code-with-ai/app-builder), a newer chat-based tool for generating Next.js apps, replaces it, deploys with one click from the Kilo dashboard, and lets a user "export code to continue development locally or in Cloud Agents."

**Criterion 3 — public pricing — fails.** App Builder's own documentation says "deployment hosting is included during limited launch period," which is a promotional window rather than a standing price, and does not say what happens to a deployed app, or what it costs to keep one online, once that period ends. Kilo Deploy, the feature that did run to a stable state, is no longer taking new users. Nothing on Kilo's pages prices ongoing hosting for either.

**This reverses once App Builder publishes what hosting costs after the launch period.**
