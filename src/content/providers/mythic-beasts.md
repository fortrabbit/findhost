---
id: mythic-beasts
name: Mythic Beasts
url: https://www.mythic-beasts.com
category: shared
pricingUrl: https://www.mythic-beasts.com/order/hosting
statusUrl: https://www.mythic-beasts.com/support/status
description: British host selling web and email hosting in eleven graded sizes, with multiple PHP versions per site, MySQL as standard and shell access as an add-on.
hqCountry: GB
ownership: independent
whoManagesOs: provider
useCases:
  - cms
  - portfolio
  - campaign-site
  - side-project
  - static-site
audience:
  - indie-hacker
  - freelancer
  - smb
  - education
  - non-profit
software:
  - wordpress
  - drupal
runtimes:
  - php
  - static
deployMethods:
  - sftp
  - ssh
  - ftp
sshAccess: full
managedDatabases:
  - mysql
  - postgres
backupsIncluded: included
pricingModel: fixed-tier
entryPriceBand: under-5
freeTier: none
regions:
  - GB
figure:
  emoji: 🐉
  color: rgb(35, 25, 55)
  textColor: rgb(210, 190, 250)
  text: Eleven sizes, and you pay for the shell.
ai: authored
---

## About Mythic Beasts

Mythic Beasts is a Cambridge company with a long-standing reputation among British engineers, best known outside hosting for running the Raspberry Pi Foundation's infrastructure and for renting out actual Raspberry Pis in a data centre.

The web hosting line is sold in eleven graded sizes rather than three tiers, from £1 a month for a redirection-only account through to £40 for four hundred gigabytes — which means the plan can be matched to the site rather than the other way round. Every account gets unlimited domains and mailboxes, free Let's Encrypt SSL, and a choice of PHP version per site. MySQL is standard and PostgreSQL is available on request. Servers are in UK data centres, connected by the company's own 10G fibre ring between London, Amsterdam and Cambridge.

## Reservations

Shell access is not included. SSH is an add-on at £1.50 a month, which is unusual — most hosts either give a shell or withhold it, rather than selling it separately — and it means the advertised entry price is not the price for a developer-usable account.

PHP is the only documented application runtime. The backup guarantee is honest but modest: restoration to a point no more than 36 hours before a failure, with the company recommending customers arrange their own offsite copies as well.
