---
id: pythonanywhere
name: PythonAnywhere
urls:
  home: https://www.pythonanywhere.com
  pricing: https://www.pythonanywhere.com/pricing/
  status: https://pythonanywhere.statuspage.io
category: paas
description: Browser-based Python hosting with in-browser consoles, scheduled tasks and managed web apps, sold by CPU-seconds, web workers and disk.
founded: 2011
hqCountry: GB
ownership: subsidiary
parent: Anaconda
whoManagesOs: provider
specialisation:
  - django
useCases:
  - learning
  - api
  - saas
  - data-pipeline
  - background-jobs
  - side-project
audience:
  - education
  - indie-hacker
  - freelancer
  - startup
software:
  - django
runtimes:
  - python
deployMethods:
  - control-panel
  - ssh
  - git-push
sshAccess: full
pricingModel: per-resource
entryPriceBand: free-tier
entryPrice: { amount: 10, currency: USD, period: month }
freeTier: permanent
contractMinimum: none
status: active
checkedAt: 2026-08-01
sources:
  - { field: entryPrice, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-01 }
  - { field: entryPriceBand, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-01 }
  - { field: freeTier, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-01 }
  - { field: pricingModel, url: 'https://www.pythonanywhere.com/pricing/', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://www.pythonanywhere.com/about/company_details/', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.pythonanywhere.com/about/company_details/', checkedAt: 2026-08-01 }
  - { field: parent, url: 'https://www.pythonanywhere.com/about/company_details/', checkedAt: 2026-08-01 }
figure:
  emoji: 🐍
  color: rgb(30, 45, 65)
  textColor: rgb(180, 220, 250)
  text: A Python box, in a browser tab.
ai: authored
---

## About PythonAnywhere

PythonAnywhere gives an account a Python environment reachable entirely from a browser: consoles, scheduled tasks, always-on processes and web applications, with nothing to install locally. That property is why it became a fixture in teaching — a classroom needs no working laptops, only tabs.

The free Beginner plan runs one web app on a subdomain with two restricted consoles. Developer at ten dollars a month adds a custom domain, three web workers, five thousand CPU-seconds a day, five gigabytes of disk and unlimited consoles; a Custom tier scales the same dials up to twenty web apps, a hundred thousand CPU-seconds and five hundred dollars a month. Annual payment costs ten months rather than twelve. Full SSH, unrestricted outbound internet access and free SSL come with every paid plan.

The unit that matters is the CPU-second, which the company defines precisely against a named processor and which is consumed by consoles, scheduled tasks and always-on processes — but not by web applications.

## Reservations

One language, and no pretence otherwise. The free tier restricts outbound network access to an allow-list, which breaks most third-party API work until you pay. Data-centre locations are not published anywhere on the site — the pricing page names the AWS instance type and stops there. Ownership is disclosed, but on a company-details page rather than anywhere a buyer would pass: PythonAnywhere LLP has belonged to Anaconda since 2022.
