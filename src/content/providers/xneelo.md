---
id: xneelo
name: xneelo
urls:
  home: https://xneelo.co.za
  pricing: https://xneelo.co.za/web-hosting/
  terms: https://xneelo.co.za/legal/terms-of-service/
category: shared
description: South African host, formerly Hetzner South Africa, selling shared hosting, managed and self-managed servers and colocation with a choice of ZA or DE servers.
founded: 1999
hqCountry: ZA
ownership: independent
whoManagesOs: provider
infraContract:
  - owns-metal
useCases:
  - cms
  - campaign-site
  - portfolio
  - e-commerce
audience:
  - smb
  - freelancer
  - agency
software:
  - wordpress
runtimes:
  - php
deployMethods:
  - ftp
  - control-panel
pricingModel: fixed-tier
priceFrom: sm
entryPrice: { amount: 99, currency: ZAR, period: month }
freeTier: none
regions:
  - ZA
  - DE
supportChannels:
  - phone
  - chat
  - email
supportHours: 24-7
certifications:
  - PCI DSS
social:
  facebook: https://www.facebook.com/xneeloHosting/
  linkedin: https://www.linkedin.com/company/xneelo/
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://xneelo.co.za/web-hosting/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://xneelo.co.za/data-centre/', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://xneelo.co.za/web-hosting/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://xneelo.co.za/web-hosting/', checkedAt: 2026-08-01 }
  - { field: supportHours, url: 'https://xneelo.co.za/web-hosting/', checkedAt: 2026-08-01 }
  - { field: supportChannels, url: 'https://xneelo.co.za/web-hosting/', checkedAt: 2026-08-01 }
  - { field: certifications, url: 'https://xneelo.co.za/data-centre/', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://xneelo.co.za', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://xneelo.co.za/legal/terms-of-service/', checkedAt: 2026-08-01 }
figure:
  emoji: 🦓
  color: rgb(40, 40, 45)
  textColor: rgb(235, 235, 235)
  text: The other Hetzner, renamed.
ai: authored
---

## About xneelo

xneelo was co-founded in 1999 as Hetzner South Africa by Hans Wencke and Martin Hetzner. It renamed itself in 2019 to end the brand confusion with the unrelated German Hetzner Online ahead of international expansion; there was no change of owner and the founding leadership stayed. The two companies remain entirely separate businesses that once shared a name.

It sells shared hosting, managed and self-managed servers and colocation, and owns the hardware it runs on. The plan pages name the PHP versions on offer and include a version-management tool and phpMyAdmin. Signup lets a customer choose German or South African servers, so the footprint is not South-Africa-only. Administration goes through konsoleH, the company's own control panel, and the South African data centre carries PCI DSS certification.

## Worth knowing

The developer surface is thin. There is no public API, no CLI and no infrastructure-as-code tooling, deploys are by FTP or control panel, and whether shared hosting includes SSH is not stated on the pages that describe it.
