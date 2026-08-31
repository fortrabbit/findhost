---
id: infinityfree
name: InfinityFree
urls:
  home: https://www.infinityfree.com
  pricing: https://www.infinityfree.com/premium/
  terms: https://www.infinityfree.com/terms/
  docs: https://forum.infinityfree.com/docs
category:
  - shared-hosting
  - free-hosting
description: Free PHP and MySQL hosting from a Dutch company, run on iFastNet's platform.
founded: 2012
hqCountry: NL
whoManagesOs: managed
infraContract:
  - resells-iaas
runtimes:
  - php
  - static
software:
  - wordpress
deployMethods:
  - file-transfer
  - control-panel
sshAccess: none
managedDatabases:
  - mysql
  - mariadb
freeTier: permanent
contractMinimum: none
useCases:
  - learning
  - side-project
  - portfolio
  - cms
audience:
  - solo
  - smb
  - non-profit
supportChannels:
  - forum
supportHours: community-only
domainRegistration: none
dnsHosting: included
emailHosting: none
testDomain: included
referringSubnets: { now: 1089, before: 1106 }
status: active
checkedAt: 2026-08-28
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: category, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: founded, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: hqCountry, url: 'https://www.infinityfree.com/terms/', checkedAt: 2026-08-28 }
  - { field: infraContract, url: 'https://www.infinityfree.com/premium/', checkedAt: 2026-08-28 }
  - { field: runtimes, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: software, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: deployMethods, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - {
      field: sshAccess,
      url: 'https://forum.infinityfree.com/t/how-to-install-a-laravel-site-on-infinityfree/118578',
      checkedAt: 2026-08-28,
    }
  - { field: managedDatabases, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: freeTier, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: contractMinimum, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: useCases, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: audience, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: supportChannels, url: 'https://www.infinityfree.com/contact/', checkedAt: 2026-08-28 }
  - { field: supportHours, url: 'https://www.infinityfree.com/contact/', checkedAt: 2026-08-28 }
  - { field: domainRegistration, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: dnsHosting, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: emailHosting, url: 'https://www.infinityfree.com/premium/', checkedAt: 2026-08-28 }
  - { field: testDomain, url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: 'how it is funded', url: 'https://www.infinityfree.com/', checkedAt: 2026-08-28 }
  - { field: 'daily hit cap', url: 'https://www.infinityfree.com/premium/', checkedAt: 2026-08-28 }
  - {
      field: 'inode ceiling',
      url: 'https://forum.infinityfree.com/t/inode-limit-on-free-hosting/49331',
      checkedAt: 2026-08-28,
    }
  - { field: 'account rules', url: 'https://www.infinityfree.com/terms/', checkedAt: 2026-08-28 }
figure:
  emoji: ♾️
  color: rgb(23, 128, 98)
  textColor: rgb(236, 246, 242)
  text: Free hosting, and only free hosting.
ai: authored
---

InfinityFree is a free hosting brand registered in the Netherlands that has been giving away PHP and MySQL accounts since 2012. It operates no servers of its own: accounts run on iFastNet's platform, which the site names in its footer, and the only paid tier it offers is a link to iFastNet's own plans. Signing up takes an email address and no card, a site can use one of the subdomains on offer or a domain registered elsewhere, and nothing is placed on the hosted site — the company says advertising on its own pages and control panel pays for the rest.

## Worth knowing

[The platform's own Laravel guide](https://forum.infinityfree.com/t/how-to-install-a-laravel-site-on-infinityfree/118578) says shell access is not available, that InfinityFree provides no cron jobs or any other way to run scheduled tasks, and that long-running background processes are not allowed — so Composer runs on your machine, migrations go through phpMyAdmin, and the result arrives by FTP. The [comparison with the paid plans](https://www.infinityfree.com/premium/) puts mailboxes, full PHP `mail()` and remote MySQL access on the paid side, and caps a free account at 50,000 hits a day. The file count binds before the disk figure does: an account meets [the inode ceiling](https://forum.infinityfree.com/t/inode-limit-on-free-hosting/49331) long before it fills the space, and the counter behind it refreshes every eight hours rather than live.

[The terms](https://www.infinityfree.com/terms/) set the rest: three free accounts per person, no reselling, no shells or proxies, no file distribution or archives, suspension at the provider's discretion for resource use it judges excessive, and no undertaking that anything is backed up. Support is the knowledge base and the forum — [the contact page](https://www.infinityfree.com/contact/) says free hosting does not include one-on-one support by email, ticket, phone or chat.
