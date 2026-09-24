---
id: baseten
name: Baseten
urls:
  home: https://www.baseten.co
  pricing: https://www.baseten.co/pricing/
  status: https://status.baseten.co
  terms: https://www.baseten.co/terms-and-conditions/
  docs: https://docs.baseten.co/overview
category:
  - serverless
  - gpu
description: AI inference platform offering token-priced model APIs and dedicated GPU deployments of customers' own models, billed per minute and able to scale to zero.
hqCountry: US
whoManagesOs: self-managed
useCases:
  - ai-app
  - api
runtimes:
  - python
  - docker
deployMethods:
  - docker-image
gpuCapacity:
  - inference
  - serverless
  - model-api
pricingModel: usage-based
priceFrom: xl
priceTo: 3xl
entryPrice: { amount: 0.63, currency: USD, period: hour }
currencies:
  - USD
billingPeriods:
  - monthly
billingTiming: arrears
freeTier: trial
regions:
  - US
apiAvailable: public
cliTool: official
mcpServer: official
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://docs.baseten.co/overview', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://www.baseten.co/terms-and-conditions/', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.baseten.co/development/model/custom-server', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://docs.baseten.co/overview', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.baseten.co/development/model/model-class', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.baseten.co/development/model/custom-server', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.baseten.co/development/model/custom-server', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.baseten.co/inference/model-apis/overview', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.baseten.co/development/model/build-your-first-model', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.baseten.co/deployment/manage/scaling', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://www.baseten.co/pricing/', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://www.baseten.co/pricing/', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://www.baseten.co/pricing/', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://www.baseten.co/pricing/', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://www.baseten.co/pricing/', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://docs.baseten.co/organization/billing', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.baseten.co/organization/billing', checkedAt: 2026-09-24 }
  - { field: freeTier, url: 'https://docs.baseten.co/organization/billing', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://docs.baseten.co/deployment/regional-deployments', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.baseten.co/deployment/manage/overview', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://docs.baseten.co/deployment/manage/overview', checkedAt: 2026-09-24 }
  - { field: mcpServer, url: 'https://docs.baseten.co/agent-setup', checkedAt: 2026-09-24 }
figure:
  emoji: 🧮
  color: rgb(15, 76, 92)
  textColor: rgb(224, 247, 250)
  text: Model weights in, an endpoint out.
ai: authored
---

Baseten sells AI inference in two shapes. Model APIs are OpenAI- and Anthropic-compatible endpoints over a catalog of open models the company runs, priced per million tokens. Dedicated deployments run the customer's own model, packaged with the Truss framework from Python code and a config file, or as a custom Docker container running an inference server such as vLLM or SGLang, on GPUs billed per minute. Deployments autoscale, and the [scaling docs](https://docs.baseten.co/deployment/manage/scaling) show how to set the minimum to zero so an idle model releases its replicas. Training jobs on managed GPUs sit beside inference, and checkpoints can be deployed directly.

The self-serve plan has no monthly fee and charges usage; higher plans and self-hosted deployments are sold through sales. The contracting entity is Baseten Labs, Inc., in San Francisco.

## Worth knowing

New workspaces receive credits, and the [billing docs](https://docs.baseten.co/organization/billing) say models are deactivated when those run out and no payment method is on file. Invoices are issued when usage passes a threshold or at the end of the calendar month, whichever comes first. Deployments can be pinned to a United States or a European Union region, and regional selection requires a verified organization.
