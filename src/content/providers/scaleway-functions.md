---
id: scaleway-functions
name: Scaleway Functions
urls:
  home: https://www.scaleway.com/en/serverless-functions/
  pricing: https://www.scaleway.com/en/serverless-functions/
category: serverless
description: European function-as-a-service from Scaleway, running Node, Python, Go, Rust and PHP handlers billed by request and by memory consumed.
whoManagesOs: provider
useCases:
  - api
  - background-jobs
runtimes:
  - php
  - node
  - python
  - go
  - rust
persistentStorage: false
pricingModel: usage-based
priceFrom: xs
priceTo: lg
currencies:
  - EUR
billingPeriods:
  - monthly
billingTiming: arrears
exitWithin: a-month
regions:
  - FR
  - NL
  - PL
status: active
checkedAt: 2026-07-31
sources:
  - { field: runtimes, url: 'https://www.scaleway.com/en/serverless-functions/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://www.scaleway.com/en/serverless-functions/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://www.scaleway.com/en/serverless-functions/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://www.scaleway.com/en/pricing/serverless/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.scaleway.com/en/pricing/serverless/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.scaleway.com/en/pricing/serverless/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.scaleway.com/en/pricing/serverless/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.scaleway.com/en/pricing/serverless/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.scaleway.com/en/pricing/serverless/', checkedAt: 2026-08-02 }
figure:
  emoji: 🧵
  color: rgb(50, 30, 70)
  textColor: rgb(200, 170, 255)
  text: Event handlers, billed by the millisecond.
---

Scaleway Functions is the French cloud provider's function-as-a-service, sold beside the rest of the [Scaleway](/scaleway/) catalogue and running in the same European regions. Handlers are deployed as source or as a container, and the documented runtimes are Node, Go, Python, Rust and PHP, each maintained by the provider rather than assembled by the customer as a custom layer.

Billing is usage-based, by request and by memory consumed, charged by the millisecond of execution, with a monthly free allowance the marketing page describes but does not quantify. Functions scale to zero between invocations, and the filesystem is not persistent, so anything that has to survive a request belongs in one of the platform's storage or database products.
