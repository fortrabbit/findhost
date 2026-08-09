---
id: netlify
name: Netlify
urls:
  home: https://www.netlify.com
  pricing: https://www.netlify.com/pricing/
  status: https://www.netlifystatus.com/
  terms: https://www.netlify.com/legal/terms-of-use/
  docs: https://docs.netlify.com/
category:
  - serverless
  - static
description: Platform that builds sites from a git repository and serves them from a global CDN, with serverless functions, edge functions, blob storage and a database.
founded: 2014
hqCountry: US
ownership: vc-backed
whoManagesOs: managed
useCases:
  - static-site
  - headless-cms
  - campaign-site
  - portfolio
  - api
  - web-app
audience:
  - solo
  - agency
  - startup
  - enterprise
software:
  - nextjs
  - nuxt
  - astro
  - sveltekit
  - remix
  - gatsby
  - hugo
  - eleventy
  - jekyll
runtimes:
  - node
  - static
deployMethods:
  - git
sshAccess: none
pricingModel: credit
priceFrom: sm
priceTo: lg
currencies:
  - USD
billingPeriods:
  - monthly
entryPrice: { amount: 9, currency: USD, period: month }
freeTier: permanent
regions:
  - US
  - CA
  - IE
  - GB
  - DE
  - BR
  - JP
  - SG
  - AU
apiAvailable: public
cliTool: official
favorite: true
favoriteNote: Made deploying from a commit ordinary. Everyone else copied it.
status: active
checkedAt: 2026-08-01
sources:
  - { field: pricingModel, url: 'https://www.netlify.com/pricing/', checkedAt: 2026-07-31 }
  - { field: priceFrom, url: 'https://www.netlify.com/pricing/', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://www.netlify.com/changelog/2026-07-14-pro-plan-credit-tiers/', checkedAt: 2026-08-02 }
  - { field: currencies, url: 'https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/billing-faq-for-credit-based-plans/', checkedAt: 2026-08-02 }
  - { field: billingPeriods, url: 'https://docs.netlify.com/manage/accounts-and-billing/billing/billing-for-credit-based-plans/billing-faq-for-credit-based-plans/', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://www.netlify.com/pricing/', checkedAt: 2026-07-31 }
  - { field: entryPrice, url: 'https://www.netlify.com/pricing/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://docs.netlify.com/build/functions/optional-configuration/', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.netlify.com/about/', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://www.netlify.com/about/', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.netlify.com/about/', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://www.netlify.com/legal/terms-of-use/', checkedAt: 2026-08-01 }
figure:
  emoji: 🕸️
  color: rgb(52, 96, 52)
  textColor: rgb(174, 203, 186)
  text: Git push in, CDN out.
ai: authored
---

Netlify connects to a git repository, runs the framework's build, and serves the result from a CDN. Serverless functions, edge functions, blob storage and a database sit alongside the static output, and the runtime for anything dynamic is JavaScript on the platform's own function primitives. The company did much to establish the pattern, and the deployment documentation of most static-site frameworks still carries a Netlify guide.

Pricing is a monthly plan fee plus metered credits. The plan sets a credit allowance, and deploys, compute, bandwidth, requests and AI inference all draw on the same balance; extra credits are sold in packs. Free, mid and enterprise tiers differ mainly in how large the included allowance is.

## Worth knowing

The credit system makes the plan fee a floor rather than a price. What a site costs depends on deploy frequency, traffic and function execution, and the conversion between credits and money has to be read off a rate table rather than inferred from the plan.
