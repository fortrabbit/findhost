---
id: latitude-sh
name: Latitude.sh
urls:
  home: https://www.latitude.sh
  pricing: https://www.latitude.sh/pricing
category: iaas
description: Bare-metal and GPU infrastructure billed hourly with automated provisioning, an API, SDKs, a CLI and Terraform support.
whoManagesOs: you
infraContract:
  - owns-metal
useCases:
  - ai-app
  - saas
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
  - api
  - cli
  - control-panel
sshAccess: full
managedDatabases:
  - postgres
pricingModel: hourly
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
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://www.latitude.sh/locations', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.latitude.sh/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.latitude.sh/pricing', checkedAt: 2026-08-01 }
figure:
  emoji: 🛰️
  color: rgb(25, 30, 40)
  textColor: rgb(185, 200, 225)
  text: Bare metal, by the hour.
ai: authored
---

## About Latitude.sh

Latitude.sh sells dedicated hardware the way clouds sell instances: bare-metal servers provisioned automatically and billed by the hour, alongside virtual machines, block, file and object storage, managed PostgreSQL and networking. GPU capacity ranges from single accelerators to multi-GPU cluster nodes.

Hourly bare metal is the distinctive part. Dedicated hardware is normally a monthly commitment, and being able to take a machine for an afternoon changes what it is useful for — the markets the company names are AI, gaming, crypto and video streaming rather than websites. Reserved pricing lowers the rate in exchange for a monthly or yearly commitment. Tooling is complete for infrastructure of this kind: a public API, SDKs, an official CLI and a Terraform provider, so machines can be created and destroyed from code rather than from a ticket.
