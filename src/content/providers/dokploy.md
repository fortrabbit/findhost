---
id: dokploy
name: Dokploy
urls:
  home: https://dokploy.com
  pricing: https://dokploy.com/pricing
category: server-management
description: Open-source deployment platform billed per managed server, run either as a hosted service or installed on the customer's own machines.
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
freeTier: none
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

## Reservations

The subscription buys the control plane and nothing else — every server it manages is rented separately, so the Dokploy price and the hosting bill are different numbers, and the smaller of the two is the one advertised. Being self-hostable is a genuine hedge against lock-in, but it also means the customer is on the hook for the operating system, security updates and backups of the machines underneath. Enterprise and agency pricing is not published.
