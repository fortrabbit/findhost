---
id: bubble
name: Bubble
urls:
  home: https://bubble.io
  docs: https://manual.bubble.io
category: lcnc
description: Bubble is a no-code app builder that combines UI design with database and workflow tools.
regions:
  - US
runsOn:
  - aws
priceFrom: md
priceTo: xl
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://manual.bubble.io/help-guides/optimizing-an-application/hosting-and-scaling/how-bubble-hosting-works', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://manual.bubble.io/account-and-marketplace/account-and-billing/pricing-plans', checkedAt: 2026-08-02 }
  - { field: runsOn, url: 'https://manual.bubble.io/help-guides/optimizing-an-application/hosting-and-scaling/how-bubble-hosting-works', checkedAt: 2026-08-01 }
figure:
  emoji: 🫧
  color: rgb(70, 110, 120)
  textColor: rgb(200, 240, 245)
  text: No code in, no code out.
---

## About Bubble

Bubble is a no-code platform for building full web applications: a visual editor for the interface, a workflow engine for the logic, and an integrated database behind both. Founded in 2012 in New York, it is used for prototypes, internal tools and early-stage products, where a first version ships without an engineering team. Applications are hosted by Bubble itself, on infrastructure it rents from AWS.

## Worth knowing

The application runs only on Bubble's infrastructure and the logic cannot be exported as code. Data comes out through CSV export or the API; the application does not. Moving off the platform is a rebuild rather than a migration.
