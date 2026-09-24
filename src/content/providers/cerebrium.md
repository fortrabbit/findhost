---
id: cerebrium
name: Cerebrium
urls:
  home: https://www.cerebrium.ai
  pricing: https://www.cerebrium.ai/pricing
  status: https://status.cerebrium.ai
  terms: https://www.cerebrium.ai/terms-of-service
  docs: https://docs.cerebrium.ai/
category:
  - serverless
  - gpu
description: Serverless GPU platform for real-time AI workloads, running Python apps and custom Docker containers that scale to zero and bill per second.
founded: 2021
hqCountry: US
ownership: vc-backed
whoManagesOs: self-managed
useCases:
  - ai-app
  - api
runtimes:
  - python
  - docker
deployMethods:
  - docker-image
  - git
gpuCapacity:
  - serverless
pricingModel: usage-based
priceFrom: xl
priceTo: 3xl
entryPrice: { amount: 0.59, currency: USD, period: hour }
currencies:
  - USD
billingPeriods:
  - monthly
regions:
  - US
  - SE
  - FI
apiAvailable: public
cliTool: official
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://www.cerebrium.ai/', checkedAt: 2026-09-24 }
  - { field: founded, url: 'https://www.cerebrium.ai/about', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://www.cerebrium.ai/about', checkedAt: 2026-09-24 }
  - { field: ownership, url: 'https://www.cerebrium.ai/about', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://cerebrium.ai/docs/container-images/defining-container-images', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://www.cerebrium.ai/', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://cerebrium.ai/docs/container-images/custom-dockerfiles', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://cerebrium.ai/docs/container-images/custom-dockerfiles', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://cerebrium.ai/docs/api-reference/apps/create-github-app', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://cerebrium.ai/docs/calculating-cost', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://www.cerebrium.ai/pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://www.cerebrium.ai/pricing', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://www.cerebrium.ai/pricing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://www.cerebrium.ai/pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://www.cerebrium.ai/pricing', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://www.cerebrium.ai/pricing', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://cerebrium.ai/docs/deployments/multi-region-deployment', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://cerebrium.ai/docs/api-reference/apps/list-apps', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://cerebrium.ai/docs/getting-started/introduction', checkedAt: 2026-09-24 }
figure:
  emoji: 🎙️
  color: rgb(46, 16, 101)
  textColor: rgb(237, 233, 254)
  text: GPUs that wake up when the call comes in.
ai: authored
---

Cerebrium runs customer code on GPUs and CPUs as serverless apps: a Python project described in a `cerebrium.toml` file, or a custom Dockerfile for anything else, deployed with the CLI or from a linked GitHub repository. Apps scale on demand, down to zero, and GPU, CPU and memory are billed per second while code runs, as the [cost docs](https://cerebrium.ai/docs/calculating-cost) describe. Endpoints can be called over REST, streamed, or served over WebSockets, and the platform is pitched at voice agents and other latency-sensitive inference.

The free Hobby plan and the paid Standard plan charge compute on top of the plan, and differ in the number of apps, seats and concurrent GPUs. The [about page](https://www.cerebrium.ai/about) says the company was founded in Cape Town and is now headquartered in New York City.

## Worth knowing

The [multi-region docs](https://cerebrium.ai/docs/deployments/multi-region-deployment) list regions in the United States, Sweden and Finland as generally available and several more, in other countries, as available on request. Multi-region deployment is marked as beta there.
