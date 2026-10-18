---
id: paasta-cloud
name: Paasta Cloud
urls:
  home: https://paasta.cloud
  pricing: https://paasta.cloud/pricing
  docs: https://paasta.cloud/docs
  terms: https://paasta.cloud/legal/terms
category:
  - paas
  - dbaas
  - domains-dns
description: A Persian-language application platform with managed databases, domain registration and a CDN, priced in Iranian toman.
whoManagesOs: managed
runtimes:
  - node
  - python
  - php
  - go
  - java
  - ruby
  - rust
  - dotnet
  - bun
  - deno
  - static
  - docker
software:
  - nextjs
  - nuxt
  - sveltekit
  - laravel
  - django
  - flask
  - fastapi
  - rails
  - wordpress
  - ghost
  - n8n
  - gitea
  - nextcloud
  - metabase
  - odoo
managedDatabases:
  - postgres
  - mysql
  - mongodb
  - redis
deployMethods:
  - git
  - docker-image
persistentStorage: true
cliTool: official
apiAvailable: public
mcpServer: official
pricingModel: fixed-tier
billingPeriods:
  - monthly
  - hourly
status: stub
criterion: 5
addedAt: 2026-10-18
checkedAt: 2026-10-18
sources:
  - { field: category, url: 'https://paasta.cloud/docs', checkedAt: 2026-10-18 }
  - { field: whoManagesOs, url: 'https://paasta.cloud/docs/sources', checkedAt: 2026-10-18 }
  - { field: runtimes, url: 'https://paasta.cloud/docs', checkedAt: 2026-10-18 }
  - { field: software, url: 'https://paasta.cloud/docs', checkedAt: 2026-10-18 }
  - { field: managedDatabases, url: 'https://paasta.cloud/docs/databases', checkedAt: 2026-10-18 }
  - { field: deployMethods, url: 'https://paasta.cloud/docs/sources', checkedAt: 2026-10-18 }
  - { field: persistentStorage, url: 'https://paasta.cloud/docs/storage', checkedAt: 2026-10-18 }
  - { field: cliTool, url: 'https://paasta.cloud/docs/cli', checkedAt: 2026-10-18 }
  - { field: apiAvailable, url: 'https://paasta.cloud/docs/api', checkedAt: 2026-10-18 }
  - { field: mcpServer, url: 'https://paasta.cloud/docs/mcp-agent', checkedAt: 2026-10-18 }
  - { field: criterion, url: 'https://paasta.cloud/legal/terms', checkedAt: 2026-10-18 }
  - { field: pricingModel, url: 'https://paasta.cloud/pricing', checkedAt: 2026-10-18 }
  - { field: billingPeriods, url: 'https://paasta.cloud/pricing', checkedAt: 2026-10-18 }
figure:
  emoji: 🍝
  color: rgb(120, 30, 40)
  textColor: rgb(252, 236, 220)
  text: PaaS, with an extra a.
ai: authored
---

Paasta Cloud is an application platform whose site and documentation are in Persian and whose prices are in Iranian toman. An app is deployed from a linked GitHub or GitLab repository, a public Docker image, a Dockerfile, a Docker Compose file, an uploaded folder or ZIP archive, or the Paasta CLI, as the [documentation on sources](https://paasta.cloud/docs/sources) lists. Managed PostgreSQL, MySQL, MongoDB and Redis run beside the app, and separate products cover domain registration, a CDN with DNS, WordPress hosting and an AI API. A public API, a VS Code extension and an MCP server for coding agents are documented.

App plans come in fixed monthly tiers, prepaid, or billed by the hour against prepaid credit, per the [pricing page](https://paasta.cloud/pricing).

## Worth knowing

The site names no legal entity, address or data center location; the contact phone number carries Iran's country code. Private images from a custom registry are not supported, so a private image has to be built from a Dockerfile or Compose file.
