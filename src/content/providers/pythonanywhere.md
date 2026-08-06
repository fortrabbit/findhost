---
id: pythonanywhere
name: PythonAnywhere
urls:
  home: https://www.pythonanywhere.com
  pricing: https://www.pythonanywhere.com/pricing/
  status: https://pythonanywhere.statuspage.io
category:
  - paas
description: Browser-based Python hosting with in-browser consoles, scheduled tasks and managed web apps, sold by CPU-seconds, web workers and disk.
founded: 2011
hqCountry: GB
ownership: subsidiary
parent: Anaconda
whoManagesOs: managed
specialisation:
  - django
useCases:
  - learning
  - api
  - web-app
  - data-pipeline
  - background-jobs
  - side-project
audience:
  - education
  - solo
  - startup
software:
  - django
runtimes:
  - python
deployMethods:
  - control-panel
  - git-push
sshAccess: jailed
pricingModel: per-resource
priceFrom: sm
priceTo: md
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
billingTiming: advance
exitWithin: a-month
entryPrice: { amount: 10, currency: USD, period: month }
freeTier: permanent
contractMinimum: none
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-01 }
  - { field: priceFrom, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-02 }
  - { field: billingTiming, url: 'https://www.pythonanywhere.com/terms/', checkedAt: 2026-08-02 }
  - { field: exitWithin, url: 'https://www.pythonanywhere.com/terms/', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://www.pythonanywhere.com/about/company_details/', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.pythonanywhere.com/about/company_details/', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://www.pythonanywhere.com/about/company_details/', checkedAt: 2026-08-01 }
figure:
  emoji: 🐍
  color: rgb(74, 111, 161)
  textColor: rgb(234, 239, 245)
  text: A Python box, in a browser tab.
ai: authored
---

PythonAnywhere gives an account a Python environment reachable entirely from a browser: consoles, scheduled tasks, always-on processes and web applications, with nothing to install locally. That property made it a fixture in teaching, where a classroom needs tabs rather than working laptops. The company is British, trades as an LLP, and has belonged to Anaconda since 2022.

Billing is per resource rather than per plan, and the dials are web workers, disk and CPU-seconds a day. The CPU-second is the unit that matters: it is defined against a named processor and consumed by consoles, scheduled tasks and always-on processes, but not by the web applications themselves. A permanent free tier runs one web app on a subdomain; paid accounts add custom domains, full SSH, unrestricted outbound network access and certificates.

## Worth knowing

The free tier restricts outbound network access to an allow-list, so anything calling a third-party API needs a paid account to work at all.

Data-centre locations are published nowhere on the site; the pricing page names the underlying AWS instance type and stops there.
