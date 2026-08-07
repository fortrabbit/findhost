---
id: railway
name: Railway
urls:
  home: https://railway.com
  pricing: https://docs.railway.com/reference/pricing/plans
  status: https://status.railway.com
category:
  - paas
description: Railway is a polyglot deployment platform with subscription plus usage billing, four regions and a build system that detects most common languages.
whoManagesOs: managed
useCases:
  - side-project
audience:
  - solo
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
  - git
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - redis
pricingModel: usage-based
priceFrom: sm
priceTo: lg
currencies:
  - USD
billingPeriods:
  - monthly
billingTiming: arrears
exitWithin: a-month
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
  - { field: priceFrom, url: 'https://docs.railway.com/reference/pricing/plans', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://docs.railway.com/reference/pricing/plans', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://docs.railway.com/reference/pricing/plans', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://docs.railway.com/reference/pricing/plans', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://docs.railway.com/reference/pricing/plans', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://docs.railway.com/reference/pricing/faqs', checkedAt: 2026-08-02 }
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
  color: rgb(157, 77, 77)
  textColor: rgb(245, 234, 234)
  text: All aboard the complexity express.
---

Railway is a language-agnostic deployment platform. Builds run through Railpack, its own build system, which detects Node.js, Python, Go, PHP, Java and Ruby without configuration and can be steered with environment variables or a config file; a Dockerfile can be supplied instead. Databases are provisioned from first-party templates for PostgreSQL, MySQL, MongoDB and Redis.

Deployment is from a connected git repository or through the official command-line tool. The same tool reaches a GraphQL API, and an `mcp install` command wires Railway access into MCP-compatible AI tooling. Regions are available in North America, Europe and Asia-Pacific.

Billing pairs a monthly subscription with metered usage. Each plan carries an allowance of resource consumption and anything above it is charged on top, so the subscription figure is a floor rather than the bill: what the platform costs depends on the compute, memory, bandwidth and database time an application uses.

## Worth knowing

Support is tiered by plan. The free and entry plans are answered through a community forum with no guaranteed response; a stated turnaround appears on higher paid plans, and a contractual response time only at the top of the range. The plan carrying that commitment sits several tiers above the free entry point.
