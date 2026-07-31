---
id: sevalla
name: Sevalla
url: https://sevalla.com
category: paas
pricingUrl: https://sevalla.com/pricing/
description: Sevalla is a polyglot cloud hosting platform covering application hosting, database hosting, static sites, and object storage.
parent: Kinsta
whoManagesOs: container
useCases:
  - static-site
  - api
runtimes:
  - docker
deployMethods:
  - git-integration
  - docker-image
pricingModel: usage-based
entryPriceBand: 5-15
freeTier: permanent
status: active
checkedAt: 2026-07-31
sources:
  - { field: entryPriceBand, url: 'https://sevalla.com/pricing/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://sevalla.com/pricing/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://sevalla.com/pricing/', checkedAt: 2026-07-31 }
figure:
  emoji: ⛈️
  color: rgb(25, 118, 210)
  textColor: rgb(100, 180, 255)
  text: General-purpose PaaS.
ai: co-authored
---

## About Sevalla

Sevalla is a polyglot cloud hosting platform covering application hosting, database hosting, static sites, and object storage. It's a product of [Kinsta](/providers/kinsta/), the managed WordPress hosting company — since early 2026, Kinsta's application, database, and static-site hosting run under the Sevalla brand. Deployments connect to a Git provider (GitHub, GitLab, Bitbucket) and build via Dockerfile or buildpacks.

Billing is described as "pay for what you run", with no per-seat charge. Application and database hosting each start at $5 a month across 25 data centre locations; object storage is $0.02 per GB per month, powered by Cloudflare R2 in six locations. Static site hosting is free and permanent within stated limits — 1 GB per site, 100 GB of bandwidth, 600 build minutes and 100 sites per account — served from more than 260 edge locations. A trial is offered on the application and database products.

## Reservations

The data centre count is published but the countries are not, so there is no way to tell from the pricing page whether a given jurisdiction is available.

Usage-based billing means the $5 entry figure is a floor rather than a price. What an application costs depends on what it consumes, and the components — compute, database, storage, bandwidth — are metered separately.
