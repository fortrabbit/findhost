---
id: exoscale
name: Exoscale
urls:
  home: https://www.exoscale.com
  pricing: https://www.exoscale.com/pricing/
  status: https://exoscalestatus.com/
category:
  - vps
description: Exoscale is a Swiss infrastructure provider selling KVM instances, managed Kubernetes, object and block storage and managed databases from European zones.
founded: 2011
hqCountry: CH
ownership: subsidiary
parent: a1-telekom-austria
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
  - game-server
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
  - kafka
  - opensearch
  - valkey
pricingModel: hourly
priceFrom: sm
priceTo: xl
currencies:
  - CHF
  - EUR
  - USD
billingPeriods:
  - hourly
  - monthly
exitWithin: a-day
entryPrice: { amount: 0.0056, currency: EUR, period: hour }
freeTier: none
dnsHosting: included
cdnIncluded: included
regions:
  - CH
  - AT
  - DE
  - HR
status: active
checkedAt: 2026-08-12
sources:
  - { field: regions, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.exoscale.com/terms/', checkedAt: 2026-08-02 }
  - { field: dnsHosting, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-12 }
  - { field: cdnIncluded, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-12 }
supportChannels:
  - email
  - chat
supportTiering: paid-upgrade
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
social:
  linkedin: https://www.linkedin.com/company/exoscale/
  github: https://github.com/exoscale
figure:
  emoji: 🇨🇭
  color: rgb(157, 77, 97)
  textColor: rgb(245, 234, 237)
  text: Swiss face, Austrian owner.
ai: authored
gpuCapacity:
  - instances
---

Exoscale is the trading name of Akenes SA in Lausanne. Despite the Swiss identity it belongs to A1 Digital, part of the Vienna-listed A1 Telekom Austria Group, so ownership traces back to an Austrian telco.

Zones sit in Switzerland, Austria, Germany and Croatia, each one independent so that a zone failure does not propagate. The catalogue covers compute instances, dedicated hypervisors, SKS managed Kubernetes, object and block storage, managed PostgreSQL, MySQL, Kafka, OpenSearch, Valkey and Grafana, plus DNS, KMS, IAM and GPU instances. The platform is CloudStack-derived, which is why Apache Libcloud can drive it directly, and a community-maintained Ansible collection sits alongside the official CLI and Terraform provider. Documentation pages are served as Markdown as well as HTML, by appending `index.md` to the URL.

## Worth knowing

The pricing page and the marketing copy do not agree on the zone list: a Sofia zone named in the copy has no entry on the pricing page, so Bulgaria is not recorded here.
