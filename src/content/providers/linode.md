---
id: linode
name: Linode
urls:
  home: https://www.linode.com
  pricing: https://www.linode.com/pricing/
category:
  - vps
description: Linode is a US VPS provider founded in 2003, acquired by Akamai in 2022 and now sold as Akamai Cloud.
founded: 2003
hqCountry: US
ownership: subsidiary
parent: Akamai Technologies
whoManagesOs: you
runtimes:
  - any
sshAccess: full
pricingModel: hourly
entryPrice: { amount: 5, currency: USD, period: month }
priceFrom: sm
priceTo: lg
currencies:
  - USD
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
exitWithin: a-day
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
status: acquired
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://api.linode.com/v4/linode/types', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://www.linode.com/company/about/', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.linode.com/company/about/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://api.linode.com/v4/regions', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://api.linode.com/v4/linode/types', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://api.linode.com/v4/linode/types', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://api.linode.com/v4/linode/types', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://techdocs.akamai.com/cloud-computing/docs/understanding-how-billing-works', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://techdocs.akamai.com/cloud-computing/docs/understanding-how-billing-works', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://techdocs.akamai.com/cloud-computing/docs/understanding-how-billing-works', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://api.linode.com/v4/linode/types', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://api.linode.com/v4/regions', checkedAt: 2026-07-31 }
figure:
  emoji: 🇺🇸
  color: rgb(30, 85, 158)
  textColor: rgb(230, 285, 255)
  text: VPS from US by Akamai.
---

Linode has sold Linux virtual servers to developers since 2003. Akamai acquired it in 2022 and the product is now marketed as Akamai Cloud, with the catalogue widening from plain VPS instances towards broader infrastructure services integrated with Akamai's CDN and edge network.

The public API needs no credentials to read the catalogue, so instance types, prices and the region list can be queried directly rather than read off a pricing page — which is where the figures in this record come from.

## Worth knowing

The product's centre of gravity has moved. Marketing, packaging and roadmap now sit inside Akamai's enterprise infrastructure business, a different customer from the independent developer Linode was built around.

The corporate pages have gone with it: `linode.com/company/about/` redirects to akamai.com and the Linode terms of service return 404, so the company behind the product can now only be read about under another name.
