---
id: fortrabbit
name: fortrabbit
urls:
  home: https://www.fortrabbit.com
  pricing: https://www.fortrabbit.com/pricing
  status: https://status.fortrabbit.com
  terms: https://www.fortrabbit.com/legal/contract/terms
  dpa: https://www.fortrabbit.com/legal/data-protection/data-processing
  sla: https://www.fortrabbit.com/legal/contract/service-level-agreement
category:
  - paas
audience:
  - solo
useCases:
  - cms
  - e-commerce
  - api
  - web-app
social:
  x: https://x.com/fortrabbit
  bluesky: https://bsky.app/profile/fortrabbit.com
  mastodon: https://mastodon.social/@fortrabbit
  linkedin: https://www.linkedin.com/company/fortrabbit/
  github: https://github.com/fortrabbit
description: Managed hosting platform for developers since 2012, runs on AWS capacity in Ireland and the US.
founded: 2012
hqCountry: DE
ownership: independent
headcount: '2-10'
whoManagesOs: managed
infraContract:
  - resells-iaas
runtimes:
  - php
software:
  - laravel
  - symfony
  - craft-cms
  - statamic
  - kirby
  - wordpress
  - joomla
  - drupal
  - typo3
  - magento
  - shopware
deployMethods:
  - git
sshAccess: jailed
managedDatabases:
  - mysql
backupsIncluded: included
pricingModel: fixed-tier
priceFrom: xs
priceTo: lg
currencies:
  - EUR
  - USD
billingPeriods:
  - monthly
billingTiming: arrears
exitWithin: a-day
entryPrice: { amount: 2.5, currency: EUR, period: month }
freeTier: trial
renewalMultiple: 1
contractMinimum: none
regions:
  - IE
  - US
runsOn:
  - aws
domainRegistration: none
dnsHosting: none
emailHosting: none
testDomain: included
collaboration: clients
staging: included
gdprDpa: standard
supportChannels:
  - email
  - chat
supportHours: business-hours
supportTiering: all-plans
apiAvailable: public
cliTool: official
mcpServer: official
status: active
checkedAt: 2026-08-01
sources:
  - { field: headcount, url: 'https://www.fortrabbit.com/us/team', checkedAt: 2026-08-08 }
  - { field: software, url: 'https://www.fortrabbit.com/', checkedAt: 2026-08-05 }
  - { field: audience, url: 'https://www.fortrabbit.com/php-cloud-hosting', checkedAt: 2026-08-06 }
  - { field: useCases, url: 'https://www.fortrabbit.com/php-cloud-hosting', checkedAt: 2026-08-06 }
  - { field: testDomain, url: 'https://docs.fortrabbit.com/platform/dns/test-domain', checkedAt: 2026-08-06 }
  - { field: collaboration, url: 'https://docs.fortrabbit.com/platform/collaboration', checkedAt: 2026-08-07 }
  - { field: staging, url: 'https://docs.fortrabbit.com/platform/concepts', checkedAt: 2026-08-07 }
  - { field: domainRegistration, url: 'https://docs.fortrabbit.com/platform/dns/external-domains', checkedAt: 2026-08-06 }
  - { field: dnsHosting, url: 'https://docs.fortrabbit.com/integrations/dns', checkedAt: 2026-08-06 }
  - { field: emailHosting, url: 'https://docs.fortrabbit.com/integrations/email', checkedAt: 2026-08-06 }
  - { field: backupsIncluded, url: 'https://docs.fortrabbit.com/platform/backups', checkedAt: 2026-08-06 }
  - { field: renewalMultiple, url: 'https://www.fortrabbit.com/pricing', checkedAt: 2026-08-06 }
  - { field: cliTool, url: 'https://www.fortrabbit.com/', checkedAt: 2026-08-05 }
  - { field: mcpServer, url: 'https://www.fortrabbit.com/', checkedAt: 2026-08-05 }
  - { field: regions, url: 'https://www.fortrabbit.com/', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://www.fortrabbit.com/', checkedAt: 2026-08-01 }
  - { field: runsOn, url: 'https://www.fortrabbit.com/', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://www.fortrabbit.com/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.fortrabbit.com/raw/pricing/details.md', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.fortrabbit.com/raw/pricing/details.md', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.fortrabbit.com/raw/pricing/details.md', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.fortrabbit.com/terms', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.fortrabbit.com/terms', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.fortrabbit.com/terms', checkedAt: 2026-08-02 }
  - { field: pricingModel, url: 'https://www.fortrabbit.com/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.fortrabbit.com/pricing', checkedAt: 2026-08-01 }
  - { field: contractMinimum, url: 'https://www.fortrabbit.com/pricing', checkedAt: 2026-08-01 }
publishedByUs: true
figure:
  emoji: 🐰
  color: rgb(163, 57, 177)
  textColor: rgb(244, 234, 246)
  text: As secure as Fort Knox, as fast as a rabbit.
---

fortrabbit is a small, independent German company running a managed hosting platform for PHP applications. It owns no hardware: the platform is built on rented AWS capacity, in Ireland and in the United States. Applications are deployed by git push, with full SSH access to the running environment and managed MySQL alongside. Plans are fixed tiers rather than metered usage, billed by the month, and a trial is available before an application goes live.

fortrabbit also publishes FindHost, which is why this record carries a permanent marker saying so. It is held to the same standard as every other record here — the same fields, the same sourcing, the same right of reply. Anything reading more favourably than the evidence supports is a bug; open an issue.

## Worth knowing

The platform runs PHP and nothing else. There is no runtime here for an application written in another language, and the shape of the product follows from that single assumption.

Because the infrastructure is rented rather than owned, the regions and their physical properties are the upstream provider's rather than fortrabbit's.

## Conflict of interest

**We publish this FindHost.** fortrabbit runs FindHost and appears in its own dataset. See [about](/about/).
