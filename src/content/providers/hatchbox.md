---
id: hatchbox
name: Hatchbox
urls:
  home: https://www.hatchbox.io
  pricing: https://www.hatchbox.io/pricing
category:
  - server-management
regions: null
description: Hatchbox is a deployment platform for Rails, Ruby and Node applications on servers the customer rents, billed per managed server rather than per application.
founded: 2016
ownership: independent
parent: GoRails, LLC
whoManagesOs: managed
infraContract:
  - byo-iaas
specialisation:
  - rails
useCases:
  - web-app
  - api
  - background-jobs
  - static-site
audience:
  - solo
  - agency
  - startup
software:
  - rails
runtimes:
  - ruby
  - node
  - static
deployMethods:
  - git-integration
  - control-panel
sshAccess: jailed
pricingModel: fixed-tier
priceFrom: sm
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
entryPrice: { amount: 10, currency: USD, period: month }
freeTier: trial
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://www.hatchbox.io/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.hatchbox.io/pricing', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://www.hatchbox.io/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.hatchbox.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.hatchbox.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.hatchbox.io/terms', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.hatchbox.io/terms', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://www.hatchbox.io/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.hatchbox.io/pricing', checkedAt: 2026-08-01 }
figure:
  emoji: 🛤️
  color: rgb(60, 25, 25)
  textColor: rgb(250, 195, 190)
  text: Rails deploys, on servers you rent.
ai: authored
---

Hatchbox is run by GoRails, the Ruby screencast company, so the people who teach Rails deployment also sell the tool for doing it. It provisions and configures servers the customer rents elsewhere, then handles zero-downtime deploys, with no limit on the number of applications or team members per server.

Billing is a flat rate per managed server rather than per application, so a portfolio of small applications on one machine stays at one price. Rails, plain Ruby, Node.js and static sites are the supported targets, and there is a trial before purchase.

## Worth knowing

The subscription buys management, not capacity. The servers are rented from DigitalOcean, Hetzner or wherever else and billed separately, and since Hatchbox owns no infrastructure, uptime, region and jurisdiction follow the underlying provider along with the responsibility for choosing it.
