---
id: verda
name: Verda
urls:
  home: https://verda.com
  pricing: https://verda.com/pricing
  status: https://status.verda.com
  terms: https://verda.com/terms-and-conditions
  docs: https://docs.verda.com/
category:
  - iaas
  - caas
  - gpu
description: Finnish GPU cloud selling GPU virtual machines, multi-node clusters and serverless containers from data centers in Helsinki.
founded: 2020
hqCountry: FI
ownership: vc-backed
whoManagesOs: self-managed
useCases:
  - ai-app
  - background-jobs
runtimes:
  - any
  - docker
deployMethods:
  - control-panel
  - docker-image
sshAccess: root
gpuCapacity:
  - instances
  - serverless
pricingModel: hourly
priceFrom: md
priceTo: 3xl
entryPrice: { amount: 0.048, currency: USD, period: hour }
currencies:
  - USD
  - EUR
billingPeriods:
  - hourly
  - monthly
  - quarterly
  - yearly
billingTiming: advance
exitWithin: a-day
regions:
  - FI
apiAvailable: public
cliTool: official
mcpServer: official
iacSupport:
  - terraform
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://verda.com/gpu-instances', checkedAt: 2026-09-24 }
  - { field: founded, url: 'https://verda.com/company', checkedAt: 2026-09-24 }
  - { field: ownership, url: 'https://verda.com/company', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://verda.com/terms-and-conditions', checkedAt: 2026-09-24 }
  - { field: exitWithin, url: 'https://verda.com/terms-and-conditions', checkedAt: 2026-09-24 }
  - { field: whoManagesOs, url: 'https://docs.verda.com/cpu-and-gpu-instances/tips-and-tricks/losing-ssh-access-to-your-machines/', checkedAt: 2026-09-24 }
  - { field: sshAccess, url: 'https://docs.verda.com/cpu-and-gpu-instances/tips-and-tricks/losing-ssh-access-to-your-machines/', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.verda.com/containers/overview/', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.verda.com/containers/overview/', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://verda.com/pricing', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://verda.com/pricing', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.verda.com/containers/overview/', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://verda.com/pricing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://verda.com/pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://verda.com/pricing', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://verda.com/pricing', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://verda.com/pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://docs.verda.com/welcome-to-verda/pricing-and-billing/', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.verda.com/welcome-to-verda/pricing-and-billing/', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://docs.verda.com/welcome-to-verda/locations-and-sustainability/', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://api.verda.com/v1/docs', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://docs.verda.com/cli/', checkedAt: 2026-09-24 }
  - { field: mcpServer, url: 'https://docs.verda.com/cli/mcp/', checkedAt: 2026-09-24 }
  - { field: iacSupport, url: 'https://docs.verda.com/infrastructure-as-code/terraform/', checkedAt: 2026-09-24 }
  - { field: 'rename from DataCrunch', url: 'https://verda.com/blog/datacrunch-is-changing-its-name-to-verda', checkedAt: 2026-09-24 }
  - { field: 'Sundsvall site', url: 'https://verda.com/blog/verda-ai-infrastructure-sundsvall-sweden', checkedAt: 2026-09-24 }
figure:
  emoji: ⚡
  color: rgb(28, 74, 60)
  textColor: rgb(232, 245, 239)
  text: GPUs by the hour, from Helsinki.
ai: authored
---

Verda sells GPU compute from Helsinki: NVIDIA GPU virtual machines in one-, two-, four- and eight-card sizes, CPU instances, self-service multi-node clusters, and serverless containers that scale to zero, with block storage, a shared filesystem and a container registry beside them. Bare metal is available on request. Instances are priced by the hour on demand, with spot prices and discounts for reserved terms. The company was founded in 2020 as DataCrunch and took the Verda name in November 2025, as its [blog post](https://verda.com/blog/datacrunch-is-changing-its-name-to-verda) announces; the contracting entity in the terms is still DataCrunch Oy.

## Worth knowing

Billing draws on a prepaid balance in ten-minute increments, and the [billing docs](https://docs.verda.com/welcome-to-verda/pricing-and-billing/) say instances stop when the balance runs out. Serverless containers are billed per minute in which a replica did work. All capacity is in Finland; a site in Sundsvall, Sweden, is announced in a [blog post](https://verda.com/blog/verda-ai-infrastructure-sundsvall-sweden) and not yet in service.
