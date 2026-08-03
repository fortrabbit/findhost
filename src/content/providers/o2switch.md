---
id: o2switch
name: o2switch
urls:
  home: https://www.o2switch.fr
  pricing: https://www.o2switch.fr/hebergement-illimite/
category: shared-hosting
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
priceFrom: sm
priceTo: md
currencies:
  - EUR
billingPeriods:
  - yearly
billingTiming: advance
exitWithin: a-year
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
  - { field: priceFrom, url: 'https://www.o2switch.fr/hebergement-illimite/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.o2switch.fr/hebergement-illimite/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.o2switch.fr/cgv/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.o2switch.fr/hebergement-illimite/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.o2switch.fr/cgv/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.o2switch.fr/cgv/', checkedAt: 2026-08-02 }
figure:
  emoji: 🌋
  color: rgb(60, 30, 25)
  textColor: rgb(250, 195, 165)
  text: One offer, unlimited, from Auvergne.
ai: authored
---

## About o2switch

o2switch is unusual among French hosts in building and running its own data centres rather than renting rack space — two redundant sites in Auvergne, near Clermont-Ferrand, which the company states plainly on its own pages. It has traded since 2009 and remains independently owned.

The historic pitch was a single unlimited offer, and that shape survives: the same all-inclusive product in a few compute sizes rather than a ladder of feature tiers, with disk, sites, databases, mailboxes and traffic all sold as unmetered. The stack is cPanel with LiteSpeed in front and Varnish, Redis and Memcached available, several PHP versions selectable side by side with full `php.ini` control, and MySQL, MariaDB and PostgreSQL all present. Documentation is a public site whose source sits on GitHub.

## Worth knowing

The headline figure on the offer page is the promotional annual-payment rate, and the price it renews at is not shown next to it, so the recurring cost has to be looked up separately. Independent tooling around the platform is thin — a couple of small community deploy actions and no vendor CLI.
