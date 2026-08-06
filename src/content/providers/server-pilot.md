---
id: server-pilot
name: ServerPilot
urls:
  home: https://serverpilot.io
  pricing: https://serverpilot.io/pricing/
category:
  - server-management
regions: null
description: ServerPilot installs and maintains a PHP stack on an Ubuntu server the customer brings, billed per server and per application.
founded: 2012
infraContract:
  - byo-iaas
whoManagesOs: self-managed
useCases:
  - cms
runtimes:
  - php
sshAccess: root
pricingModel: per-resource
priceFrom: sm
priceTo: md
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
exitWithin: a-day
entryPrice: { amount: 5.5, currency: USD, period: month }
freeTier: trial
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://serverpilot.io/pricing/', checkedAt: 2026-07-31 }
figure:
  emoji: ✈️
  color: rgb(10, 120, 170)
  textColor: rgb(225, 245, 255)
  text: Installs the stack, billed per app.
---

ServerPilot is a [server management service](/categories/server-management/) rather than a hosting service. It sells no servers: the customer connects a fresh Ubuntu machine from any cloud provider, and ServerPilot installs and then maintains the stack on it — Nginx and Apache, several PHP versions side by side, MySQL, a firewall, automatic security updates and certificates. Trading since 2012, it is one of the earliest services in this category.

Billing is per server and per application, metered hourly rather than sold as a subscription, with tiers that differ in the level of monitoring and support attached. A trial runs without a credit card. The FAQ is explicit about the split: "Servers are your servers at any cloud provider. You pay your cloud provider directly for your servers." ServerPilot supports its own panel and the stack it installs, and the cloud provider supports the machine underneath.
