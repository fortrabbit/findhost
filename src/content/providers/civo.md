---
id: civo
name: Civo
urls:
  home: https://www.civo.com
  pricing: https://www.civo.com/pricing
  status: https://status.civo.com/
category: iaas
description: British Kubernetes-first cloud that charges for worker nodes only, with control planes included and data transfer unmetered.
hqCountry: GB
whoManagesOs: you
useCases:
  - saas
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
  - api
  - cli
  - control-panel
  - docker-image
sshAccess: full
managedDatabases:
  - postgres
pricingModel: hourly
priceFrom: sm
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
  - ISO 27001
  - SOC 2
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://www.civo.com/docs/overview/regions', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://www.civo.com/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.civo.com/pricing', checkedAt: 2026-08-01 }
figure:
  emoji: ☸️
  color: rgb(20, 40, 55)
  textColor: rgb(175, 220, 245)
  text: The control plane is free. Really.
ai: authored
---

## About Civo

Civo is a British cloud built around Kubernetes rather than one that added it later. Control-plane components are not charged for, the bill covers worker nodes and add-ons only, and data transfer in and out is unmetered — three decisions that between them remove most of what makes a managed-Kubernetes invoice hard to predict in advance.

Beyond clusters it sells compute instances, S3-compatible object storage, persistent volumes, load balancers, managed PostgreSQL and GPU capacity. Sovereign private-cloud arrangements are offered for the United Kingdom and India, and the platform is certified against the usual enterprise audit standards. New accounts start on time-limited credit rather than a standing free allowance.
