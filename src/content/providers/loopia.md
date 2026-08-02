---
id: loopia
name: Loopia
urls:
  home: https://www.loopia.se
  pricing: https://www.loopia.se/webbhotell/priser/
  terms: https://www.loopia.se/avtalsvillkor/
  docs: https://www.loopia.se/support/
category: shared
description: Swedish hosting provider and registrar in Västerås offering Linux and Windows shared hosting with SSH, PHP, Python, Perl and ASP.NET.
founded: 1999
hqCountry: SE
ownership: subsidiary
parent: team.blue
useCases:
  - cms
  - e-commerce
  - portfolio
  - side-project
  - campaign-site
audience:
  - freelancer
  - smb
  - non-profit
  - indie-hacker
software:
  - wordpress
  - woocommerce
  - joomla
runtimes:
  - php
  - python
  - dotnet
deployMethods:
  - ssh
  - sftp
  - control-panel
sshAccess: full
pricingModel: fixed-tier
entryPrice: { amount: 89, currency: SEK, period: month }
priceFrom: sm
freeTier: none
energyClaim: annual-matched
supportChannels:
  - email
  - chat
supportHours: business-hours
apiAvailable: public
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://www.loopia.se/webbhotell/priser/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.loopia.se/webbhotell/priser/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.loopia.se/webbhotell/priser/', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://www.loopia.se/webbhotell/priser/', checkedAt: 2026-08-01 }
  - { field: supportChannels, url: 'https://www.loopia.se/webbhotell/priser/', checkedAt: 2026-08-01 }
  - { field: energyClaim, url: 'https://www.loopia.se/om-loopia/', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.loopia.se/om-loopia/', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://www.loopia.se/om-loopia/', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://www.loopia.se/om-loopia/', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.loopia.se/om-loopia/', checkedAt: 2026-08-01 }
figure:
  emoji: 🪟
  color: rgb(20, 50, 85)
  textColor: rgb(180, 220, 250)
  text: Still running ASP.NET, on purpose.
ai: authored
---

## About Loopia

Loopia was founded in Västerås in 1999 as NetConnect and is a domain registrar as well as a host, managing several hundred thousand domain names. Ownership has moved repeatedly: Visma sold the hosting division to the Danish investor Axcel in 2018, and Axcel sold Loopia Group to team.blue in 2024.

It is one of the few providers still running a genuine Windows hosting track — ASP.NET and MS SQL — beside the Linux one, which carries PHP with a choice of release. SSH is included on every package. A public XML-RPC domain API has drawn independent client libraries, a Terraform provider and an ACME module, none of them company-maintained.

## Worth knowing

Introductory pricing is steep in both directions: the first year runs at a fraction of the standing rate, and on the larger business plans the step up is several-fold.

Python and Perl are offered through CGI rather than a modern application server, which limits what can realistically be deployed there. The specification pages do not state where the data centres are.
