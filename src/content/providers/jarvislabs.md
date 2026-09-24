---
id: jarvislabs
name: Jarvislabs
urls:
  home: https://jarvislabs.ai
  pricing: https://jarvislabs.ai/pricing
  terms: https://jarvislabs.ai/termsandservice
  docs: https://docs.jarvislabs.ai/
category:
  - iaas
  - gpu
description: Indian GPU cloud renting GPU virtual machines, framework containers, managed model endpoints and a token-priced model API, billed by the minute.
founded: 2021
hqCountry: IN
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
  - inference
  - model-api
pricingModel: hourly
priceFrom: md
priceTo: 3xl
entryPrice: { amount: 0.05, currency: USD, period: hour }
currencies:
  - USD
  - INR
billingPeriods:
  - hourly
  - monthly
  - quarterly
  - half-yearly
  - yearly
billingTiming: advance
regions:
  - IN
cliTool: official
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://jarvislabs.ai/llms.txt', checkedAt: 2026-09-24 }
  - { field: founded, url: 'https://jarvislabs.ai/llms.txt', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://jarvislabs.ai/', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://jarvislabs.ai/products/vm', checkedAt: 2026-09-24 }
  - { field: sshAccess, url: 'https://jarvislabs.ai/products/vm', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://jarvislabs.ai/llms.txt', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://jarvislabs.ai/products/vm', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.jarvislabs.ai/', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://jarvislabs.ai/llms.txt', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://jarvislabs.ai/pricing', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://jarvislabs.ai/pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://jarvislabs.ai/pricing', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://jarvislabs.ai/pricing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://jarvislabs.ai/pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://jarvislabs.ai/pricing', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://jarvislabs.ai/pricing', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.jarvislabs.ai/', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://docs.jarvislabs.ai/cli/', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://docs.jarvislabs.ai/cli/', checkedAt: 2026-09-24 }
figure:
  emoji: 🧪
  color: rgb(96, 42, 22)
  textColor: rgb(249, 238, 230)
  text: GPUs by the minute, from India.
ai: authored
---

Jarvislabs is a GPU cloud based in India. It rents GPU virtual machines with root access and one to eight GPUs, templates that start a managed container with a framework preinstalled, and multi-node clusters. For inference it runs catalog models as managed endpoints, serves open models on vLLM, SGLang or Ollama workers that scale to zero, and sells a Model API priced per token; the [llms.txt summary](https://jarvislabs.ai/llms.txt) notes that the serverless workers do not accept custom containers.

On-demand compute is priced per hour and billed per minute from a prepaid wallet, with spot rates and discounts for reserved terms of one month to a year on the [pricing page](https://jarvislabs.ai/pricing). Customers outside India pay in US dollars and customers in India in rupees. Pausing an instance stops compute charges while its storage keeps billing.

## Worth knowing

Most capacity is in India, with a smaller Europe region whose country the site does not name. The [CLI docs](https://docs.jarvislabs.ai/cli/) limit that region to one- or eight-GPU instances, and private networking is offered in the India regions only.
