---
id: cleavr
name: Cleavr
urls:
  home: https://cleavr.io
  pricing: https://cleavr.io/pricing
category: server-management
regions: null
description: Server provisioning and deployment service for PHP and Node applications, driving servers rented from major clouds or any VPS the customer brings.
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
priceFrom: sm
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
entryPrice: { amount: 5.50, currency: USD, period: month }
freeTier: trial
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://cleavr.io/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://cleavr.io/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://cleavr.io/pricing', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://cleavr.io/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://cleavr.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://cleavr.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://cleavr.io/terms', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://cleavr.io/terms', checkedAt: 2026-08-02 }
figure:
  emoji: 🔪
  color: rgb(40, 30, 30)
  textColor: rgb(240, 205, 200)
  text: Provision, deploy, get out of the way.
ai: authored
---

Cleavr provisions a server and then keeps deploying to it: web applications, cron jobs, process monitors, environment variables, TLS certificates and deployment logs, with notifications to Slack, Discord, Telegram or email and a GitHub Actions integration for anyone who wants the pipeline elsewhere.

The supported frameworks are named explicitly rather than left to a generic build step — Laravel, Nuxt, Next.js, AdonisJS, WordPress, Strapi, Directus, plain PHP, Node and static HTML among them. Servers are provisioned on one of several named clouds, DigitalOcean, Hetzner, AWS, Linode, UpCloud and Vultr among them, or adopted from a VPS bought anywhere else.

Plans are graded by how many servers they cover and by whether monitoring and backups are included, with a short trial ahead of them.
