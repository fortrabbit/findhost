---
id: saladcloud
name: SaladCloud
urls:
  home: https://salad.com
  pricing: https://salad.com/pricing
  status: https://cloud-status.salad.com
  terms: https://salad.com/terms/
  docs: https://docs.salad.com/
category:
  - caas
  - gpu
description: Container platform that runs customer images on idle consumer GPUs contributed by a distributed network of home and small-business machines.
founded: 2018
ownership: vc-backed
whoManagesOs: self-managed
useCases:
  - ai-app
  - background-jobs
runtimes:
  - docker
deployMethods:
  - docker-image
  - control-panel
gpuCapacity:
  - serverless
  - model-api
pricingModel: usage-based
priceFrom: sm
entryPrice: { amount: 0.015, currency: USD, period: hour }
currencies:
  - USD
billingTiming: advance
freeTier: none
paymentMethods:
  - card
  - crypto
apiAvailable: public
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://salad.com/', checkedAt: 2026-09-24 }
  - { field: founded, url: 'https://salad.com/about/', checkedAt: 2026-09-24 }
  - { field: ownership, url: 'https://salad.com/about/', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.salad.com/container-engine/explanation/core-concepts/container-vs-vps', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://salad.com/', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.salad.com/container-engine/explanation/infrastructure-platform/container-registries', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.salad.com/container-engine/tutorials/quickstart', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.salad.com/container-engine/reference/autoscaling/settings', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.salad.com/ai-gateway/reference/pricing', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://salad.com/pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://salad.com/pricing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://salad.com/pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://salad.com/pricing', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.salad.com/general/explanation/billing', checkedAt: 2026-09-24 }
  - { field: freeTier, url: 'https://salad.com/pricing', checkedAt: 2026-09-24 }
  - { field: paymentMethods, url: 'https://docs.salad.com/general/explanation/billing', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.salad.com/container-engine/tutorials/quickstart-api', checkedAt: 2026-09-24 }
figure:
  emoji: 🥗
  color: rgb(20, 83, 45)
  textColor: rgb(220, 252, 231)
  text: Somebody's gaming PC, rented by the second.
ai: authored
---

SaladCloud, operated by Salad Technologies, runs customer container images on GPUs contributed by the owners of personal computers and small-business machines, who install a desktop app and are paid for idle time. The Salad Container Engine schedules container groups across that network from the portal or the API, bills per second while an instance runs, and can scale a group to zero through queue-based autoscaling. Four priority tiers set the price: higher tiers are protected from preemption by other workloads, the lowest is the cheapest and the most interruptible, as the [priority pricing docs](https://docs.salad.com/container-engine/explanation/billing-pricing/priority-pricing) explain.

Beside the container engine sit an OpenAI-compatible AI Gateway priced per token and in beta, a transcription API, and reserved bare metal and VMs on contract.

## Worth knowing

Nodes can disconnect at any time, and the docs say instances are reallocated to another node when that happens, so constant uptime needs several replicas and local state should be treated as ephemeral. Billing is prepaid: the [billing docs](https://docs.salad.com/general/explanation/billing) say credits expire twelve months after purchase and usage shuts down when the balance reaches zero. The network spans many countries and no data center locations are published.
