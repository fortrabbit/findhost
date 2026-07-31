---
id: digitalocean
name: DigitalOcean
url: https://www.digitalocean.com
category: vps
pricingUrl: https://www.digitalocean.com/pricing/droplets
statusUrl: https://status.digitalocean.com
description: DigitalOcean is a publicly listed cloud provider best known for Droplets, its VPS product, alongside managed databases, Kubernetes and an app platform.
founded: 2012
hqCountry: US
ownership: public
whoManagesOs: you
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
sshAccess: full
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
entryPriceBand: under-5
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
checkedAt: 2026-07-31
sources:
  - { field: founded, url: 'https://www.digitalocean.com/about', checkedAt: 2026-07-31 }
  - { field: ownership, url: 'https://investors.digitalocean.com/overview/default.aspx', checkedAt: 2026-07-31 }
  - { field: hqCountry, url: 'https://www.digitalocean.com/company', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://www.digitalocean.com/pricing/droplets', checkedAt: 2026-07-31 }
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
  - { field: social, url: 'https://www.digitalocean.com/', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://www.digitalocean.com/', checkedAt: 2026-07-31 }
figure:
  emoji: 🐟
  color: rgb(0, 170, 255)
  textColor: rgb(0, 50, 200)
  text: Stop wrestling with Linux.
ai: co-authored
---

## About DigitalOcean

DigitalOcean Holdings, Inc. was founded in 2012 and trades on the New York Stock Exchange as DOCN. It started with a single product — the Droplet, a virtual private server — and has since added block storage, managed databases, managed Kubernetes, object storage, serverless functions and an application platform. It acquired [Cloudways](/providers/cloudways/) in 2022.

Droplets are billed per second against fixed plan rates, with a minimum charge of sixty seconds; the smallest plan is listed at $4.00 a month. Backups are a paid add-on at 20 per cent of the Droplet cost for weekly copies or 30 per cent for daily. Managed database clusters cover PostgreSQL, MySQL, MongoDB, Valkey, OpenSearch and Kafka.

The documented tooling is unusually complete for the segment: a public REST API, the open-source `doctl` CLI, a Terraform provider, Ansible modules and a set of MCP servers for use from MCP-compatible clients.

## Reservations

A Droplet is an unconfigured Linux machine. Setting it up and keeping it patched is a standing commitment that the hourly price does not cover, and the work does not stop after the first deployment. The Droplet price is also only part of the bill — backups, block storage, load balancers and managed databases are metered separately, so the entry figure is not the running cost.
