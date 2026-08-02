---
id: laravel-cloud
name: Laravel Cloud
urls:
  home: https://laravel.com/cloud
  pricing: https://laravel.com/cloud/pricing
category: paas
description: Laravel Cloud is the official platform by Laravel Holdings — managed, scale-to-zero hosting for Laravel and Symfony applications, billed by subscription plus usage.
whoManagesOs: provider
useCases:
  - saas
  - e-commerce
  - side-project
specialisation:
  - laravel
software:
  - laravel
  - symfony
deployMethods:
  - git-integration
managedDatabases:
  - postgres
  - valkey
pricingModel: usage-based
entryPrice: { amount: 5, currency: USD, period: month }
entryPriceBand: 5-15
freeTier: trial
contractMinimum: monthly
regions:
  - US
  - CA
  - IE
  - GB
  - DE
  - SG
  - JP
  - AU
supportTiering: all-plans
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-08-01 }
  - { field: managedDatabases, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: contractMinimum, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: supportTiering, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: useCases, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
figure:
  emoji: 🧺
  color: rgb(173, 150, 74)
  textColor: rgb(101, 71, 0)
  text: The framework vendor's own platform.
---

## About Laravel Cloud

Laravel Cloud is made by Laravel Holdings Inc., the company behind the Laravel framework, and is the framework vendor's own hosting platform. It reached general availability in 2025. It started Laravel-only and has since added Symfony support; other PHP frameworks and plain PHP have no route in.

Applications are imported from a repository and deployed without server configuration. Compute scales to zero when traffic stops and wakes on the next request. Data services are a serverless Postgres with its own sleep timer and a Valkey cache. Plans are a subscription with usage credits attached, stepping up to add autoscaling, preview environments and team roles, and a spending limit can be set to pause compute at a ceiling.

## Worth knowing

The subscription is not the bill. Compute, database time and bandwidth are metered on top of it, so the monthly figure moves with traffic.

Classic access paths are absent. There is no SSH or SFTP into a running application, and the Git integration is the only documented way in.
