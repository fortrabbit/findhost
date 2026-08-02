---
id: fortrabbit
name: fortrabbit
urls:
  home: https://www.fortrabbit.com
  pricing: https://www.fortrabbit.com/pricing
  status: https://status.fortrabbit.com
category: paas
description: Managed PHP platform for developers, run on rented AWS capacity in Ireland and the US.
founded: 2012
hqCountry: DE
ownership: independent
whoManagesOs: provider
infraContract:
  - resells-iaas
runtimes:
  - php
deployMethods:
  - git-push
  - ssh
sshAccess: full
managedDatabases:
  - mysql
pricingModel: fixed-tier
priceFrom: sm
priceTo: lg
currencies:
  - EUR
  - USD
billingPeriods:
  - monthly
billingTiming: arrears
exitWithin: a-month
entryPrice: { amount: 2.5, currency: EUR, period: month }
freeTier: trial
contractMinimum: monthly
regions:
  - IE
  - US
runsOn:
  - aws
gdprDpa: standard
supportChannels:
  - email
supportHours: business-hours
supportTiering: all-plans
apiAvailable: public
mcpServer: none
status: active
checkedAt: 2026-08-01
sources:
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
  color: rgb(46, 62, 82)
  textColor: rgb(240, 240, 244)
  text: As secure as Fort Knox, as fast as a rabbit.
---

## About fortrabbit

fortrabbit is a small, independent German company running a managed hosting platform for PHP applications. It owns no hardware: the platform is built on rented AWS capacity, in Ireland and in the United States. Applications are deployed by git push, with full SSH access to the running environment and managed MySQL alongside. Plans are fixed tiers rather than metered usage, billed by the month, and a trial is available before an application goes live.

fortrabbit also publishes FindHost, which is why this record carries a permanent marker saying so. It is held to the same standard as every other record here — the same fields, the same sourcing, the same right of reply. Anything reading more favourably than the evidence supports is a bug; open an issue.

## Worth knowing

The platform runs PHP and nothing else. There is no runtime here for an application written in another language, and the shape of the product follows from that single assumption.

Because the infrastructure is rented rather than owned, the regions and their physical properties are the upstream provider's rather than fortrabbit's.
