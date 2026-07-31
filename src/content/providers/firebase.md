---
id: firebase
name: Firebase
url: https://firebase.google.com
category: serverless
pricingUrl: https://firebase.google.com/pricing
statusUrl: https://status.firebase.google.com/
description: Google's application platform, where App Hosting builds framework applications onto Cloud Run and Cloud Functions runs the customer's own code.
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
  - indie-hacker
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
entryPriceBand: free-tier
freeTier: permanent
apiAvailable: public
cliTool: official
figure:
  emoji: 🔥
  color: rgb(60, 40, 10)
  textColor: rgb(255, 215, 150)
  text: Two plans, and the second has no ceiling.
ai: authored
---

## About Firebase

Firebase is Google's application platform: a document database, authentication, storage, messaging and analytics, with App Hosting building framework applications onto Cloud Run and Cloud Functions running the customer's own code. It is not a separate cloud so much as a friendlier surface over Google Cloud, and the underlying products — Cloud Build, Artifact Registry, Cloud Logging, Secret Manager — are named openly in the billing.

There are two plans. Spark costs nothing and requires no payment method. Blaze is pay-as-you-go and unlocks the rest of the platform, with free allowances that continue inside it: two million function invocations, 400,000 GB-seconds, 200,000 CPU-seconds and five gigabytes of egress a month, then $0.40 per further million invocations. App Hosting includes ten gigabytes of bandwidth and five of storage before charging $0.20 per further gigabyte uncached.

## Reservations

The Blaze plan has no spending ceiling. Free allowances renew monthly and everything past them bills automatically, which has produced well-known surprise invoices when a loop or a crawler found an endpoint — budget alerts exist, but they notify rather than stop.

Regional detail is inconsistent: no-cost storage quotas apply only in three US regions, and everything else follows Google Cloud's regional pricing, which is a different page again. Nothing here offers a shell or a persistent server.
