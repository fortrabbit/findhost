---
id: vast-ai
name: Vast.ai
urls:
  home: https://vast.ai
  pricing: https://docs.vast.ai/guides/instances/pricing
  status: https://status.vast.ai
  terms: https://vast.ai/terms
  docs: https://docs.vast.ai/
category:
  - caas
  - gpu
description: US marketplace where independent hosts rent out GPU machines as containers or virtual machines at prices they set.
founded: 2016
hqCountry: US
useCases:
  - ai-app
runtimes:
  - any
  - docker
deployMethods:
  - control-panel
  - docker-image
gpuCapacity:
  - instances
  - serverless
pricingModel: credit
priceFrom: sm
priceTo: 3xl
currencies:
  - USD
billingPeriods:
  - hourly
billingTiming: advance
apiAvailable: public
cliTool: official
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://docs.vast.ai/guides/instances/overview', checkedAt: 2026-09-24 }
  - { field: description, url: 'https://docs.vast.ai/guides/instances/pricing', checkedAt: 2026-09-24 }
  - { field: founded, url: 'https://vast.ai/about', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://vast.ai/about', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://docs.vast.ai/guides/instances/overview', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.vast.ai/guides/instances/virtual-machines', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.vast.ai/guides/instances/choosing/templates', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.vast.ai/guides/instances/overview', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.vast.ai/guides/serverless/pricing', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://docs.vast.ai/guides/reference/billing', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.vast.ai/guides/reference/billing', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://docs.vast.ai/guides/instances/pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://cloud.vast.ai/create/', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://cloud.vast.ai/create/', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://docs.vast.ai/guides/reference/billing', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.vast.ai/api-reference/hello-world', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://docs.vast.ai/cli/hello-world', checkedAt: 2026-09-24 }
figure:
  emoji: 🏪
  color: rgb(20, 70, 120)
  textColor: rgb(230, 240, 250)
  text: Other people's GPUs, at other people's prices.
ai: authored
---

Vast.ai is a marketplace for GPU rental. Hosts list their machines and set their own prices, and renters choose an offer by GPU model, price, location and host reliability. An instance is a Docker container with exclusive use of its GPUs; full virtual machines are available on hosts that support them. Rentals come in three kinds, per the [pricing docs](https://docs.vast.ai/guides/instances/pricing): on-demand at a fixed price, reserved at a discount for a prepaid term, and interruptible at a lower price that can be paused. Serverless endpoints recruit workers from the same marketplace and bill them at the same per-second rates, with no charge for GPU time while a worker is inactive.

## Worth knowing

There is no fixed rate card: each host sets its price and it moves with supply and demand, so the current offers are on the [search page](https://cloud.vast.ai/create/). Storage and bandwidth are charged separately at host-set rates, and storage keeps billing while an instance is stopped. Rentals draw on prepaid credit; the [billing docs](https://docs.vast.ai/guides/reference/billing) say instances stop when the balance reaches zero and are then scheduled for deletion, and that spent credit is not refunded.
