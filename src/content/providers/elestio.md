---
id: elestio
name: Elestio
urls:
  home: https://elest.io
  pricing: https://elest.io/pricing
  status: https://status.elest.io
  terms: https://elest.io/terms
  docs: https://docs.elest.io/
category: server-management
description: Managed hosting for open-source software on dedicated virtual machines, provisioned into one of nine third-party clouds or the customer's own account.
hqCountry: IE
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
entryPrice: { amount: 11, currency: USD, period: month }
freeTier: none
supportChannels:
  - email
  - phone
supportHours: business-hours
supportTiering: paid-upgrade
certifications:
  - ISO 27001
  - SOC 2
social:
  github: https://github.com/elestio
  linkedin: https://www.linkedin.com/company/elestio
  youtube: https://www.youtube.com/@elestio
  x: https://twitter.com/elest_io
  discord: https://discord.gg/4T4JGaMYrD
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://elest.io/pricing', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://elest.io/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://elest.io/pricing', checkedAt: 2026-08-01 }
  - { field: supportTiering, url: 'https://elest.io/pricing', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://elest.io/pricing', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://elest.io/', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://elest.io/', checkedAt: 2026-08-01 }
  - { field: certifications, url: 'https://elest.io/', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://elest.io/', checkedAt: 2026-08-01 }
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

Support is tiered: a free level with seven-day backup retention and three-day response, then fifty and two hundred dollars a month for faster answers and phone access. The response windows on the paid tiers are qualified as applying during business hours, so none of them is a round-the-clock commitment.

The footer names Elestio at a registered address in Dublin, which is the only place the operating jurisdiction is stated.

## Reservations

The advertised entry price is the management fee on a small machine; the underlying cloud capacity and any meaningful support tier are separate lines, so the total is a sum rather than a figure. Nothing here owns hardware, which means availability and jurisdiction are inherited from whichever provider is chosen — the choice, and its consequences, stay with the customer.
