---
id: proton-mail
name: Proton Mail
urls:
  home: https://proton.me/business/mail
  pricing: https://proton.me/business/mail/pricing
  docs: https://proton.me/support/mail
category:
  - mail
description: Encrypted email on a customer's own domain, from a Swiss company that sells privacy as the product.
runtimes: null
deployMethods: null
sshAccess: null
hqCountry: CH
ownership: independent
freeTier: trial
emailHosting: included
referringSubnets: { now: 10083, before: 10153 }
status: active
checkedAt: 2026-08-12
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: category, url: 'https://proton.me/business/mail/pricing', checkedAt: 2026-08-12 }
  - { field: hqCountry, url: 'https://proton.me/business/mail/pricing', checkedAt: 2026-08-12 }
  - { field: freeTier, url: 'https://proton.me/business/mail/pricing', checkedAt: 2026-08-12 }
  - { field: ownership, url: 'https://proton.me/blog/proton-non-profit-foundation', checkedAt: 2026-08-21 }
figure:
  emoji: 🔒
  color: rgb(90, 60, 150)
  textColor: rgb(242, 236, 250)
  text: Mail where the company cannot read it.
ai: authored
---

Proton Mail sells business mailboxes on a customer's own domain, from Proton AG in Geneva, with end-to-end encryption as the thing being sold rather than a feature of it. Business plans run from mail and calendar alone up to bundles carrying storage, documents, a VPN and a password manager, each tier allowing more custom domains than the last.

## Worth knowing

No price is recorded here, and not because none is published: the business pricing page renders its figures only after a region is chosen, so nothing could be read off it directly. The plan names and the domain allowances are on the page; the numbers are not.

Mail is the whole product. Nothing of a customer's runs, which is why the runtime, deployment and shell rows read as not applicable, and the site this serves lives on a [host](/categories/paas/) elsewhere.
