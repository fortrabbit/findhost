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
entryPriceBand: free-tier
entryPrice: { amount: 25, currency: USD, period: month }
freeTier: permanent
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://nhost.io/pricing', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://nhost.io/pricing', checkedAt: 2026-08-01 }
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

Nhost assembles a backend from open-source parts — PostgreSQL, Hasura for the GraphQL layer, authentication, file storage and serverless functions — and sells it managed. Nhost Run adds a managed container runtime for services the customer writes themselves, which is what makes it a place code runs rather than only a database with an API in front.

Plans are a free Starter with one active project, one gigabyte of database and one of storage; Pro from twenty-five dollars a month with ten gigabytes of database, fifty of storage and automated backups; Team from five hundred and ninety-nine adding SOC 2 Type II and dedicated support; and a custom enterprise tier with SLAs. The stack is open source and can be self-hosted, so the exit is a real one.

The company has taken European recovery-fund financing, which it discloses in its own footer.

## Reservations

Free projects pause after a week of inactivity and are limited to one, so the tier is for something being built rather than something running. Regions are not stated on the pricing page, and the jump from Pro to Team is more than twentyfold for a small team needing a single compliance feature. Runtime detail for Nhost Run is not on the page that sells it.
