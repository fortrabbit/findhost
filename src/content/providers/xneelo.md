---
id: xneelo
name: xneelo
url: https://xneelo.co.za
category: shared
pricingUrl: https://xneelo.co.za/web-hosting/
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
entryPriceBand: 5-15
freeTier: none
regions:
  - ZA
  - DE
figure:
  emoji: 🦓
  color: rgb(40, 40, 45)
  textColor: rgb(235, 235, 235)
  text: The other Hetzner, renamed.
ai: authored
---

## About xneelo

xneelo was co-founded in 1999 as Hetzner South Africa by Hans Wencke and Martin Hetzner. It renamed itself in 2019 to end the brand confusion with the unrelated German Hetzner Online ahead of international expansion; there was no change of owner and the founding leadership stayed. The two companies remain entirely separate businesses that once shared a name.

It is one of very few hosts at this level publishing a current PHP range on the plan page itself — 8.2 through 8.5, with a version-management tool and phpMyAdmin. Signup also lets a customer choose German or South African servers, so the footprint is not South-Africa-only. Administration is through konsoleH, the company's own control panel, which is what the independent automation scripts written against it target.

## Reservations

The developer surface is thin. There is no public API, no CLI and no infrastructure-as-code tooling; deploys are FTP and control panel, and SSH availability on shared hosting is not stated on the pages that describe it. The homepage references a network status site, but the address as printed does not resolve, so no status URL is recorded here.
