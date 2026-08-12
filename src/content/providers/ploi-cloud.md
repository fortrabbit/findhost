---
id: ploi-cloud
name: Ploi Cloud
urls:
  home: https://ploi.cloud
  pricing: https://ploi.cloud
category:
  - paas
description: Managed application platform from the team behind the Ploi server-management panel, running customer apps on rented UpCloud infrastructure.
infraContract:
  - resells-iaas
runsOn:
  - upcloud
ownership: independent
whoManagesOs: managed
useCases:
  - cms
  - web-app
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
freeTier: trial
regions:
  - NL
  - GB
  - US
favorite: true
favoriteNote: Independent from NL. We like.
status: active
hqCountry: NL
checkedAt: 2026-08-12
apiAvailable: public
cliTool: official
mcpServer: official
staging: included
collaboration: team
sources:
  - { field: ownership, url: 'https://ploi.cloud', checkedAt: 2026-08-09 }
  - { field: staging, url: 'https://ploi.io/features', checkedAt: 2026-08-12 }
  - { field: collaboration, url: 'https://ploi.io/features', checkedAt: 2026-08-12 }
  - { field: hqCountry, url: 'https://ploi.cloud', checkedAt: 2026-08-09 }
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
  - { field: apiAvailable, url: 'https://ploi.cloud', checkedAt: 2026-08-09 }
  - { field: cliTool, url: 'https://ploi.cloud', checkedAt: 2026-08-09 }
  - { field: mcpServer, url: 'https://ploi.cloud', checkedAt: 2026-08-09 }
figure:
  emoji: ☁️
  color: rgb(190, 124, 45)
  textColor: rgb(246, 240, 234)
  text: Dutch clouds.
---

Ploi Cloud is the managed platform from the Dutch team behind [Ploi](/ploi/), the server-management panel. Where Ploi configures a server the customer rents, Ploi Cloud rents the infrastructure itself — capacity from UpCloud, in European and North American locations — and runs the operating system, so the customer deploys an application rather than administers a machine. It presents itself as European cloud hosting and leads on GDPR compliance.

Billing is per resource rather than per plan: memory is the metered unit and CPU scales with it, so the bill follows the size of the application. Named support covers PHP applications — Laravel, WordPress, Statamic, Craft CMS — as well as Node, with managed PostgreSQL, MySQL, Redis and MongoDB available alongside. A short trial runs without a credit card.
