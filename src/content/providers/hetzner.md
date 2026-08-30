---
id: hetzner
name: Hetzner
urls:
  home: https://www.hetzner.com
  pricing: https://www.hetzner.com/cloud/
  status: https://status.hetzner.com
category:
  - vps
  - bare-metal
description: Hetzner is an independent German hosting company offering VPS, dedicated servers, cloud and storage infrastructure from its own data centres.
founded: 1997
hqCountry: DE
ownership: independent
whoManagesOs: self-managed
infraContract:
  - owns-metal
audience:
  - smb
  - enterprise
social:
  x: https://twitter.com/Hetzner_Online
  mastodon: https://mastodon.hetzner.social/@Hetzner
  linkedin: https://www.linkedin.com/company/hetzner-online/
  facebook: https://www.facebook.com/hetzner.de/
  youtube: https://www.youtube.com/user/HetznerOnline/
runtimes:
  - any
sshAccess: root
persistentStorage: true
backupsIncluded: paid-addon
pricingModel: hourly
priceFrom: xs
priceTo: lg
currencies:
  - EUR
  - USD
billingPeriods:
  - hourly
  - monthly
billingTiming: arrears
exitWithin: a-day
contractMinimum: none
paymentMethods:
  - card
  - paypal
  - bank-transfer
  - direct-debit
regions:
  - DE
  - FI
  - SG
  - US
supportChannels:
  - phone
  - forum
supportHours: 24-7
apiAvailable: public
cliTool: official
favorite: true
favoriteNote: Popular VPS.
status: active
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://www.hetzner.com/cloud/', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.hetzner.com/unternehmen/ueber-uns/', checkedAt: 2026-07-31 }
  - { field: hqCountry, url: 'https://www.hetzner.com/unternehmen/ueber-uns/', checkedAt: 2026-07-31 }
  - { field: infraContract, url: 'https://www.hetzner.com/unternehmen/ueber-uns/', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-07-31 }
  - { field: priceTo, url: 'https://www.hetzner.com/cloud/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-08-02 }
  - { field: contractMinimum, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-07-31 }
  - { field: backupsIncluded, url: 'https://docs.hetzner.com/cloud/billing/faq/', checkedAt: 2026-07-31 }
  - { field: persistentStorage, url: 'https://docs.hetzner.com/cloud/servers/backups-snapshots/faq/', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://www.hetzner.com/cloud/', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://www.hetzner.com/cloud/', checkedAt: 2026-07-31 }
  - { field: supportChannels, url: 'https://www.hetzner.com/support/', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://www.hetzner.com/', checkedAt: 2026-07-31 }
  - { field: ownership, url: 'https://career.hetzner.com/en/unsere-story/', checkedAt: 2026-08-21 }
  - { field: paymentMethods, url: 'https://docs.hetzner.com/general/billing-and-account-management/billing-at-hetzner/payment-overview/', checkedAt: 2026-08-29 }
figure:
  emoji: 🇩🇪
  color: rgb(183, 145, 52)
  textColor: rgb(246, 242, 234)
  text: IT made in Germany.
greenWebId: 131
---

Hetzner Online GmbH was founded in 1997 and is headquartered in Gunzenhausen, Germany. It owns and operates its own data centre parks in Germany and Finland, and has added capacity in Singapore and the United States.

The product range covers shared hosting, dedicated servers, colocation, cloud servers, block storage and object storage. A cloud server arrives as a Linux install with root access and nothing configured on top of it; everything above the operating system is the customer's to set up and to keep running. Billing is hourly against a monthly price cap, and a server deleted part-way through a month is charged only for the hours it ran, so there is no minimum term. Backups are an opt-in extra.

The infrastructure is driven through a documented REST API and an official command-line tool. General support runs on a German phone line during business hours, and each data centre publishes a separate round-the-clock line for hardware faults.
