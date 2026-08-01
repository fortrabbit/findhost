---
id: o2switch
name: o2switch
urls:
  home: https://www.o2switch.fr
  pricing: https://www.o2switch.fr/hebergement-illimite/
category: shared
description: French shared host selling a single all-inclusive cPanel offer in three sizes, running in its own data centres in Auvergne.
founded: 2009
hqCountry: FR
ownership: independent
whoManagesOs: panel-assisted
infraContract:
  - owns-metal
useCases:
  - cms
  - e-commerce
  - portfolio
  - campaign-site
  - side-project
  - static-site
audience:
  - freelancer
  - agency
  - smb
  - indie-hacker
  - non-profit
software:
  - wordpress
  - drupal
  - joomla
runtimes:
  - php
  - static
deployMethods:
  - ssh
  - sftp
  - control-panel
sshAccess: full
pricingModel: fixed-tier
entryPriceBand: 5-15
freeTier: none
regions:
  - FR
sustainabilityUrl: https://www.o2switch.fr/green/
supportChannels:
  - phone
  - email
  - chat
supportHours: 24-7
cliTool: none
status: active
checkedAt: 2026-08-01
sources:
  - { field: infraContract, url: 'https://www.o2switch.fr/', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://www.o2switch.fr/', checkedAt: 2026-07-31 }
  - { field: hqCountry, url: 'https://www.o2switch.fr/', checkedAt: 2026-07-31 }
  - { field: supportHours, url: 'https://www.o2switch.fr/hebergement-illimite/', checkedAt: 2026-08-01 }
  - { field: supportChannels, url: 'https://www.o2switch.fr/hebergement-illimite/', checkedAt: 2026-08-01 }
  - { field: sustainabilityUrl, url: 'https://www.o2switch.fr/green/', checkedAt: 2026-08-01 }
figure:
  emoji: 🌋
  color: rgb(60, 30, 25)
  textColor: rgb(250, 195, 165)
  text: One offer, unlimited, from Auvergne.
ai: authored
---

## About o2switch

o2switch is unusual among French hosts in building and running its own data centres rather than renting rack space — two redundant sites in Auvergne, near Clermont-Ferrand, which the company states plainly on its own pages. It has traded since 2009.

The historic pitch was a single unlimited offer, and that has become three sizes rather than a ladder of tiers: 8, 12 or 24 vCPU, all with unlimited disk, sites, databases, mailboxes and traffic. The stack is cPanel with LiteSpeed, Varnish, Redis and Memcached; PHP runs from 5.2 to 8.4 with several versions available at once and full `php.ini` control; MySQL, MariaDB and PostgreSQL are all present. Documentation is a public Docusaurus site whose source sits on GitHub.

## Reservations

PHP is the only documented application runtime — Node, Python and Ruby do not appear on the offer page at all. Discounting is aggressive, and the home page leads with the discounted figure: "L'Offre Unique" is fronted at €1.86 a month net, which is the annual-payment promotional rate rather than the recurring one. The list price it renews at is not shown beside it, so no renewal multiple is recorded — and the entry price band here has not been verified against a standing rate. Independent tooling around the platform is thin, amounting to a couple of small community deploy actions.
