---
id: exoscale
name: Exoscale
urls:
  home: https://www.exoscale.com
  pricing: https://www.exoscale.com/pricing/
  status: https://exoscalestatus.com/
category: iaas
description: Swiss infrastructure provider offering KVM instances, managed Kubernetes, object and block storage and managed databases across eight European zones.
founded: 2011
hqCountry: CH
ownership: subsidiary
parent: A1 Telekom Austria Group
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
  - api
  - cli
  - control-panel
  - docker-image
sshAccess: full
managedDatabases:
  - postgres
  - mysql
  - kafka
  - opensearch
  - valkey
pricingModel: hourly
entryPriceBand: 5-15
entryPrice: { amount: 0.0056, currency: EUR, period: hour }
freeTier: none
regions:
  - CH
  - AT
  - DE
  - HR
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.exoscale.com/pricing/', checkedAt: 2026-08-01 }
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
  color: rgb(45, 25, 30)
  textColor: rgb(255, 200, 190)
  text: Swiss face, Austrian owner.
ai: authored
---

## About Exoscale

Exoscale is the trading name of Akenes SA in Lausanne, founded in 2011. Despite the Swiss identity it is a member of A1 Digital, part of the Vienna-listed A1 Telekom Austria Group, so ownership traces to an Austrian telco.

Eight zones span five countries — Geneva and Zurich, Vienna twice, Frankfurt, Munich, Sofia and Zagreb — each fully independent so that a zone failure does not propagate. The catalogue runs to compute instances, dedicated hypervisors, SKS managed Kubernetes, object and block storage, managed PostgreSQL, MySQL, Kafka, OpenSearch, Valkey and Grafana, plus DNS, KMS, IAM and GPU instances. The platform is CloudStack-derived, which is why Apache Libcloud can drive it directly, and there is a community-maintained Ansible collection alongside the official CLI and Terraform provider. Every documentation page is also served as Markdown by appending `index.md` — a small thing that says a lot about who the docs are written for.

## Reservations

This is infrastructure, not a platform: nothing here builds an application, and the customer owns everything above the operating-system image. Billing is per second with no fixed monthly plan, so cost prediction requires modelling. There is no free tier beyond the free Kubernetes control plane, and support past the basic tier is a paid monthly subscription on top of usage.

The pricing page enumerates CH-GVA-2, CH-DK-2, AT-VIE-1, AT-VIE-2, DE-FRA-1 and HR-ZAG-1. The Sofia zone named in the marketing copy does not appear on it, so Bulgaria is not recorded here.
