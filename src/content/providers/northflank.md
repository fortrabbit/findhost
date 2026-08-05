---
id: northflank
name: Northflank
urls:
  home: https://northflank.com
  pricing: https://northflank.com/pricing
  status: https://status.northflank.com/
  docs: https://northflank.com/docs
category:
  - paas
description: British platform running containers, jobs and managed databases on its own cloud, in the customer's cloud account, or on a self-hosted Kubernetes cluster.
hqCountry: GB
ownership: vc-backed
whoManagesOs: you
infraContract:
  - resells-iaas
  - byo-iaas
useCases:
  - saas
  - api
  - ai-app
  - background-jobs
  - data-pipeline
  - internal-tool
audience:
  - startup
  - smb
  - enterprise
  - agency
runtimes:
  - docker
  - node
  - python
  - go
  - java
  - any
deployMethods:
  - git-integration
  - docker-image
  - cli
  - api
pricingModel: usage-based
priceFrom: xs
priceTo: xl
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
exitWithin: a-day
billingTiming: arrears
entryPrice: { amount: 2.7, currency: USD, period: month }
freeTier: permanent
regions:
  - US
  - CA
  - DE
  - NL
  - CH
  - IN
  - AU
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://northflank.com/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://northflank.com/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://northflank.com/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://northflank.com/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://northflank.com/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://northflank.com/pricing', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://northflank.com/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://northflank.com/pricing', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://northflank.com/docs/v1/application/getting-started/create-a-project', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://northflank.com/pricing', checkedAt: 2026-08-01 }
figure:
  emoji: 🧱
  color: rgb(25, 30, 45)
  textColor: rgb(180, 195, 230)
  text: Your cloud or theirs, same console.
ai: authored
---

Northflank runs long-lived services, cron jobs, build pipelines and managed databases from a single console. Compute is billed per vCPU-hour and gigabyte-hour with per-second granularity and no per-seat charge, and GPU instances are rented by the hour alongside the CPU ones. A permanent free sandbox tier covers a small number of services, jobs and one database.

The distinguishing choice is where the work runs. The same platform will use Northflank's own managed cloud, deploy into the customer's account at one of the large public clouds, or drive a self-hosted Kubernetes cluster — which turns the question of who owns the infrastructure into a per-project setting rather than a decision made when signing up. That is why the record carries two infrastructure contracts rather than one.

## Worth knowing

Bring-your-own-cloud shifts the infrastructure bill to the customer's cloud account, so the Northflank price and the total cost are separate numbers. The headline region count belongs to those underlying clouds rather than to Northflank, and its own managed region list names a country or city for only some entries; the regions recorded here are the ones that do.
