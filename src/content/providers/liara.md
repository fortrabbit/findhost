---
id: liara
name: Liara
urls:
  home: https://liara.ir
  pricing: https://liara.ir/pricing/
  docs: https://docs.liara.ir/
  terms: https://liara.ir/terms/
category:
  - paas
  - iaas
  - dbaas
  - mail
description: An Iranian cloud platform selling platform-as-a-service, virtual servers and managed databases, priced and billed in Iranian rial.
founded: 2018
hqCountry: IR
whoManagesOs: managed
useCases:
  - web-app
  - api
  - cms
audience:
  - solo
  - smb
runtimes:
  - node
  - php
  - python
  - dotnet
  - go
software:
  - laravel
  - django
  - flask
  - nextjs
  - nuxt
managedDatabases:
  - mysql
  - mariadb
  - postgres
  - redis
  - mongodb
  - clickhouse
deployMethods:
  - git
  - docker-image
sshAccess: jailed
persistentStorage: true
cliTool: official
apiAvailable: public
pricingModel: fixed-tier
billingPeriods:
  - monthly
  - hourly
emailHosting: paid-addon
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
figure:
  emoji: 🪐
  color: rgb(110, 40, 30)
  textColor: rgb(250, 235, 225)
  text: Named after planets. Priced in toman.
ai: authored
sources:
  - { field: founded, url: 'https://liara.ir/about/', checkedAt: 2026-09-18 }
  - { field: hqCountry, url: 'https://liara.ir/about/', checkedAt: 2026-09-18 }
  - { field: whoManagesOs, url: 'https://docs.liara.ir/paas/details/console-shell/', checkedAt: 2026-09-18 }
  - { field: useCases, url: 'https://liara.ir', checkedAt: 2026-09-18 }
  - { field: audience, url: 'https://liara.ir/about/', checkedAt: 2026-09-18 }
  - { field: runtimes, url: 'https://docs.liara.ir/', checkedAt: 2026-09-18 }
  - { field: software, url: 'https://liara.ir', checkedAt: 2026-09-18 }
  - { field: managedDatabases, url: 'https://docs.liara.ir/', checkedAt: 2026-09-18 }
  - { field: deployMethods, url: 'https://docs.liara.ir/paas/cicd/github/', checkedAt: 2026-09-18 }
  - { field: sshAccess, url: 'https://docs.liara.ir/paas/details/console-shell/', checkedAt: 2026-09-18 }
  - { field: persistentStorage, url: 'https://docs.liara.ir/paas/disks/about/', checkedAt: 2026-09-18 }
  - { field: cliTool, url: 'https://docs.liara.ir/', checkedAt: 2026-09-18 }
  - { field: apiAvailable, url: 'https://developers.liara.ir/', checkedAt: 2026-09-18 }
  - { field: pricingModel, url: 'https://liara.ir/pricing/', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://liara.ir/pricing/', checkedAt: 2026-09-18 }
  - { field: emailHosting, url: 'https://liara.ir/pricing/', checkedAt: 2026-09-18 }
---

Liara is a cloud platform based in Qom, Iran, selling platform-as-a-service, virtual private servers and managed databases from its own data centers. An app is deployed by pushing a Docker image, connecting the Liara CLI to a CI pipeline, or triggering a build from a linked GitHub or GitLab repository; Liara then runs it in a managed container with a read-only filesystem, and a separate disk resource can be attached where a service needs to keep files across restarts. Command-line access to a running app goes through a restricted, browser-based console rather than a full shell — the [documentation](https://docs.liara.ir/paas/details/console-shell/) says a customer cannot install system packages from it. Managed databases cover MySQL, MariaDB, PostgreSQL, Redis, MongoDB and ClickHouse, each provisioned and maintained by Liara. Separate product lines sell email hosting, object storage and Windows or Linux virtual servers billed by the hour.

## Worth knowing

Every price on Liara's [pricing page](https://liara.ir/pricing/) is quoted in Iranian toman, and no page found states a dollar or other foreign-currency price; a reader converting the figures is converting an amount the provider itself has not published in another currency. The pricing and documentation are almost entirely in Persian.
