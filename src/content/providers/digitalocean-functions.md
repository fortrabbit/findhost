---
id: digitalocean-functions
name: DigitalOcean Functions
urls:
  home: https://www.digitalocean.com/products/functions
  pricing: https://docs.digitalocean.com/products/functions/details/pricing/
category: serverless
description: DigitalOcean Functions is a function-as-a-service platform built on Apache OpenWhisk, with PHP among its native runtimes.
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
entryPriceBand: free-tier
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
  - { field: entryPriceBand, url: 'https://docs.digitalocean.com/products/functions/details/pricing/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://docs.digitalocean.com/products/functions/details/availability/', checkedAt: 2026-08-01 }
figure:
  emoji: 🌊
  color: rgb(20, 40, 90)
  textColor: rgb(140, 190, 255)
  text: Native PHP functions on the ocean.
ai: co-authored
---

## About DigitalOcean Functions

DigitalOcean Functions is a function-as-a-service platform built on Apache OpenWhisk. It has the thing most serverless platforms lack for PHP: a native runtime, sitting next to Node, Python, and Go, with Composer support. So a PHP handler runs with no Bref-style layer bolted onto Lambda.

Billing is per GiB-second: each team gets a free monthly allowance of 90,000 GiB-seconds, or 25 GiB-hours, across all its functions, and usage beyond that costs $0.0000185 per GiB-second — $0.07 per GiB-hour.

It scales to zero and bills per use. Good for small event handlers, webhooks, an API endpoint or two. The function rules still bite, though. Handlers are stateless and short-lived, so anything that has to outlive a call lives in a managed database or storage service, never on local disk.
