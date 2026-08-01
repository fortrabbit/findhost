---
id: wasmer
name: Wasmer
urls:
  home: https://wasmer.io
  pricing: https://wasmer.io/pricing
  docs: https://docs.wasmer.io/
category: serverless
description: Wasmer runs PHP compiled to WebAssembly at the edge, on a free-forever Hobby plan or $10 a month.
whoManagesOs: provider
useCases:
  - cms
  - api
  - side-project
software:
  - wordpress
  - laravel
  - django
  - nextjs
  - nuxt
  - hugo
  - astro
runtimes:
  - php
persistentStorage: false
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
regions:
  - FR
  - DE
  - CA
  - US
social:
  github: https://github.com/wasmerio
  x: https://twitter.com/wasmerio
  discord: https://discord.gg/rWkMNStrEW
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://docs.wasmer.io/edge/learn/regions', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://wasmer.io', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://docs.wasmer.io/', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://wasmer.io/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://wasmer.io/pricing', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://wasmer.io/pricing', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://wasmer.io/pricing', checkedAt: 2026-07-31 }
figure:
  emoji: 🧩
  color: rgb(103, 126, 208)
  textColor: rgb(235, 237, 255)
  text: PHP at the WASM edge.
ai: co-authored
---

## About Wasmer

Wasmer is a WebAssembly runtime with an edge platform on top. That edge product runs PHP compiled to WASM next to the visitor, and reportedly runs WordPress, Laravel, and Symfony unmodified, with opcode caching making some pages faster than a normal origin. It sits at the experimental edge of serverless. WebAssembly buys near-instant cold starts, and that is the whole pitch.

Two plans are listed: Hobby, "free forever", with one member, automatic CI/CD, 150 GB of bandwidth, a global CDN and 100 compute hours; and Pro at $10 a month. Enterprise and subhosting are quoted. The hosting options named cover WordPress, PHP, Laravel, Django, Next.js, Nuxt, Hugo, Astro and Vite.

The catch is real, and current. Persistent custom filesystem volumes are still on the way. SQLite writes live in memory, not on disk. Anything stateful needs care. Running production PHP on WASM is a promising thing to watch in 2026. Also a young one. It asks the whole stack to think in WebAssembly.
