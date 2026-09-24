---
id: runpod
name: Runpod
urls:
  home: https://www.runpod.io
  pricing: https://www.runpod.io/pricing
  status: https://uptime.runpod.io
  terms: https://www.runpod.io/legal/terms-of-service
  docs: https://docs.runpod.io/
category:
  - caas
  - gpu
description: US GPU cloud renting containerized GPU Pods, serverless GPU endpoints and hosted model APIs.
founded: 2022
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
  - model-api
pricingModel: credit
priceFrom: lg
priceTo: 3xl
entryPrice: { amount: 0.16, currency: USD, period: hour }
currencies:
  - USD
billingPeriods:
  - hourly
  - quarterly
  - half-yearly
billingTiming: advance
regions:
  - US
  - CA
  - IN
  - JP
  - SG
  - AU
  - CZ
  - DK
  - FR
  - NL
  - RO
  - SE
  - IS
  - 'NO'
apiAvailable: public
cliTool: official
mcpServer: official
iacSupport:
  - terraform
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://docs.runpod.io/overview', checkedAt: 2026-09-24 }
  - { field: description, url: 'https://docs.runpod.io/overview', checkedAt: 2026-09-24 }
  - { field: founded, url: 'https://www.runpod.io/about', checkedAt: 2026-09-24 }
  - { field: hqCountry, url: 'https://www.runpod.io/legal/terms-of-service', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://docs.runpod.io/pods/overview', checkedAt: 2026-09-24 }
  - { field: runtimes, url: 'https://docs.runpod.io/pods/overview', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://docs.runpod.io/pods/overview', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.runpod.io/overview', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.runpod.io/serverless/pricing', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://docs.runpod.io/public-endpoints/reference', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://docs.runpod.io/accounts-billing/billing', checkedAt: 2026-09-24 }
  - { field: billingTiming, url: 'https://docs.runpod.io/accounts-billing/billing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://www.runpod.io/pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://www.runpod.io/pricing', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://www.runpod.io/pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://www.runpod.io/pricing', checkedAt: 2026-09-24 }
  - { field: billingPeriods, url: 'https://docs.runpod.io/pods/pricing', checkedAt: 2026-09-24 }
  - { field: regions, url: 'https://docs.runpod.io/api-reference-v2/catalog/list-data-centers', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://docs.runpod.io/api-reference/overview', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://docs.runpod.io/runpodctl/overview', checkedAt: 2026-09-24 }
  - { field: mcpServer, url: 'https://docs.runpod.io/get-started/mcp-servers', checkedAt: 2026-09-24 }
  - { field: iacSupport, url: 'https://github.com/runpod/terraform-provider-runpod', checkedAt: 2026-09-24 }
  - { field: 'Secure Cloud and hosts', url: 'https://docs.runpod.io/references/security-and-compliance', checkedAt: 2026-09-24 }
figure:
  emoji: 🫛
  color: rgb(88, 46, 150)
  textColor: rgb(244, 238, 252)
  text: A container with a GPU in it, by the second.
ai: authored
---

Runpod rents GPUs in several shapes. Pods are containers started from a Docker image with dedicated GPUs attached; Serverless endpoints run the customer's own container on workers that scale to zero between requests; Instant Clusters join multi-GPU machines for distributed training; and Public Endpoints sell calls to a catalog of hosted image, video and text models, priced per image or per token, as the [model reference](https://docs.runpod.io/public-endpoints/reference) lists. CPU Pods, network volumes and a container registry sit beside them. Compute and storage are billed by the second, and savings plans discount a three- or six-month term paid upfront.

Capacity comes in two tiers. Community Cloud runs on machines supplied by third-party hosts, whom Runpod's terms forbid from inspecting customer workloads; Secure Cloud runs in partner data centers that the [security and compliance page](https://docs.runpod.io/references/security-and-compliance) describes as Tier 3 and Tier 4 facilities with SOC 2, ISO 27001 and PCI DSS certifications.

## Worth knowing

Everything draws on a prepaid balance, and deploying a Pod needs at least an hour's worth of credit for it. The [billing docs](https://docs.runpod.io/accounts-billing/billing) say running Pods stop when the balance reaches zero, and a Pod without a network volume attached is terminated along with its data.
