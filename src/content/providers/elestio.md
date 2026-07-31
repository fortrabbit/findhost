---
id: elestio
name: Elestio
url: https://elest.io
category: server-management
pricingUrl: https://elest.io/pricing
description: Managed hosting for open-source software on dedicated virtual machines, provisioned into one of nine third-party clouds or the customer's own account.
whoManagesOs: provider
infraContract:
  - resells-iaas
  - byo-iaas
useCases:
  - internal-tool
  - saas
  - api
  - data-pipeline
  - ai-app
  - background-jobs
audience:
  - startup
  - smb
  - agency
  - enterprise
software:
  - wordpress
  - n8n
  - directus
  - strapi
runtimes:
  - docker
  - any
deployMethods:
  - control-panel
  - docker-image
  - git-integration
sshAccess: full
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - redis
pricingModel: per-resource
entryPriceBand: 5-15
freeTier: none
supportChannels:
  - email
  - phone
supportTiering: paid-upgrade
figure:
  emoji: 🧑‍🔧
  color: rgb(35, 30, 55)
  textColor: rgb(200, 190, 250)
  text: Someone else patches your open source.
ai: authored
---

## About Elestio

Elestio takes an open-source application, puts it on a dedicated virtual machine, and then keeps it running: automated updates, OS patching, backups, TLS certificates and round-the-clock monitoring, with the customer keeping full access to the machine. More than four hundred applications are on offer, from PostgreSQL, MySQL, Redis and MongoDB through WordPress, n8n and Keycloak to GPU-backed AI tooling.

The infrastructure is somebody else's, and openly so. Nine providers are supported — Hetzner, DigitalOcean, AWS Lightsail, Vultr, Linode, Scaleway and Netcup among them — across a stated 160-plus regions in forty-plus countries, and workloads can be placed in the customer's own cloud account. That makes it a management layer rather than a host, which is why it sits in the server-management category.

Support is tiered: a free level with seven-day backup retention and three-day response, then fifty and two hundred dollars a month for faster answers and phone access.

## Reservations

The advertised entry price is the management fee on a small machine; the underlying cloud capacity and any meaningful support tier are separate lines, so the total is a sum rather than a figure. Nothing here owns hardware, which means availability and jurisdiction are inherited from whichever provider is chosen — the choice, and its consequences, stay with the customer.
