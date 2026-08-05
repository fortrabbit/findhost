---
id: firebase
name: Firebase
urls:
  home: https://firebase.google.com
  pricing: https://firebase.google.com/pricing
  status: https://status.firebase.google.com/
category:
  - serverless
description: Firebase is Google's application platform, bundling a document database, authentication and storage with hosting that builds framework applications onto Cloud Run.
ownership: subsidiary
parent: Alphabet
whoManagesOs: provider
useCases:
  - api
  - saas
  - ai-app
  - side-project
  - static-site
audience:
  - solo
  - startup
  - smb
  - enterprise
software:
  - nextjs
  - astro
  - nuxt
runtimes:
  - node
  - python
  - static
deployMethods:
  - cli
  - git-integration
  - api
sshAccess: none
pricingModel: usage-based
priceFrom: xs
billingPeriods:
  - monthly
billingTiming: arrears
freeTier: permanent
status: active
checkedAt: 2026-08-01
sources:
  - { field: priceFrom, url: 'https://firebase.google.com/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://docs.cloud.google.com/billing/docs/how-to/billing-cycle', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://docs.cloud.google.com/billing/docs/how-to/billing-cycle', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://firebase.google.com/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://firebase.google.com/pricing', checkedAt: 2026-08-01 }
apiAvailable: public
cliTool: official
figure:
  emoji: 🔥
  color: rgb(60, 40, 10)
  textColor: rgb(255, 215, 150)
  text: A friendlier surface over Google Cloud.
ai: authored
---

Firebase is Google's application platform: a document database, authentication, storage, messaging and analytics, with App Hosting building framework applications onto Cloud Run and Cloud Functions running the customer's own code. It is not a separate cloud so much as a friendlier surface over Google Cloud, and the underlying products — Cloud Build, Artifact Registry, Cloud Logging, Secret Manager — are named openly in the billing.

There are two plans: a free one that needs no payment method and covers part of the platform, and a pay-as-you-go one that unlocks the rest while keeping monthly free allowances inside it. Deployment goes through the Firebase CLI or a git integration, and the platform has a public API.

## Worth knowing

The pay-as-you-go plan has no spending ceiling. Free allowances renew monthly and everything past them bills automatically; budget alerts notify rather than stop.

Regional detail is inconsistent. Some no-cost quotas apply only in named US regions, everything else follows Google Cloud's regional pricing on a separate page, and no Firebase page enumerates where Hosting or App Hosting actually run — so no regions are recorded here.
