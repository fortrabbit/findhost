---
id: google-cloud-run
name: Google Cloud Run
urls:
  home: https://cloud.google.com/run
  pricing: https://cloud.google.com/run/pricing
category: serverless
description: Google Cloud Run runs any container image, scales it to zero when idle and bills per request and per resource-second.
parent: Google
whoManagesOs: container
useCases:
  - api
  - background-jobs
runtimes:
  - docker
deployMethods:
  - docker-image
  - cli
persistentStorage: false
pricingModel: usage-based
entryPriceBand: free-tier
freeTier: permanent
regions:
  - AU
  - BE
  - BR
  - CA
  - CH
  - CL
  - DE
  - ES
  - FI
  - FR
  - GB
  - HK
  - ID
  - IL
  - IN
  - IT
  - JP
  - KR
  - MX
  - NL
  - PL
  - QA
  - SA
  - SE
  - SG
  - TH
  - TW
  - US
  - ZA
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://docs.cloud.google.com/run/docs/locations', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://cloud.google.com/run/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://cloud.google.com/run/pricing', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://cloud.google.com/run/pricing', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://cloud.google.com/run/pricing', checkedAt: 2026-07-31 }
figure:
  emoji: 🏃
  color: rgb(30, 40, 55)
  textColor: rgb(150, 200, 255)
  text: Containers that scale to zero.
ai: co-authored
greenWebId: 595
---

## About Google Cloud Run

Cloud Run is Google's serverless container platform. It runs any container, scales it to zero when idle, and bills only while a request is in flight. The scale-to-zero end of serverless, minus the function model. PHP runs as an ordinary container, usually php-fpm with nginx or a FrankenPHP build.

Billing is per request, per vCPU-second and per GB-second, against a monthly free allowance of two million requests, 180,000 vCPU-seconds and 360,000 GB-seconds that resets every month. Code is deployed as a container image pushed to a registry.

The locations page splits regions into two pricing tiers across roughly forty-three locations.

Language-agnostic containers make it portable. That portability has a price, and the price is the container. A Dockerfile to write and keep current. An image registry. The surrounding Google Cloud services to wire up. And scale-to-zero still buys a cold start on the first request after a quiet spell.
