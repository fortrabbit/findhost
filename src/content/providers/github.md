---
id: github
name: GitHub
urls:
  home: https://github.com
  pricing: https://github.com/pricing
  docs: https://docs.github.com
category:
  - git-hosting
description: Git repository hosting with pull requests, issues and CI, free on public and private repositories, priced per user above that.
founded: 2008
hqCountry: US
ownership: subsidiary
runtimes: null
deployMethods: null
sshAccess: null
regions: null
pricingModel: plan-plus-overage
currencies:
  - USD
freeTier: permanent
collaboration: team
apiAvailable: public
cliTool: official
referringSubnets: { now: 255851, before: 256387 }
status: active
checkedAt: 2026-08-13
sources:
  - { field: referringSubnets, url: 'https://majestic.com/reports/majestic-million', checkedAt: 2026-08-31 }
  - { field: category, url: 'https://github.com/pricing', checkedAt: 2026-08-13 }
  - { field: pricingModel, url: 'https://github.com/pricing', checkedAt: 2026-08-13 }
  - { field: currencies, url: 'https://github.com/pricing', checkedAt: 2026-08-13 }
  - { field: freeTier, url: 'https://github.com/pricing', checkedAt: 2026-08-13 }
  - { field: collaboration, url: 'https://github.com/pricing', checkedAt: 2026-08-13 }
  - { field: apiAvailable, url: 'https://docs.github.com', checkedAt: 2026-08-13 }
  - { field: cliTool, url: 'https://docs.github.com', checkedAt: 2026-08-13 }
figure:
  emoji: 🐙
  color: rgb(36, 41, 46)
  textColor: rgb(245, 245, 245)
  text: Where the commit lives, before anything deploys it.
ai: authored
---

GitHub holds the repository that most deployments read from. The free plan carries unlimited public and private repositories with a monthly allowance of Actions minutes; Team is $4 per user a month and Enterprise starts at $21, both with a larger allowance and metered running above it. That shape — a seat fee, an included allowance, a meter after it — is what `pricingModel` records.

## Worth knowing

Nothing of a customer's site runs here, so runtimes, deploy methods and shell access read as not applicable. A host deploying from a commit is answering a different question, recorded as `deployment: git` on the host rather than as a relationship to this record.

Regions are not applicable either: github.com is one service with no region offered as a choice. Data residency exists, but only in the enterprise product, which is not what this record describes.

[GitHub Pages](/github-pages/) is a separate record, because serving a built site and holding the repository it was built from are two different purchases.
