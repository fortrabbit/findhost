---
id: laravel-forge
name: Laravel Forge
urls:
  home: https://laravel.com/forge
  pricing: https://laravel.com/forge/pricing
  docs: https://forge.laravel.com/docs
category:
  - server-management
regions: null
description: Laravel Forge is server-management software — it provisions and configures servers, either on a VPS you bring yourself or on its own Laravel VPS product.
whoManagesOs: you
infraContract:
  - byo-iaas
audience:
  - agency
  - solo
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
sshAccess: root
managedDatabases:
  - mysql
  - postgres
  - redis
pricingModel: fixed-tier
entryPrice: { amount: 12, currency: USD, period: month }
priceFrom: sm
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
freeTier: none
contractMinimum: monthly
supportHours: business-hours
supportTiering: paid-upgrade
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: whoManagesOs, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: sshAccess, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: runtimes, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://laravel.com/forge', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://laravel.com/forge/pricing', checkedAt: 2026-08-02 }
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
---

Laravel Forge is [server management software](/categories/server-management/) built by the Laravel team. It provisions a server and configures the stack on it — Nginx, PHP, MySQL or PostgreSQL, Redis — issues TLS certificates, sets up queue workers and scheduled tasks, and deploys from GitHub, GitLab or Bitbucket. Root access to the machine stays with the customer, and so does responsibility for it.

Two arrangements are possible. An account can be connected to a cloud provider — DigitalOcean, AWS and Hetzner are named — in which case Forge drives that provider's API and the infrastructure is billed separately from the subscription; or a Laravel VPS can be provisioned inside Forge itself, putting machine and management on a single invoice. Laravel is not required: vanilla PHP, WordPress and Statamic are listed as supported, as are Node.js, Nuxt and Next.js.

Pricing is a flat monthly subscription rather than metered usage. The entry tier covers a single externally provisioned server; higher tiers lift that limit and raise the support level, from community answers through prioritised handling, with business-hours cover above the entry plan.
