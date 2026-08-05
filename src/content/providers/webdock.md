---
id: webdock
name: Webdock
urls:
  home: https://webdock.io
  pricing: https://webdock.io/en/pricing
  status: https://status.webdock.io/
  docs: https://webdock.io/en/docs
category:
  - vps
description: Danish VPS provider selling virtual servers with a web control panel, prepared stacks and WordPress plans, from a single facility in Denmark.
hqCountry: DK
ownership: independent
whoManagesOs: you
useCases:
  - cms
  - saas
  - api
  - internal-tool
  - side-project
  - background-jobs
audience:
  - solo
  - agency
  - smb
software:
  - wordpress
runtimes:
  - any
  - docker
deployMethods:
  - ssh
  - control-panel
sshAccess: shell
pricingModel: fixed-tier
priceFrom: xs
priceTo: md
currencies:
  - EUR
billingPeriods:
  - monthly
exitWithin: a-month
entryPrice: { amount: 2.15, currency: EUR, period: month }
freeTier: none
regions:
  - DK
contractMinimum: none
apiAvailable: public
social:
  linkedin: https://www.linkedin.com/company/webdock-io/
  facebook: https://www.facebook.com/webdockio
  youtube: https://www.youtube.com/@webdock
checkedAt: 2026-08-01
sources:
  - { field: regions, url: 'https://webdock.io/en/pricing', checkedAt: 2026-08-01 }
  - { field: entryPrice, url: 'https://webdock.io/en/pricing', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://webdock.io/en/pricing', checkedAt: 2026-08-01 }
  - { field: priceTo, url: 'https://webdock.io/en/pricing', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://webdock.io/en/pricing', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://webdock.io/en/pricing', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://webdock.io/en/pricing', checkedAt: 2026-08-02 }
  - { field: urls, url: 'https://status.webdock.io/', checkedAt: 2026-08-01 }
figure:
  emoji: 🇩🇰
  color: rgb(60, 25, 30)
  textColor: rgb(255, 200, 195)
  text: One country, one data centre.
ai: authored
---

Webdock is a small independent Danish company selling virtual servers on AMD Epyc and Xeon hardware with NVMe storage, alongside prepared WordPress plans and add-on load balancing and web application firewall. Billing carries no minimum term, and servers can be resized or cancelled at any point.

The pitch is jurisdictional simplicity. There is one data centre, in Denmark, and the company states plainly that everything sits under EU jurisdiction — no region picker, no ambiguity about where a backup landed. A web control panel, a mobile app and a public API sit on top of the servers, which puts it closer to managed hosting than to bare infrastructure.

## Worth knowing

One data centre is a clear answer and also a single point of failure. There is no second region to fail over to, and no option for anyone who needs capacity outside Denmark.
