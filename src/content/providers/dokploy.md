---
id: dokploy
name: Dokploy
urls:
  home: https://dokploy.com
  pricing: https://dokploy.com/pricing
  terms: https://dokploy.com/terms-of-service
  docs: https://docs.dokploy.com/docs/core
category:
  - server-management
regions: null
description: Open-source deployment platform billed per managed server, run either as a hosted service or installed on the customer's own machines.
hqCountry: US
signalAdjustment:
  points: 5
  by: fl
  on: 2026-08-09
  why: Innovative solution.
whoManagesOs: self-managed
infraContract:
  - byo-iaas
useCases:
  - web-app
  - api
  - internal-tool
  - side-project
  - background-jobs
audience:
  - solo
  - agency
  - startup
runtimes:
  - docker
  - any
deployMethods:
  - git
  - docker-image
sshAccess: root
pricingModel: per-resource
priceFrom: xs
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
entryPrice: { amount: 4.5, currency: USD, period: month }
freeTier: none
apiAvailable: public
cliTool: official
mcpServer: official
social:
  github: https://github.com/dokploy/dokploy
  x: https://x.com/getdokploy
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://dokploy.com/terms-of-service', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://dokploy.com/terms-of-service', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://dokploy.com/terms-of-service', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://dokploy.com/pricing', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://dokploy.com/terms-of-service', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://dokploy.com', checkedAt: 2026-08-01 }
  - { field: apiAvailable, url: 'https://dokploy.com', checkedAt: 2026-08-09 }
  - { field: cliTool, url: 'https://dokploy.com', checkedAt: 2026-08-09 }
  - { field: mcpServer, url: 'https://dokploy.com', checkedAt: 2026-08-09 }
figure:
  emoji: 🐋
  color: rgb(63, 125, 172)
  textColor: rgb(234, 241, 246)
  text: A control plane for servers you already rent.
ai: authored
---

Dokploy is an open-source deployment platform installed on servers the customer already rents. Pointed at a git repository or a Docker Compose file, it handles builds, deployments, databases, webhooks and TLS. Multi-server Docker Swarm clusters are supported, so it is not confined to a single box.

Commercially it is sold by the managed server rather than by the application, with a discount for annual billing and quoted arrangements for enterprise and agency use. The same product runs as a hosted service or installed on the customer's own machines, and the software itself stays open source. The terms of service name Dokploy Technologies, Inc. at a San Francisco address and put the governing law in Delaware, which is the only place the company behind the product is identified.

## Worth knowing

The subscription buys the control plane alone. Every server it manages is rented separately, so the Dokploy price and the hosting bill are two different numbers, and the operating system, security updates and backups of the machines underneath stay with the customer.
