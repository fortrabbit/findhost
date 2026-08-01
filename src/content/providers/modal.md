---
id: modal
name: Modal
urls:
  home: https://modal.com
  pricing: https://modal.com/pricing
  status: https://status.modal.com/
  terms: https://modal.com/legal/terms
  docs: https://modal.com/docs/guide
category: serverless
description: Serverless compute platform for Python, where functions are decorated in code and run in containers on CPU or GPU with per-second billing.
hqCountry: US
ownership: vc-backed
whoManagesOs: container
useCases:
  - ai-app
  - data-pipeline
  - background-jobs
  - api
audience:
  - startup
  - enterprise
  - education
  - indie-hacker
runtimes:
  - python
  - docker
deployMethods:
  - cli
  - api
pricingModel: usage-based
entryPriceBand: free-tier
freeTier: permanent
regions:
  - US
  - CA
  - MX
  - IE
  - GB
  - IN
  - JP
  - AU
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://modal.com/docs/guide/region-selection', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://modal.com/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://modal.com/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://modal.com/pricing', checkedAt: 2026-08-01 }
figure:
  emoji: 🎛️
  color: rgb(20, 45, 40)
  textColor: rgb(160, 240, 200)
  text: A decorator, then a GPU.
ai: authored
---

## About Modal

Modal turns a Python function into a remote container. Decorate it, describe the image and hardware in the same file, and the platform provisions, runs and tears down the machine — with per-second billing and nothing charged while idle. It covers inference, sandboxes, training runs, notebooks and batch processing.

Plans are Starter at no monthly fee with thirty dollars of credit a month and up to three seats, Team at two hundred and fifty with a hundred dollars of credit and unlimited seats, and a custom enterprise tier. Compute is billed per second: CPU by the core, memory by the gibibyte, and GPUs from a T4 up to a B300.

## Reservations

Python is the interface, not one option among several. There is no general web-application runtime here, no PHP or Ruby, and no persistent server — this is a compute platform that happens to serve HTTP, and using it for an ordinary website would be working against the grain. Container and GPU concurrency are capped by plan, so scale is a commercial tier rather than a technical one.
