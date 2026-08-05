---
id: digitalocean-functions
name: DigitalOcean Functions
urls:
  home: https://www.digitalocean.com/products/functions
  pricing: https://docs.digitalocean.com/products/functions/details/pricing/
category: serverless
description: DigitalOcean Functions is a function-as-a-service platform built on Apache OpenWhisk, running short-lived handlers in several native language runtimes.
parent: DigitalOcean
whoManagesOs: provider
useCases:
  - api
  - background-jobs
runtimes:
  - php
  - node
  - python
  - go
persistentStorage: false
pricingModel: usage-based
priceFrom: xs
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
billingTiming: arrears
exitWithin: a-month
freeTier: permanent
regions:
  - US
  - NL
  - SG
  - GB
  - DE
  - CA
  - IN
  - AU
  - MX
status: active
checkedAt: 2026-08-01
sources:
  - { field: pricingModel, url: 'https://docs.digitalocean.com/products/functions/details/pricing/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://docs.digitalocean.com/products/functions/details/pricing/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://docs.digitalocean.com/products/functions/details/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://docs.digitalocean.com/products/functions/details/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://docs.digitalocean.com/products/functions/details/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://docs.digitalocean.com/platform/billing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://docs.digitalocean.com/platform/billing/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.digitalocean.com/legal/terms-of-service-agreement', checkedAt: 2026-08-02 }
  - { field: regions, url: 'https://docs.digitalocean.com/products/functions/details/availability/', checkedAt: 2026-08-01 }
figure:
  emoji: 🌊
  color: rgb(20, 40, 90)
  textColor: rgb(140, 190, 255)
  text: Functions on the ocean, asleep until called.
---

DigitalOcean Functions is a function-as-a-service platform built on Apache OpenWhisk, part of the wider DigitalOcean account rather than a standalone product. Handlers run in native runtimes for PHP, Node, Python and Go, each pulling dependencies through its own package manager.

Billing is per GiB-second of execution. Every team gets a free monthly allowance shared across all of its functions, and usage beyond it is metered. Functions scale to zero between invocations. Handlers are stateless with no local disk that outlives a call, so anything that has to persist belongs in a managed database or an object storage service.
