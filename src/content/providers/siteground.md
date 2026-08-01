---
id: siteground
name: SiteGround
urls:
  home: https://www.siteground.com
  pricing: https://eu.siteground.com/web-hosting.htm
category: shared
description: Independently owned managed hosting running on Google Cloud, aimed at WordPress and WooCommerce, with its own control panel.
founded: 2004
ownership: independent
runtimes:
  - php
software:
  - wordpress
  - woocommerce
useCases:
  - cms
  - e-commerce
  - campaign-site
  - portfolio
  - side-project
audience:
  - freelancer
  - agency
  - smb
infraContract:
  - resells-iaas
runsOn:
  - gcp
whoManagesOs: provider
sshAccess: full
deployMethods:
  - ssh
  - sftp
  - dashboard
  - git-push
pricingModel: fixed-tier
entryPriceBand: 15-50
renewalMultiple: 5.3
freeTier: none
contractMinimum: annual
supportChannels:
  - email
  - chat
  - phone
social:
  x: https://twitter.com/siteground
  facebook: https://www.facebook.com/siteground
  youtube: https://www.youtube.com/@siteground
checkedAt: 2026-07-31
sources:
  - { field: founded, url: 'https://www.siteground.com/company', checkedAt: 2026-07-31 }
  - { field: runsOn, url: 'https://www.siteground.com/company', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://eu.siteground.com/web-hosting.htm', checkedAt: 2026-07-31 }
  - { field: software, url: 'https://www.siteground.com/kb/', checkedAt: 2026-07-31 }
status: active
ai: authored
figure:
  emoji: 🏗️
  color: rgb(60, 110, 90)
  textColor: rgb(240, 250, 244)
  text: Managed WordPress, rented from Google.
---

## About SiteGround

SiteGround has been independently owned since 2004 and runs its service entirely on Google Cloud, with a proprietary Site Tools control panel rather than cPanel. Every shared tier ships SSH and WP-CLI; Git integration and staging start at the middle plan. The company describes itself as a group registered across the USA, UK, Spain, Cyprus and Bulgaria, and names no headquarters, which is why that field is empty here rather than guessed.

Documentation covers PHP and nothing else. There is no public knowledge-base material for Node.js, Python or Ruby, so treat it as a PHP platform until a page says otherwise.

## Reservations

The gap between the introductory and the regular price is among the widest in this dataset: the entry plan is €2.99 a month on a twelve-month prepayment against €15.99 afterwards, and the two plans above it follow the same 78–81% first-term discount. There is no monthly billing entry point and no permanent free tier.

Worth knowing about the platform's own changes: a Craft CMS issue thread records SiteGround altering its cache policy unilaterally, after which a customer's entire site — control panel included — was aggressively cached.
