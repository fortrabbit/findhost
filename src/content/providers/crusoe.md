---
id: crusoe
name: Crusoe
urls:
  home: https://www.crusoe.ai
  pricing: https://www.crusoe.ai/cloud/pricing
  status: https://status.crusoecloud.com
  terms: https://legal.crusoe.ai/
  docs: https://docs.crusoecloud.com/
category:
  - iaas
  - gpu
description: US AI infrastructure company renting GPU and CPU virtual machines, managed Kubernetes and model inference from its own data centers.
founded: 2018
hqCountry: US
ownership: vc-backed
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
entryPrice: { amount: 0.08, currency: USD, period: hour }
currencies:
  - USD
regions:
  - IS
  - US
apiAvailable: public
cliTool: official
mcpServer: official
iacSupport:
  - terraform
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://www.crusoe.ai/cloud/pricing', checkedAt: 2026-09-24 }
  - { field: founded, url: 'https://www.crusoe.ai/about/company', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://www.crusoe.ai/', checkedAt: 2026-09-24 }
  - { field: ownership, url: 'https://www.crusoe.ai/about/company', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.crusoecloud.com/compute/virtual-machines/accessing-vms', checkedAt: 2026-09-24 }
  - { field: sshAccess, url: 'https://docs.crusoecloud.com/compute/virtual-machines/accessing-vms', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://docs.crusoecloud.com/', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.crusoecloud.com/quickstart/creating-a-vm', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://www.crusoe.ai/cloud/pricing', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.crusoecloud.com/self-serve-deployments/overview', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://www.crusoe.ai/cloud/pricing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://www.crusoe.ai/cloud/pricing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://docs.crusoecloud.com/compute/virtual-machines/overview', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://www.crusoe.ai/cloud/pricing', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://www.crusoe.ai/cloud/pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://www.crusoe.ai/cloud/pricing', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://docs.crusoecloud.com/reference/locations', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.crusoecloud.com/reference/api/', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://docs.crusoecloud.com/installing-the-cli', checkedAt: 2026-09-24 }
  - { field: mcpServer, url: 'https://docs.crusoecloud.com/reference/mcp-server', checkedAt: 2026-09-24 }
  - { field: iacSupport, url: 'https://docs.crusoecloud.com/infrastructure-cloud/terraform', checkedAt: 2026-09-24 }
  - { field: 'quota increases', url: 'https://docs.crusoecloud.com/usage-billing/viewing-quotas', checkedAt: 2026-09-24 }
  - { field: 'account signup and billing', url: 'https://docs.crusoecloud.com/create-an-account', checkedAt: 2026-09-24 }
figure:
  emoji: 🏝️
  color: rgb(92, 44, 20)
  textColor: rgb(252, 238, 226)
  text: Power, data centers, and a cloud on top.
ai: authored
---

Crusoe builds and operates AI data centers and rents out their capacity as Crusoe Cloud. Its infrastructure side sells NVIDIA and AMD GPU virtual machines, multi-node clusters with InfiniBand, CPU instances, managed Kubernetes and Slurm, disks and S3-compatible object storage, priced by the hour on demand, with spot capacity and reservations. The managed side, Intelligence Foundry, offers serverless inference priced per token over a catalog of hosted models, serverless fine-tuning, and self-serve deployments that put an open or fine-tuned model on dedicated GPUs billed by the hour. The [locations page](https://docs.crusoecloud.com/reference/locations) lists data centers in Iceland, Texas, Virginia and Nevada, each listed with the arrangement that powers it, and a site in Norway not yet in service.

## Worth knowing

Signup is self-service and asks for a credit card; the [account docs](https://docs.crusoecloud.com/create-an-account) rule out prepaid cards. The newest GPU generations and spot rates are sold through sales rather than listed on the pricing page, and quota increases go through support, per the [quotas page](https://docs.crusoecloud.com/usage-billing/viewing-quotas).
