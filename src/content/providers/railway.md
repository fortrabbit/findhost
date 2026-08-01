---
id: railway
name: Railway
urls:
  home: https://railway.com
  pricing: https://docs.railway.com/reference/pricing/plans
  status: https://status.railway.com
category: paas
description: Railway is a polyglot deployment platform with subscription plus usage billing, four regions and a build system that detects most common languages.
whoManagesOs: provider
useCases:
  - side-project
audience:
  - indie-hacker
  - enterprise
runtimes:
  - node
  - python
  - go
  - php
  - java
  - ruby
  - docker
deployMethods:
  - git-integration
  - cli
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - redis
pricingModel: usage-based
entryPriceBand: free-tier
freeTier: permanent
regions:
  - US
  - NL
  - SG
supportChannels:
  - forum
supportTiering: paid-upgrade
apiAvailable: public
cliTool: official
mcpServer: official
status: active
checkedAt: 2026-07-31
sources:
  - { field: pricingModel, url: 'https://docs.railway.com/reference/pricing/plans', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://docs.railway.com/reference/pricing/plans', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://docs.railway.com/reference/pricing/plans', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://docs.railway.com/reference/regions', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://docs.railway.com/reference/databases', checkedAt: 2026-07-31 }
  - { field: runtimes, url: 'https://railpack.com/', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://docs.railway.com/guides/cli', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://docs.railway.com/guides/cli', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://docs.railway.com/guides/cli', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://railway.com/pricing', checkedAt: 2026-07-31 }
  - { field: useCases, url: 'https://railway.com/pricing', checkedAt: 2026-07-31 }
  - { field: mcpServer, url: 'https://docs.railway.com/guides/cli', checkedAt: 2026-07-31 }
  - { field: supportChannels, url: 'https://docs.railway.com/reference/support', checkedAt: 2026-07-31 }
  - { field: supportTiering, url: 'https://docs.railway.com/reference/support', checkedAt: 2026-07-31 }
figure:
  emoji: 🚂
  color: rgb(105, 105, 105)
  textColor: rgb(255, 255, 255)
  text: All aboard the complexity express.
ai: co-authored
---

## About Railway

Railway is a language-agnostic deployment platform. Builds run through Railpack, which detects Node, Python, Go, PHP, Java and Ruby without configuration, and can be steered with environment variables or a config file. Databases are provisioned from first-party templates for PostgreSQL, MySQL, MongoDB and Redis.

Billing combines a subscription with metered usage: Free at $0 with $1 of monthly credit, Hobby at $5 a month including $5 of resource usage, Pro at $20 a month including $20 of usage. Consumption above the included amount is charged on top. Four regions are documented — California, Virginia, Amsterdam and Singapore.

Tooling is a strong point: an official CLI, a GraphQL API reachable through it, and an `mcp install` command that configures Railway access for MCP-compatible AI tools.

## Reservations

Support is tiered sharply. Trial, Free and Hobby accounts get community support through Railway's forum with no guaranteed response; Pro is answered "usually within 72 hours"; guaranteed response times start at the Business Class plan. For a production application, the plan that carries an SLA is some way above the advertised entry price.

Usage-based billing also means the subscription figure is not the bill. What the platform costs depends on how much compute, memory, bandwidth and database time an application consumes.
