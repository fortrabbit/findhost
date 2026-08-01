---
id: sliplane
name: Sliplane
urls:
  home: https://sliplane.io
  pricing: https://sliplane.io/pricing
  terms: https://sliplane.io/terms
  docs: https://docs.sliplane.io/
category: paas
description: German Docker hosting that bills for the server rather than the container, so unlimited services can share one machine, with managed Postgres and S3 storage.
hqCountry: DE
whoManagesOs: container
useCases:
  - saas
  - api
  - internal-tool
  - background-jobs
  - side-project
  - ai-app
audience:
  - indie-hacker
  - freelancer
  - startup
  - smb
software:
  - n8n
runtimes:
  - docker
  - any
deployMethods:
  - git-integration
  - docker-image
pricingModel: fixed-tier
entryPriceBand: 5-15
entryPrice: { amount: 9, currency: EUR, period: month }
freeTier: trial
regions:
  - DE
  - US
  - FI
  - SG
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://sliplane.io/pricing', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://sliplane.io/pricing', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://sliplane.io/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://sliplane.io/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://sliplane.io/pricing', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://sliplane.io/terms', checkedAt: 2026-08-01 }
figure:
  emoji: 🛝
  color: rgb(25, 40, 60)
  textColor: rgb(175, 215, 250)
  text: Pay for the box, not the container.
ai: authored
---

## About Sliplane

Sliplane runs Docker containers on servers you rent by the size rather than by the workload — a Starter machine is €9 a month for one vCPU and a gigabyte of memory, and unlimited services can share it with no per-container fee. That inverts the usual platform pricing model, where every additional service adds a line to the bill, and it suits a developer with a dozen small things to run rather than one large one.

Deployment is from git or a container image, with one-click presets for PostgreSQL, MySQL, MongoDB, n8n, Langflow and Metabase. Managed PostgreSQL with point-in-time backups and S3-compatible object storage with no egress fees are sold alongside. Regions are Germany, Finland, Singapore and two in the United States, with prices varying by location.

## Reservations

There is no free tier, only a 48-hour demo server that deletes itself, and managed PostgreSQL has no free option at all. Server-based pricing cuts the other way too: unlimited services on a one-core machine is unlimited in the billing sense only, and capacity planning is back with the customer. The discount structure is layered — monthly billing off the hourly rate, annual off that — so the headline figure depends on the commitment.
