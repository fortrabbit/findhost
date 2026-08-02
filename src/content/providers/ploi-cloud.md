---
id: ploi-cloud
name: Ploi Cloud
urls:
  home: https://ploi.cloud
  pricing: https://ploi.cloud
category: paas
description: Managed application platform from the team behind the Ploi server-management panel, running customer apps on rented UpCloud infrastructure.
infraContract:
  - resells-iaas
runsOn:
  - upcloud
whoManagesOs: provider
audience:
  - developer
useCases:
  - cms
  - saas
software:
  - laravel
  - wordpress
  - statamic
  - craft-cms
runtimes:
  - php
  - node
managedDatabases:
  - postgres
  - mysql
  - redis
  - mongodb
pricingModel: per-resource
priceFrom: sm
priceTo: lg
currencies:
  - EUR
billingPeriods:
  - hourly
  - monthly
exitWithin: a-day
freeTier: trial
regions:
  - NL
  - GB
  - US
status: active
checkedAt: 2026-07-31
sources:
  - { field: runsOn, url: 'https://ploi.cloud', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://ploi.cloud', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://ploi.cloud', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://ploi.cloud', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://ploi.cloud/pricing/databases', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://ploi.cloud/pricing/databases', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://ploi.cloud/pricing/calculator', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://ploi.cloud', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://ploi.cloud', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://ploi.cloud', checkedAt: 2026-07-31 }
figure:
  emoji: ☁️
  color: rgb(255, 140, 0)
  textColor: rgb(255, 220, 140)
  text: Dutch clouds.
---

## About Ploi Cloud

Ploi Cloud is the managed platform from the Dutch team behind [Ploi](/providers/ploi/), the server-management panel. Where Ploi configures a server the customer rents, Ploi Cloud rents the infrastructure itself — capacity from UpCloud, in European and North American locations — and runs the operating system, so the customer deploys an application rather than administers a machine. It presents itself as European cloud hosting and leads on GDPR compliance.

Billing is per resource rather than per plan: memory is the metered unit and CPU scales with it, so the bill follows the size of the application. Named support covers PHP applications — Laravel, WordPress, Statamic, Craft CMS — as well as Node, with managed PostgreSQL, MySQL, Redis and MongoDB available alongside. A short trial runs without a credit card.
