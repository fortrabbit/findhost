---
id: ovh
name: OVHcloud
urls:
  home: https://www.ovhcloud.com
  pricing: https://www.ovhcloud.com/en/vps/
category:
  - vps
  - bare-metal
  - shared-hosting
description: French hosting company selling dedicated servers, VPS, an OpenStack-based public cloud and web hosting from data centres it builds and operates itself.
founded: 1999
hqCountry: FR
infraContract:
  - owns-metal
whoManagesOs: self-managed
runtimes:
  - any
sshAccess: root
priceFrom: xs
priceTo: md
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
regions:
  - FR
  - DE
  - PL
  - GB
  - CA
  - US
  - SG
  - AU
  - IN
status: active
checkedAt: 2026-08-01
sources:
  - { field: founded, url: 'https://www.ovhcloud.com/en/about-us/', checkedAt: 2026-07-31 }
  - { field: hqCountry, url: 'https://www.ovhcloud.com/en/about-us/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://www.ovhcloud.com/en/vps/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.ovhcloud.com/en/vps/', checkedAt: 2026-08-02 }
  - {
      field: billingPeriods,
      url: 'https://docs.ovhcloud.com/en/guides/account-and-service-management/managing-billing-payments-and-services/automatic-renewal',
      checkedAt: 2026-08-02,
    }
  - {
      field: billingTiming,
      url: 'https://docs.ovhcloud.com/en/guides/account-and-service-management/managing-billing-payments-and-services/automatic-renewal',
      checkedAt: 2026-08-02,
    }
  - {
      field: exitWithin,
      url: 'https://docs.ovhcloud.com/en/guides/account-and-service-management/managing-billing-payments-and-services/automatic-renewal',
      checkedAt: 2026-08-02,
    }
  - {
      field: '2021 fire',
      url: 'https://corporate.ovhcloud.com/en/newsroom/news/informations-site-strasbourg/',
      checkedAt: 2026-08-02,
    }
  - {
      field: '2021 fire',
      url: 'https://www.igedd.developpement-durable.gouv.fr/IMG/pdf/rapport_ovh_67_vdif_cle01cf13.pdf',
      checkedAt: 2026-08-02,
    }
  - {
      field: '2021 fire',
      url: 'https://corporate.ovhcloud.com/sites/default/files/2021-12/ovh-groupe-urd-2021-eng-vdef_0.pdf',
      checkedAt: 2026-08-02,
    }
  - {
      field: '2021 fire',
      url: 'https://corporate.ovhcloud.com/en-gb/newsroom/news/SBG5-opening/',
      checkedAt: 2026-08-02,
    }
  - { field: regions, url: 'https://www.ovhcloud.com/en/datacenter/', checkedAt: 2026-08-01 }
  - { field: infraContract, url: 'https://www.ovhcloud.com/en/datacenter/', checkedAt: 2026-08-01 }
figure:
  emoji: 🧯
  color: rgb(190, 45, 49)
  textColor: rgb(246, 234, 234)
  text: Builds its own metal, cools it with water.
greenWebId: 1305
---

OVHcloud — long known as OVH — was founded in Roubaix by Octave Klaba and has been listed on Euronext Paris since 2021. The traditional business is dedicated servers and VPS, extended into an OpenStack-based public cloud, shared hosting and domains, sold across Europe, North America and Asia-Pacific.

It designs and assembles its own servers, develops its own water cooling and runs its own data centres rather than renting capacity. Prices sit at the low end of the market, and the customer manages the operating system on both the VPS and bare-metal lines.

## Worth knowing

The catalogue is hard to navigate: bare metal, VPS, several cloud lines and shared hosting, each with its own panel and its own pricing logic. Location naming is inconsistent between them, so the regions here are read off the cities named on product pages rather than off a country list OVHcloud publishes.

A fire in March 2021 [destroyed the SBG2 data centre](https://corporate.ovhcloud.com/en/newsroom/news/informations-site-strasbourg/) in Strasbourg and took the whole site offline. [The state investigation](https://www.igedd.developpement-durable.gouv.fr/IMG/pdf/rapport_ovh_67_vdif_cle01cf13.pdf) found the battery rooms had fire detection but no automatic suppression, and did not establish what started it. OVHcloud's [own filings](https://corporate.ovhcloud.com/sites/default/files/2021-12/ovh-groupe-urd-2021-eng-vdef_0.pdf) record that some customers lost data permanently, because backup was a paid option that could be held in the same building. The site has since been [rebuilt](https://corporate.ovhcloud.com/en-gb/newsroom/news/SBG5-opening/) with compartmentalised rooms and gas suppression.
