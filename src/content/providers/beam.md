---
id: beam
name: Beam
urls:
  home: https://www.beam.cloud
  pricing: https://www.beam.cloud/pricing
  status: https://status.beam.cloud
  terms: https://docs.beam.cloud/v2/security/terms-and-conditions
  docs: https://docs.beam.cloud/v2/getting-started/introduction
category:
  - serverless
  - gpu
description: Serverless GPU platform where Python functions and container images run as autoscaling endpoints, task queues and sandboxes, with on-demand GPU machines beside them.
hqCountry: US
ownership: vc-backed
whoManagesOs: self-managed
useCases:
  - ai-app
  - background-jobs
  - api
runtimes:
  - python
  - docker
deployMethods:
  - docker-image
gpuCapacity:
  - serverless
  - instances
pricingModel: usage-based
priceFrom: xl
priceTo: 3xl
entryPrice: { amount: 0.44, currency: USD, period: hour }
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
apiAvailable: public
cliTool: official
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://www.beam.cloud/', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://docs.beam.cloud/v2/security/terms-and-conditions', checkedAt: 2026-09-24 }
  - { field: ownership, url: 'https://www.beam.cloud/', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.beam.cloud/v2/environment/custom-images', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://www.beam.cloud/', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.beam.cloud/v2/getting-started/introduction', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.beam.cloud/v2/getting-started/introduction', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://www.beam.cloud/pricing', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.beam.cloud/v2/resources/pricing-and-billing', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://www.beam.cloud/pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://www.beam.cloud/pricing', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://www.beam.cloud/pricing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://www.beam.cloud/pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://docs.beam.cloud/v2/security/terms-and-conditions', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://docs.beam.cloud/v2/security/terms-and-conditions', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.beam.cloud/v2/reference/api', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://docs.beam.cloud/v2/reference/cli', checkedAt: 2026-09-24 }
  - { field: 'open-source engine', url: 'https://github.com/beam-cloud/beta9', checkedAt: 2026-09-24 }
figure:
  emoji: 🔦
  color: rgb(30, 41, 59)
  textColor: rgb(226, 232, 240)
  text: A Python decorator that rents a GPU.
ai: authored
---

Beam runs Python functions and container images on CPUs and GPUs as autoscaling web endpoints, task queues, scheduled jobs and sandboxes. Code is marked up with decorators from the Python SDK and pushed with the CLI; an existing Docker image can be deployed as a web service. Serverless workloads scale to zero and are billed per millisecond while a container runs, and the [billing docs](https://docs.beam.cloud/v2/resources/pricing-and-billing) say image pulls and machine start-up are not charged. On-demand GPU machines, bare metal or VMs, are priced per hour, and multi-node clusters sit beside them.

Plans add a monthly fee for higher concurrency on top of usage. A bring-your-own-cloud option runs workloads on instances in the customer's own AWS or GCP account for a management fee. The contracting entity is Smartshare, Inc., a Delaware corporation doing business as Beam.

## Worth knowing

The orchestration engine behind the service is published as [Beta9 on GitHub](https://github.com/beam-cloud/beta9) and can be self-hosted. The [GPU docs](https://docs.beam.cloud/v2/environment/gpu) name the United States, Europe and Asia as primary locations without listing countries, and choosing a region means contacting the company.
