---
id: combell
name: Combell
urls:
  home: https://www.combell.com
  pricing: https://www.combell.com/en/hosting/web-hosting
  status: https://status.combell.com/en/
category:
  - shared-hosting
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
priceFrom: md
priceTo: lg
currencies:
  - EUR
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-quarter
renewalMultiple: 3.3
freeTier: none
regions:
  - BE
  - NL
status: active
checkedAt: 2026-08-01
sources:
  - { field: priceFrom, url: 'https://www.combell.com/en/hosting/web-hosting', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.combell.com/en/servers/vps-server-hosting', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.combell.com/en/about-combell/general-conditions', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.combell.com/en/about-combell/general-conditions', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.combell.com/en/about-combell/general-conditions', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.combell.com/en/about-combell/general-conditions', checkedAt: 2026-08-02 }
  - { field: renewalMultiple, url: 'https://www.combell.com/en/hosting/web-hosting', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://www.combell.com/en/hosting/web-hosting', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://www.combell.com/en/about-combell', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.combell.com/en/about-combell', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://www.combell.com/en/about-combell', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://www.combell.com/en/about-combell', checkedAt: 2026-08-01 }
supportChannels:
  - email
  - chat
  - phone
supportHours: 24-7
apiAvailable: public
figure:
  emoji: 🧇
  color: rgb(75, 50, 15)
  textColor: rgb(245, 215, 165)
  text: Benelux incumbent, framework aware.
ai: authored
---

Combell was founded in Ghent in 1999 and became the anchor of Combell Group, which merged with TransIP Group in 2019 to form team.blue. Data centres are in Belgium and the Netherlands, and the company sells across the Benelux.

Shared hosting is PHP-FPM on Percona MySQL with shell access, a git-based deployment pipeline and separately sold Node.js hosting. The public knowledge base carries framework-specific instructions rather than generic ones, down to pointing a domain at a Laravel application's `public` directory. An HMAC-authenticated API exists, documented mainly for resellers.

First-year pricing runs at roughly a third of the standing rate and Combell prints both figures, so the band recorded here is the rate a customer pays from the second year on rather than the advertised one.
