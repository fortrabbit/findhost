---
id: alwaysdata
name: alwaysdata
urls:
  home: https://www.alwaysdata.com
  pricing: https://www.alwaysdata.com/en/pricing/
  status: https://status.alwaysdata.com/
category:
  - shared-hosting
description: French managed hosting running a wide set of language runtimes on isolated Debian accounts, with a permanently free tier below the paid plans.
founded: 2006
hqCountry: FR
ownership: independent
whoManagesOs: managed
infraContract:
  - owns-metal
useCases:
  - cms
  - api
  - web-app
  - side-project
  - static-site
  - learning
  - background-jobs
audience:
  - solo
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
  - file-transfer
  - git
  - control-panel
sshAccess: jailed
pricingModel: fixed-tier
priceFrom: sm
priceTo: xl
currencies:
  - EUR
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
freeTier: permanent
regions:
  - FR
supportChannels:
  - email
  - forum
apiAvailable: public
referringSubnets: { now: 689, before: 689 }
status: active
checkedAt: 2026-08-01
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: greenWebId, url: 'https://app.greenweb.org/directory/#1242', checkedAt: 2026-08-10 }
  - { field: priceFrom, url: 'https://www.alwaysdata.com/en/offers/plus/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.alwaysdata.com/en/offers/plus/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.alwaysdata.com/en/offers/plus/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.alwaysdata.com/en/offers/plus/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://help.alwaysdata.com/en/admin-billing/billing/', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://www.alwaysdata.com/en/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.alwaysdata.com/en/pricing/', checkedAt: 2026-07-31 }
figure:
  emoji: 🧬
  color: rgb(69, 166, 138)
  textColor: rgb(234, 246, 242)
  text: Shared hosting, many languages.
ai: authored
greenWebId: 1242
---

alwaysdata is a Paris company registered in 2006 that owns its hardware, runs it in Equinix facilities in the Paris region on its own autonomous system, and buys transit from several carriers. Nothing leaves France.

Architecturally it is not conventional shared hosting. Accounts are isolated with cgroups on Debian, each account runs its own HTTP servers and long-lived background processes, and unused capacity is redistributed between accounts rather than hard-capped. Each supported runtime has its own documentation pages, and the PHP interpreter range on offer reaches back to releases most hosts have long retired. The free plan is permanent rather than a trial — the pricing page calls it an offer available for life — with a small storage allowance and mailboxes included, and paid plans sit above it.

## Worth knowing

Shell access comes with the paid plans; on the free plan the account is administered through the control panel and SFTP.
