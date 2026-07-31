---
id: fly
name: Fly.io
url: https://fly.io
category: paas
pricingUrl: https://fly.io/docs/about/pricing/
description: Fly.io runs Firecracker microVMs on its own servers in 18 regions, deployed from a Dockerfile through the flyctl CLI and billed purely by usage.
infraContract: owns-metal
whoManagesOs: container
runtimes:
  - docker
deployMethods:
  - cli
  - docker-image
persistentStorage: true
managedDatabases:
  - postgres
pricingModel: usage-based
entryPriceBand: under-5
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
checkedAt: 2026-07-31
sources:
  - { field: infraContract, url: 'https://fly.io/docs/reference/regions/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://fly.io/docs/reference/regions/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: persistentStorage, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: supportChannels, url: 'https://fly.io/docs/', checkedAt: 2026-07-31 }
  - { field: social, url: 'https://fly.io/docs/', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://fly.io/docs/about/pricing/', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://fly.io/docs/launch/deploy/', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://fly.io/docs/launch/deploy/', checkedAt: 2026-07-31 }
figure:
  emoji: ✈️
  color: rgb(100, 180, 220)
  textColor: rgb(75, 75, 112)
  text: Fly high.
ai: co-authored
---

## About Fly.io

Fly.io runs applications as Firecracker microVMs — Machines — across 18 regions in 13 countries, on hardware it describes as "servers we run ourselves". Deployment is a CLI operation: `fly deploy` builds the app from an explicitly named image, a `[build]` section in `fly.toml`, or a Dockerfile in the working directory, then starts it on one or more Machines. The docs are blunt about the alternative: "don't use buildpacks if you don't have to; they're brittle, bloated, and prone to change."

Billing is usage-based throughout, pro-rated to the second for compute and to the hour for storage. The smallest Machine — one shared CPU, 256 MB — works out at about $2.02 a month. Volumes are $0.15 per GB per month, egress $0.02 per GB in North America and Europe, a dedicated IPv4 address $2 a month, and Managed Postgres is priced separately again. There is no free tier for new customers; the old Hobby allowances are legacy.

## Reservations

The invoice is assembled from parts. Compute, volumes, snapshots, bandwidth, IP addresses and the database are each metered on their own line, so what an application costs is only knowable after it has run.

The platform also stops at the machine boundary. Fly manages Machines; the application stack inside them — language version, extensions, web server configuration and their upgrades — lives in the customer's own Docker image. Global distribution is the reason to accept that; without a real multi-region requirement it is configuration surface carried for nothing.
