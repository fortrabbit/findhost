---
id: bithost
name: bithost
urls:
  home: https://bithost.io
  pricing: https://bithost.io/prices/
  docs: https://bithost.io/bithost-cli-api/
category:
  - vps
description: Reseller of DigitalOcean, Linode and Vultr servers, paid in cryptocurrency without an identity check.
pricingModel: hourly
entryPrice: { amount: 0.015, currency: USD, period: hour }
priceFrom: sm
currencies:
  - USD
paymentMethods:
  - crypto
infraContract:
  - resells-iaas
runsOn:
  - digitalocean
  - linode
  - vultr
status: anonymous
addedAt: 2026-09-17
checkedAt: 2026-09-17
ai: authored
sources:
  - { field: infraContract, url: 'https://bithost.io/', checkedAt: 2026-09-17 }
  - { field: runsOn, url: 'https://bithost.io/', checkedAt: 2026-09-17 }
  - { field: status, url: 'https://bithost.io/', checkedAt: 2026-09-17 }
  - { field: category, url: 'https://bithost.io/', checkedAt: 2026-09-17 }
  - { field: pricingModel, url: 'https://bithost.io/prices/', checkedAt: 2026-09-17 }
  - { field: entryPrice, url: 'https://bithost.io/prices/', checkedAt: 2026-09-17 }
  - { field: priceFrom, url: 'https://bithost.io/prices/', checkedAt: 2026-09-17 }
  - { field: currencies, url: 'https://bithost.io/prices/', checkedAt: 2026-09-17 }
  - { field: paymentMethods, url: 'https://bithost.io/', checkedAt: 2026-09-17 }
---

bithost resells virtual servers from DigitalOcean, Linode and Vultr, billed by the hour against a cryptocurrency top-up. Its [home page](https://bithost.io/) says "No KYC, no credit card, no paperwork." A command-line tool and an API are documented on its own site. The site does not name the company behind it.

## Worth knowing

The servers run in the upstream provider's data centers, so the upstream provider's terms apply to them as well.
