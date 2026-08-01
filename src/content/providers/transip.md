---
id: transip
name: TransIP
urls:
  home: https://www.transip.nl
  pricing: https://www.transip.nl/webhosting/
  status: https://www.transnoc.nl/
  terms: https://www.transip.nl/algemene-voorwaarden/
  docs: https://api.transip.nl/rest/docs.html
category: shared
description: Dutch registrar and hosting provider selling shared PHP webhosting, VPS, OpenStack cloud and managed Kubernetes from its own Netherlands data centres.
founded: 2003
hqCountry: NL
ownership: subsidiary
parent: team.blue
useCases:
  - cms
  - e-commerce
  - api
  - side-project
  - static-site
audience:
  - freelancer
  - smb
  - agency
  - indie-hacker
software:
  - wordpress
  - woocommerce
runtimes:
  - php
  - any
deployMethods:
  - sftp
  - ssh
  - control-panel
  - api
sshAccess: full
pricingModel: fixed-tier
entryPriceBand: 5-15
freeTier: none
regions:
  - NL
apiAvailable: public
social:
  x: https://twitter.com/TransIP
  linkedin: https://nl.linkedin.com/company/transip
  facebook: https://www.facebook.com/transipNL
  youtube: https://youtube.com/TransIP
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPriceBand, url: 'https://www.transip.eu/web-hosting/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://www.transip.eu/web-hosting/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://www.transip.nl/over-transip/', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.transip.nl/over-transip/', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://www.transip.nl/over-transip/', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://www.transip.nl', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://www.transip.nl/algemene-voorwaarden/', checkedAt: 2026-08-01 }
figure:
  emoji: 🌷
  color: rgb(15, 55, 50)
  textColor: rgb(175, 230, 215)
  text: Registrar first, cloud second.
ai: authored
---

## About TransIP

TransIP has traded from Leiden since 2003 and belongs to team.blue, the Ghent and Amsterdam group that also owns Combell, Hypernode, Loopia and Simply.com. Data stays in two Dutch facilities, Amsterdam and Alblasserdam, and the company makes a point of building its own systems rather than reselling.

The three product lines sit at different levels. Shared webhosting is PHP with SFTP and a control panel; the VPS line adds root access and therefore any runtime; and an OpenStack public cloud with managed Kubernetes sits above both. What ties them together is a documented REST API, around which independent developers have built a Terraform provider, a certbot plugin and a lego DNS module — an automation surface unusual for a mass-market registrar.

## Reservations

The headline webhosting price on the Dutch site is a three-month promotion against a regular rate several times higher. The English-language site lists the same three tiers — Core at €9.99 a month, Pro at €15.99, Max at €29.99 — without a promotional qualifier, so which number a buyer sees depends on which door they come in through. The status page is a single "all systems online" banner rather than a component-level incident history, which makes it hard to reconstruct what happened after the fact.
