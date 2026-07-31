---
id: laravel-forge
name: Laravel Forge
url: https://laravel.com/forge
category: server-management
pricingUrl: https://laravel.com/forge/pricing
description: Laravel Forge is server-management software — it provisions and configures servers, either on a VPS you bring yourself or on its own Laravel VPS product.
whoManagesOs: panel-assisted
infraContract: byo-iaas
audience:
  - agency
  - freelancer
software:
  - laravel
  - wordpress
  - statamic
  - nextjs
  - nuxt
runtimes:
  - php
  - node
deployMethods:
  - git-integration
sshAccess: full
managedDatabases:
  - mysql
  - postgres
  - redis
pricingModel: fixed-tier
entryPriceBand: 5-15
freeTier: none
contractMinimum: monthly
supportHours: business-hours
supportTiering: paid-upgrade
status: active
checkedAt: 2026-07-31
sources:
  - { field: infraContract, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: whoManagesOs, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: sshAccess, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: runtimes, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-07-31 }
  - { field: contractMinimum, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-07-31 }
  - { field: supportTiering, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-07-31 }
  - { field: supportHours, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
figure:
  emoji: 💸
  color: rgb(100, 200, 60)
  textColor: rgb(80, 50, 12)
  text: Pay for VPS, plus VPS software.
ai: co-authored
---

## About Laravel Forge

Laravel Forge is [server management software](/category/server-management/) built by the Laravel team. It provisions a server, installs Nginx, PHP, MySQL or Postgres and Redis, issues TLS certificates, configures queue workers and scheduled tasks, and deploys from GitHub, GitLab or Bitbucket. Root access to the machine stays with the customer.

Two arrangements are possible. Either an account is connected to a cloud provider — DigitalOcean, AWS and Hetzner are named — and Forge drives it through that provider's API, in which case the infrastructure bill is separate; or a Laravel VPS is provisioned inside Forge itself, which puts machine and management on one invoice. Laravel is not required: vanilla PHP, WordPress, Statamic, Node.js, Nuxt and Next.js are listed as supported, with non-PHP deploys described as manual for now.

Pricing is flat-rate rather than usage-based: Hobby at $12 a month with one external server, Growth at $19 and Business at $39, both with unlimited servers. Support level is what separates the plans — community on Hobby, prioritised on Growth, high priority on Business — with business-hours support from Growth upward.

## Reservations

Forge is a second bill. On the bring-your-own-server arrangement the subscription buys no compute at all: the servers are paid for separately, and the software layer is what the $12 to $39 covers. Whether that trade is worth it depends on how many servers it manages — the per-server economics improve as the fleet grows and are least favourable for a single small site.

The machine also remains the customer's to answer for. Forge automates provisioning and patch-adjacent chores, but root access comes with root responsibility, and Forge does not take the operating system off anyone's hands.
