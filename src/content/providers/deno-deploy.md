---
id: deno-deploy
name: Deno Deploy
url: https://deno.com/deploy
category: serverless
pricingUrl: https://deno.com/deploy/pricing
description: Serverless hosting for JavaScript and TypeScript built by the Deno team, running the Deno runtime with Node and npm compatibility.
hqCountry: US
ownership: vc-backed
whoManagesOs: provider
parent: Deno Land Inc.
useCases:
  - api
  - static-site
  - saas
  - side-project
  - headless-cms
audience:
  - indie-hacker
  - freelancer
  - startup
  - education
software:
  - nextjs
  - astro
  - sveltekit
  - nuxt
runtimes:
  - node
  - static
deployMethods:
  - git-integration
  - cli
  - api
sshAccess: none
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
figure:
  emoji: 🦕
  color: rgb(15, 15, 20)
  textColor: rgb(235, 235, 240)
  text: The runtime, hosted by its authors.
ai: authored
---

## About Deno Deploy

Deno Deploy is the hosting service built by the company that makes the Deno runtime, which gives it an unusual property: the platform and the language runtime are the same project, so what runs locally and what runs in production are the same binary. Node and npm compatibility means most existing JavaScript works, and the framework list covers Fresh, Next.js, Astro, Vue, React and others, with server-side rendering, static generation, incremental regeneration, subprocesses and foreign-function calls all supported.

Plans are Free, Pro at twenty dollars a month, Builder at two hundred for people reselling the platform to their own users, and a custom enterprise tier. The free tier is substantial: a million requests, twenty gigabytes of egress, fifteen hours of CPU time and fifty custom domains a month.

## Reservations

Free accounts get community support only, no data-processing agreement and no SOC 2 report — which rules the tier out for anything with a compliance requirement. Regions are not published on either the product or the pricing page. This runs JavaScript and TypeScript and nothing else.
