---
id: e2b
name: E2B
urls:
  home: https://e2b.dev
  pricing: https://e2b.dev/pricing
  docs: https://docs.e2b.dev
  terms: https://e2b.dev/terms
category:
  - caas
description: A cloud API that starts isolated Linux microVMs on demand, for an AI agent to run code in.
founded: 2023
hqCountry: US
whoManagesOs: managed
useCases:
  - ai-app
  - api
  - learning
runtimes:
  - python
  - node
  - any
pricingModel: usage-based
priceFrom: xl
entryPrice: { amount: 150, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
apiAvailable: public
cliTool: official
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: founded, url: 'https://e2b.dev/about', checkedAt: 2026-09-18 }
  - { field: hqCountry, url: 'https://e2b.dev/about', checkedAt: 2026-09-18 }
  - { field: category, url: 'https://docs.e2b.dev/sandbox', checkedAt: 2026-09-18 }
  - { field: runtimes, url: 'https://docs.e2b.dev/sandbox', checkedAt: 2026-09-18 }
  - { field: pricingModel, url: 'https://e2b.dev/pricing', checkedAt: 2026-09-18 }
  - { field: priceFrom, url: 'https://e2b.dev/pricing', checkedAt: 2026-09-18 }
  - { field: entryPrice, url: 'https://e2b.dev/pricing', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://e2b.dev/pricing', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://e2b.dev/pricing', checkedAt: 2026-09-18 }
  - { field: apiAvailable, url: 'https://docs.e2b.dev/api-reference', checkedAt: 2026-09-18 }
  - { field: cliTool, url: 'https://docs.e2b.dev/cli', checkedAt: 2026-09-18 }
  - { field: 'self-hosted version', url: 'https://e2b.dev/docs/self-hosting', checkedAt: 2026-09-18 }
figure:
  emoji: 📦
  color: rgb(30, 60, 55)
  textColor: rgb(228, 240, 236)
  text: A Linux machine an agent borrows for an afternoon.
ai: authored
---

E2B is a cloud API that hands an AI agent a Linux microVM to run code in, built on Firecracker. A caller opens a sandbox through the Python or JavaScript SDK, code inside it edits files, runs commands and reaches the network, and the sandbox is paused or destroyed when the task ends. A sandbox can expose a port, so what runs inside is reachable while it lives. The company, legally FoundryLabs, Inc., operates from San Francisco and Prague.

Billing is metered per second of vCPU and per second of memory, on a free tier that starts without a card and a paid tier above it. Enterprise terms cover the [self-hosted version](https://e2b.dev/docs/self-hosting), which runs the same platform inside a customer's own AWS or Google Cloud account.

## Worth knowing

The lifecycle is the thing to read before choosing this: the [sandbox documentation](https://docs.e2b.dev/sandbox) describes a session built around a timeout, a pause and a kill, not an address that keeps answering. A sandbox can be resumed, and it can serve traffic while it runs, but something has to decide to start it. An application meant to answer a request at any hour is a different shape of product from what is sold here.

The free tier caps how many sandboxes run at once and how long a single session lasts, so the ceiling a first experiment meets is concurrency and session length rather than a bill.
