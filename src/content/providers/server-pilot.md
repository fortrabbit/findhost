---
id: server-pilot
name: ServerPilot
urls:
  home: https://serverpilot.io
  pricing: https://serverpilot.io/pricing/
category: server-management
description: ServerPilot installs and maintains a PHP stack on an Ubuntu server the customer brings, billed per server and per application.
founded: 2012
infraContract:
  - byo-iaas
whoManagesOs: panel-assisted
audience:
  - developer
useCases:
  - cms
runtimes:
  - php
sshAccess: full
pricingModel: per-resource
entryPriceBand: 5-15
entryPrice: { amount: 5.5, currency: USD, period: month }
freeTier: trial
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-07-31 }
figure:
  emoji: ✈️
  color: rgb(10, 120, 170)
  textColor: rgb(225, 245, 255)
  text: Two vendors, no one fully on the hook.
ai: co-authored
---

## About ServerPilot

ServerPilot is a [server management service](/category/server-management/), not a hosting service. It does not sell or provision servers: connect a fresh Ubuntu VPS from any provider — DigitalOcean, Hetzner, AWS — and ServerPilot installs and maintains the stack on it: Nginx and Apache, multiple PHP versions, MySQL, a firewall, automatic security updates and free SSL. Around since 2012, it is one of the earliest services in this category.

Pricing is per server and per application, billed hourly with no subscription: Economy at $5 per server plus $0.50 per app a month, Business at $10 plus $1, First Class at $20 plus $2. A 14-day trial takes no credit card. The FAQ is explicit about the split: "Servers are your servers at any cloud provider. You pay your cloud provider directly for your servers."

## Reservations

What if something breaks? The setup involves two contracts: one with the VPS provider, one with the management service. ServerPilot supports its panel and the stack it installs, the VPS provider supports the machine — the gap in between belongs to the customer. The server bill and the ServerPilot subscription also add up separately.
