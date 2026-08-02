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
  - { field: priceFrom, url: 'https://cloud.google.com/run/pricing', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://cloud.google.com/run/pricing', checkedAt: 2026-07-31 }
figure:
  emoji: 🏃
  color: rgb(30, 40, 55)
  textColor: rgb(150, 200, 255)
  text: Containers that scale to zero.
greenWebId: 595
---

## About Google Cloud Run

Cloud Run is Google's serverless container platform. It runs any container image, scales it to zero when idle, and bills only while a request is in flight — the scale-to-zero end of serverless without the function model. Code arrives as an image pushed to a registry, deployed from the gcloud CLI, the API or Terraform.

Billing is per request, per vCPU-second and per GB-second, against a free allowance that resets monthly. The locations page splits regions into two pricing tiers across most continents. The image itself is the customer's to write and keep current, the surrounding Google Cloud services are wired up separately, and a container that has scaled to zero pays a cold start on the first request after a quiet spell.
