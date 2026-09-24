---
id: lambda-cloud
name: Lambda
urls:
  home: https://lambda.ai
  pricing: https://lambda.ai/pricing
  status: https://status.lambda.ai
  terms: https://lambda.ai/legal/terms-of-service
  docs: https://docs.lambda.ai/
category:
  - iaas
  - gpu
description: US GPU cloud selling on-demand NVIDIA GPU instances, reserved multi-node clusters and private cloud capacity.
founded: 2012
hqCountry: US
ownership: vc-backed
whoManagesOs: self-managed
useCases:
  - ai-app
runtimes:
  - any
deployMethods:
  - control-panel
sshAccess: root
gpuCapacity:
  - instances
pricingModel: hourly
priceFrom: 2xl
priceTo: 3xl
entryPrice: { amount: 0.69, currency: USD, period: hour }
currencies:
  - USD
billingPeriods:
  - hourly
billingTiming: arrears
regions:
  - US
  - JP
  - IN
  - DE
  - IL
apiAvailable: public
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://docs.lambda.ai/public-cloud/on-demand/', checkedAt: 2026-09-24 }
  - { field: description, url: 'https://docs.lambda.ai/', checkedAt: 2026-09-24 }
  - { field: founded, url: 'https://lambda.ai/about', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://lambda.ai/legal/terms-of-service', checkedAt: 2026-09-24 }
  - { field: ownership, url: 'https://lambda.ai/investors', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.lambda.ai/public-cloud/on-demand/', checkedAt: 2026-09-24 }
  - { field: sshAccess, url: 'https://docs.lambda.ai/public-cloud/on-demand/connecting-instance/', checkedAt: 2026-09-24 }
  - { field: sshAccess, url: 'https://docs.lambda.ai/public-cloud/on-demand/managing-system-environment/', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://lambda.ai/about', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.lambda.ai/public-cloud/on-demand/', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.lambda.ai/public-cloud/on-demand/creating-managing-instances/', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://lambda.ai/pricing', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://docs.lambda.ai/public-cloud/billing/', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://docs.lambda.ai/public-cloud/billing/', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.lambda.ai/public-cloud/billing/', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://lambda.ai/pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://lambda.ai/pricing', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://lambda.ai/pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://lambda.ai/pricing', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://docs.lambda.ai/public-cloud/on-demand/', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.lambda.ai/api/cloud', checkedAt: 2026-09-24 }
  - { field: 'Inference API wind-down', url: 'https://lambda.ai/inference', checkedAt: 2026-09-24 }
figure:
  emoji: 🐑
  color: rgb(30, 30, 36)
  textColor: rgb(236, 232, 220)
  text: Ubuntu, CUDA and a GPU, rented by the minute.
ai: authored
---

Lambda sells NVIDIA GPU capacity in three shapes: on-demand instances with one, two, four or eight GPUs, 1-Click Clusters of reserved multi-node capacity, and single-tenant private cloud. Instances boot Ubuntu with Lambda Stack, the company's bundle of NVIDIA drivers, CUDA and machine-learning frameworks, or a plain Ubuntu Server image, and the customer logs in over SSH as a user with sudo. Managed Kubernetes and managed Slurm are offered on the cluster products. Lambda was founded in 2012.

## Worth knowing

On-demand instances are priced by the hour, billed in one-minute increments and invoiced weekly to a card for the previous week's usage, as the [billing docs](https://docs.lambda.ai/public-cloud/billing/) describe. Cluster reservations are invoiced up front. The Inference API that Lambda sold beside its instances is winding down, according to its [inference page](https://lambda.ai/inference).
