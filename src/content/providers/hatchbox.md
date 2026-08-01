---
id: hatchbox
name: Hatchbox
urls:
  home: https://www.hatchbox.io
  pricing: https://www.hatchbox.io/pricing
category: server-management
description: Deployment platform for Rails, Ruby and Node applications on servers the customer rents, billed at a flat rate per server rather than per application.
founded: 2016
ownership: independent
parent: GoRails, LLC
whoManagesOs: provider
infraContract:
  - byo-iaas
specialisation:
  - rails
useCases:
  - saas
  - api
  - background-jobs
  - static-site
audience:
  - indie-hacker
  - freelancer
  - agency
  - startup
software:
  - rails
runtimes:
  - ruby
  - node
  - static
deployMethods:
  - git-integration
  - control-panel
sshAccess: full
pricingModel: fixed-tier
entryPriceBand: 5-15
freeTier: trial
figure:
  emoji: 🛤️
  color: rgb(60, 25, 25)
  textColor: rgb(250, 195, 190)
  text: Rails deploys, without the Rails tax.
ai: authored
---

## About Hatchbox

Hatchbox is run by GoRails, the Ruby screencast company, and has existed since 2016 — which means the people who taught a generation of developers to deploy Rails also sell the tool for doing it. It reports more than 24,000 applications deployed over two million times.

It provisions and configures servers the customer rents elsewhere, then handles zero-downtime deploys, unlimited applications and unlimited team members for a flat ten dollars a month per server. That per-server model is the pitch: a platform charging per application makes a portfolio of small Rails apps expensive, and this does not. Rails, plain Ruby, Node.js and static sites are all supported, and support is answered by people who work on Rails rather than by a chatbot.

## Reservations

The ten dollars buys management, not capacity — the servers are bought from DigitalOcean, Hetzner or wherever else, and that bill is separate and larger. Nothing here owns infrastructure, so uptime, region and jurisdiction are inherited from the underlying provider along with responsibility for choosing it. The specialisation is real: this is Ruby-shaped tooling, and a team not writing Ruby would be buying somebody else's conventions.
