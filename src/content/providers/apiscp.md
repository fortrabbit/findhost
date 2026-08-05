---
id: apiscp
name: ApisCP
urls:
  home: https://apiscp.com
  pricing: https://apiscp.com/pricing/
category:
  - server-management
regions: null
description: Self-hosted hosting platform and control panel from Apis Networks, licensed per server and aimed at providers running their own fleet.
whoManagesOs: you
infraContract:
  - byo-iaas
runtimes:
  - php
  - node
  - python
  - ruby
  - go
pricingModel: per-server-licence
priceFrom: xs
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
entryPrice: { amount: 30, currency: USD, period: year }
freeTier: trial
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://apiscp.com/pricing/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://apiscp.com/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://apiscp.com/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://apiscp.com/pricing/', checkedAt: 2026-08-01 }
  - { field: runtimes, url: 'https://apiscp.com/', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://apiscp.com/pricing/', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://apiscp.com/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://apiscp.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://apiscp.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://apiscp.com/pricing/', checkedAt: 2026-08-02 }
figure:
  emoji: 🎛️
  color: rgb(200, 50, 50)
  textColor: rgb(255, 230, 230)
  text: Max control, max responsibility.
---

ApisCP — short for Apis Networks Control Panel, formerly known as apnscp — is a self-hosted hosting platform and control panel by Apis Networks, grown out of a panel the company has run internally since 2002. It installs on a server the operator supplies and automates provisioning, account isolation, updates and self-healing, while exposing a large configuration surface underneath. The intended operator is a hosting provider or an experienced administrator rather than someone running a single site.

The panel core is commercially licensed per server; the backend modules are published as open source. Runtimes covered are PHP, Node.js, Python, Ruby and Go, and the licence is sold on an annual subscription with a trial ahead of it.
