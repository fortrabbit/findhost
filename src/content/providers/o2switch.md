---
id: o2switch
name: o2switch
url: https://www.o2switch.fr
category: shared
pricingUrl: https://www.o2switch.fr/hebergement-illimite/
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
supportChannels:
  - phone
  - email
  - chat
cliTool: none
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

PHP is the only documented application runtime — Node, Python and Ruby do not appear on the offer page at all. Discounting is aggressive: the middle plan is listed at €16 a month and sold at under €2 for the first year, renewing at list price, so the advertised figure and the recurring figure are different numbers. Independent tooling around the platform is thin, amounting to a couple of small community deploy actions.
