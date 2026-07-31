---
id: netlify
name: Netlify
url: https://www.netlify.com
category: serverless
pricingUrl: https://www.netlify.com/pricing/
statusUrl: https://www.netlifystatus.com/
description: Platform that builds sites from a git repository and serves them from a global CDN, with serverless functions, edge functions, blob storage and a database.
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
freeTier: permanent
apiAvailable: public
cliTool: official
figure:
  emoji: 🕸️
  color: rgb(20, 60, 70)
  textColor: rgb(160, 235, 235)
  text: It invented the category, then priced it.
ai: authored
---

## About Netlify

Netlify connects to a git repository, runs the framework's build, and serves the result from a CDN, with serverless functions, edge functions, blob storage and a database available alongside. It did more than any other company to establish the pattern, and the deployment pages of Astro, Nuxt, SvelteKit, Eleventy and most other static-site frameworks still carry a Netlify guide as a matter of course — which makes it about as ecosystem-embedded as a platform can be.

Plans are Free, Personal at nine dollars a month, Pro at twenty, and a custom enterprise tier. Above the plan fee everything is metered in credits: production deploys, compute by the gigabyte-hour, bandwidth by the gigabyte, web requests by the ten thousand, and AI inference by the model.

## Reservations

The credit system means the monthly plan fee is a floor rather than a price. A site's actual cost depends on deploy frequency, traffic and function execution, none of which a buyer knows in advance, and the conversion between credits and dollars has to be read off a table rather than inferred.

This is not a general-purpose application host. The runtime is JavaScript on the platform's own function primitives; there is no SSH, no persistent process and no path for PHP, Python, Ruby or Go.
