---
id: rocket-new
name: Rocket
urls:
  home: https://rocket.new
  pricing: https://rocket.new/pricing
  docs: https://docs.rocket.new
  terms: https://www.rocket.new/terms-service
category:
  - lcnc
description: An AI builder that generates a Next.js and Supabase application from a prompt, publishes it at a builtwithrocket.new or custom address, and syncs the code to a customer's own GitHub repository.
whoManagesOs: managed
useCases:
  - web-app
  - side-project
  - ai-app
sshAccess: none
managedDatabases:
  - postgres
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
  - { field: pricingModel, url: 'https://rocket.new/pricing', checkedAt: 2026-09-18 }
  - { field: entryPrice, url: 'https://rocket.new/pricing', checkedAt: 2026-09-18 }
  - { field: currencies, url: 'https://rocket.new/pricing', checkedAt: 2026-09-18 }
  - { field: billingPeriods, url: 'https://rocket.new/pricing', checkedAt: 2026-09-18 }
  - { field: freeTier, url: 'https://rocket.new/pricing', checkedAt: 2026-09-18 }
  - { field: collaboration, url: 'https://rocket.new/pricing', checkedAt: 2026-09-18 }
  - { field: managedDatabases, url: 'https://www.rocket.new/build', checkedAt: 2026-09-18 }
  - { field: deployMethods, url: 'https://docs.rocket.new/build/connectors/github/overview', checkedAt: 2026-09-18 }
software:
  - nextjs
figure:
  emoji: 🚀
  color: rgb(70, 35, 90)
  textColor: rgb(238, 232, 244)
  text: A prompt becomes a Next.js app with a database wired in.
ai: authored
---

Rocket generates a web or mobile application from a natural-language prompt, producing a Next.js front end backed by Supabase for authentication, tables and API routes, or a Flutter codebase for mobile targets, per its [build page](https://www.rocket.new/build). A published web project gets a free address ending in builtwithrocket.new, with a customer's own domain available as an upgrade. The [GitHub integration](https://docs.rocket.new/build/connectors/github/overview) pushes the generated project to a repository the customer owns, with a two-way sync and automatic pull requests for Next.js/TypeScript projects and a manual push for other frameworks.

Pricing runs on a monthly credit allowance: a free plan includes a small number of credits and the paid plans raise it, with every tier billed as unlimited team seats rather than as a charge per person. Unused credits carry no expiry mentioned beyond the plan's own allowance, and additional credits can be bought outside a plan.

## Worth knowing

Rocket bundles a separate market-research feature ("Solve") and a competitor-monitoring feed ("Intelligence") into the same account as the app builder, so the credit balance that pays for generating and hosting an application is shared with these adjacent, non-hosting features.
