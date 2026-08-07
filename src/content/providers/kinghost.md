---
id: kinghost
name: KingHost
urls:
  home: https://king.host
  pricing: https://king.host/hospedagem-de-sites
  status: https://status.kinghost.net.br/
  terms: https://king.host/contratos-e-politicas
  docs: https://king.host/wiki
category:
  - shared-hosting
description: Brazilian shared, WordPress and VPS hosting brand under LWSA, documenting PHP, Node.js, Python and Java application deployment on shared plans.
founded: 2006
hqCountry: BR
ownership: subsidiary
parent: locaweb
whoManagesOs: managed
useCases:
  - cms
  - campaign-site
  - api
  - side-project
audience:
  - smb
  - solo
  - agency
software:
  - wordpress
  - django
runtimes:
  - php
  - node
  - python
  - java
deployMethods:
  - file-transfer
  - git
  - control-panel
sshAccess: jailed
pricingModel: fixed-tier
entryPrice: { amount: 9.99, currency: BRL, period: month }
currencies:
  - BRL
billingPeriods:
  - monthly
  - yearly
  - multi-year
freeTier: none
contractMinimum: monthly
regions:
  - BR
supportChannels:
  - chat
  - phone
supportHours: 24-7
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://king.host/hospedagem-de-sites', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://king.host/hospedagem-de-sites', checkedAt: 2026-08-01 }
  - { field: currencies, url: 'https://king.host/hospedagem-de-sites', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://king.host/hospedagem-de-sites', checkedAt: 2026-08-02 }
  - { field: contractMinimum, url: 'https://king.host/hospedagem-de-sites', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://king.host/hospedagem-de-sites', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://king.host/hospedagem-de-sites', checkedAt: 2026-08-01 }
  - { field: supportChannels, url: 'https://king.host/hospedagem-de-sites', checkedAt: 2026-08-01 }
figure:
  emoji: 👑
  color: rgb(173, 62, 136)
  textColor: rgb(246, 234, 242)
  text: Shared hosting that admits Java exists.
ai: authored
---

KingHost started in Porto Alegre in 2006, was acquired by Locaweb in 2019 and is now sold alongside it under the listed Brazilian group LWSA. It offers shared hosting, WordPress plans and VPS, with servers stated to be in Brazil.

What separates it from the rest of the Brazilian shared-hosting field is its documentation. The knowledge base publishes real deployment walkthroughs for Node.js with Socket.IO, Django, Spring Boot, React, Angular and Phalcon, with SSH and a Git clone from GitHub, GitLab or Bitbucket as the working path, and a panel-assigned port for long-running Node processes. Third parties have built against its reseller API: there is a community WHMCS module, and acme.sh ships a KingHost DNS driver maintained inside that project.

## Worth knowing

Parts of the language documentation are visibly stale — the version-switching articles still enumerate releases that reached end of life years ago — so what the control panel actually offers has to be checked rather than read.
