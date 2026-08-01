---
id: cloudways
name: Cloudways
urls:
  home: https://www.cloudways.com
  pricing: https://www.cloudways.com/en/pricing.php
category: server-management
description: Cloudways provisions and manages servers on other people's infrastructure — DigitalOcean, Vultr, Linode, AWS and Google Cloud — through its own control panel.
infraContract:
  - resells-iaas
useCases:
  - cms
  - e-commerce
audience:
  - developer
  - agency
  - smb
software:
  - wordpress
  - woocommerce
  - laravel
  - magento
social:
  x: https://twitter.com/cloudways
  linkedin: https://www.linkedin.com/company/cloudways
  facebook: https://www.facebook.com/cloudways
  youtube: https://www.youtube.com/@Cloudways
runsOn:
  - digitalocean
  - vultr
  - linode
  - aws
  - gcp
pricingModel: hourly
entryPriceBand: 5-15
entryPrice: { amount: 11, currency: USD, period: month }
freeTier: trial
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-08-01 }
  - { field: runsOn, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-07-31 }
  - { field: useCases, url: 'https://www.cloudways.com/en/', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://www.cloudways.com/en/', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://www.cloudways.com/en/', checkedAt: 2026-07-31 }
  - { field: social, url: 'https://www.cloudways.com/en/', checkedAt: 2026-07-31 }
figure:
  emoji: ☁️
  color: rgb(45, 110, 210)
  textColor: rgb(240, 245, 255)
  text: Control panel in the clouds.
ai: co-authored
---

## About Cloudways

Cloudways is [server management software](/category/server-management/) rather than a hosting service in its own right: it provisions VPS machines on five infrastructure providers — DigitalOcean, Vultr, Linode, AWS and Google Cloud — and puts a control panel over them. The cheapest listed plan is a Micro server on DigitalOcean at $11 a month for 2 GB RAM, 1 vCPU and 50 GB storage. Billing is pay-as-you-go by the hour, invoiced in arrears in the first week of the following month, and a three-day trial runs without a credit card.

Because the servers sit on other providers' hardware, the regions on offer are whatever those providers operate — Cloudways cites 25 data centres for Linode alone — so the geography of a Cloudways account is decided upstream. It was acquired by [DigitalOcean](/providers/digitalocean/) in 2022. WordPress hosting is a separately marketed product line.

## Reservations

Server management software carries a responsibility gap. Cloudways manages the software layer while the underlying machine belongs to a different contract, and when a fault falls between the two it is not always obvious who owns it.

The bundled price also hides the split: one figure covers both the panel and the machine, so what the management layer costs on top of the compute is not separable from the invoice.
