---
id: dnsimple
name: DNSimple
urls:
  home: https://dnsimple.com
  pricing: https://dnsimple.com/pricing
  docs: https://support.dnsimple.com
category:
  - domains-dns
description: Domain registration, DNS hosting and certificates sold together, priced per zone and per query.
ownership: independent
runtimes: null
deployMethods: null
sshAccess: null
domainRegistration: paid-addon
dnsHosting: paid-addon
pricingModel: usage-based
currencies:
  - USD
referringSubnets: { now: 1186, before: 1195 }
status: active
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: category, url: 'https://dnsimple.com/pricing', checkedAt: 2026-08-12 }
  - { field: pricingModel, url: 'https://dnsimple.com/pricing', checkedAt: 2026-08-12 }
  - { field: currencies, url: 'https://dnsimple.com/pricing', checkedAt: 2026-08-12 }
  - { field: domainRegistration, url: 'https://dnsimple.com/pricing', checkedAt: 2026-08-12 }
  - { field: dnsHosting, url: 'https://dnsimple.com/pricing', checkedAt: 2026-08-12 }
  - { field: ownership, url: 'https://dnsimple.com/with/microconf', checkedAt: 2026-08-21 }
figure:
  emoji: 🧭
  color: rgb(36, 84, 120)
  textColor: rgb(234, 242, 249)
  text: Names, nameservers, certificates.
ai: authored
---

DNSimple sells the layer between a name and whatever it points at: registration, DNS hosting, certificates and email forwarding, with an API over all of it. Billing is per hosted zone and per million queries rather than by plan, so the cost follows how much is being answered for.

## Worth knowing

Nothing of a customer's runs here — no runtime, no deploy, no shell — so those rows read as not applicable. It is bought alongside a [host](/categories/paas/), not instead of one.

DNS is sold as a product in its own right rather than as something included with a domain, which is the distinction the company was built on: the default nameservers a registrar hands over are the thing it is offering to replace.
