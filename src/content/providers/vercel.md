---
id: vercel
name: Vercel
url: https://vercel.com
category: serverless
pricingUrl: https://vercel.com/docs/plans
description: Vercel is a serverless frontend platform. Its official function runtimes do not include PHP, which is available only through a community runtime.
whoManagesOs: provider
useCases:
  - saas
  - ai-app
audience:
  - enterprise
software:
  - nextjs
  - sveltekit
  - nuxt
  - astro
  - remix
social:
  x: https://x.com/vercel
  linkedin: https://linkedin.com/company/vercel
  github: https://github.com/vercel
  youtube: https://youtube.com/@VercelHQ
runtimes:
  - node
  - python
  - ruby
  - go
  - rust
  - docker
persistentStorage: false
pricingModel: credit
entryPriceBand: free-tier
freeTier: permanent
regions:
  - US
  - CA
  - IE
  - GB
  - DE
  - IN
  - SG
  - JP
  - AU
  - BR
supportChannels:
  - email
supportTiering: paid-upgrade
cliTool: official
status: active
checkedAt: 2026-07-31
sources:
  - { field: runtimes, url: 'https://vercel.com/docs/functions/runtimes', checkedAt: 2026-07-31 }
  - { field: persistentStorage, url: 'https://vercel.com/docs/functions/runtimes', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://vercel.com/docs/regions', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://vercel.com/docs/plans', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://vercel.com/docs/plans', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://vercel.com/docs/plans', checkedAt: 2026-07-31 }
  - { field: supportChannels, url: 'https://vercel.com/docs/plans', checkedAt: 2026-07-31 }
  - { field: supportTiering, url: 'https://vercel.com/docs/plans', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://vercel.com/docs/plans', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://vercel.com/docs/plans', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://vercel.com/docs/frameworks', checkedAt: 2026-07-31 }
  - { field: useCases, url: 'https://vercel.com/', checkedAt: 2026-07-31 }
  - { field: social, url: 'https://vercel.com/', checkedAt: 2026-07-31 }
figure:
  emoji: 🔺
  color: rgb(20, 20, 24)
  textColor: rgb(220, 220, 230)
  text: PHP on the frontend cloud.
ai: co-authored
---

## About Vercel

Vercel is a serverless platform for frontend frameworks and functions. The official function runtimes are Node.js, Bun, Python, Rust, Go, Ruby, Wasm and Edge; custom OCI container images can also be deployed through Vercel's own container registry. Functions run in a microVM with a read-only filesystem and a writable `/tmp` of up to 500 MB, and are archived after two weeks without an invocation in production, which lengthens the next cold start by at least a second.

Twenty compute regions sit behind 126 points of presence; functions default to `iad1` in Washington, D.C., and multi-region execution is a Pro and Enterprise feature. Three account plans exist: Hobby is free and permanent but pauses once it exceeds the included allowance; Pro moves to credit-based usage billing with email support and an optional priority upgrade; Enterprise is quoted.

## Reservations

PHP is not an official runtime. Vercel lists `vercel-php` under "community runtimes recommended by Vercel", which means a package maintained outside the company executing PHP inside Vercel's function model. It is actively maintained and current — but the support behind it is a maintainer's time rather than a platform commitment, and nothing in Vercel's plan terms covers it.

The serverless execution model also constrains what a PHP application can do. There is no persistent filesystem beyond `/tmp`, functions have a maximum duration, and long-running or stateful work has to move somewhere else.
