---
id: gandi
name: Gandi
urls:
  home: https://www.gandi.net
  pricing: https://www.gandi.net/en/simple-hosting
  status: https://status.gandi.net/
category:
  - shared-hosting
  - domains-dns
description: Gandi is a French registrar whose Simple Hosting product runs application code in per-customer Linux containers, deployed by git or SFTP.
hqCountry: FR
whoManagesOs: self-managed
useCases:
  - cms
  - e-commerce
  - api
  - portfolio
  - side-project
  - static-site
audience:
  - solo
  - agency
  - smb
software:
  - wordpress
runtimes:
  - php
  - python
  - node
  - static
deployMethods:
  - git
  - file-transfer
  - control-panel
managedDatabases:
  - mysql
  - postgres
pricingModel: fixed-tier
priceFrom: xs
priceTo: md
currencies:
  - EUR
  - GBP
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
entryPrice: { amount: 2, currency: EUR, period: month }
freeTier: none
domainRegistration: included
dnsHosting: included
emailHosting: included
regions:
  - FR
  - LU
apiAvailable: public
status: active
checkedAt: 2026-08-12
sources:
  - { field: priceFrom, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-02 }
  - { field: entryPrice, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-01 }
  - { field: runtimes, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-01 }
  - { field: domainRegistration, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-12 }
  - { field: dnsHosting, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-12 }
  - { field: emailHosting, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-12 }
figure:
  emoji: 📮
  color: rgb(77, 77, 157)
  textColor: rgb(234, 234, 245)
  text: The registrar that also runs your code.
ai: authored
---

Gandi is best known as a domain registrar; Simple Hosting, now also branded Web Hosting, is the side of it that runs application code. Each instance is an isolated Linux container with dedicated resources and Varnish caching in front, deployed by git or SFTP, placed either in Paris or in Bissen in Luxembourg.

PHP, Python and Node.js are the documented runtimes across the plan ladder, with MySQL and PostgreSQL available alongside. Plans are fixed tiers, sized by the resources allotted to the container.

## Worth knowing

The documented runtime range is narrow: the WordPress auto-install page names only a short list of supported PHP versions, and Ruby is absent from the language list entirely. Ordinary interactive SSH could not be confirmed — there is an emergency console, which is not the same thing.

Ownership could not be established from any page Gandi operates; the company pages that would state it return 404.
