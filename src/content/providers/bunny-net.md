---
id: bunny-net
name: Bunny.net
urls:
  home: https://bunny.net
  pricing: https://bunny.net/pricing/
  status: https://status.bunny.net/
category: serverless
description: Slovenian edge platform selling CDN, storage, video and DNS, with Edge Scripting and Magic Containers running the customer's own code across its network.
founded: 2015
whoManagesOs: container
useCases:
  - static-site
  - api
  - ai-app
  - saas
  - background-jobs
audience:
  - indie-hacker
  - freelancer
  - startup
  - smb
  - enterprise
runtimes:
  - node
  - docker
  - static
deployMethods:
  - api
  - cli
  - docker-image
  - git-integration
pricingModel: usage-based
entryPriceBand: under-5
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
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://bunny.net/pricing/storage/', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://bunny.net/pricing/', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://bunny.net/pricing/', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://bunny.net/about/', checkedAt: 2026-08-01 }
figure:
  emoji: 🐰
  color: rgb(50, 25, 45)
  textColor: rgb(250, 195, 235)
  text: A CDN that started running code.
ai: authored
---

## About Bunny.net

Bunny.net is operated by BunnyWay d.o.o. and began as a content delivery network — 119 points of presence, priced by the gigabyte with rates varying by continent from a cent in Europe and North America to six cents in the Middle East and Africa. Storage, video delivery, image optimisation, DNS and a security product were added around it.

What puts it in this dataset is the newer half of the catalogue. Edge Scripting deploys and runs applications across the network, Magic Containers deploys containers globally, and Bunny Database provides an SQLite-compatible store to go with them. Billing is pay-as-you-go against a one-dollar monthly minimum, which is about as low a floor as a platform can have without being free.

## Reservations

The pricing model is a set of per-product meters rather than a plan, so a monthly figure has to be assembled from traffic, storage, requests and compute across several pages. The per-continent CDN pricing means the same site costs six times as much to serve to Africa as to Europe — accurate to the underlying cost, and worth knowing before choosing this for a global audience. There is no free tier, and no data-centre country is named for the compute products as distinct from the CDN edge.
