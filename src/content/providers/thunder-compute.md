---
id: thunder-compute
name: Thunder Compute
urls:
  home: https://www.thundercompute.com
  pricing: https://www.thundercompute.com/pricing
  status: https://status.thundercompute.com
  terms: https://www.thundercompute.com/terms-and-conditions
  docs: https://www.thundercompute.com/docs
category:
  - gpu
description: GPU cloud renting NVIDIA GPU instances by the minute, managed from a CLI, an editor extension or an MCP server.
founded: 2024
ownership: vc-backed
useCases:
  - ai-app
deployMethods:
  - control-panel
gpuCapacity:
  - instances
pricingModel: hourly
priceFrom: xl
priceTo: 3xl
entryPrice: { amount: 0.35, currency: USD, period: hour }
currencies:
  - USD
apiAvailable: public
cliTool: official
mcpServer: official
iacSupport:
  - terraform
status: active
addedAt: 2026-09-24
sources:
  - { field: category, url: 'https://www.thundercompute.com/pricing', checkedAt: 2026-09-24 }
  - { field: founded, url: 'https://www.thundercompute.com/', checkedAt: 2026-09-24 }
  - { field: ownership, url: 'https://www.thundercompute.com/', checkedAt: 2026-09-24 }
  - { field: useCases, url: 'https://www.thundercompute.com/docs/restrictions', checkedAt: 2026-09-24 }
  - { field: deployMethods, url: 'https://www.thundercompute.com/docs/console/quickstart', checkedAt: 2026-09-24 }
  - { field: gpuCapacity, url: 'https://www.thundercompute.com/pricing', checkedAt: 2026-09-24 }
  - { field: pricingModel, url: 'https://www.thundercompute.com/docs/billing', checkedAt: 2026-09-24 }
  - { field: entryPrice, url: 'https://www.thundercompute.com/pricing', checkedAt: 2026-09-24 }
  - { field: priceFrom, url: 'https://www.thundercompute.com/pricing', checkedAt: 2026-09-24 }
  - { field: priceTo, url: 'https://www.thundercompute.com/pricing', checkedAt: 2026-09-24 }
  - { field: currencies, url: 'https://www.thundercompute.com/pricing', checkedAt: 2026-09-24 }
  - { field: apiAvailable, url: 'https://www.thundercompute.com/docs/api-reference/instances/create-instance', checkedAt: 2026-09-24 }
  - { field: cliTool, url: 'https://www.thundercompute.com/docs/cli/quickstart', checkedAt: 2026-09-24 }
  - { field: mcpServer, url: 'https://www.thundercompute.com/docs/mcp-server/quickstart', checkedAt: 2026-09-24 }
  - { field: iacSupport, url: 'https://github.com/Thunder-Compute/terraform-provider-thundercompute', checkedAt: 2026-09-24 }
  - { field: 'instances are containers', url: 'https://www.thundercompute.com/docs/guides/using-docker-on-thundercompute', checkedAt: 2026-09-24 }
  - { field: 'known incompatibilities', url: 'https://www.thundercompute.com/docs/compatibility', checkedAt: 2026-09-24 }
  - { field: 'location and pre-installed software', url: 'https://www.thundercompute.com/docs/technical-specs', checkedAt: 2026-09-24 }
  - { field: 'country restrictions', url: 'https://www.thundercompute.com/docs/restrictions', checkedAt: 2026-09-24 }
figure:
  emoji: 🌩️
  color: rgb(30, 41, 74)
  textColor: rgb(226, 234, 250)
  text: A GPU on the other end of a network.
ai: authored
---

Thunder Compute rents NVIDIA GPU instances in one- to eight-card sizes, billed per minute while they run, with extra vCPUs, persistent disk and snapshots priced on top. The company develops GPU virtualization software, and its instances are themselves containers rather than virtual machines, as the [Docker guide](https://www.thundercompute.com/docs/guides/using-docker-on-thundercompute) explains. Instances are created and reached from a VS Code extension, the `tnr` CLI, a web console, a REST API or an MCP server, and come from templates with CUDA, PyTorch and JupyterLab installed, or with Ollama or ComfyUI. The [technical specifications](https://www.thundercompute.com/docs/technical-specs) place the hardware in North America.

## Worth knowing

The [compatibility page](https://www.thundercompute.com/docs/compatibility) lists what does not run: managed memory, CUDA MPS, GPU-accelerated FFmpeg and GPU profilers. Docker inside an instance is experimental and Docker Compose does not work. Per the [restrictions page](https://www.thundercompute.com/docs/restrictions), the service is unavailable in a list of countries, business-only with a VAT ID in others, and limited to one account per person.
