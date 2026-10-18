---
id: vimonto-deploy
name: Vimonto Deploy
urls:
  home: https://deploy.vimonto.com
  pricing: https://deploy.vimonto.com/pricing/
  terms: https://deploy.vimonto.com/app/legal
  docs: https://deploy.vimonto.com/app/docs
category:
  - server-management
regions: null
description: Server-management panel that provisions servers in the customer's own cloud account and deploys PHP and JavaScript applications to them from a git repository.
whoManagesOs: self-managed
infraContract:
  - byo-iaas
runsOn:
  - hetzner
  - digitalocean
  - vultr
  - linode
  - aws
  - gcp
runtimes:
  - php
  - node
  - static
software:
  - laravel
  - symfony
  - statamic
  - wordpress
  - nextjs
  - nuxt
deployMethods:
  - git
pricingModel: fixed-tier
priceFrom: md
priceTo: md
currencies:
  - EUR
  - USD
billingPeriods:
  - monthly
freeTier: permanent
apiAvailable: public
cliTool: official
mcpServer: official
status: stub
addedAt: 2026-10-13
checkedAt: 2026-10-13
sources:
  - { field: category, url: 'https://deploy.vimonto.com', checkedAt: 2026-10-13 }
  - { field: whoManagesOs, url: 'https://deploy.vimonto.com', checkedAt: 2026-10-13 }
  - { field: infraContract, url: 'https://deploy.vimonto.com/pricing/', checkedAt: 2026-10-13 }
  - { field: runsOn, url: 'https://deploy.vimonto.com/app/docs', checkedAt: 2026-10-13 }
  - { field: runtimes, url: 'https://deploy.vimonto.com/app/docs', checkedAt: 2026-10-13 }
  - { field: software, url: 'https://deploy.vimonto.com/app/docs', checkedAt: 2026-10-13 }
  - { field: deployMethods, url: 'https://deploy.vimonto.com/app/docs', checkedAt: 2026-10-13 }
  - { field: pricingModel, url: 'https://deploy.vimonto.com/pricing/', checkedAt: 2026-10-13 }
  - { field: priceFrom, url: 'https://deploy.vimonto.com/pricing/', checkedAt: 2026-10-13 }
  - { field: priceTo, url: 'https://deploy.vimonto.com/pricing/', checkedAt: 2026-10-13 }
  - { field: currencies, url: 'https://deploy.vimonto.com/pricing/', checkedAt: 2026-10-13 }
  - { field: billingPeriods, url: 'https://deploy.vimonto.com/pricing/', checkedAt: 2026-10-13 }
  - { field: freeTier, url: 'https://deploy.vimonto.com/pricing/', checkedAt: 2026-10-13 }
  - { field: apiAvailable, url: 'https://deploy.vimonto.com/app/docs/more/api', checkedAt: 2026-10-13 }
  - { field: cliTool, url: 'https://deploy.vimonto.com/app/docs/more/cli', checkedAt: 2026-10-13 }
  - { field: mcpServer, url: 'https://deploy.vimonto.com/app/docs/more/mcp', checkedAt: 2026-10-13 }
figure:
  emoji: 🧰
  color: rgb(28, 62, 54)
  textColor: rgb(230, 244, 238)
  text: Your cloud account, its deploy button.
ai: authored
---

Vimonto Deploy is [server management software](/categories/server-management/) that its site says is made in the Netherlands. It creates servers in a cloud account the customer already holds, or connects an existing Ubuntu machine, then installs the web stack and deploys code from GitHub, GitLab or Bitbucket. The [documentation](https://deploy.vimonto.com/app/docs) names PHP and JavaScript applications as the target, with database servers, scheduled database backups to the customer's own bucket, certificates and DNS changes handled from the same interface. A REST API, a command-line tool and an MCP server are documented.

There is a free plan limited by servers and sites and one paid plan per organization, as the [pricing page](https://deploy.vimonto.com/pricing/) lays out. Servers, backup storage and domains are billed by the cloud provider, so the panel and the machine are separate contracts.
