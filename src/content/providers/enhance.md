---
id: enhance
name: Enhance
urls:
  home: https://enhance.com
  pricing: https://enhance.com/pricing
  terms: https://enhance.com/terms
  docs: https://enhance.com/docs
category:
  - server-management
description: Enhance is a multi-server hosting control panel sold as software to hosting companies and agencies, licensed per website on servers the operator supplies.
founded: 2019
hqCountry: GB
whoManagesOs: self-managed
infraContract:
  - byo-iaas
audience:
  - agency
runtimes:
  - php
  - node
managedDatabases:
  - mysql
  - mariadb
  - postgres
deployMethods:
  - control-panel
sshAccess: root
backupsIncluded: included
staging: included
dnsHosting: included
emailHosting: included
collaboration: clients
pricingModel: per-resource
priceFrom: sm
entryPrice: { amount: 10, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
billingTiming: arrears
contractMinimum: none
exitWithin: a-month
freeTier: trial
supportChannels:
  - email
  - forum
supportHours: business-hours
supportTiering: all-plans
apiAvailable: public
referringSubnets: { now: 357, before: 369 }
status: active
checkedAt: 2026-09-07
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: founded, url: 'https://find-and-update.company-information.service.gov.uk/company/11757770', checkedAt: 2026-09-07 }
  - { field: hqCountry, url: 'https://enhance.com/terms', checkedAt: 2026-09-07 }
  - { field: infraContract, url: 'https://enhance.com/faqs', checkedAt: 2026-09-07 }
  - { field: audience, url: 'https://enhance.com/faqs', checkedAt: 2026-09-07 }
  - { field: runtimes, url: 'https://enhance.com/product/technology', checkedAt: 2026-09-07 }
  - { field: runtimes, url: 'https://enhance.com/docs/website-tools/nodejs', checkedAt: 2026-09-07 }
  - { field: managedDatabases, url: 'https://enhance.com/product/technology', checkedAt: 2026-09-07 }
  - { field: sshAccess, url: 'https://enhance.com/docs/getting-started/installation-guide', checkedAt: 2026-09-07 }
  - { field: backupsIncluded, url: 'https://enhance.com/pricing', checkedAt: 2026-09-07 }
  - { field: staging, url: 'https://enhance.com/pricing', checkedAt: 2026-09-07 }
  - { field: dnsHosting, url: 'https://enhance.com/product/technology', checkedAt: 2026-09-07 }
  - { field: emailHosting, url: 'https://enhance.com/product/technology', checkedAt: 2026-09-07 }
  - { field: collaboration, url: 'https://enhance.com/faqs', checkedAt: 2026-09-07 }
  - { field: pricingModel, url: 'https://enhance.com/pricing', checkedAt: 2026-09-07 }
  - { field: priceFrom, url: 'https://enhance.com/pricing', checkedAt: 2026-09-07 }
  - { field: entryPrice, url: 'https://enhance.com/faqs', checkedAt: 2026-09-07 }
  - { field: currencies, url: 'https://enhance.com/pricing', checkedAt: 2026-09-07 }
  - { field: billingPeriods, url: 'https://enhance.com/pricing', checkedAt: 2026-09-07 }
  - { field: billingTiming, url: 'https://enhance.com/pricing', checkedAt: 2026-09-07 }
  - { field: contractMinimum, url: 'https://enhance.com/pricing', checkedAt: 2026-09-07 }
  - { field: exitWithin, url: 'https://enhance.com/pricing', checkedAt: 2026-09-07 }
  - { field: freeTier, url: 'https://enhance.com/faqs', checkedAt: 2026-09-07 }
  - { field: supportChannels, url: 'https://enhance.com/faqs', checkedAt: 2026-09-07 }
  - { field: supportHours, url: 'https://enhance.com/faqs', checkedAt: 2026-09-07 }
  - { field: supportTiering, url: 'https://enhance.com/faqs', checkedAt: 2026-09-07 }
  - { field: apiAvailable, url: 'https://apidocs.enhance.com/', checkedAt: 2026-09-07 }
figure:
  emoji: 🗄️
  color: rgb(30, 110, 90)
  textColor: rgb(230, 244, 240)
  text: A control panel for people who run a hosting company.
ai: authored
---

Enhance is a [hosting control panel](/categories/server-management/) from Enhance Hosting Automation, a company registered in England in 2019 and run from Maidenhead. It is sold as software rather than as hosting: the operator installs it on Ubuntu servers they own or rent, and the panel joins those machines into a cluster in which shared, VPS and dedicated servers can sit side by side, each carrying whichever combination of LiteSpeed, OpenLiteSpeed, Apache and Nginx the operator assigns. The stated customer is a web hosting company or an agency, with resellers and sub-resellers beneath the operator's own account.

The panel runs each website in its own container with PHP started on demand, and Node.js applications through a website-level shell. MySQL, MariaDB or PostgreSQL can be deployed in any mix across a cluster, email runs on Postfix and Dovecot with rspamd in front, and DNS on PowerDNS. Incremental backups and staging sites come with the license. A REST API covers every feature the interface has, and support is by ticket, email and a community forum at no extra charge. The license is billed per website hosted, invoiced at the end of each month, with a monthly minimum.

## Worth knowing

The bill scales with the number of websites on the cluster rather than with servers, so a fleet of small sites costs more to license than the same traffic on a few large ones. Ubuntu on x86-64 is the only supported host; ARM machines and container or paravirtualized environments are not.
