---
id: sliplane
name: Sliplane
urls:
  home: https://sliplane.io
  pricing: https://sliplane.io/pricing
  terms: https://sliplane.io/terms
  docs: https://docs.sliplane.io/
category:
  - paas
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
priceFrom: sm
priceTo: xl
currencies:
  - EUR
billingPeriods:
  - hourly
  - monthly
  - yearly
billingTiming: arrears
exitWithin: a-day
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
  - { field: priceFrom, url: 'https://sliplane.io/pricing', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://sliplane.io/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://sliplane.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://sliplane.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://sliplane.io/terms', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://sliplane.io/terms', checkedAt: 2026-08-02 }
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

Sliplane runs Docker containers on servers rented by size rather than by workload: an unlimited number of services can share one machine with no per-container fee. That inverts the usual platform pricing model, where every additional service adds a line to the bill.

Deployment is from a git repository or a container image, with one-click templates for common databases and self-hosted tools. Managed PostgreSQL with point-in-time backups and S3-compatible object storage without egress fees are sold alongside. Servers can be placed in Europe, North America or Asia, and the price varies by location.

## Worth knowing

Unlimited services on a small machine is unlimited in the billing sense only — capacity planning stays with the customer. The free option is a short-lived demo server that deletes itself rather than a standing free tier.
