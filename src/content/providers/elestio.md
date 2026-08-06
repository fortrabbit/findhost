---
id: elestio
name: Elestio
urls:
  home: https://elest.io
  pricing: https://elest.io/pricing
  status: https://status.elest.io
  terms: https://elest.io/terms
  docs: https://docs.elest.io/
category:
  - server-management
description: Elestio is managed hosting for open-source software on dedicated virtual machines, provisioned into a third-party cloud or into the customer's own account.
hqCountry: IE
whoManagesOs: provider
infraContract:
  - resells-iaas
  - byo-iaas
useCases:
  - internal-tool
  - web-app
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
sshAccess: jailed
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - redis
pricingModel: per-resource
priceFrom: sm
priceTo: lg
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
entryPrice: { amount: 11, currency: USD, period: month }
freeTier: none
supportChannels:
  - email
  - phone
supportHours: business-hours
supportTiering: paid-upgrade
certifications:
  - iso-27001
  - soc-2
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
  - { field: priceFrom, url: 'https://elest.io/pricing', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://elest.io/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://elest.io/terms', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://elest.io/terms', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://elest.io/terms', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://elest.io/terms', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://elest.io/pricing', checkedAt: 2026-08-01 }
  - { field: supportTiering, url: 'https://elest.io/pricing', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://elest.io/pricing', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://elest.io/', checkedAt: 2026-08-01 }
  - { field: certifications, url: 'https://elest.io/', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://elest.io/', checkedAt: 2026-08-01 }
figure:
  emoji: 🧑‍🔧
  color: rgb(35, 30, 55)
  textColor: rgb(200, 190, 250)
  text: Someone else patches your open source.
ai: authored
---

Elestio takes an open-source application, puts it on a dedicated virtual machine and then keeps it running: automated updates, OS patching, backups, TLS certificates and monitoring, with the customer keeping full access to the machine. The catalogue runs to several hundred applications, from PostgreSQL, MySQL, Redis and MongoDB through WordPress, n8n and Keycloak to GPU-backed AI tooling.

The infrastructure is somebody else's, and openly so: capacity is provisioned into Hetzner, DigitalOcean, AWS Lightsail, Vultr, Linode, Scaleway and Netcup among others, or into the customer's own cloud account. That makes Elestio a management layer rather than a host. Support is tiered, with a free level and paid levels buying faster response and phone access; the response windows are qualified as applying during business hours. The footer names a registered address in Dublin, which is the only place the operating jurisdiction is stated.

## Worth knowing

The advertised entry price is the management fee on a small machine. The underlying cloud capacity and any paid support tier are separate lines, so the total is a sum rather than a figure, and because Elestio owns no hardware, availability and jurisdiction are inherited from whichever provider the customer picks.
