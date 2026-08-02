---
id: gandi
name: Gandi
urls:
  home: https://www.gandi.net
  pricing: https://www.gandi.net/en/simple-hosting
  status: https://status.gandi.net/
category: shared
description: Gandi is a French registrar whose Simple Hosting product runs application code in per-customer Linux containers, deployed by git or SFTP.
hqCountry: FR
whoManagesOs: container
useCases:
  - cms
  - e-commerce
  - api
  - portfolio
  - side-project
  - static-site
audience:
  - freelancer
  - agency
  - smb
  - indie-hacker
software:
  - wordpress
runtimes:
  - php
  - python
  - node
  - static
deployMethods:
  - git-push
  - sftp
  - control-panel
managedDatabases:
  - mysql
  - postgres
pricingModel: fixed-tier
priceFrom: xs
entryPrice: { amount: 2, currency: EUR, period: month }
freeTier: none
regions:
  - FR
  - LU
apiAvailable: public
status: active
checkedAt: 2026-08-01
sources:
  - { field: priceFrom, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-01 }
  - { field: runtimes, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://www.gandi.net/en/simple-hosting', checkedAt: 2026-08-01 }
figure:
  emoji: 📮
  color: rgb(35, 35, 40)
  textColor: rgb(230, 220, 200)
  text: The registrar that also runs your code.
ai: authored
---

## About Gandi

Gandi is best known as a domain registrar; Simple Hosting, now also branded Web Hosting, is the side of it that runs application code. Each instance is an isolated Linux container with dedicated resources and Varnish caching in front, deployed by git or SFTP, placed either in Paris or in Bissen in Luxembourg.

PHP, Python and Node.js are the documented runtimes across the plan ladder, with MySQL and PostgreSQL available alongside. Plans are fixed tiers, sized by the resources allotted to the container.

## Worth knowing

The documented runtime range is narrow: the WordPress auto-install page names only a short list of supported PHP versions, and Ruby is absent from the language list entirely. Ordinary interactive SSH could not be confirmed — there is an emergency console, which is not the same thing.

Ownership could not be established from any page Gandi operates; the company pages that would state it return 404.
