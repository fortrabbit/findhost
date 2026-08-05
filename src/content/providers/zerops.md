---
id: zerops
name: Zerops
urls:
  home: https://zerops.io
  pricing: https://zerops.io/pricing
  status: https://status.zerops.io
  terms: https://zerops.io/terms
  docs: https://docs.zerops.io/
category:
  - paas
description: Czech container platform running applications and managed services on rented infrastructure in Prague, billed by resources consumed rather than by plan tier.
founded: 2018
hqCountry: CZ
ownership: vc-backed
whoManagesOs: container
useCases:
  - saas
  - api
  - background-jobs
  - data-pipeline
  - side-project
  - ai-app
audience:
  - indie-hacker
  - freelancer
  - startup
  - smb
software:
  - laravel
  - django
  - nextjs
  - express
runtimes:
  - node
  - php
  - python
  - go
  - dotnet
  - rust
  - java
  - elixir
  - ruby
  - static
  - docker
deployMethods:
  - git-integration
  - cli
  - docker-image
  - api
sshAccess: full
managedDatabases:
  - postgres
  - mariadb
  - valkey
  - elasticsearch
  - clickhouse
  - kafka
pricingModel: per-resource
priceFrom: md
priceTo: lg
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
exitWithin: a-day
billingTiming: advance
freeTier: trial
regions:
  - CZ
infraContract:
  - resells-iaas
runsOn:
  - vshosting
apiAvailable: public
cliTool: official
social:
  github: https://github.com/zeropsio
  x: https://x.com/zeropsio
  linkedin: https://www.linkedin.com/company/zerops/
  discord: https://discord.gg/zeropsio
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: runsOn, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://docs.zerops.io/company/about', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://docs.zerops.io/company/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://docs.zerops.io/company/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://docs.zerops.io/company/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://docs.zerops.io/company/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://docs.zerops.io/company/pricing', checkedAt: 2026-08-02 }
  - { field: urls, url: 'https://zerops.io/terms', checkedAt: 2026-08-01 }
figure:
  emoji: 🧊
  color: rgb(20, 35, 50)
  textColor: rgb(175, 215, 240)
  text: Pay for what the app consumes.
ai: authored
---

Zerops began in 2018 as an internal project at the Czech hosting company vshosting and was relaunched as an independent, venture-backed company in 2024. It runs on vshosting's infrastructure in Prague, which is the only location it sells.

Applications are declared as services and shipped through a git integration, the official CLI, the public API or a container image. The runtime images cover the mainstream server languages alongside static sites and arbitrary Docker containers, and full SSH access into a project comes with the platform. Managed databases, search and streaming services are provisioned as further services in the same project. Billing is per resource — the CPU, memory and disk actually consumed — with no subscription tiers and no per-seat charge, and new accounts start on trial credit rather than on a permanently free tier.

## Worth knowing

The company is Czech and its servers are in Prague, but the infrastructure underneath belongs to vshosting, which Zerops' own documentation describes as part of Contabo, owned by the investment firm KKR. "European platform" and "European ownership all the way down" are different claims.
