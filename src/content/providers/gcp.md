---
id: gcp
name: Google Cloud Platform
url: https://cloud.google.com
category: iaas
description: Google Cloud Platform is one of the three hyperscalers, running 130 zones across 43 regions on the infrastructure behind Google's own products.
parent: Google
ownership: subsidiary
hqCountry: US
infraContract:
  - owns-metal
whoManagesOs: you
audience:
  - startup
  - enterprise
runtimes:
  - any
sshAccess: full
pricingModel: usage-based
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
status: active
checkedAt: 2026-07-31
sources:
  - { field: infraContract, url: 'https://cloud.google.com/about/locations', checkedAt: 2026-07-31 }
ai: co-authored
greenWebId: 595
---

## About GCP

Google Cloud Platform is the third of the big three hyperscalers, after AWS and Azure. It runs on the same infrastructure Google uses for Search, Gmail and YouTube, and its strengths mirror Google's own: data and analytics (BigQuery), Kubernetes (Google created it, GKE hosts it) and machine learning.

PHP has several entry points on GCP: App Engine ships maintained PHP 8 runtimes, [Cloud Run](/providers/google-cloud-run/) runs PHP as a container, and Compute Engine offers plain VMs. MySQL is another service again, Cloud SQL. Each piece works well — and each is picked, configured, connected and billed on its own. Google states it operates 130 zones across 43 regions on six continents.

## Reservations

As with the other hyperscalers, there is no entry price to quote: billing is usage-based across separately metered services, so what a site costs depends on how it is assembled rather than on a plan. No entry price band is recorded for that reason.

Choosing between App Engine, Cloud Run and Compute Engine is a real architectural decision with different operational obligations attached to each, and it has to be made before the first deployment rather than after.
