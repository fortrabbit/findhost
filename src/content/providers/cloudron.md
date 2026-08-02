---
id: cloudron
name: Cloudron
urls:
  home: https://www.cloudron.io
  pricing: https://www.cloudron.io/pricing.html
category: server-management
regions: null
description: Self-hosting platform that installs and keeps open-source applications updated on the customer's own server, with per-app backups and single sign-on.
infraContract:
  - byo-iaas
whoManagesOs: panel-assisted
useCases:
  - internal-tool
  - cms
  - side-project
  - api
audience:
  - indie-hacker
  - freelancer
  - smb
  - non-profit
software:
  - wordpress
  - ghost
  - n8n
  - directus
runtimes:
  - docker
  - any
deployMethods:
  - control-panel
  - cli
  - docker-image
sshAccess: full
pricingModel: fixed-tier
priceFrom: md
priceTo: lg
currencies:
  - EUR
billingPeriods:
  - monthly
  - yearly
exitWithin: a-month
freeTier: permanent
checkedAt: 2026-08-01
sources:
  - { field: priceFrom, url: 'https://www.cloudron.io/pricing.html', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.cloudron.io/pricing.html', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.cloudron.io/pricing.html', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.cloudron.io/legal/terms.html', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.cloudron.io/legal/terms.html', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://www.cloudron.io/pricing.html', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.cloudron.io/pricing.html', checkedAt: 2026-08-01 }
figure:
  emoji: 🏡
  color: rgb(30, 45, 40)
  textColor: rgb(185, 230, 210)
  text: Self-hosting for people with other jobs.
ai: authored
---

## About Cloudron

Cloudron addresses the part of self-hosting that outlasts the install: keeping the applications patched afterwards. It runs on a server the customer owns, installs applications from its own catalogue, and then handles updates, per-application backups, a firewall, mail and single sign-on across all of them.

Plans are graded by how many applications are managed, with a small free tier at the bottom and higher tiers adding user groups, a directory server and multiple backup destinations. The company is explicit that it does not resell the applications — the charge is for the management platform — and equally explicit that it has no access to the customer's server. Development has run continuously since 2014.
