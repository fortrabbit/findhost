---
id: transip
name: TransIP
url: https://www.transip.nl
category: shared
pricingUrl: https://www.transip.nl/webhosting/
statusUrl: https://www.transnoc.nl/
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

The headline webhosting price is a three-month promotion against a regular rate several times higher. The status page is a single "all systems online" banner rather than a component-level incident history, which makes it hard to reconstruct what happened after the fact.
