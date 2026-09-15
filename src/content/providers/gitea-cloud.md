---
id: gitea-cloud
name: Gitea Cloud
urls:
  home: https://about.gitea.com/products/cloud/
  pricing: https://about.gitea.com/pricing/
  docs: https://docs.gitea.com
category:
  - git-hosting
description: A dedicated Gitea instance per customer, run by the company behind Gitea in a cloud region the customer picks, priced per user.
hqCountry: US
runtimes: null
deployMethods: null
sshAccess: null
pricingModel: plan-plus-overage
currencies:
  - USD
freeTier: trial
collaboration: team
apiAvailable: public
cliTool: official
status: active
addedAt: 2026-09-14
checkedAt: 2026-09-14
sources:
  - { field: category, url: 'https://about.gitea.com/products/cloud/', checkedAt: 2026-09-14 }
  - { field: hqCountry, url: 'https://about.gitea.com/terms-of-service/', checkedAt: 2026-09-14 }
  - { field: pricingModel, url: 'https://about.gitea.com/pricing/', checkedAt: 2026-09-14 }
  - { field: currencies, url: 'https://about.gitea.com/pricing/', checkedAt: 2026-09-14 }
  - { field: freeTier, url: 'https://about.gitea.com/products/cloud/', checkedAt: 2026-09-14 }
  - { field: collaboration, url: 'https://about.gitea.com/pricing/', checkedAt: 2026-09-14 }
  - { field: apiAvailable, url: 'https://docs.gitea.com/api/', checkedAt: 2026-09-14 }
  - { field: cliTool, url: 'https://about.gitea.com/products/tea/', checkedAt: 2026-09-14 }
figure:
  emoji: 🍵
  color: rgb(46, 74, 36)
  textColor: rgb(232, 245, 226)
  text: Self-hosted Gitea, hosted by someone else.
ai: authored
---

Gitea Cloud is the managed offering of CommitGo, Inc., the company formed around the Gitea project, as its [launch blog post](https://blog.gitea.com/gitea-cloud/) describes. Each customer gets an isolated Gitea instance of its own rather than an account on a shared site, and CommitGo installs, upgrades, backs up and scales it and provisions the CI runners, per the [product page](https://about.gitea.com/products/cloud/). The instance is deployed in a cloud region the customer chooses.

Plans are priced per user, with storage sold in add-on packs above what a plan includes, which is the plan-and-meter shape the pricing field records.

## Worth knowing

The [documentation](https://docs.gitea.com) is Gitea's own, written for the software wherever it runs, so most of it applies to an instance here and some of it describes administration CommitGo does on the customer's behalf. Nothing of a customer's site runs on the service, so runtimes, deploy methods and shell access are not applicable.
