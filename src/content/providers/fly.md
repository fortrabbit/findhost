---
id: fly
name: Fly.io
urls:
  home: https://fly.io
  pricing: https://fly.io/docs/about/pricing/
category:
  - paas
description: Fly.io runs applications as Firecracker microVMs on hardware it operates itself, deployed from a Dockerfile through the flyctl CLI and billed by usage.
infraContract:
  - owns-metal
whoManagesOs: self-managed
runtimes:
  - docker
deployMethods:
  - docker-image
persistentStorage: true
managedDatabases:
  - postgres
pricingModel: usage-based
priceFrom: xs
priceTo: lg
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
exitWithin: a-day
entryPrice: { amount: 2.02, currency: USD, period: month }
freeTier: none
regions:
  - US
  - CA
  - BR
  - GB
  - FR
  - NL
  - DE
  - SE
  - ZA
  - IN
  - SG
  - JP
  - AU
supportChannels:
  - forum
social:
  github: https://github.com/superfly
cliTool: official
status: active
checkedAt: 2026-08-12
sources:
  - { field: entryPrice, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://fly.io/docs/reference/regions/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://fly.io/docs/reference/regions/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: priceTo, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://fly.io/docs/about/billing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://fly.io/docs/about/billing/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://fly.io/docs/about/billing/', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: persistentStorage, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: supportChannels, url: 'https://fly.io/docs/', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://fly.io/docs/launch/deploy/', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://fly.io/docs/launch/deploy/', checkedAt: 2026-07-31 }
figure:
  emoji: ✈️
  color: rgb(45, 142, 190)
  textColor: rgb(234, 242, 246)
  text: Fly high.
---

Fly.io runs applications as Firecracker microVMs, which it calls Machines, on hardware it describes as "servers we run ourselves" spread across regions on several continents. Deployment is a CLI operation: `fly deploy` builds the app from an explicitly named image, a `[build]` section in `fly.toml` or a Dockerfile in the working directory, then starts it on one or more Machines.

Billing is usage-based throughout, pro-rated to the second for compute and to the hour for storage. Compute, volumes, snapshots, bandwidth, dedicated IPv4 addresses and Managed Postgres are each metered on their own line. There is no free tier for new customers; the older hobby allowances are legacy.

## Worth knowing

Because the invoice is assembled from those separate meters, what a given application costs is only knowable once it has run.

The platform stops at the machine boundary. Fly manages Machines; the stack inside them — runtime version, extensions, web server configuration and their upgrades — lives in the customer's own Docker image.
