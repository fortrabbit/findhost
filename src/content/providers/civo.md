---
id: civo
name: Civo
urls:
  home: https://www.civo.com
  pricing: https://www.civo.com/pricing
  status: https://status.civo.com/
category:
  - vps
description: British Kubernetes-first cloud that charges for worker nodes only, with control planes included and data transfer unmetered.
hqCountry: GB
whoManagesOs: self-managed
useCases:
  - web-app
  - api
  - ai-app
  - data-pipeline
  - background-jobs
audience:
  - startup
  - smb
  - enterprise
  - education
runtimes:
  - docker
  - any
deployMethods:
  - control-panel
  - docker-image
sshAccess: root
managedDatabases:
  - postgres
pricingModel: hourly
priceFrom: sm
priceTo: xl
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
exitWithin: a-day
entryPrice: { amount: 5.43, currency: USD, period: month }
freeTier: trial
regions:
  - GB
  - DE
  - US
  - IN
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
certifications:
  - iso-27001
  - soc-2
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://www.civo.com/docs/overview/regions', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://www.civo.com/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.civo.com/pricing', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://www.civo.com/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.civo.com/legal/terms', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.civo.com/docs/account/billing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.civo.com/docs/account/billing', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.civo.com/legal/terms', checkedAt: 2026-08-02 }
figure:
  emoji: ☸️
  color: rgb(63, 125, 172)
  textColor: rgb(234, 241, 246)
  text: The control plane is free. Really.
ai: authored
gpuCapacity:
  - instances
---

Civo is a British cloud built around Kubernetes rather than one that added it later. Control-plane components are not charged for, the bill covers worker nodes and add-ons only, and data transfer in and out is unmetered — three decisions that between them remove most of what makes a managed-Kubernetes invoice hard to predict in advance.

Beyond clusters it sells compute instances, S3-compatible object storage, persistent volumes, load balancers, managed PostgreSQL and GPU capacity. Sovereign private-cloud arrangements are offered for the United Kingdom and India, and the platform is certified against the usual enterprise audit standards. New accounts start on time-limited credit rather than a standing free allowance.
