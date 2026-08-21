---
id: fastmail
name: Fastmail
urls:
  home: https://www.fastmail.com
  pricing: https://www.fastmail.com/pricing/
  docs: https://www.fastmail.com/support/
category:
  - mail
description: Email, calendar and contacts on a customer's own domain, sold per mailbox with a choice of data residency.
ownership: independent
runtimes: null
deployMethods: null
sshAccess: null
pricingModel: fixed-tier
priceFrom: xs
entryPrice: { amount: 3, currency: EUR, period: month }
currencies:
  - EUR
billingPeriods:
  - monthly
  - yearly
freeTier: trial
emailHosting: included
status: active
checkedAt: 2026-08-12
sources:
  - { field: category, url: 'https://www.fastmail.com/pricing/', checkedAt: 2026-08-12 }
  - { field: pricingModel, url: 'https://www.fastmail.com/pricing/', checkedAt: 2026-08-12 }
  - { field: entryPrice, url: 'https://www.fastmail.com/pricing/', checkedAt: 2026-08-12 }
  - { field: priceFrom, url: 'https://www.fastmail.com/pricing/', checkedAt: 2026-08-12 }
  - { field: currencies, url: 'https://www.fastmail.com/pricing/', checkedAt: 2026-08-12 }
  - { field: billingPeriods, url: 'https://www.fastmail.com/pricing/', checkedAt: 2026-08-12 }
  - { field: freeTier, url: 'https://www.fastmail.com/pricing/', checkedAt: 2026-08-12 }
  - { field: ownership, url: 'https://www.fastmail.com/company/values/', checkedAt: 2026-08-21 }
figure:
  emoji: ✉️
  color: rgb(46, 76, 140)
  textColor: rgb(236, 241, 250)
  text: Mail, and deliberately only mail.
ai: authored
---

Fastmail sells mailboxes on a customer's own domain, with calendar and contacts alongside, priced per user and billed monthly or by the year. Business plans and personal plans are the same product at different sizes. Data residency is a choice made at signup, between the EU and the United States.

## Worth knowing

Mail is the whole product — there is no web hosting here and nothing of a customer's runs, which is why the runtime, deployment and shell rows read as not applicable. It is the other half of a setup whose site lives on a [host](/categories/paas/) somewhere else, and it is on the list because most application platforms will not run mail at all.

There is no free tier, only a trial. The address is portable in the way any domain address is: the mailbox moves, the domain does not have to.
