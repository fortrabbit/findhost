---
id: koyeb
name: Koyeb
urls:
  home: https://www.koyeb.com
  pricing: https://www.koyeb.com/pricing
  status: https://status.koyeb.com/
  docs: https://www.koyeb.com/docs
category: paas
description: French platform that deploys containers and repositories across global regions with scale-to-zero, per-second billing, GPU instances and serverless Postgres.
hqCountry: FR
ownership: vc-backed
whoManagesOs: container
useCases:
  - api
  - saas
  - ai-app
  - background-jobs
  - data-pipeline
audience:
  - indie-hacker
  - startup
  - smb
  - enterprise
runtimes:
  - docker
  - node
  - python
  - go
  - ruby
  - php
  - any
deployMethods:
  - git-integration
  - docker-image
  - cli
  - api
pricingModel: usage-based
entryPriceBand: 15-50
freeTier: none
entryPrice: { amount: 29, currency: USD, period: month }
regions:
  - US
  - DE
  - FR
  - SG
  - JP
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPriceBand, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-07-31 }
  - { field: entryPrice, url: 'https://www.koyeb.com/pricing', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://www.koyeb.com/docs/reference/regions', checkedAt: 2026-08-01 }
figure:
  emoji: 🛫
  color: rgb(30, 35, 80)
  textColor: rgb(185, 195, 255)
  text: Scale to zero, pay by the second.
ai: authored
---

## About Koyeb

Koyeb is a Paris-founded platform that takes a git repository or a container image and runs it across seven regions, with automatic HTTPS, scale-to-zero and per-second billing. Alongside ordinary CPU workloads it sells GPU instances by the hour — from an RTX 4000 up to eight-way H200 configurations — and a serverless Postgres with a free allowance, which puts it in front of the machine-learning inference market as much as the web one.

Plans are Pro at $29 a month plus compute, Scale at $299 plus compute, and a custom enterprise tier starting at $1,000 a month that adds dedicated infrastructure and access to AWS regions. Billing is "only pay for what you use, by the second", with Postgres storage at $0.50 a month per GB.

The pricing page cites seven regions across the US, the EU and Asia but names only three of them. The regions reference in the documentation names the full set: Washington DC, Frankfurt, Paris, Singapore and Tokyo as core regions, an AWS US East region, and San Francisco in preview for paid plans.

## Reservations

The monthly plan fee is separate from consumption, so the entry price is a subscription with a small credit attached rather than the cost of running anything. There is no permanently free plan — the smallest commitment is the Pro subscription — and the uptime commitment only appears from the Scale tier upwards.
