---
id: encore
name: Encore Cloud
urls:
  home: https://encore.dev
  pricing: https://encore.dev/pricing
  docs: https://encore.dev/docs
category:
  - server-management
description: Encore Cloud is a backend framework for TypeScript and Go with a control plane that provisions the infrastructure it infers from the code into the customer's own AWS or GCP account.
ownership: vc-backed
whoManagesOs: self-managed
infraContract:
  - byo-iaas
  - resells-iaas
useCases:
  - api
  - web-app
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
  - git
  - docker-image
pricingModel: per-resource
priceFrom: xl
priceTo: 2xl
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: arrears
exitWithin: a-month
freeTier: permanent
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: priceFrom, url: 'https://encore.dev/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://encore.dev/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://encore.dev/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://encore.dev/legal/terms', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://encore.dev/legal/terms', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://encore.dev/legal/terms', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://encore.dev/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://encore.dev/pricing', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://encore.dev/blog/fun-back-into-software-development', checkedAt: 2026-08-21 }
figure:
  emoji: 🧭
  color: rgb(77, 97, 157)
  textColor: rgb(234, 237, 245)
  text: The code declares the infrastructure.
ai: authored
---

Encore inverts the usual arrangement. Infrastructure is not configured alongside the application, it is declared inside it: the platform reads the code to work out which databases, queues, caches and cron jobs need to exist, then provisions them. Local development runs the same topology automatically, and distributed tracing and a service catalogue come from the same declarations.

TypeScript and Go are the supported languages, both with the full feature set. Production deploys into the customer's own AWS or GCP account, so the cloud relationship and the bill for capacity stay with them, while development environments can run on Encore's own infrastructure. The platform generates Docker images so that an application can be taken elsewhere.

## Worth knowing

Billing runs on three separate meters — seats, cloud environments and individual provisioned resources — so the monthly total is hard to predict before the architecture settles, and a service-heavy design is charged for its granularity. The free tier covers development environments rather than production, and since production runs in the customer's cloud account, the Encore invoice and the cost of running the application are different numbers.
