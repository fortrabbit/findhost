---
id: dokploy
name: Dokploy
urls:
  home: https://dokploy.com
  pricing: https://dokploy.com/pricing
  terms: https://dokploy.com/terms-of-service
  docs: https://docs.dokploy.com/docs/core
category: server-management
regions: null
description: Open-source deployment platform billed per managed server, run either as a hosted service or installed on the customer's own machines.
hqCountry: US
whoManagesOs: container
infraContract:
  - byo-iaas
useCases:
  - saas
  - api
  - internal-tool
  - side-project
  - background-jobs
audience:
  - indie-hacker
  - freelancer
  - agency
  - startup
runtimes:
  - docker
  - any
deployMethods:
  - git-integration
  - docker-image
  - api
sshAccess: full
pricingModel: per-resource
entryPriceBand: under-5
entryPrice: { amount: 4.5, currency: USD, period: month }
freeTier: none
social:
  github: https://github.com/dokploy/dokploy
  x: https://x.com/getdokploy
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://dokploy.com/terms-of-service', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://dokploy.com', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://dokploy.com', checkedAt: 2026-08-01 }
figure:
  emoji: 🐋
  color: rgb(20, 40, 55)
  textColor: rgb(170, 220, 245)
  text: Heroku on hardware you already rent.
ai: authored
---

## About Dokploy

Dokploy is the open-source answer to platform-as-a-service: install it on servers you already have, point it at a git repository or a Docker Compose file, and it handles builds, deployments, databases, webhooks and TLS. Multi-server Docker Swarm clusters are supported, so it scales past the single box most self-hosted panels assume.

Commercially it is sold by the managed server rather than by the application — $4.50 a month for one on the Hobby plan, $15 for three on Startup, with additional servers at the same unit rate and a fifth off for annual billing. Enterprise and agency arrangements are quoted. The same product is available as a hosted service or installed on-premises, and the software itself remains open source.

The terms of service name Dokploy Technologies, Inc. at a San Francisco address and put the governing law in Delaware, which is the only place the company behind the product is identified.

## Reservations

The subscription buys the control plane and nothing else — every server it manages is rented separately, so the Dokploy price and the hosting bill are different numbers, and the smaller of the two is the one advertised. Being self-hostable is a genuine hedge against lock-in, but it also means the customer is on the hook for the operating system, security updates and backups of the machines underneath. Enterprise and agency pricing is not published.
