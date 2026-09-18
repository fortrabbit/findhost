---
id: cognition
name: Cognition
urls:
  home: https://cognition.com
  docs: https://docs.devin.ai
category:
  - paas
description: The company behind Devin, an autonomous coding agent that can publish small apps it builds to a live URL as part of a Devin subscription.
apiAvailable: public
cliTool: official
status: out-of-scope
criterion: 3
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: status, url: 'https://docs.devin.ai/product-guides/deployment-capabilities', checkedAt: 2026-09-18 }
  - { field: apiAvailable, url: 'https://docs.devin.ai', checkedAt: 2026-09-18 }
  - { field: cliTool, url: 'https://devin.ai/desktop', checkedAt: 2026-09-18 }
figure:
  emoji: 🚁
  color: rgb(46, 58, 92)
  textColor: rgb(232, 236, 246)
  text: An agent that can also put its own app online.
ai: authored
---

Cognition sells Devin, an autonomous coding agent that plans, writes and tests code inside a customer's own tools and repositories. Alongside that work, the [deployment capabilities documentation](https://docs.devin.ai/product-guides/deployment-capabilities) describes a narrower feature: Devin can publish a small app it builds from scratch to a live URL, serving a static frontend from `devinapps.com` and a FastAPI backend from Fly.io. The documentation frames this for prototypes, demos and internal tools, not production sites, and it is unavailable to secure-mode and enterprise organizations.

Devin itself has public, self-serve pricing — Free, Pro and Max plans, and a Teams plan billed per seat, all listed on [devin.ai/desktop](https://devin.ai/desktop) without a login. Deployment is not priced separately from that, and the documentation does not say which plans include it or exclude it; it is described purely as a capability of the agent.

**Criterion 3 — public pricing — fails.** What is priced and published is the Devin subscription, not hosting. Nothing on Cognition's pages ties the ability to publish an app to `devinapps.com` to any specific plan or its price, so there is no public price for the hosting itself, only for the agent that can produce it as a side effect.

**This reverses if Cognition publishes a price, or a plan requirement, specifically for keeping a deployed app online.**
