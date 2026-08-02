---
id: seravo
name: Seravo
urls:
  home: https://seravo.com
  pricing: https://seravo.com/plans/
category: vanity-hosting
description: Finnish WordPress-only hosting company whose customers develop against a public, open-source project layout with Vagrant and Docker parity.
hqCountry: FI
whoManagesOs: provider
specialisation:
  - wordpress
useCases:
  - cms
  - e-commerce
  - campaign-site
audience:
  - agency
  - smb
  - government
  - non-profit
software:
  - wordpress
  - woocommerce
runtimes:
  - php
deployMethods:
  - git-push
  - ssh
  - cli
sshAccess: full
pricingModel: fixed-tier
priceFrom: md
entryPrice: { amount: 25, currency: EUR, period: month }
freeTier: none
backupsIncluded: included
energyClaim: annual-matched
sustainabilityUrl: https://seravo.com/features/sustainable/
supportChannels:
  - email
  - chat
  - phone
supportHours: 24-7
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://seravo.com/plans/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://seravo.com/plans/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://seravo.com/plans/', checkedAt: 2026-08-01 }
  - { field: energyClaim, url: 'https://seravo.com/features/sustainable/', checkedAt: 2026-08-01 }
  - { field: sustainabilityUrl, url: 'https://seravo.com/features/sustainable/', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://seravo.com/', checkedAt: 2026-08-01 }
figure:
  emoji: 🐧
  color: rgb(20, 45, 60)
  textColor: rgb(180, 225, 245)
  text: WordPress, done the Debian way.
ai: authored
---

## About Seravo

Seravo is a WordPress-only host based in Tampere, Finland. The stack is stated plainly — Docker, MariaDB, Nginx, PHP, Redis — and the company's open-source work is part of the pitch rather than a footnote.

The distinctive part is `Seravo/wordpress`, the project layout its customers develop against. It is a public repository, and Finnish agencies have built their own add-ons, Vagrant boxes and local-development templates on top of it, which means a Seravo site is an ordinary git project on a developer's machine before it is a hosting account. Deployment is by git push or over SSH, with a command-line tool for routine operations. Every plan includes daily backups, security scanning, monitoring and support from WordPress specialists.

## Worth knowing

Plans are metered by HTTP requests rather than by CPU, memory or storage. It is a measure that tracks what a site actually serves, but an unfamiliar unit to size a plan against before launch. Server locations are not disclosed on the plans page.
