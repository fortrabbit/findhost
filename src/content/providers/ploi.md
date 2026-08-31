---
id: ploi
name: Ploi
urls:
  home: https://ploi.io
  pricing: https://ploi.io/pricing
category:
  - server-management
regions: null
description: Dutch server-management panel that provisions and maintains PHP application servers on VPS accounts the customer rents elsewhere.
hqCountry: NL
ownership: independent
whoManagesOs: self-managed
infraContract:
  - byo-iaas
runsOn:
  - digitalocean
  - hetzner
  - linode
  - vultr
  - upcloud
  - scaleway
  - aws
runtimes:
  - php
software:
  - laravel
  - wordpress
  - statamic
  - craft-cms
pricingModel: fixed-tier
priceFrom: sm
priceTo: md
currencies:
  - EUR
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
freeTier: permanent
social:
  x: https://x.com/ploi_deploy
  bluesky: https://bsky.app/profile/ploi.io
  mastodon: https://phpc.social/@ploi
  github: https://github.com/ploi
  facebook: https://www.facebook.com/ploideploy
referringSubnets: { now: 796, before: 792 }
status: active
checkedAt: 2026-08-09
apiAvailable: public
cliTool: official
mcpServer: official
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: hqCountry, url: 'https://ploi.io/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://ploi.io/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://ploi.io/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://ploi.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://ploi.io/pricing', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://ploi.io/pricing', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://ploi.io/pricing', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://ploi.io/pricing', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://ploi.io/pricing', checkedAt: 2026-07-31 }
  - { field: runsOn, url: 'https://ploi.io/', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://ploi.io/', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://ploi.io', checkedAt: 2026-08-09 }
  - { field: cliTool, url: 'https://ploi.io', checkedAt: 2026-08-09 }
  - { field: mcpServer, url: 'https://ploi.io', checkedAt: 2026-08-09 }
  - { field: ownership, url: 'https://ploi.io/about', checkedAt: 2026-08-21 }
figure:
  emoji: 🪄
  color: rgb(98, 60, 175)
  textColor: rgb(238, 234, 246)
  text: Sets up the server, hands you the keys.
---

Ploi is [server management software](/categories/server-management/) from the Netherlands. It connects to a VPS account the customer already holds, installs and configures the web stack, and then handles deployments, certificates, cron jobs, queue workers and daemons from its own interface. The named targets are the mainstream VPS vendors plus a custom-server option, and the application side leans towards PHP: Laravel is first-class, with one-click installs for WordPress, Statamic, Craft CMS and other PHP software.

Plans are fixed monthly tiers separated by how many servers and sites a subscription covers, with a permanent free tier at the bottom and a trial of the paid features. The pricing page states plainly that server fees are not included, so the panel subscription and the machine it manages are two separate contracts with separate invoices and separate support. The company also runs [Ploi Cloud](/ploi-cloud/), a managed platform sold separately from the panel.
