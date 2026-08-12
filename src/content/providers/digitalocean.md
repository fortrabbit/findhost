---
id: digitalocean
name: DigitalOcean
urls:
  home: https://www.digitalocean.com
  pricing: https://www.digitalocean.com/pricing/droplets
  status: https://status.digitalocean.com
category:
  - vps
  - paas
description: DigitalOcean is a publicly listed cloud provider best known for Droplets, its VPS product, alongside managed databases, Kubernetes and an app platform.
founded: 2012
favorite: true
favoriteNote: Taught a generation of developers what a server actually costs.
hqCountry: US
ownership: public
whoManagesOs: self-managed
useCases:
  - ai-app
audience:
  - startup
  - smb
  - enterprise
social:
  x: https://twitter.com/digitalocean
  linkedin: https://www.linkedin.com/company/digitalocean/
  github: https://github.com/digitalocean
  facebook: https://www.facebook.com/DigitalOceanCloudHosting
  youtube: https://www.youtube.com/DigitalOcean
  discord: https://discord.gg/digitalocean
runtimes:
  - any
sshAccess: root
persistentStorage: true
backupsIncluded: paid-addon
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - valkey
  - opensearch
  - kafka
pricingModel: hourly
priceFrom: xs
priceTo: xl
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
exitWithin: a-day
entryPrice: { amount: 4, currency: USD, period: month }
contractMinimum: none
regions:
  - US
  - NL
  - SG
  - GB
  - DE
  - CA
  - IN
  - AU
apiAvailable: public
cliTool: official
mcpServer: official
iacSupport:
  - terraform
  - ansible
status: active
checkedAt: 2026-08-12
sources:
  - { field: domainRegistration, url: 'https://docs.digitalocean.com/products/networking/dns/', checkedAt: 2026-08-12 }
  - { field: entryPrice, url: 'https://www.digitalocean.com/pricing/droplets', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.digitalocean.com/about', checkedAt: 2026-07-31 }
  - { field: ownership, url: 'https://investors.digitalocean.com/overview/default.aspx', checkedAt: 2026-07-31 }
  - { field: hqCountry, url: 'https://www.digitalocean.com/company', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://www.digitalocean.com/pricing/droplets', checkedAt: 2026-07-31 }
  - { field: priceTo, url: 'https://www.digitalocean.com/pricing/droplets', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.digitalocean.com/pricing/droplets', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.digitalocean.com/pricing/droplets', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://docs.digitalocean.com/platform/billing/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.digitalocean.com/legal/terms-of-service-agreement', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://www.digitalocean.com/pricing/droplets', checkedAt: 2026-07-31 }
  - { field: contractMinimum, url: 'https://www.digitalocean.com/pricing/droplets', checkedAt: 2026-07-31 }
  - { field: backupsIncluded, url: 'https://www.digitalocean.com/pricing/droplets', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://docs.digitalocean.com/platform/regional-availability/', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://www.digitalocean.com/products/managed-databases', checkedAt: 2026-07-31 }
  - { field: persistentStorage, url: 'https://docs.digitalocean.com/products/droplets/details/features/', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://docs.digitalocean.com/reference/', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://docs.digitalocean.com/reference/', checkedAt: 2026-07-31 }
  - { field: mcpServer, url: 'https://docs.digitalocean.com/reference/', checkedAt: 2026-07-31 }
  - { field: iacSupport, url: 'https://docs.digitalocean.com/reference/', checkedAt: 2026-07-31 }
  - { field: useCases, url: 'https://www.digitalocean.com/', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://www.digitalocean.com/', checkedAt: 2026-07-31 }
figure:
  emoji: 🐟
  color: rgb(45, 142, 190)
  textColor: rgb(234, 242, 246)
  text: Virtual machines, billed by the second.
domainRegistration: none
---

DigitalOcean Holdings, Inc. trades on the New York Stock Exchange as DOCN. It started with a single product — the Droplet, a virtual private server — and has since added block storage, managed databases, managed Kubernetes, object storage, serverless functions and an application platform. It acquired [Cloudways](/cloudways/) in 2022.

Droplets are billed per second against fixed plan rates, with a one-minute minimum charge. Backups are a paid add-on priced as a percentage of the Droplet cost, and block storage, load balancers and managed database clusters are metered separately, so a Droplet's plan rate is not the whole bill. The tooling is documented in one place: a public REST API, the open-source `doctl` CLI, a Terraform provider, Ansible modules and a set of MCP servers.
