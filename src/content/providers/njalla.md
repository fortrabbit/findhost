---
id: njalla
name: Njalla
urls:
  home: https://njal.la
  pricing: https://njal.la/pricing/
  docs: https://njal.la/docs/
category:
  - vps
  - domains-dns
description: Privacy service that registers domains in its own name on the customer's behalf and rents self-managed Linux servers in Sweden, with sign-up by email or XMPP.
founded: 2017
hqCountry: CR
regions:
  - SE
whoManagesOs: self-managed
sshAccess: root
entryPrice: { amount: 15, currency: EUR, period: month }
priceFrom: md
priceTo: lg
currencies:
  - EUR
billingPeriods:
  - monthly
pricingModel: fixed-tier
paymentMethods:
  - crypto
  - paypal
referringSubnets: { now: 966, before: 944 }
addedAt: 2026-08-14
checkedAt: 2026-09-16
ai: authored
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-09-07 }
  - { field: category, url: 'https://njal.la/', checkedAt: 2026-09-16 }
  - {
      field: founded,
      url: 'https://torrentfreak.com/pirate-bay-founder-launches-anonymous-domain-registration-service-170419/',
      checkedAt: 2026-09-16,
    }
  - { field: hqCountry, url: 'https://njal.la/about/', checkedAt: 2026-09-16 }
  - { field: regions, url: 'https://njal.la/servers/', checkedAt: 2026-09-16 }
  - { field: whoManagesOs, url: 'https://njal.la/servers/', checkedAt: 2026-09-16 }
  - { field: sshAccess, url: 'https://njal.la/servers/', checkedAt: 2026-09-16 }
  - { field: entryPrice, url: 'https://njal.la/servers/', checkedAt: 2026-09-16 }
  - { field: priceFrom, url: 'https://njal.la/servers/', checkedAt: 2026-09-16 }
  - { field: priceTo, url: 'https://njal.la/servers/', checkedAt: 2026-09-16 }
  - { field: currencies, url: 'https://njal.la/pricing/', checkedAt: 2026-09-16 }
  - { field: billingPeriods, url: 'https://njal.la/servers/', checkedAt: 2026-09-16 }
  - { field: pricingModel, url: 'https://njal.la/servers/', checkedAt: 2026-09-16 }
  - { field: paymentMethods, url: 'https://njal.la/faq/', checkedAt: 2026-09-16 }
  - { field: 'domain ownership', url: 'https://njal.la/faq/', checkedAt: 2026-09-16 }
  - { field: operator, url: 'https://njal.la/tos/', checkedAt: 2026-09-16 }
---

Njalla sells domain names, Linux virtual servers and a VPN. A domain bought through it is registered in Njalla's own name, and the customer holds full usage rights by agreement and can transfer the name out at any time, as the [FAQ](https://njal.la/faq/) describes. Njalla is a reseller rather than an accredited registrar, and domains are priced in flat bands by top-level domain, billed yearly. The servers run on Incus with Ceph storage in Sweden, come with a root SSH account and no control panel, and are sold in fixed sizes billed monthly. Sign-up takes an email or XMPP address.

The [terms](https://njal.la/tos/) name Njalla SRL as the contracting party, and the [about page](https://njal.la/about/) places the company in Costa Rica. The FAQ says some of the team were involved in The Pirate Bay, and [TorrentFreak's report](https://torrentfreak.com/pirate-bay-founder-launches-anonymous-domain-registration-service-170419/) on the 2017 launch names co-founder Peter Sunde.

## Worth knowing

Outgoing SMTP and network scanning are blocked on the servers, per the [servers page](https://njal.la/servers/). The about page says Njalla will act on government requests that have legal merit, and will suspend a service that affects anyone's health or safety.
