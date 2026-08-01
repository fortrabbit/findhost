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
entryPriceBand: 5-15
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
  - { field: entryPriceBand, url: 'https://www.fortrabbit.com/pricing', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.fortrabbit.com/pricing', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.fortrabbit.com/pricing', checkedAt: 2026-08-01 }
  - { field: contractMinimum, url: 'https://www.fortrabbit.com/pricing', checkedAt: 2026-08-01 }
publishedByUs: true
ai: co-authored
figure:
  emoji: 🐰
  color: rgb(46, 62, 82)
  textColor: rgb(240, 240, 244)
  text: As secure as Fort Knox, as fast as a rabbit.
---

fortrabbit is a small, independent German company running a managed PHP platform on rented AWS capacity. It is also who publishes FindHost, which is why this record exists and why it carries a permanent marker.

The record is held to the same standard as every other: the same fields, the same sourcing, the same right of reply. If anything here reads more favourably than the evidence supports, that is a bug — open an issue.

Two figures come off the pricing page and both are recorded. €2.50 a month is the smallest setup that can exist; €5 to €10 is what the same page says a small production app with a database costs. The entry price field carries the first, the band carries the second, because the band is defined as the app with everything mandatory included.
