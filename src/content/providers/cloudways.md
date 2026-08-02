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
priceFrom: sm
entryPrice: { amount: 11, currency: USD, period: month }
freeTier: trial
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-08-01 }
  - { field: runsOn, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://www.cloudways.com/en/pricing.php', checkedAt: 2026-07-31 }
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
---

## About Cloudways

Cloudways is [server management software](/category/server-management/) rather than a hosting service in its own right: it provisions virtual machines on five infrastructure providers — DigitalOcean, Vultr, Linode, AWS and Google Cloud — and puts its own control panel over them. Billing is pay-as-you-go by the hour and invoiced in arrears, with a short trial ahead of it.

Because the servers sit on other providers' hardware, the locations on offer are whatever those providers operate, so the geography of a Cloudways account is decided upstream. It was acquired by [DigitalOcean](/providers/digitalocean/) in 2022. WordPress hosting is a separately marketed product line.

## Worth knowing

The machine and the management layer arrive on one invoice. That is unusual for this category — most panels are billed separately from the server they run on — and it means the cost of the panel itself is not separable from the cost of the compute underneath it.
