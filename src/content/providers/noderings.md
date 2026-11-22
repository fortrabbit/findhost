---
id: noderings
name: NodeRings
urls:
  home: https://noderings.com
  docs: https://docs.noderings.com/docs/client-guides/how-it-works
  terms: https://noderings.com/legal
category:
  - vps
description: A marketplace where independent hosting providers sell virtual servers and game servers, ordered and run from one console.
infraContract:
  - resells-iaas
sshAccess: root
apiAvailable: public
cliTool: official
mcpServer: official
status: stub
addedAt: 2026-11-22
checkedAt: 2026-11-22
sources:
  - { field: category, url: 'https://noderings.com/about', checkedAt: 2026-11-22 }
  - { field: infraContract, url: 'https://noderings.com/about', checkedAt: 2026-11-22 }
  - { field: sshAccess, url: 'https://noderings.com/about', checkedAt: 2026-11-22 }
  - { field: apiAvailable, url: 'https://docs.noderings.com/docs/client-guides/how-it-works', checkedAt: 2026-11-22 }
  - { field: cliTool, url: 'https://docs.noderings.com/docs/client-guides/how-it-works', checkedAt: 2026-11-22 }
  - { field: mcpServer, url: 'https://docs.noderings.com/docs/client-guides/how-it-works', checkedAt: 2026-11-22 }
figure:
  emoji: 💍
  color: rgb(28, 32, 44)
  textColor: rgb(232, 234, 240)
  text: Other hosts' servers, one console.
ai: authored
---

NodeRings Inc. runs a marketplace and control plane where independent hosting providers sell virtual servers and game servers, as its [about page](https://noderings.com/about) states. The provider keeps the hardware and the hypervisor credential; NodeRings runs the storefront, the account and the order. A Compute Instance is a Linux virtual machine with root access, and the [documentation](https://docs.noderings.com/docs/client-guides/how-it-works) describes providers running Proxmox, VirtFusion, SolusVM 2 or Pterodactyl behind a scoped agent, with an API, a CLI and an MCP server for buyers. Dedicated servers, GPU instances, Kubernetes and object storage are on the roadmap, not for sale.
