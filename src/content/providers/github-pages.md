---
id: github-pages
name: GitHub Pages
urls:
  home: https://pages.github.com
  pricing: https://github.com/pricing
  docs: https://docs.github.com/en/pages
category:
  - static
description: Static sites served from a GitHub repository, built by Actions or from a branch, free on public repositories.
founded: 2008
hqCountry: US
ownership: subsidiary
parent: Microsoft
whoManagesOs: managed
runtimes:
  - static
software:
  - jekyll
useCases:
  - static-site
  - portfolio
  - side-project
audience:
  - solo
  - education
  - non-profit
deployMethods:
  - git
sshAccess: none
freeTier: permanent
billingTiming: advance
currencies:
  - USD
regions: null
gdprDpa: standard
apiAvailable: public
cliTool: official
staging: none
collaboration: team
status: active
checkedAt: 2026-08-07
sources:
  - { field: category, url: 'https://pages.github.com', checkedAt: 2026-08-07 }
  - { field: runtimes, url: 'https://docs.github.com/en/pages', checkedAt: 2026-08-07 }
  - { field: deployMethods, url: 'https://docs.github.com/en/pages', checkedAt: 2026-08-07 }
  - { field: freeTier, url: 'https://github.com/pricing', checkedAt: 2026-08-07 }
  - { field: software, url: 'https://docs.github.com/en/pages', checkedAt: 2026-08-07 }
ai: authored
---

GitHub Pages serves a static site straight from a repository: push to a branch, or let an Actions workflow build first, and the output is published on a github.io subdomain or a custom domain with a certificate GitHub obtains. Jekyll is built in, which is why so much of the documentation web runs on it.

It is hosting in the sense this register cares about — somebody has to choose where a built site lives — and it is unusual in being free for public repositories with no plan to compare. What it does not do is run anything: no server-side code, no database, no shell, and no way to answer a request with something computed. A site that outgrows that is looking at the [serverless](/categories/serverless/) and [PaaS](/categories/paas/) records rather than at a bigger plan here.

Regions are recorded as not applicable: the content is served from a CDN GitHub operates and no region is offered to the customer as a choice.
