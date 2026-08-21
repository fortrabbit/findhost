---
id: wasmer
name: Wasmer
urls:
  home: https://wasmer.io
  pricing: https://wasmer.io/pricing
  docs: https://docs.wasmer.io/
category:
  - serverless
description: WebAssembly runtime company whose edge platform runs applications compiled to WASM, PHP among them, close to the visitor.
ownership: vc-backed
whoManagesOs: managed
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
priceFrom: sm
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
freeTier: permanent
regions:
  - FR
  - DE
  - CA
  - US
cdnIncluded: included
collaboration: team
social:
  github: https://github.com/wasmerio
  x: https://twitter.com/wasmerio
  discord: https://discord.gg/rWkMNStrEW
favorite: true
favoriteNote: A different bet from everyone else here, not a cheaper version of the same one.
status: active
checkedAt: 2026-08-12
cliTool: official
sources:
  - { field: regions, url: 'https://docs.wasmer.io/edge/learn/regions', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://docs.wasmer.io/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://wasmer.io/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://wasmer.io/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://wasmer.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://wasmer.io/pricing', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://wasmer.io/pricing', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://wasmer.io/pricing', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://wasmer.io/pricing', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://wasmer.io', checkedAt: 2026-08-09 }
  - { field: cdnIncluded, url: 'https://wasmer.io/pricing', checkedAt: 2026-08-12 }
  - { field: collaboration, url: 'https://wasmer.io/pricing', checkedAt: 2026-08-12 }
  - { field: ownership, url: 'https://www.ycombinator.com/companies/wasmer', checkedAt: 2026-08-21 }
figure:
  emoji: 🧩
  color: rgb(55, 83, 179)
  textColor: rgb(234, 236, 246)
  text: PHP at the WASM edge.
---

Wasmer is a WebAssembly runtime with an edge platform built on top of it. Applications are compiled to WASM and run next to the visitor, which is what buys the platform its near-instant cold starts. Documented deployment paths cover WordPress and PHP applications such as Laravel, alongside Django and the JavaScript and static-site frameworks Next.js, Nuxt, Hugo and Astro.

Plans are fixed tiers. The entry tier is permanently free and includes automatic CI/CD, a global CDN and metered bandwidth and compute hours; paid tiers sit above it, and enterprise and subhosting arrangements are quoted rather than listed. Edge locations are in Europe and North America.

## Worth knowing

The storage model is the constraint. Persistent custom filesystem volumes are not yet available and SQLite writes live in memory rather than on disk, so anything stateful needs deliberate handling.

Compiling to WebAssembly is a commitment the whole application has to make, and the platform is young enough that the supported surface is still moving.
