---
id: jweiland
name: jweiland.net
urls:
  home: https://jweiland.net
  docs: https://jweiland.net/hosting/hilfe-support/technik.html
category:
  - shared-hosting
  - vanity-hosting
description: German shared hosting built around TYPO3, run by people who contribute to the project, with SSH and sixteen PHP versions.
hqCountry: DE
ownership: independent
whoManagesOs: managed
software:
  - typo3
runtimes:
  - php
managedDatabases:
  - mysql
  - mariadb
sshAccess: jailed
regions:
  - DE
runsOn:
  - aws
priceFrom: md
currencies:
  - EUR
billingPeriods:
  - quarterly
pricingModel: fixed-tier
useCases:
  - cms
audience:
  - smb
  - agency
status: active
emailHosting: included
cdnIncluded: included
checkedAt: 2026-08-12
sources:
  - { field: software, url: 'https://jweiland.net', checkedAt: 2026-08-07 }
  - { field: runtimes, url: 'https://jweiland.net/hosting/hilfe-support/technik.html', checkedAt: 2026-08-07 }
  - { field: managedDatabases, url: 'https://jweiland.net/hosting/hilfe-support/technik.html', checkedAt: 2026-08-07 }
  - { field: sshAccess, url: 'https://jweiland.net/hosting/hilfe-support/technik.html', checkedAt: 2026-08-07 }
  - { field: regions, url: 'https://jweiland.net/hosting/hilfe-support/technik.html', checkedAt: 2026-08-07 }
  - { field: runsOn, url: 'https://jweiland.net/hosting/hilfe-support/technik.html', checkedAt: 2026-08-07 }
  - { field: emailHosting, url: 'https://jweiland.net', checkedAt: 2026-08-12 }
  - { field: cdnIncluded, url: 'https://jweiland.net', checkedAt: 2026-08-12 }
figure:
  emoji: 🔧
  color: rgb(70, 140, 110)
  textColor: rgb(235, 248, 243)
  text: TYPO3 hosting built by CMS contributors.
ai: authored
---

jweiland.net is a small German host built specifically around TYPO3, run by people who also contribute extensions to the TYPO3 project itself. It states that it hosts more than 36,000 TYPO3 domains.

The technical documentation is unusually complete for a host this size. Sixteen PHP versions are selectable on the Cloud plans, from 5.1 to 8.4, which matters for a CMS whose long-term-support releases outlive the PHP versions they shipped against. MySQL and MariaDB are offered side by side, SSH comes with every plan rather than with the expensive ones, and the memory limit is adjustable to 2 GB.

Two generations run in parallel: Classic Hosting in Cologne on the company's own servers, and Cloud Hosting on AWS in Frankfurt. Plans are billed quarterly.
