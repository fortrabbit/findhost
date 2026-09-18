---
id: tigris
name: Tigris
urls:
  home: https://www.tigrisdata.com
  pricing: https://www.tigrisdata.com/pricing/
  docs: https://www.tigrisdata.com/docs/
  terms: https://www.tigrisdata.com/service-terms/
category:
  - iaas
description: Globally distributed, S3-compatible object storage reached through a single endpoint, with no egress fees.
founded: 2022
ownership: vc-backed
persistentStorage: true
infraContract:
  - owns-metal
useCases:
  - ai-app
  - data-pipeline
pricingModel: usage-based
priceFrom: xs
currencies:
  - USD
billingPeriods:
  - monthly
freeTier: permanent
apiAvailable: public
cliTool: official
mcpServer: official
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: founded, url: 'https://www.tigrisdata.com/about/', checkedAt: 2026-09-18 }
  - { field: ownership, url: 'https://www.tigrisdata.com/about/', checkedAt: 2026-09-18 }
  - { field: infraContract, url: 'https://www.tigrisdata.com/about/', checkedAt: 2026-09-18 }
  - { field: persistentStorage, url: 'https://www.tigrisdata.com/docs/', checkedAt: 2026-09-18 }
  - { field: useCases, url: 'https://www.tigrisdata.com', checkedAt: 2026-09-18 }
  - { field: pricingModel, url: 'https://www.tigrisdata.com/pricing/', checkedAt: 2026-09-18 }
  - { field: priceFrom, url: 'https://www.tigrisdata.com/pricing/', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://www.tigrisdata.com/pricing/', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://www.tigrisdata.com/pricing/', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://www.tigrisdata.com/pricing/', checkedAt: 2026-09-18 }
  - { field: apiAvailable, url: 'https://www.tigrisdata.com/docs/', checkedAt: 2026-09-18 }
  - { field: cliTool, url: 'https://www.tigrisdata.com/docs/', checkedAt: 2026-09-18 }
  - { field: mcpServer, url: 'https://www.tigrisdata.com/docs/', checkedAt: 2026-09-18 }
figure:
  emoji: 🐯
  color: rgb(150, 58, 20)
  textColor: rgb(255, 244, 232)
  text: S3-compatible object storage behind one global endpoint.
ai: authored
---

Tigris sells object storage reached through a single global endpoint rather than a region picked at bucket creation: writes replicate automatically, and reads are routed to whichever copy is closest. It implements most of the S3 API, so existing AWS SDKs and tools work by pointing their endpoint and credentials at Tigris instead of S3. The company was founded in 2022 by members of Uber's storage team and, by its own account, runs on hardware it owns rather than reselling a cloud provider's.

Storage is billed per gigabyte-month by class — standard, infrequent-access and two archive tiers — with separate small per-request charges and no charge for egress. A free allowance of a few gigabytes and a few thousand requests runs alongside the paid usage, and there is no separate plan fee.

## Worth knowing

Pricing has no plan floor: a bucket costs only what it stores and moves, which makes a single monthly figure for "using Tigris" describe a rate rather than a bill.
