---
id: beget
name: Beget
urls:
  home: https://beget.com/en
  pricing: https://beget.com/en/hosting
category:
  - shared-hosting
description: Beget is a Russian hosting company selling shared hosting, VPS, dedicated servers and managed databases, priced in euros on its international storefront.
hqCountry: RU
founded: 2007
whoManagesOs: self-managed
software:
  - wordpress
managedDatabases:
  - mysql
  - postgres
sshAccess: root
pricingModel: fixed-tier
priceFrom: xs
currencies:
  - EUR
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
entryPrice: { amount: 4.59, currency: EUR, period: month }
freeTier: none
iacSupport:
  - terraform
status: active
checkedAt: 2026-08-04
sources:
  - { field: hqCountry, url: 'https://beget.com/en/hosting', checkedAt: 2026-08-04 }
  - { field: founded, url: 'https://beget.com/en/hosting', checkedAt: 2026-08-04 }
  - { field: entryPrice, url: 'https://beget.com/en/hosting', checkedAt: 2026-08-04 }
  - { field: priceFrom, url: 'https://beget.com/en/hosting', checkedAt: 2026-08-04 }
  - { field: currencies, url: 'https://beget.com/en/hosting', checkedAt: 2026-08-04 }
  - { field: sshAccess, url: 'https://beget.com/en/hosting', checkedAt: 2026-08-04 }
  - { field: managedDatabases, url: 'https://beget.com/en', checkedAt: 2026-08-04 }
  - { field: iacSupport, url: 'https://github.com/beget/terraform-provider-beget', checkedAt: 2026-08-04 }
figure:
  emoji: 🇷🇺
  color: rgb(45, 35, 65)
  textColor: rgb(225, 210, 240)
  text: Shared hosting with SSH included on every plan.
ai: authored
---

Beget is a Russian hosting company, in business since 2007, selling shared hosting plans that step up by storage and site count, alongside VPS, dedicated servers, managed MySQL and PostgreSQL, Kubernetes and S3-compatible storage. Every shared plan includes SSH and SFTP access, a free SSL certificate and automatic CMS installation, which is unusual among budget shared hosts in this dataset that otherwise reserve shell access for VPS tiers. The international storefront at beget.com prices in euros; the `.ru` site prices in roubles for the domestic market.

An official Terraform provider exists, and a wider set of independently written tools sit around it — a certbot DNS plugin, a cert-manager ACME webhook and more than one unofficial API client, none of them published by Beget itself.

## Worth knowing

The pages checked do not state a company address; only a legal name, Beget LLC, and the 2007 founding date appear in the site footer.
