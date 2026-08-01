---
id: lolipop
name: Lolipop!
urls:
  home: https://lolipop.jp
  pricing: https://lolipop.jp/pricing/
category: shared
description: Japanese rental server from GMO Pepabo, sold in five tiers from about a hundred yen a month, with SSH and LiteSpeed appearing only higher up the ladder.
hqCountry: JP
ownership: subsidiary
parent: GMO Pepabo
whoManagesOs: provider
useCases:
  - cms
  - portfolio
  - campaign-site
  - side-project
  - learning
audience:
  - indie-hacker
  - freelancer
  - smb
software:
  - wordpress
runtimes:
  - php
deployMethods:
  - ftp
  - ssh
  - control-panel
sshAccess: limited
managedDatabases:
  - mysql
pricingModel: fixed-tier
entryPriceBand: under-5
freeTier: trial
regions:
  - JP
contractMinimum: annual
figure:
  emoji: 🍭
  color: rgb(60, 25, 45)
  textColor: rgb(255, 195, 230)
  text: Where a lot of Japanese sites start.
ai: authored
---

## About Lolipop!

Lolipop is operated by GMO Pepabo and is one of the places a great many Japanese personal and small-business sites begin — the entry Economy plan is around ¥121 a month on a long contract, which is close to free, and still comes with 120 GB of storage and fifty domains.

Five tiers step up from there to Enterprise at ¥2,420 with 1.2 TB. The technical differences between them are real rather than cosmetic: the two upper tiers run Nginx with LiteSpeed and unlimited MySQL 8 databases, the middle ones Nginx with Apache and a database cap, and SSH appears only from the Standard plan upwards. SQLite is available across most of the range.

## Reservations

Advertised prices assume a thirty-six-month contract; shorter terms cost more. SSH is absent from the two cheapest plans, and PHP versions are not published for most tiers, so what a plan actually runs has to be discovered after purchase. Everything is in Japanese, and there is no English storefront.
