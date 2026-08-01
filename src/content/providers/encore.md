---
id: encore
name: Encore Cloud
urls:
  home: https://encore.dev
  pricing: https://encore.dev/pricing
category: server-management
description: Backend framework for TypeScript and Go with a control plane that provisions the infrastructure it infers from the code, into the customer's AWS or GCP account.
whoManagesOs: container
infraContract:
  - byo-iaas
  - resells-iaas
useCases:
  - api
  - saas
  - background-jobs
  - data-pipeline
audience:
  - startup
  - smb
  - enterprise
runtimes:
  - node
  - go
deployMethods:
  - git-integration
  - cli
  - docker-image
pricingModel: per-resource
entryPriceBand: free-tier
freeTier: permanent
apiAvailable: public
cliTool: official
figure:
  emoji: 🧭
  color: rgb(25, 30, 45)
  textColor: rgb(185, 200, 235)
  text: The code declares the infrastructure.
ai: authored
---

## About Encore Cloud

Encore inverts the usual arrangement. Infrastructure is not configured alongside the application — it is declared inside it, and the platform reads the code to work out which databases, queues, caches and cron jobs need to exist, then provisions them. Local development runs the same topology automatically, and distributed tracing and a service catalogue come from the same source.

TypeScript and Go are the supported languages, both with the full feature set. Production deploys into the customer's own AWS or GCP account, so the cloud relationship and the bill stay with them; two free development environments run on Encore's own infrastructure. The platform generates Docker images specifically so that leaving is possible.

Pricing is a per-seat fee from forty-nine dollars a month, plus ninety-nine per cloud environment and $2.50 per provisioned resource.

## Reservations

Three separate meters — seats, environments and individual resources — make the monthly total hard to predict before the architecture is settled, and a service-heavy design is charged for its granularity. The free tier covers development environments only, not production. Because production runs in the customer's cloud account, the Encore invoice and the cost of actually running the application are entirely different numbers.
