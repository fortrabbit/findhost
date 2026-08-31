---
id: planetscale
name: PlanetScale
urls:
  home: https://planetscale.com
  pricing: https://planetscale.com/pricing
  docs: https://planetscale.com/docs
category:
  - dbaas
description: A managed database service selling MySQL through Vitess and Postgres, priced per cluster.
ownership: vc-backed
runtimes: null
deployMethods: null
sshAccess: null
managedDatabases:
  - mysql
  - postgres
infraContract:
  - resells-iaas
runsOn:
  - aws
  - gcp
pricingModel: per-resource
priceFrom: md
freeTier: none
currencies:
  - USD
referringSubnets: { now: 1567, before: 1568 }
status: active
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: category, url: 'https://planetscale.com/pricing', checkedAt: 2026-08-12 }
  - { field: managedDatabases, url: 'https://planetscale.com/pricing', checkedAt: 2026-08-12 }
  - { field: pricingModel, url: 'https://planetscale.com/pricing', checkedAt: 2026-08-12 }
  - { field: priceFrom, url: 'https://planetscale.com/pricing', checkedAt: 2026-08-12 }
  - { field: freeTier, url: 'https://planetscale.com/pricing', checkedAt: 2026-08-12 }
  - { field: runsOn, url: 'https://planetscale.com/pricing', checkedAt: 2026-08-12 }
  - { field: ownership, url: 'https://planetscale.com/blog/ga', checkedAt: 2026-08-21 }
figure:
  emoji: 🪐
  color: rgb(38, 58, 96)
  textColor: rgb(234, 240, 248)
  text: A database, and nothing around it.
ai: authored
---

PlanetScale sells managed databases and only managed databases. Two engines are offered: MySQL run through Vitess, the sharding layer built at YouTube, and Postgres. Clusters are bought by size rather than by plan, priced by the hour of the machine underneath, across regions on more than one cloud.

## Worth knowing

Nothing of a customer's runs here — there is no runtime, no deploy and no shell, which is why those rows read as not applicable rather than unknown. It is one half of a setup, and the other half is a [host](/categories/paas/) somewhere else.

The entry price is not a small-project price. This is infrastructure sold to teams already paying for the application it sits behind.
