---
id: nocthost
name: NoctHost
urls:
  home: https://nocthost.com
  pricing: https://nocthost.com/pricing
  terms: https://nocthost.com/terms
  docs: https://nocthost.com/docs/api
category:
  - vps
  - bare-metal
  - gpu
description: An Estonian reseller deploying virtual, dedicated and GPU servers on four upstream clouds from one prepaid balance, paid in cryptocurrency or by card.
hqCountry: EE
gpuCapacity:
  - instances
infraContract:
  - resells-iaas
sshAccess: root
entryPrice: { amount: 10, currency: USD, period: month }
priceFrom: sm
paymentMethods:
  - card
  - crypto
apiAvailable: public
mcpServer: official
status: stub
addedAt: 2026-11-17
checkedAt: 2026-11-17
sources:
  - { field: hqCountry, url: 'https://nocthost.com/about', checkedAt: 2026-11-17 }
  - { field: category, url: 'https://nocthost.com/pricing', checkedAt: 2026-11-17 }
  - { field: gpuCapacity, url: 'https://nocthost.com/pricing', checkedAt: 2026-11-17 }
  - { field: infraContract, url: 'https://nocthost.com/about', checkedAt: 2026-11-17 }
  - { field: sshAccess, url: 'https://nocthost.com/', checkedAt: 2026-11-17 }
  - { field: entryPrice, url: 'https://nocthost.com/pricing', checkedAt: 2026-11-17 }
  - { field: priceFrom, url: 'https://nocthost.com/pricing', checkedAt: 2026-11-17 }
  - { field: paymentMethods, url: 'https://nocthost.com/', checkedAt: 2026-11-17 }
  - { field: apiAvailable, url: 'https://nocthost.com/docs/api', checkedAt: 2026-11-17 }
  - { field: mcpServer, url: 'https://nocthost.com/docs/api', checkedAt: 2026-11-17 }
figure:
  emoji: 🌒
  color: rgb(20, 22, 48)
  textColor: rgb(228, 230, 250)
  text: Four clouds, one balance, coins welcome.
ai: authored
---

NoctHost is operated by Nocthost OÜ in Estonia, as its [about page](https://nocthost.com/about) states. Customers fund a prepaid balance and deploy virtual, dedicated-CPU, GPU and bare-metal servers that run on Vultr, DigitalOcean, Hetzner and Linode, billed by the hour with a monthly cap. Sign-up takes an email address, and top-ups are taken in cryptocurrency or by card. The [API reference](https://nocthost.com/docs/api) covers deploying servers and points to a hosted MCP server.
