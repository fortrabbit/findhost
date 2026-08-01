---
id: scaleway
name: Scaleway
urls:
  home: https://www.scaleway.com
  pricing: https://www.scaleway.com/en/pricing/
  status: https://status.scaleway.com/
category: iaas
description: French cloud provider selling instances, bare metal, managed Kubernetes, serverless containers and managed databases, with European data residency as the pitch.
founded: 1999
hqCountry: FR
ownership: subsidiary
parent: iliad Group
whoManagesOs: you
infraContract:
  - owns-metal
useCases:
  - saas
  - api
  - data-pipeline
  - ai-app
  - background-jobs
  - internal-tool
audience:
  - startup
  - smb
  - enterprise
  - government
  - agency
runtimes:
  - docker
  - any
deployMethods:
  - api
  - cli
  - control-panel
  - docker-image
sshAccess: full
managedDatabases:
  - postgres
  - mysql
  - redis
  - mongodb
pricingModel: hourly
regions:
  - FR
  - NL
  - PL
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://www.scaleway.com/en/virtual-instances/', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.scaleway.com/en/about-us/', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://www.scaleway.com/en/about-us/', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.scaleway.com/en/about-us/', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://www.scaleway.com/en/datacenter/', checkedAt: 2026-08-01 }
figure:
  emoji: 🐿️
  color: rgb(45, 25, 55)
  textColor: rgb(225, 190, 250)
  text: Dedibox grew up into a cloud.
ai: authored
---

## About Scaleway

Scaleway is one of the two French clouds of any scale, incorporated as Scaleway SAS with a copyright line running back to 1999 — it began as Dedibox, the dedicated-server brand, and the bare-metal heritage is still the most distinctive part of the catalogue. Dedibox, Elastic Metal, Apple Mac minis and Dedirack colocation sit alongside conventional instances, GPU instances up to H100, object, block and cold storage, managed PostgreSQL, MySQL, Redis, MongoDB and ClickHouse, Kubernetes, serverless containers and functions, transactional email and observability.

The commercial argument is jurisdictional: European data centres, GDPR compliance and HDS certification for health data. Several other platforms in this dataset — Clever Cloud and Scalingo among them — rent capacity from Scaleway rather than owning their own.

## Reservations

The catalogue is very wide and priced per product, so no single entry price describes it and none is recorded here. The pricing page links to a separate availability matrix rather than naming its regions; the three of them — Paris, Amsterdam and Warsaw — are stated on the product pages instead. Ownership is disclosed on the about page rather than beside the prices: Scaleway is a subsidiary of the iliad Group. Serverless products aside, this is infrastructure — the customer owns everything above the operating system.
