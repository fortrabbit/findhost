---
id: cratedb
name: CrateDB
urls:
  home: https://cratedb.com
  pricing: https://cratedb.com/pricing
  docs: https://cratedb.com/docs
category:
  - dbaas
description: A distributed SQL database for time-series and high-cardinality data, sold as a managed service and open source.
ownership: vc-backed
runtimes: null
deployMethods: null
sshAccess: null
infraContract:
  - resells-iaas
runsOn:
  - aws
  - azure
  - gcp
pricingModel: hourly
freeTier: permanent
currencies:
  - USD
referringSubnets: { now: 733, before: 757 }
status: active
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: category, url: 'https://cratedb.com/pricing', checkedAt: 2026-08-12 }
  - { field: pricingModel, url: 'https://cratedb.com/pricing', checkedAt: 2026-08-12 }
  - { field: freeTier, url: 'https://cratedb.com/pricing', checkedAt: 2026-08-12 }
  - { field: runsOn, url: 'https://cratedb.com/pricing', checkedAt: 2026-08-12 }
  - { field: ownership, url: 'https://cratedb.com/company/investors', checkedAt: 2026-08-21 }
figure:
  emoji: 📦
  color: rgb(40, 90, 100)
  textColor: rgb(234, 246, 248)
  text: SQL over data that arrives too fast.
ai: authored
---

CrateDB is a distributed SQL database aimed at time-series, machine and sensor data — the shape of workload where rows arrive continuously and queries want to span all of them. It is sold three ways: a managed service on the large clouds, a licensed edition to run yourself, and an open-source edition under the same name.

## Worth knowing

Nothing of a customer's runs here beyond queries, so the runtime, deployment and shell rows read as not applicable rather than unknown. This is one half of a setup; the application lives on a [host](/categories/paas/) somewhere else.

Billing is by the hour on the managed service, with a free plan small enough to try a schema on and not to run anything on.
