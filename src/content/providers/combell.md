---
id: combell
name: Combell
urls:
  home: https://www.combell.com
  pricing: https://www.combell.com/en/hosting/web-hosting
  status: https://status.combell.com/en/
category: shared
description: Belgian hosting provider offering shared PHP and Node.js hosting, VPS and OpenStack from data centres in Belgium and the Netherlands.
founded: 1999
hqCountry: BE
ownership: subsidiary
parent: team.blue
useCases:
  - cms
  - e-commerce
  - api
  - saas
audience:
  - freelancer
  - agency
  - smb
  - enterprise
software:
  - wordpress
  - laravel
  - symfony
runtimes:
  - php
  - node
deployMethods:
  - git-push
  - ssh
  - ftp
  - control-panel
  - api
sshAccess: full
pricingModel: fixed-tier
entryPriceBand: 15-50
renewalMultiple: 3.3
freeTier: none
status: active
checkedAt: 2026-07-31
sources:
  - { field: entryPriceBand, url: 'https://www.combell.com/en/hosting/web-hosting', checkedAt: 2026-07-31 }
  - { field: renewalMultiple, url: 'https://www.combell.com/en/hosting/web-hosting', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://www.combell.com/en/hosting/web-hosting', checkedAt: 2026-07-31 }
supportChannels:
  - email
  - chat
  - phone
apiAvailable: public
figure:
  emoji: 🧇
  color: rgb(75, 50, 15)
  textColor: rgb(245, 215, 165)
  text: Benelux incumbent, framework aware.
ai: authored
---

## About Combell

Combell was founded in Ghent in 1999 and became the anchor of Combell Group, which merged with TransIP Group in 2019 to form team.blue. Combell alone reports more than 400,000 customers across the Benelux. Data centres are in Belgium and the Netherlands.

Shared hosting is PHP-FPM on Percona MySQL with SSH, an "Auto GIT" deployment pipeline and separately sold Node.js hosting. The knowledge base is public and goes further than most hosts of this size — it carries framework-specific instructions, including how to point a domain at Laravel's `public` directory. An HMAC-authenticated API exists, documented mainly for resellers, and independent PHP and Node.js clients for it have been published by Belgian agencies.

## Reservations

First-year pricing runs at roughly a third of the renewal rate, and Combell prints both figures: Business is €5.99 a month in the first year against €19.49 after, Professional €8.99 against €27.99, Expert €14.99 against €45.99. The entry plan therefore renews at about 3.3 times what it was bought at, and the band recorded here is the standing rate rather than the advertised one. The independent tooling that exists is unofficial API clients rather than any mention in framework documentation, which is a thinner form of ecosystem presence.
