---
id: nebius
name: Nebius
urls:
  home: https://nebius.com
  pricing: https://nebius.com/prices
  status: https://status.nebius.com
  terms: https://docs.nebius.com/legal/terms-of-use
  docs: https://docs.nebius.com/
category:
  - iaas
  - caas
  - gpu
description: Amsterdam-based AI cloud selling GPU and CPU virtual machines, managed Kubernetes and Slurm, serverless GPU containers and a model API.
hqCountry: NL
ownership: public
whoManagesOs: self-managed
useCases:
  - ai-app
  - background-jobs
runtimes:
  - docker
deployMethods:
  - control-panel
  - docker-image
sshAccess: root
gpuCapacity:
  - instances
  - serverless
  - inference
  - model-api
pricingModel: hourly
priceFrom: md
priceTo: 3xl
entryPrice: { amount: 0.05, currency: USD, period: hour }
currencies:
  - USD
billingTiming: arrears
regions:
  - ES
  - FI
  - FR
  - GB
  - IL
  - US
apiAvailable: public
cliTool: official
mcpServer: official
iacSupport:
  - terraform
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://nebius.com/prices', checkedAt: 2026-09-24 }
  - { field: category, url: 'https://docs.nebius.com/serverless/overview', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://nebius.com/about', checkedAt: 2026-09-24 }
  - { field: ownership, url: 'https://nebius.com/about', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.nebius.com/compute/virtual-machines/connect', checkedAt: 2026-09-24 }
  - { field: sshAccess, url: 'https://docs.nebius.com/compute/virtual-machines/connect', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://docs.nebius.com/serverless/overview', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.nebius.com/serverless/overview', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.nebius.com/serverless/overview', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://nebius.com/prices', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.nebius.com/serverless/overview', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.tokenfactory.nebius.com/ai-models-inference/dedicated-endpoints/overview', checkedAt: 2026-09-24 }
  - { field: 'custom weights in beta', url: 'https://docs.tokenfactory.nebius.com/ai-models-inference/dedicated-endpoints/custom-weights', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://docs.nebius.com/compute/resources/pricing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://nebius.com/prices', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://nebius.com/prices', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://nebius.com/prices', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://nebius.com/prices', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.nebius.com/signup-billing/billing-models/payg', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://docs.nebius.com/overview/regions', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://github.com/nebius/api', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://docs.nebius.com/cli', checkedAt: 2026-09-24 }
  - { field: mcpServer, url: 'https://github.com/nebius/mcp-server', checkedAt: 2026-09-24 }
  - { field: iacSupport, url: 'https://docs.nebius.com/terraform-provider', checkedAt: 2026-09-24 }
figure:
  emoji: 🌌
  color: rgb(34, 30, 70)
  textColor: rgb(236, 232, 252)
  text: An AI cloud, run from Amsterdam.
ai: authored
---

Nebius is an AI cloud headquartered in Amsterdam and listed on Nasdaq, according to its [about page](https://nebius.com/about). It sells NVIDIA GPU virtual machines and InfiniBand clusters, CPU-only VMs, managed Kubernetes and Slurm, object storage, shared filesystems and managed PostgreSQL and MLflow, billed per second of use on pay-as-you-go terms, with commitment discounts and preemptible capacity beside them. Serverless AI runs the customer's own container image on GPU capacity the service provisions, as a notebook environment, a batch job or an HTTP endpoint, billed only while it runs.

Token Factory, a separate product on its own domain, sells an OpenAI-compatible API over a catalog of open models priced per token, and dedicated endpoints that run a supported open model on GPUs of the customer's choosing; serving the customer's own weights is in beta and enabled on request, per the [custom weights docs](https://docs.tokenfactory.nebius.com/ai-models-inference/dedicated-endpoints/custom-weights). The [regions page](https://docs.nebius.com/overview/regions) lists public regions in Finland, France, Spain, the United Kingdom, Israel and the United States.

## Worth knowing

Card accounts are charged in arrears: usage accrues against a balance that is billed at the start of each month or when it crosses a threshold, as the [pay-as-you-go docs](https://docs.nebius.com/signup-billing/billing-models/payg) describe. Serverless AI is not offered in every region.
