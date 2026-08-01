---
id: netlify
name: Netlify
urls:
  home: https://www.netlify.com
  pricing: https://www.netlify.com/pricing/
  status: https://www.netlifystatus.com/
  terms: https://www.netlify.com/legal/terms-of-use/
  docs: https://docs.netlify.com/
category: serverless
description: Platform that builds sites from a git repository and serves them from a global CDN, with serverless functions, edge functions, blob storage and a database.
founded: 2014
hqCountry: US
ownership: vc-backed
whoManagesOs: provider
useCases:
  - static-site
  - headless-cms
  - campaign-site
  - portfolio
  - api
  - saas
audience:
  - indie-hacker
  - freelancer
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
  - git-integration
  - cli
  - api
sshAccess: none
pricingModel: credit
entryPriceBand: free-tier
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
status: active
checkedAt: 2026-08-01
sources:
  - { field: pricingModel, url: 'https://www.netlify.com/pricing/', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://www.netlify.com/pricing/', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://www.netlify.com/pricing/', checkedAt: 2026-07-31 }
  - { field: entryPrice, url: 'https://www.netlify.com/pricing/', checkedAt: 2026-08-01 }
  - { field: regions, url: 'https://docs.netlify.com/build/functions/optional-configuration/', checkedAt: 2026-08-01 }
  - { field: founded, url: 'https://www.netlify.com/about/', checkedAt: 2026-08-01 }
  - { field: hqCountry, url: 'https://www.netlify.com/about/', checkedAt: 2026-08-01 }
  - { field: ownership, url: 'https://www.netlify.com/about/', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://www.netlify.com/legal/terms-of-use/', checkedAt: 2026-08-01 }
figure:
  emoji: 🕸️
  color: rgb(20, 60, 70)
  textColor: rgb(160, 235, 235)
  text: It invented the category, then priced it.
ai: authored
---

## About Netlify

Netlify connects to a git repository, runs the framework's build, and serves the result from a CDN, with serverless functions, edge functions, blob storage and a database available alongside. It did more than any other company to establish the pattern, and the deployment pages of Astro, Nuxt, SvelteKit, Eleventy and most other static-site frameworks still carry a Netlify guide as a matter of course — which makes it about as ecosystem-embedded as a platform can be.

Plans are Free at "$0 forever", Personal at $9 a month, Pro at $20, and a custom enterprise tier. Above the plan fee everything is metered in credits, and the plan decides the monthly allowance: 300 credits on Free, 1,000 on Personal, 3,000 on Pro, unlimited on Enterprise. The published rates are 15 credits per production deploy, 10 per GB-hour of compute, 20 per GB of bandwidth, 2 per 10,000 web requests, and a model-dependent rate for AI inference. Extra credits come in packs at $5 for 500 or $10 for 1,500.

## Reservations

The credit system means the monthly plan fee is a floor rather than a price. A site's actual cost depends on deploy frequency, traffic and function execution, none of which a buyer knows in advance, and the conversion between credits and dollars has to be read off a table rather than inferred.

This is not a general-purpose application host. The runtime is JavaScript on the platform's own function primitives; there is no SSH, no persistent process and no path for PHP, Python, Ruby or Go.
