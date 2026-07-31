---
id: latitude-sh
name: Latitude.sh
url: https://www.latitude.sh
category: iaas
pricingUrl: https://www.latitude.sh/pricing
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
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
figure:
  emoji: 🛰️
  color: rgb(25, 30, 40)
  textColor: rgb(185, 200, 225)
  text: Bare metal, by the hour.
ai: authored
---

## About Latitude.sh

Latitude.sh sells dedicated hardware the way clouds sell instances: bare-metal servers provisioned automatically and billed by the hour, from around $0.41 to $5.44 depending on the configuration, alongside virtual machines from nine cents, block, file and object storage, managed PostgreSQL and networking. GPU capacity runs from a single H100 at $1.68 an hour to an eight-way HGX B300 cluster at $64.

Hourly bare metal is the distinctive part. Dedicated hardware is normally a monthly commitment, and being able to take a machine for an afternoon changes what it is useful for — which is why the named markets are AI, gaming, crypto and video streaming rather than websites. Reserved pricing cuts the rate by half on a monthly commitment and by around two-thirds on a yearly prepayment. Developer tooling is complete: API, SDKs, CLI and a Terraform provider.

## Reservations

Regions are indicated only as "+2" or "+7" additional zones beside each configuration rather than named, so where a server would actually sit cannot be determined from the pricing page. The company publishes no founding date, location or ownership there either. There is no free tier, and this is raw infrastructure: nothing above the operating system is managed.
