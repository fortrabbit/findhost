---
id: gandi
name: Gandi
url: https://www.gandi.net
category: shared
pricingUrl: https://www.gandi.net/en/simple-hosting
statusUrl: https://status.gandi.net/
description: French registrar whose Simple Hosting product runs PHP, Python and Node applications in per-customer Linux containers with git or SFTP deploys.
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
entryPriceBand: under-5
freeTier: none
regions:
  - FR
apiAvailable: public
figure:
  emoji: 📮
  color: rgb(35, 35, 40)
  textColor: rgb(230, 220, 200)
  text: The registrar that also runs your code.
ai: authored
---

## About Gandi

Gandi is best known as a domain registrar; Simple Hosting, now also branded Web Hosting, is the side of it that runs application code. Each instance is an isolated Linux container with its own dedicated resources and Varnish caching, deployed by git or SFTP, with a choice of Paris or Bissen in Luxembourg. PHP, Python and Node.js are the documented runtimes, with MySQL and PostgreSQL alongside.

The independent tooling that exists around it is mostly small and mostly old — a Vagrant configuration reproducing the Simple Hosting architecture locally, deployment scripts wiring GitHub to an instance, a working Flarum layout — but it is written by people outside the company, which is the point.

## Reservations

The documented PHP range is narrow: the WordPress auto-install page states that only 8.1, 8.2 and 8.3 are supported, and Ruby is absent from the language list entirely. Ordinary interactive SSH could not be confirmed — there is an emergency console, which is not the same thing. Ownership could not be established from any page Gandi operates; the company pages that would say so return 404. The status page shows hosting nodes running at 99.95 to 99.99% while every other Gandi service sits at 100%.
