---
id: vercel
name: Vercel
urls:
  home: https://vercel.com
  pricing: https://vercel.com/docs/plans
  status: https://www.vercel-status.com/
  terms: https://vercel.com/legal/terms
  docs: https://vercel.com/docs
category: serverless
description: Vercel is a serverless frontend platform. Its official function runtimes do not include PHP, which is available only through a community runtime.
ownership: vc-backed
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
  - bun
  - python
  - ruby
  - go
  - rust
  - docker
persistentStorage: false
pricingModel: credit
freeTier: permanent
regions:
  - US
  - CA
  - BR
  - IE
  - GB
  - FR
  - DE
  - SE
  - AE
  - ZA
  - IN
  - SG
  - HK
  - JP
  - KR
  - AU
supportChannels:
  - email
supportTiering: paid-upgrade
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: ownership, url: 'https://vercel.com/about', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://vercel.com/legal/terms', checkedAt: 2026-08-01 }
  - { field: runtimes, url: 'https://vercel.com/docs/functions/runtimes', checkedAt: 2026-07-31 }
  - { field: persistentStorage, url: 'https://vercel.com/docs/functions/runtimes', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://vercel.com/docs/regions', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://vercel.com/docs/plans', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://vercel.com/docs/plans', checkedAt: 2026-07-31 }
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
  text: The frontend cloud.
---

## About Vercel

Vercel is a serverless platform for frontend frameworks and functions. Its official function runtimes cover Node.js, Bun, Python, Go, Ruby and Rust, alongside WebAssembly and an edge runtime; custom OCI container images can also be deployed through Vercel's own container registry. The build system detects and configures common frontend frameworks, among them Next.js, SvelteKit, Nuxt, Astro and Remix.

Functions execute in a microVM with a read-only filesystem and a writable temporary directory, and nothing written there persists. A function runs in one default compute region unless multi-region execution is enabled, which is a paid-plan feature, and functions left uninvoked in production are archived, which lengthens the next cold start.

## Worth knowing

Account plans run from a permanent free tier through usage-billed paid plans to a quoted enterprise tier. The free tier does not bill overage: it pauses once the included allowance is spent. Paid plans move to credit-based usage billing, so the monthly figure follows consumption rather than a fixed rate. Support is by email, with faster handling available as a paid upgrade.
