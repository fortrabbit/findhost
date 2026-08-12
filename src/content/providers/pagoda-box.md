---
id: pagoda-box
name: Pagoda Box
category:
  - paas
description: A PaaS built for PHP alone, launched in 2011. Succeeded by Nanobox, which DigitalOcean acquired in 2019 and later retired.
founded: 2011
hqCountry: US
ownership: independent
whoManagesOs: managed
infraContract:
  - resells-iaas
runtimes:
  - php
deployMethods:
  - git
managedDatabases:
  - mysql
status: discontinued
checkedAt: 2026-08-07
sources:
  - { field: description, url: 'https://www.sitepoint.com/introducing-pagoda-box-paas-just-php/', checkedAt: 2026-08-07 }
  - { field: status, url: 'https://blog.cloud66.com/paas-graveyard-why-platforms-keep-dying', checkedAt: 2026-08-07 }
figure:
  emoji: 📦
  color: rgb(160, 110, 60)
  textColor: rgb(244, 239, 233)
  text: PHP platform-as-a-service, acquired and retired.
ai: authored
---

Pagoda Box was a platform-as-a-service for PHP and nothing else, launched in 2011 on rented infrastructure. Applications were deployed by git push and described in a file in the repository — a boxfile that named the components an application needed — which is close to how a container-based platform is configured today.

The team's answer to the mid-decade squeeze on general-purpose PaaS was Nanobox: the same idea rebuilt so that a developer's machine and the production environment ran the same containers, deployable to any cloud account rather than to the vendor's own. DigitalOcean acquired it in 2019, folded the ideas into what became App Platform, and the product itself was retired.

Both halves are a pattern this list keeps repeating. A platform narrow enough to be genuinely good at one language struggles to be a business on its own, and the acquisition that rescues the team rarely rescues the product.
