---
id: nhost
name: Nhost
urls:
  home: https://nhost.io
  pricing: https://nhost.io/pricing
category: serverless
description: Open-source backend platform built on PostgreSQL, Hasura GraphQL and serverless functions, with a managed container runtime for the customer's own services.
whoManagesOs: container
useCases:
  - api
  - saas
  - side-project
  - internal-tool
audience:
  - indie-hacker
  - startup
  - smb
  - enterprise
runtimes:
  - node
  - docker
deployMethods:
  - cli
  - git-integration
  - docker-image
managedDatabases:
  - postgres
pricingModel: fixed-tier
priceFrom: md
priceTo: lg
billingPeriods:
  - monthly
entryPrice: { amount: 25, currency: USD, period: month }
freeTier: permanent
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://nhost.io/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://nhost.io/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://nhost.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://nhost.io/pricing', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://nhost.io/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://nhost.io/pricing', checkedAt: 2026-08-01 }
figure:
  emoji: 🧊
  color: rgb(25, 35, 45)
  textColor: rgb(180, 210, 230)
  text: Postgres and GraphQL, assembled.
ai: authored
---

## About Nhost

Nhost assembles a backend from open-source parts — PostgreSQL, Hasura for the GraphQL layer, authentication, file storage and serverless functions — and sells it managed. Nhost Run adds a managed container runtime for services the customer writes themselves, which is what makes it a place code runs rather than only a database with an API in front of it.

Billing is by fixed plan tier rather than metered usage, with the tier setting database size, storage, backup behaviour and support level. The stack is open source and can be self-hosted, so leaving the managed service does not mean rewriting the application.

## Worth knowing

The free tier is a single project that pauses after a stretch of inactivity, which makes it a place to build something rather than to run it. Regions are not stated on the pricing page, and the runtime detail for Nhost Run is documented away from the page that sells it.
