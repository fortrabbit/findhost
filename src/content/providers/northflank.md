---
id: northflank
name: Northflank
urls:
  home: https://northflank.com
  pricing: https://northflank.com/pricing
  status: https://status.northflank.com/
category: paas
description: British platform running containers, jobs and managed databases on its own cloud, in the customer's cloud account, or on a self-hosted Kubernetes cluster.
hqCountry: GB
ownership: vc-backed
whoManagesOs: container
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
entryPriceBand: free-tier
freeTier: permanent
apiAvailable: public
cliTool: official
figure:
  emoji: 🧱
  color: rgb(25, 30, 45)
  textColor: rgb(180, 195, 230)
  text: Your cloud or theirs, same console.
ai: authored
---

## About Northflank

Northflank runs services, cron jobs, build pipelines and managed databases from a single console, priced per vCPU-hour and gigabyte-hour with per-second billing and no seat charges. GPUs are available by the hour up to H100 and RTX PRO 6000.

The distinguishing choice is where the work runs. The same platform will use Northflank's own managed cloud, deploy into the customer's AWS, GCP, Azure, Civo, Oracle or CoreWeave account, or drive a self-hosted Kubernetes cluster — which turns the question of who owns the infrastructure into a per-project setting rather than a decision about which vendor to sign with. That is why the record carries two infrastructure contracts rather than one.

A free Sandbox tier allows two services, one database and two cron jobs.

## Reservations

Bring-your-own-cloud shifts the infrastructure bill to the customer's cloud account, so the Northflank price and the total cost are different numbers, and the six hundred-plus advertised regions are the underlying clouds' regions rather than Northflank's. Volume discounts and dedicated support are enterprise-only and quoted rather than published.
