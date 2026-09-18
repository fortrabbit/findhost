---
id: same-new
name: Same
urls:
  home: https://same.new
  pricing: https://docs.same.new/usage/pricing
  docs: https://docs.same.new
  terms: https://same.new/terms-of-service
category:
  - lcnc
description: An AI builder that generates a Next.js web app from a prompt, deploys it through a Netlify-backed hosting flow, and lets a paying customer download the code or push it to GitHub.
whoManagesOs: managed
useCases:
  - web-app
  - side-project
  - ai-app
sshAccess: none
pricingModel: credit
entryPrice: { amount: 10, currency: USD, period: month }
currencies:
  - USD
billingPeriods:
  - monthly
freeTier: permanent
deployMethods:
  - git
software:
  - nextjs
status: active
addedAt: 2026-09-18
checkedAt: 2026-09-18
sources:
  - { field: pricingModel, url: 'https://docs.same.new/usage/pricing', checkedAt: 2026-09-18 }
  - { field: entryPrice, url: 'https://docs.same.new/usage/pricing', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://docs.same.new/usage/pricing', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://docs.same.new/usage/pricing', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://docs.same.new/usage/pricing', checkedAt: 2026-09-18 }
  - { field: deployMethods, url: 'https://docs.same.new/essentials/deploying', checkedAt: 2026-09-18 }
  - { field: status, url: 'https://docs.same.new/essentials/deploying', checkedAt: 2026-09-18 }
  - { field: status, url: 'https://docs.same.new/get-started/faq', checkedAt: 2026-09-18 }
figure:
  emoji: 🟰
  color: rgb(35, 70, 65)
  textColor: rgb(230, 242, 238)
  text: One prompt, remixed into the next one.
ai: authored
---

Same turns a written prompt into a full-stack web application, using Next.js as its default framework so a generated project has both a front end and API routes in one codebase, per the [introduction in Same's documentation](https://docs.same.new/get-started/introduction). Deploying a project through Same hands back a Netlify-hosted URL, as the [deployment guide](https://docs.same.new/essentials/deploying) describes; an unclaimed deployment expires after 14 days unless the customer claims it on Netlify, where it becomes permanent and can carry a custom domain that Same itself does not configure.

Usage is billed in tokens on a monthly plan: a permanent free tier includes a fixed monthly allowance, the paid plans raise it, and pay-as-you-go top-ups sit above the highest tier. A paying customer can also [download the generated code or push it to GitHub](https://docs.same.new/get-started/faq) and deploy it independently of Same's own hosting.

## Worth knowing

Custom domains and code download are reached through Netlify and GitHub rather than inside Same itself, so a customer who wants either has to hold an account with that other service too.
