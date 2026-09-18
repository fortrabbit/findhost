---
id: bolt
name: Bolt
urls:
  home: https://bolt.new
  pricing: https://bolt.new/pricing
  docs: https://support.bolt.new
  terms: https://stackblitz.com/terms-of-service
category:
  - lcnc
description: An AI builder from StackBlitz that turns a prompt into a web app and can publish the result on its own bolt.host hosting or push the code to GitHub for deployment elsewhere.
ownership: vc-backed
whoManagesOs: managed
useCases:
  - web-app
  - side-project
  - ai-app
sshAccess: none
pricingModel: credit
entryPrice: { amount: 25, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
  - yearly
freeTier: permanent
collaboration: team
deployMethods:
  - git
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: pricingModel, url: 'https://bolt.new/pricing', checkedAt: 2026-09-18 }
  - { field: entryPrice, url: 'https://bolt.new/pricing', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://bolt.new/pricing', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://bolt.new/pricing', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://bolt.new/pricing', checkedAt: 2026-09-18 }
  - { field: collaboration, url: 'https://bolt.new/pricing', checkedAt: 2026-09-18 }
  - { field: deployMethods, url: 'https://support.bolt.new/concepts/version-history-github', checkedAt: 2026-09-18 }
  - { field: status, url: 'https://support.bolt.new/cloud/hosting/publish', checkedAt: 2026-09-18 }
figure:
  emoji: ⚡
  color: rgb(40, 45, 90)
  textColor: rgb(232, 234, 246)
  text: Prompt in, deploy anywhere the code lands.
ai: authored
---

Bolt is StackBlitz's AI builder: a prompt describes an application, a model writes the code, and the result runs in a browser-based environment built on the company's WebContainers technology. Clicking Publish deploys the project to a free address ending in bolt.host, and the [publishing documentation](https://support.bolt.new/cloud/hosting/publish) describes attaching a customer-owned domain on paid plans. A separate [GitHub integration](https://support.bolt.new/concepts/version-history-github) pushes the same project to a repository the customer controls, so the code can be run and hosted anywhere, not only on bolt.host.

Usage is metered in tokens rather than compute or bandwidth: a free plan grants a capped monthly allowance with Bolt branding on the published site, and the paid plan raises the allowance, removes the branding and unlocks custom domains. A Teams plan adds shared billing and administration per seat.

## Worth knowing

Because generation and hosting draw on the same token balance, a month of heavy prompting and a month of a popular published site can both exhaust it, and the conversion between tokens and either activity is set by the plan rather than a fixed unit price.
