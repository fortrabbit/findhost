---
id: porter
name: Porter
urls:
  home: https://www.porter.run
  pricing: https://www.porter.run/pricing
category: server-management
description: Management layer that deploys applications from GitHub into the customer's own AWS, Azure or GCP account and runs them on Kubernetes underneath.
ownership: vc-backed
whoManagesOs: container
infraContract:
  - byo-iaas
useCases:
  - saas
  - api
  - background-jobs
  - internal-tool
audience:
  - startup
  - smb
  - enterprise
  - non-profit
deployMethods:
  - git-integration
  - docker-image
pricingModel: per-resource
priceFrom: sm
entryPrice: { amount: 6, currency: USD, period: month }
freeTier: none
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://www.porter.run/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.porter.run/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.porter.run/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.porter.run/pricing', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://www.porter.run/pricing', checkedAt: 2026-08-01 }
figure:
  emoji: 🧳
  color: rgb(25, 35, 50)
  textColor: rgb(180, 205, 240)
  text: Platform manners, your cloud account.
ai: authored
---

## About Porter

Porter gives a team the deployment experience of a platform while the workloads run in their own AWS, Azure or GCP account: deploys from GitHub, preview environments, autoscaling, monitoring and logging, with Kubernetes underneath that nobody has to operate directly. Larger contracts add role-based access control, single sign-on and an on-premises installation.

Billing is per resource — memory and vCPU consumed — and sits on top of the cloud bill rather than replacing it, with reduced rates for non-profits and at volume. Because the infrastructure belongs to the customer, ending the subscription removes the management layer and leaves the servers running, and availability and jurisdiction are inherited from whichever cloud account is used.

## Worth knowing

Supported runtimes are not stated on the pricing page, and no free tier exists, so evaluating the platform means running it against a real cloud account with real infrastructure charges attached.
