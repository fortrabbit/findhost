---
id: gcp
name: Google Cloud Platform
urls:
  home: https://cloud.google.com
category:
  - iaas
description: Google Cloud Platform is one of the three hyperscalers, selling compute, storage, data and machine-learning services on the infrastructure behind Google's own products.
ownership: subsidiary
hqCountry: US
infraContract:
  - owns-metal
whoManagesOs: self-managed
audience:
  - startup
  - enterprise
runtimes:
  - any
sshAccess: root
pricingModel: usage-based
billingPeriods:
  - monthly
billingTiming: arrears
regions:
  - US
  - CA
  - MX
  - BR
  - CL
  - AR
  - BE
  - FI
  - FR
  - DE
  - IE
  - IT
  - NL
  - PL
  - ES
  - SE
  - CH
  - GB
  - IN
  - JP
  - SG
  - KR
  - TW
  - TH
  - AU
  - NZ
  - HK
  - ID
  - MY
  - PH
  - VN
  - IL
  - SA
  - ZA
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
referringSubnets: null
status: active
checkedAt: 2026-08-01
sources:
  - { field: infraContract, url: 'https://cloud.google.com/about/locations', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://cloud.google.com/about/locations', checkedAt: 2026-08-01 }
  - { field: billingPeriods, url: 'https://docs.cloud.google.com/billing/docs/how-to/billing-cycle', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://docs.cloud.google.com/billing/docs/how-to/billing-cycle', checkedAt: 2026-08-02 }
greenWebId: 595
figure:
  emoji: 🌐
  color: rgb(66, 133, 244)
  textColor: rgb(242, 245, 250)
  text: Hyperscaler selling compute and data services on Google's infrastructure.
---

Google Cloud Platform is the third of the big three hyperscalers, after AWS and Azure. It runs on the same infrastructure Google uses for Search, Gmail and YouTube, and its catalogue reflects Google's own centre of gravity: data and analytics through BigQuery, Kubernetes through GKE, machine learning throughout.

Application workloads have several entry points. App Engine takes code and manages the runtime, [Cloud Run](/google-cloud-run/) runs containers, and Compute Engine sells plain virtual machines; databases are separate services again, Cloud SQL among them. Each is picked, configured, connected and billed on its own, so the choice between them is an architectural decision taken before the first deployment. Regions span six continents, and everything is metered by usage rather than sold as a plan, which is why no entry price is recorded here.
