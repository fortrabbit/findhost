---
id: linode
name: Linode
urls:
  home: https://www.linode.com
  pricing: https://www.linode.com/pricing/
category: vps
description: Linode is a US VPS provider founded in 2003, acquired by Akamai in 2022 and now sold as Akamai Cloud.
founded: 2003
hqCountry: US
ownership: subsidiary
parent: Akamai Technologies
whoManagesOs: you
audience:
  - developer
runtimes:
  - any
sshAccess: full
pricingModel: hourly
entryPrice: { amount: 5, currency: USD, period: month }
entryPriceBand: 5-15
regions:
  - US
  - CA
  - BR
  - GB
  - FR
  - ES
  - IT
  - NL
  - DE
  - SE
  - IN
  - SG
  - ID
  - JP
  - AU
apiAvailable: public
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://api.linode.com/v4/linode/types', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://www.linode.com/company/about/', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.linode.com/company/about/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://api.linode.com/v4/regions', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://api.linode.com/v4/linode/types', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://api.linode.com/v4/linode/types', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://api.linode.com/v4/regions', checkedAt: 2026-07-31 }
figure:
  emoji: 🇺🇸
  color: rgb(30, 85, 158)
  textColor: rgb(230, 285, 255)
  text: VPS from US by Akamai.
ai: co-authored
---

## About Linode

Linode has sold Linux virtual servers to developers since 2003. Akamai acquired the company in 2022 and the product is now marketed as Akamai Cloud. The catalogue has widened accordingly, from plain VPS instances towards broader infrastructure services integrated with Akamai's CDN and edge network.

Linode's public API — which needs no credentials to read the catalogue — lists 33 regions across 15 countries and puts the cheapest instance, the 1 GB Nanode, at $5.00 a month or $0.0075 an hour.

## Reservations

A Linode is a Linux server, and the responsibility that comes with one. Building and maintaining the web stack — Nginx, PHP-FPM, MySQL, TLS certificates, firewall rules — takes time and expertise, and security patches, operating system upgrades and monitoring are standing work rather than a one-off setup.

The product's centre of gravity has also moved. Marketing, packaging and roadmap now sit inside Akamai's enterprise infrastructure business, which is a different customer from the independent developer the original Linode was built around.
