---
id: dply-edge
name: dply Edge
urls:
  home: https://edge.dply.io
  pricing: https://edge.dply.io/pricing
  terms: https://edge.dply.io/terms
  docs: https://edge.dply.io/docs
category:
  - paas
  - static
description: Platform that builds sites and container apps from a git repository and runs them on Cloudflare, with managed databases hosted on DigitalOcean.
hqCountry: US
whoManagesOs: managed
infraContract:
  - resells-iaas
runsOn:
  - cloudflare-workers
  - digitalocean
runtimes:
  - php
  - node
  - python
  - ruby
  - go
  - rust
  - java
  - dotnet
  - static
software:
  - laravel
  - symfony
  - rails
  - django
  - spring-boot
  - express
  - nextjs
  - nuxt
  - astro
  - sveltekit
  - remix
  - hugo
deployMethods:
  - git
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - valkey
  - sqlite
entryPrice: { amount: 5, currency: USD, period: month }
priceFrom: sm
pricingModel: plan-plus-overage
currencies:
  - USD
billingPeriods:
  - monthly
freeTier: trial
apiAvailable: public
cliTool: official
mcpServer: official
collaboration: team
status: stub
addedAt: 2026-10-15
checkedAt: 2026-10-15
sources:
  - { field: category, url: 'https://edge.dply.io/docs', checkedAt: 2026-10-15 }
  - { field: hqCountry, url: 'https://edge.dply.io/privacy', checkedAt: 2026-10-15 }
  - { field: whoManagesOs, url: 'https://edge.dply.io/docs', checkedAt: 2026-10-15 }
  - { field: infraContract, url: 'https://edge.dply.io/terms', checkedAt: 2026-10-15 }
  - { field: runsOn, url: 'https://edge.dply.io/compliance', checkedAt: 2026-10-15 }
  - { field: runtimes, url: 'https://edge.dply.io/pricing', checkedAt: 2026-10-15 }
  - { field: software, url: 'https://edge.dply.io/features', checkedAt: 2026-10-15 }
  - { field: deployMethods, url: 'https://edge.dply.io/docs', checkedAt: 2026-10-15 }
  - { field: managedDatabases, url: 'https://edge.dply.io/features', checkedAt: 2026-10-15 }
  - { field: entryPrice, url: 'https://edge.dply.io/pricing', checkedAt: 2026-10-15 }
  - { field: priceFrom, url: 'https://edge.dply.io/pricing', checkedAt: 2026-10-15 }
  - { field: pricingModel, url: 'https://edge.dply.io/pricing', checkedAt: 2026-10-15 }
  - { field: currencies, url: 'https://edge.dply.io/pricing', checkedAt: 2026-10-15 }
  - { field: billingPeriods, url: 'https://edge.dply.io/pricing', checkedAt: 2026-10-15 }
  - { field: freeTier, url: 'https://edge.dply.io/pricing', checkedAt: 2026-10-15 }
  - { field: collaboration, url: 'https://edge.dply.io/pricing', checkedAt: 2026-10-15 }
  - { field: apiAvailable, url: 'https://edge.dply.io/docs/api', checkedAt: 2026-10-15 }
  - { field: cliTool, url: 'https://edge.dply.io/docs/cli', checkedAt: 2026-10-15 }
  - { field: mcpServer, url: 'https://edge.dply.io/docs/mcp', checkedAt: 2026-10-15 }
figure:
  emoji: ☁️
  color: rgb(243, 128, 32)
  textColor: rgb(40, 20, 0)
  text: A git push, someone else's edge.
ai: authored
---

dply Edge is a hosting platform from Shafer LLC, a company in Arizona, according to its [privacy policy](https://edge.dply.io/privacy). It connects to a GitHub, GitLab or Bitbucket repository, detects the framework, and deploys static sites, server-rendered JavaScript and container apps in PHP, Ruby, Python, Node and other languages. Postgres, MySQL, MongoDB and Valkey attach beside the app, and apps sleep when idle. A REST API, a command-line tool and a read-only MCP server are documented.

The [compliance page](https://edge.dply.io/compliance) names the infrastructure: apps run on Cloudflare's network and Cloudflare Containers, and the managed databases run on DigitalOcean in New York. A monthly plan fee covers seats and limits, and usage is billed on top by the second, as the [pricing page](https://edge.dply.io/pricing) lays out. The trial needs a card.

## Worth knowing

The [documentation](https://edge.dply.io/docs/private-beta) describes the product as a private beta, with open sign-up.
