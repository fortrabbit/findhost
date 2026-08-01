---
id: alwaysdata
name: alwaysdata
urls:
  home: https://www.alwaysdata.com
  pricing: https://www.alwaysdata.com/en/pricing/
  status: https://status.alwaysdata.com/
category: shared
description: French managed hosting with a per-site choice of eleven language runtimes, unlimited databases and mailboxes, and a permanently free tier.
founded: 2006
hqCountry: FR
ownership: independent
whoManagesOs: provider
infraContract:
  - owns-metal
useCases:
  - cms
  - api
  - saas
  - side-project
  - static-site
  - learning
  - background-jobs
audience:
  - indie-hacker
  - freelancer
  - agency
  - startup
  - smb
  - enterprise
  - education
  - government
software:
  - wordpress
  - drupal
  - joomla
  - laravel
  - symfony
runtimes:
  - php
  - node
  - python
  - ruby
  - go
  - java
  - dotnet
  - elixir
  - rust
  - static
deployMethods:
  - ssh
  - sftp
  - git-push
  - ftp
  - api
  - control-panel
sshAccess: full
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
regions:
  - FR
supportChannels:
  - email
  - forum
apiAvailable: public
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPriceBand, url: 'https://www.alwaysdata.com/en/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.alwaysdata.com/en/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.alwaysdata.com/en/pricing/', checkedAt: 2026-07-31 }
figure:
  emoji: 🧬
  color: rgb(25, 60, 50)
  textColor: rgb(180, 235, 210)
  text: Shared hosting for eleven languages.
ai: authored
---

## About alwaysdata

alwaysdata is a Paris company registered in October 2006 that owns its hardware, runs it in Equinix facilities in the Paris region on its own autonomous system, and buys transit from four carriers. Nothing leaves France.

Architecturally it is not conventional shared hosting. Accounts are isolated with cgroups on Debian, each account runs its own HTTP servers and long-lived background processes, and unused capacity is redistributed between accounts rather than hard-capped. Eleven runtimes have their own documentation pages — Deno, .NET, Elixir, Go, Java, Lua, Node.js, PHP, Python, Ruby and Rust — and PHP is provisioned from 4.4 through to 8.5, a range almost nobody else still publishes. The free plan is permanent rather than a trial — the pricing page calls it an "ad-free offer available for life" — with 1 GB of SSD and mailboxes included. Above it sit Plus from €5 a month excluding VAT and Max from €369.

Independent projects have built against it. wallabag keeps an alwaysdata install script inside its own organisation, and third-party packages drive the REST API for certificate issuance.

## Reservations

SSH is available only from the paid tier upwards, so the free plan is a panel-and-SFTP arrangement. There is one country and one region, and support is by ticket and forum rather than by telephone. The status page records real incidents, including a data-centre temperature event in June 2026 and a DNS denial-of-service in September 2025 — which is to its credit as disclosure and worth reading before committing.
