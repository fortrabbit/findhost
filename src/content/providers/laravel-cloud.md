---
id: laravel-cloud
name: Laravel Cloud
url: https://laravel.com/cloud
category: paas
pricingUrl: https://laravel.com/cloud/pricing
description: Laravel Cloud is the official platform by Laravel Holdings — managed, scale-to-zero hosting for Laravel and Symfony applications, billed by subscription plus usage.
whoManagesOs: provider
deployMethods:
  - git-integration
managedDatabases:
  - postgres
  - valkey
pricingModel: usage-based
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
checkedAt: 2026-07-31
sources:
  - { field: regions, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: contractMinimum, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
  - { field: supportTiering, url: 'https://laravel.com/cloud/pricing', checkedAt: 2026-07-31 }
figure:
  emoji: 🧺
  color: rgb(173, 150, 74)
  textColor: rgb(101, 71, 0)
  text: Putting all your eggs in one basket?
ai: co-authored
---

## About Laravel Cloud

Laravel Cloud is made by Laravel Holdings Inc. and is the framework vendor's own hosting platform. In 2024 Laravel announced $57M in funding; Laravel Cloud reached general availability in early 2025. It started Laravel-only and has since added Symfony support — other PHP frameworks and plain PHP are not.

Applications are imported from a repository and deployed without server configuration. Compute scales to zero when traffic stops and wakes, per the marketing figure, in under 500ms. Data services are a serverless Postgres 17 with its own sleep timer and a Valkey cache. Nine regions are offered: Ohio, Virginia, Central Canada, Ireland, London, Frankfurt, Singapore, Tokyo and Sydney.

Plans are a subscription plus metered usage. Starter is $5 a month including $5 of usage credits, with the first month free; Growth is $20 and adds autoscaling, preview environments and team roles; Business is $200; Enterprise is quoted. Spending limits pause compute at a set ceiling.

## Reservations

- The subscription is not the bill. Compute, database time and bandwidth are metered on top, so the monthly figure moves with traffic
- Classic access paths — SSH, SFTP — are not part of the workflow
- Only Laravel and Symfony applications run there; other PHP code has no route in
- Scale-to-zero and autoscaling solve problems that many agency and business sites do not have
- Framework and platform come from the same vendor, which concentrates the dependency
