---
id: selectel
name: Selectel
urls:
  home: https://selectel.ru/en/
category:
  - vps
  - bare-metal
description: Selectel is a Russian infrastructure company running its own data centres in Saint Petersburg and Moscow, selling dedicated servers, cloud servers and object storage.
hqCountry: RU
infraContract:
  - owns-metal
whoManagesOs: you
runtimes:
  - any
sshAccess: full
persistentStorage: true
iacSupport:
  - terraform
status: active
checkedAt: 2026-08-04
sources:
  - { field: hqCountry, url: 'https://selectel.ru/en/', checkedAt: 2026-08-04 }
  - { field: infraContract, url: 'https://selectel.ru/en/', checkedAt: 2026-08-04 }
  - { field: iacSupport, url: 'https://github.com/selectel/terraform-provider-selectel', checkedAt: 2026-08-04 }
figure:
  emoji: 🇷🇺
  color: rgb(35, 45, 70)
  textColor: rgb(200, 215, 240)
  text: Six data centres of its own, Saint Petersburg and Moscow.
ai: authored
---

Selectel is an infrastructure company operating six data centres it describes as its own, split between Saint Petersburg and Moscow with partner facilities in the Leningrad region. It sells dedicated servers, cloud virtual machines, a VMware-based cloud, managed Kubernetes, managed databases and object storage, priced in Russian roubles. The company states 36,000-plus clients and describes itself as having operated for 17 years.

Infrastructure is driven through Selectel's own API, Terraform provider and Go client library, and a separate set of independently written client libraries exist for PHP, Python and .NET against the object storage API specifically — evidence of third-party integration the marketing pages themselves do not claim.

## Worth knowing

The pages checked are in Russian with an English-language storefront (selectel.ru/en); no separate `.com` domain or data centre outside Russia is documented.
