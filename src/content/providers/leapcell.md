---
id: leapcell
name: Leapcell
urls:
  home: https://leapcell.io
  pricing: https://leapcell.io/pricing
  docs: https://docs.leapcell.io
  terms: https://docs.leapcell.io/term
category:
  - serverless
  - paas
description: A serverless platform that runs apps and APIs from a git repository, with an option to switch a service to a fixed-price persistent server.
hqCountry: US
whoManagesOs: managed
useCases:
  - web-app
  - api
  - background-jobs
audience:
  - solo
  - startup
runtimes:
  - node
  - python
  - go
  - rust
software:
  - express
  - nextjs
  - nuxt
  - astro
  - django
  - flask
  - fastapi
managedDatabases:
  - postgres
deployMethods:
  - git
pricingModel: plan-plus-overage
priceFrom: sm
priceTo: md
entryPrice: { amount: 12.9, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
freeTier: permanent
paymentMethods:
  - card
cdnIncluded: included
testDomain: included
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
figure:
  emoji: 🐇
  color: rgb(35, 45, 90)
  textColor: rgb(225, 230, 250)
  text: A serverless run that can turn into a server.
ai: authored
sources:
  - { field: hqCountry, url: 'https://leapcell.io', checkedAt: 2026-09-18 }
  - { field: hqCountry, url: 'https://docs.leapcell.io/term', checkedAt: 2026-09-18 }
  - { field: whoManagesOs, url: 'https://docs.leapcell.io/overview', checkedAt: 2026-09-18 }
  - { field: useCases, url: 'https://leapcell.io', checkedAt: 2026-09-18 }
  - { field: audience, url: 'https://leapcell.io/pricing', checkedAt: 2026-09-18 }
  - { field: runtimes, url: 'https://leapcell.io', checkedAt: 2026-09-18 }
  - { field: software, url: 'https://leapcell.io', checkedAt: 2026-09-18 }
  - { field: managedDatabases, url: 'https://docs.leapcell.io/postgresql', checkedAt: 2026-09-18 }
  - { field: deployMethods, url: 'https://docs.leapcell.io/service/connect-to-github', checkedAt: 2026-09-18 }
  - { field: pricingModel, url: 'https://leapcell.io/pricing', checkedAt: 2026-09-18 }
  - { field: priceFrom, url: 'https://leapcell.io/pricing', checkedAt: 2026-09-18 }
  - { field: priceTo, url: 'https://leapcell.io/pricing', checkedAt: 2026-09-18 }
  - { field: entryPrice, url: 'https://leapcell.io/pricing', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://leapcell.io/pricing', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://leapcell.io/pricing', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://leapcell.io/pricing', checkedAt: 2026-09-18 }
  - { field: paymentMethods, url: 'https://leapcell.io/pricing', checkedAt: 2026-09-18 }
  - { field: cdnIncluded, url: 'https://leapcell.io', checkedAt: 2026-09-18 }
  - { field: testDomain, url: 'https://docs.leapcell.io/service/domain', checkedAt: 2026-09-18 }
---

Leapcell connects to a GitHub repository and deploys each push as a serverless service, running Node.js, Python, Go or Rust behind a generated `leapcell.dev` subdomain until a custom domain is attached. A managed PostgreSQL database and a Redis-compatible store are available alongside the app. Every service can also be switched to a persistent server with a fixed monthly price instead of metered invocations, and back again, which the [documentation](https://docs.leapcell.io/serverless-vs-persistent/) frames as a way to move off usage billing once traffic is steady.

The company describes itself as based in California, and its [pricing page](https://leapcell.io/pricing) bills a free Hobby tier and two paid, per-seat tiers by a monthly subscription plus metered invocations, compute time and data transfer.

## Worth knowing

Pricing is charged in two parts: the subscription fee at the start of the month, and usage — invocations, GB-hours and data transfer — at the end of it, so the plan price alone understates what a busier service costs.
