---
id: bunny-net
name: Bunny.net
urls:
  home: https://bunny.net
  pricing: https://bunny.net/pricing/
  status: https://status.bunny.net/
category:
  - serverless
  - static
description: Slovenian edge platform selling CDN, storage, video and DNS, with Edge Scripting and Magic Containers running the customer's own code across its network.
founded: 2015
whoManagesOs: self-managed
useCases:
  - static-site
  - api
  - ai-app
  - web-app
  - background-jobs
audience:
  - solo
  - startup
  - smb
  - enterprise
runtimes:
  - node
  - docker
  - static
deployMethods:
  - docker-image
  - git
pricingModel: usage-based
priceFrom: xs
priceTo: lg
billingPeriods:
  - monthly
billingTiming: advance
entryPrice: { amount: 1, currency: USD, period: month }
freeTier: none
regions:
  - AU
  - BR
  - CZ
  - DE
  - ES
  - GB
  - HK
  - JP
  - SE
  - SG
  - US
  - ZA
apiAvailable: public
hqCountry: SI
checkedAt: 2026-08-09
sources:
  - { field: hqCountry, url: 'https://bunny.net', checkedAt: 2026-08-09 }
  - { field: regions, url: 'https://bunny.net/pricing/storage/', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://bunny.net/pricing/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://bunny.net/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://bunny.net/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://bunny.net/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://bunny.net/tos/', checkedAt: 2026-08-02 }
  - { field: founded, url: 'https://bunny.net/about/', checkedAt: 2026-08-01 }
figure:
  emoji: 🐰
  color: rgb(157, 77, 141)
  textColor: rgb(245, 234, 243)
  text: A CDN that started running code.
ai: authored
---

Bunny.net is operated by BunnyWay d.o.o. from Slovenia and began as a content delivery network, priced by the gigabyte with rates that vary by continent. Storage, video delivery, image optimisation, DNS and a security product were built around it.

What puts it in this dataset is the newer half of the catalogue. Edge Scripting deploys and runs applications across the network, Magic Containers runs containers globally, and Bunny Database provides an SQLite-compatible store to go with them. Billing is pay-as-you-go against a monthly minimum rather than a plan.

## Worth knowing

Pricing is a set of per-product meters rather than a single rate, so a monthly figure has to be assembled from traffic, storage, requests and compute across several pages. Because CDN rates differ by continent, the same site costs materially more to serve to some regions than to others.
