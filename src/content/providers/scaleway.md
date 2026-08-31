---
id: scaleway
name: Scaleway
urls:
  home: https://www.scaleway.com
  pricing: https://www.scaleway.com/en/pricing/
  status: https://status.scaleway.com/
category:
  - vps
  - bare-metal
  - serverless
description: French cloud provider selling instances, bare metal, managed Kubernetes, serverless containers and managed databases, with European data residency as the pitch.
founded: 1999
hqCountry: FR
ownership: subsidiary
parent: iliad
whoManagesOs: self-managed
infraContract:
  - owns-metal
useCases:
  - web-app
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
  - control-panel
  - docker-image
sshAccess: root
managedDatabases:
  - postgres
  - mysql
  - redis
  - mongodb
pricingModel: hourly
priceFrom: xs
priceTo: xl
currencies:
  - EUR
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
exitWithin: a-day
regions:
  - FR
  - NL
  - PL
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
sla: true
referringSubnets: { now: 3874, before: 3878 }
status: active
checkedAt: 2026-08-01
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: greenWebId, url: 'https://app.greenweb.org/directory/#925', checkedAt: 2026-08-10 }
  - { field: regions, url: 'https://www.scaleway.com/en/virtual-instances/', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.scaleway.com/en/about-us/', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://www.scaleway.com/en/about-us/', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.scaleway.com/en/about-us/', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://www.scaleway.com/en/datacenter/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.scaleway.com/en/pricing/virtual-instances/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.scaleway.com/en/pricing/virtual-instances/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.scaleway.com/en/pricing/virtual-instances/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.scaleway.com/en/pricing/virtual-instances/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.scaleway.com/en/pricing/virtual-instances/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.scaleway.com/en/pricing/virtual-instances/', checkedAt: 2026-08-02 }
  - { field: sla, url: 'https://www.scaleway.com/en/virtual-instances/sla/', checkedAt: 2026-08-30 }
figure:
  emoji: 🐿️
  color: rgb(132, 73, 161)
  textColor: rgb(242, 234, 245)
  text: Dedibox grew up into a cloud.
ai: authored
gpuCapacity:
  - instances
greenWebId: 925
---

Scaleway is one of the two French clouds of any scale, a subsidiary of the iliad Group with a history running back to Dedibox, the dedicated-server brand — and the bare-metal heritage is still the most distinctive part of the catalogue. Dedicated servers, bare-metal instances, Apple hardware and colocation sit alongside conventional and GPU instances, object, block and cold storage, managed relational and document databases, Kubernetes, serverless containers and functions, transactional email and observability. It owns and operates its own data centres.

The commercial argument is jurisdictional: European data centres, GDPR compliance and certification for regulated data such as health records. Several other platforms in this dataset, Clever Cloud and Scalingo among them, rent capacity from Scaleway rather than owning their own.

## Worth knowing

The catalogue is wide and priced per product, and the [service level agreement](https://www.scaleway.com/en/virtual-instances/sla/) is written the same way: instances commit to 99% on shared machines and 99.5% on dedicated ones, while development instances carry no commitment at all. No single entry price describes the range, so none is recorded here. Regions are not named on the pricing page either; it links to a separate availability matrix, and the locations appear on the individual product pages instead.
