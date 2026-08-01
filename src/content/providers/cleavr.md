---
id: cleavr
name: Cleavr
urls:
  home: https://cleavr.io
  pricing: https://cleavr.io/pricing
category: server-management
regions: null
description: Server provisioning and deployment service for PHP and Node applications, driving servers on seven named clouds or any VPS the customer brings.
whoManagesOs: provider
infraContract:
  - byo-iaas
useCases:
  - cms
  - saas
  - api
  - headless-cms
  - static-site
  - background-jobs
audience:
  - freelancer
  - indie-hacker
  - agency
  - smb
software:
  - laravel
  - nuxt
  - nextjs
  - wordpress
  - strapi
  - directus
runtimes:
  - php
  - node
  - static
deployMethods:
  - git-integration
  - control-panel
  - ssh
sshAccess: full
managedDatabases:
  - mysql
  - postgres
pricingModel: fixed-tier
entryPriceBand: 5-15
entryPrice: { amount: 5.50, currency: USD, period: month }
freeTier: trial
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://cleavr.io/pricing', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://cleavr.io/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://cleavr.io/pricing', checkedAt: 2026-08-01 }
figure:
  emoji: 🔪
  color: rgb(40, 30, 30)
  textColor: rgb(240, 205, 200)
  text: Provision, deploy, get out of the way.
ai: authored
---

## About Cleavr

Cleavr provisions a server and then keeps deploying to it: web applications, cron jobs, process monitors, environment variables, TLS certificates and deployment logs, with notifications to Slack, Discord, Telegram or email and a GitHub Actions integration for anyone who wants the pipeline elsewhere.

The framework list is unusually explicit for a tool of this kind — Laravel, Nuxt, Next.js, AdonisJS, Alpas, WordPress, Strapi, Directus, Soketi, plain PHP, Node and static HTML — which tells a prospective user whether their stack is a first-class case or an improvisation. Servers can be provisioned on DigitalOcean, Hetzner, AWS, Linode, UpCloud or Vultr, or Cleavr can adopt a VPS from anywhere else.

Plans are Lite at $5.50 a month for one server, Pro at $15 for unlimited servers with monitoring and backups, and Business at $30 adding team management, with a five-day trial and no card required.

## Reservations

Nothing here is hosting: the subscription manages servers rented elsewhere, and that separate bill is the larger one. Backups and monitoring only appear at the Pro tier, so the entry plan is provisioning and deployment alone. As with every panel of this shape, responsibility for the operating system underneath stays with the customer.
