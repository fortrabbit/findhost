---
id: pushin
name: Pushin.eu
urls:
  home: https://pushin.eu
  terms: https://pushin.eu/terms
category:
  - git-hosting
description: Git hosting run by one developer in the Netherlands on bare-metal servers in Paris, in invite-only beta with subscriptions to follow.
founded: 2026
headcount: solo
hqCountry: NL
ownership: independent
infraContract:
  - resells-iaas
runsOn:
  - scaleway
runtimes: null
deployMethods: null
sshAccess: null
regions:
  - FR
pricingModel: fixed-tier
billingPeriods:
  - monthly
  - yearly
gdprDpa: unclear
collaboration: team
apiAvailable: public
cliTool: official
referringSubnets: null
status: active
addedAt: 2026-09-07
checkedAt: 2026-09-07
sources:
  - { field: category, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: description, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: founded, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: headcount, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: hqCountry, url: 'https://pushin.eu/terms', checkedAt: 2026-09-07 }
  - { field: ownership, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: infraContract, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: runsOn, url: 'https://pushin.eu/privacy', checkedAt: 2026-09-07 }
  - { field: regions, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: pricingModel, url: 'https://pushin.eu/terms', checkedAt: 2026-09-07 }
  - { field: billingPeriods, url: 'https://pushin.eu/terms', checkedAt: 2026-09-07 }
  - { field: gdprDpa, url: 'https://pushin.eu/privacy', checkedAt: 2026-09-07 }
  - { field: collaboration, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: apiAvailable, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: cliTool, url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: 'general availability', url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: 'export', url: 'https://pushin.eu', checkedAt: 2026-09-07 }
  - { field: 'account deletion', url: 'https://pushin.eu/privacy', checkedAt: 2026-09-07 }
  - { field: 'beta terms', url: 'https://pushin.eu/terms', checkedAt: 2026-09-07 }
figure:
  emoji: 🐾
  color: rgb(28, 52, 99)
  textColor: rgb(226, 234, 248)
  text: A forge in Paris, run from Leiden.
ai: authored
---

Pushin.eu hosts public and private git repositories with pull requests, issues and CI runners. It is operated by PCX IT in Zeist, the Netherlands, and [built by one developer](https://pushin.eu), Peter Ullrich, who started work in April 2026. The code is stored on bare-metal servers the company runs in Scaleway's Paris data centers, and the [privacy policy](https://pushin.eu/privacy) lists Scaleway, Sentry and Private Captcha as the subprocessors, all in the European Union. Repositories are reached over SSH or over HTTPS with an access token, and a REST API keeps GitHub-compatible request and response shapes so that scripts written for GitHub need a new base URL and little else. A CLI named `pun` manages repositories, pull requests and reviews, and imports a GitHub repository with its issues, pull requests and labels, running on the customer's own machine so the GitHub token never leaves it. A repository can also be mirrored one way from GitHub instead of moved.

The pitch is jurisdiction and moderation: nothing fails over to a US region, code is not used to train models, and registration is by invitation code so that low-effort contributions can be filtered before a vouching system arrives.

## Worth knowing

The service is in [invite-only beta](https://pushin.eu) and is expected to become generally available in early 2027. There are no prices yet; the [terms](https://pushin.eu/terms) describe monthly and yearly subscriptions that will be billed in advance once paid plans launch, with no refund for a period already paid, and the FAQ says the figures will be comparable to GitHub and GitLab.

Leaving is `git clone` per repository, and issues and pull requests come out through the API. There is no export archive yet, and [account deletion is not self-service](https://pushin.eu/privacy): it goes through an email to the company, answered within a month.
