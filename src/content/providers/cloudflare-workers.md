---
id: cloudflare-workers
name: Cloudflare Workers
url: https://workers.cloudflare.com
category: serverless
pricingUrl: https://developers.cloudflare.com/workers/platform/pricing/
description: Cloudflare Workers runs JavaScript, TypeScript, Python and Rust in V8 isolates at the edge. PHP is not among the supported languages.
whoManagesOs: provider
runtimes:
  - python
  - rust
pricingModel: usage-based
entryPriceBand: free-tier
freeTier: permanent
status: active
checkedAt: 2026-07-31
sources:
  - { field: runtimes, url: 'https://developers.cloudflare.com/workers/languages/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://developers.cloudflare.com/workers/platform/pricing/', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://developers.cloudflare.com/workers/platform/pricing/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://developers.cloudflare.com/workers/platform/pricing/', checkedAt: 2026-07-31 }
figure:
  emoji: 🔶
  color: rgb(60, 40, 20)
  textColor: rgb(255, 190, 120)
  text: PHP at the edge, via WASM.
ai: co-authored
---

## About Cloudflare Workers

Cloudflare Workers runs code in V8 isolates on Cloudflare's edge network, close to the visitor and without the cold-start cost of a container. Cloudflare documents first-class support for four languages — JavaScript, TypeScript, Python and Rust — and describes WebAssembly as the route for everything else, naming C, C++, Kotlin and Go as examples.

Two plans exist. The Free plan comes with every account by default and allows 100,000 requests a day with 10 milliseconds of CPU time per invocation. The Paid plan carries a minimum charge of $5 a month and meters requests and CPU time above the included amounts.

## Reservations

PHP is not on Cloudflare's list of supported languages, and there is no first-party route to it. The only path is the community php-wasm project, which compiles PHP to WebAssembly and drives it from JavaScript. That works as a demonstration; it is not a runtime with anyone's support commitment behind it.

The execution model is the deeper constraint. A Worker is scoped to a request, with a CPU-time budget per invocation and no persistent local filesystem — which rules out an application that expects a long-lived process, local file writes or a conventional database connection pool. Workers is designed for edge logic: request rewriting, authentication checks, personalisation ahead of the cache.
