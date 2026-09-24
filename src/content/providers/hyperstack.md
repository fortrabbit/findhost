---
id: hyperstack
name: Hyperstack
urls:
  home: https://www.hyperstack.cloud
  pricing: https://www.hyperstack.cloud/gpu-pricing
  status: https://status.hyperstack.cloud
  terms: https://www.hyperstack.cloud/terms-and-conditions
  docs: https://docs.hyperstack.cloud/
category:
  - iaas
  - gpu
description: GPU cloud from London's NexGen Cloud, selling GPU virtual machines, Kubernetes clusters and a token-priced model API.
hqCountry: GB
whoManagesOs: self-managed
useCases:
  - ai-app
deployMethods:
  - control-panel
sshAccess: root
gpuCapacity:
  - instances
  - inference
  - model-api
pricingModel: hourly
priceFrom: lg
priceTo: 3xl
entryPrice: { amount: 0.15, currency: USD, period: hour }
currencies:
  - USD
billingTiming: advance
regions:
  - CA
  - NO
  - US
apiAvailable: public
mcpServer: official
iacSupport:
  - terraform
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://www.hyperstack.cloud/gpu-pricing', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://www.hyperstack.cloud/gpu-pricing', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.hyperstack.cloud/docs/network/ubuntu-ssh', checkedAt: 2026-09-24 }
  - { field: sshAccess, url: 'https://docs.hyperstack.cloud/docs/network/ubuntu-ssh', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://docs.hyperstack.cloud/docs/ai-studio', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.hyperstack.cloud/docs/getting-started', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://www.hyperstack.cloud/gpu-pricing', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.hyperstack.cloud/docs/ai-studio/dedicated-inference', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://docs.hyperstack.cloud/docs/billing/billing-policies', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://www.hyperstack.cloud/gpu-pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://www.hyperstack.cloud/gpu-pricing', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://www.hyperstack.cloud/gpu-pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://www.hyperstack.cloud/gpu-pricing', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.hyperstack.cloud/docs/billing/billing-policies', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://docs.hyperstack.cloud/docs/resource-management/regions', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.hyperstack.cloud/docs/api-reference', checkedAt: 2026-09-24 }
  - { field: mcpServer, url: 'https://docs.hyperstack.cloud/docs/libraries/mcp', checkedAt: 2026-09-24 }
  - { field: iacSupport, url: 'https://docs.hyperstack.cloud/docs/libraries/terraform', checkedAt: 2026-09-24 }
figure:
  emoji: 🧊
  color: rgb(18, 58, 92)
  textColor: rgb(228, 240, 250)
  text: GPU virtual machines, by the minute.
ai: authored
---

Hyperstack is the GPU cloud of NexGen Cloud, a London company. It sells NVIDIA GPU and CPU virtual machines billed per minute on demand, with discounted reservations and spot VMs, alongside on-demand Kubernetes clusters, block volumes and S3-compatible object storage. AI Studio sits on top: an OpenAI-compatible API over a catalog of text and image models priced per token, fine-tuning, and dedicated inference endpoints that run an open-weight model on GPUs reserved for it. The [regions page](https://docs.hyperstack.cloud/docs/resource-management/regions) lists data centers in Norway, Quebec and Texas.

## Worth knowing

Accounts are prepaid by default: credit is bought through Stripe, drawn down per minute, and a positive balance is needed to create or keep resources, per the [billing policies](https://docs.hyperstack.cloud/docs/billing/billing-policies). Invoiced postpaid accounts are arranged through the sales team.
