---
id: latitude-sh
name: Latitude.sh
urls:
  home: https://www.latitude.sh
  pricing: https://www.latitude.sh/pricing
category:
  - bare-metal
description: Bare-metal and GPU infrastructure billed hourly with automated provisioning, an API, SDKs, a CLI and Terraform support.
ownership: subsidiary
whoManagesOs: self-managed
infraContract:
  - owns-metal
useCases:
  - ai-app
  - web-app
  - game-server
  - data-pipeline
  - background-jobs
audience:
  - startup
  - smb
  - enterprise
runtimes:
  - any
  - docker
deployMethods:
  - control-panel
sshAccess: root
managedDatabases:
  - postgres
pricingModel: hourly
priceFrom: lg
priceTo: 2xl
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
  - yearly
billingTiming: arrears
freeTier: none
regions:
  - US
  - CA
  - MX
  - BR
  - AR
  - CL
  - CO
  - GB
  - NL
  - DE
  - SG
  - JP
  - AU
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
referringSubnets: { now: 443, before: 444 }
status: active
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: regions, url: 'https://www.latitude.sh/locations', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.latitude.sh/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.latitude.sh/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.latitude.sh/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.latitude.sh/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.latitude.sh/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.latitude.sh/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.latitude.sh/pricing', checkedAt: 2026-08-02 }
  - { field: ownership, url: 'https://www.megaport.com/blog/megaport-and-latitude-bringing-compute-and-connectivity-together/', checkedAt: 2026-08-21 }
figure:
  emoji: 🛰️
  color: rgb(77, 104, 157)
  textColor: rgb(234, 238, 245)
  text: Bare metal, by the hour.
ai: authored
gpuCapacity:
  - instances
---

Latitude.sh sells dedicated hardware the way clouds sell instances: bare-metal servers provisioned automatically and billed by the hour, alongside virtual machines, block, file and object storage, managed PostgreSQL and networking. GPU capacity ranges from single accelerators to multi-GPU cluster nodes.

[Megaport](https://www.megaport.com/blog/megaport-and-latitude-bringing-compute-and-connectivity-together/), the Australian network-as-a-service company, completed its acquisition of Latitude.sh in November 2025 and states an intention to combine the two into one platform selling compute and network together. The product and the name continue for now.

Hourly bare metal is the distinctive part. Dedicated hardware is normally a monthly commitment, and being able to take a machine for an afternoon changes what it is useful for — the markets the company names are AI, gaming, crypto and video streaming rather than websites. Reserved pricing lowers the rate in exchange for a monthly or yearly commitment. Tooling is complete for infrastructure of this kind: a public API, SDKs, an official CLI and a Terraform provider, so machines can be created and destroyed from code rather than from a ticket.
