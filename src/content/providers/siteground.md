---
id: siteground
name: SiteGround
urls:
  home: https://www.siteground.com
  pricing: https://eu.siteground.com/web-hosting.htm
  terms: https://www.siteground.com/viewtos/terms_of_service
  docs: https://www.siteground.com/kb/
category: shared-hosting
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
priceFrom: md
priceTo: md
billingPeriods:
  - yearly
exitWithin: a-year
billingTiming: advance
entryPrice: { amount: 15.99, currency: EUR, period: month }
renewalMultiple: 5.3
freeTier: none
contractMinimum: annual
supportChannels:
  - email
  - chat
  - phone
supportHours: 24-7
social:
  x: https://twitter.com/siteground
  facebook: https://www.facebook.com/siteground
  youtube: https://www.youtube.com/@siteground
checkedAt: 2026-08-01
sources:
  - { field: founded, url: 'https://www.siteground.com/company', checkedAt: 2026-07-31 }
  - { field: runsOn, url: 'https://www.siteground.com/company', checkedAt: 2026-07-31 }
  - { field: ownership, url: 'https://www.siteground.com/company', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://www.siteground.com/company', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://eu.siteground.com/web-hosting.htm', checkedAt: 2026-07-31 }
  - { field: priceTo, url: 'https://eu.siteground.com/web-hosting.htm', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://eu.siteground.com/web-hosting.htm', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://eu.siteground.com/web-hosting.htm', checkedAt: 2026-08-02 }
  - { field: entryPrice, url: 'https://www.siteground.com/web-hosting.htm', checkedAt: 2026-08-01 }
  - { field: renewalMultiple, url: 'https://www.siteground.com/web-hosting.htm', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://www.siteground.com/viewtos/terms_of_service', checkedAt: 2026-08-01 }
  - { field: software, url: 'https://www.siteground.com/kb/', checkedAt: 2026-07-31 }
status: active
ai: authored
figure:
  emoji: 🏗️
  color: rgb(60, 110, 90)
  textColor: rgb(240, 250, 244)
  text: Managed WordPress, rented from Google.
---

SiteGround has been independently owned since 2004 and runs its service on Google Cloud rather than its own hardware. It replaced cPanel with a proprietary control panel, Site Tools, and sells fixed shared tiers built around WordPress and WooCommerce. SSH and WP-CLI come with every tier; Git integration and staging appear on the higher ones.

The company describes itself as a group registered across several countries and names no headquarters, which is why that field is empty here rather than guessed.

## Worth knowing

The advertised entry price is a first-term rate on an annual prepayment. The regular rate applies from the first renewal and is several times higher, which is a larger step than most of the shared tier in this dataset.
