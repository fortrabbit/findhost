---
id: deno-deploy
name: Deno Deploy
urls:
  home: https://deno.com/deploy
  pricing: https://deno.com/deploy/pricing
category:
  - serverless
description: Serverless hosting for JavaScript and TypeScript built by the Deno team, running the Deno runtime with Node and npm compatibility.
hqCountry: US
ownership: vc-backed
whoManagesOs: managed
parent: Deno Land Inc.
useCases:
  - api
  - static-site
  - web-app
  - side-project
  - headless-cms
audience:
  - solo
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
  - git
sshAccess: none
pricingModel: fixed-tier
priceFrom: md
priceTo: xl
freeTier: permanent
apiAvailable: public
cliTool: official
iacSupport:
  - terraform
status: active
checkedAt: 2026-07-31
sources:
  - { field: priceFrom, url: 'https://deno.com/deploy/pricing', checkedAt: 2026-08-02 }
  - { field: priceTo, url: 'https://deno.com/deploy/pricing', checkedAt: 2026-08-02 }
  - { field: freeTier, url: 'https://deno.com/deploy/pricing', checkedAt: 2026-07-31 }
  - { field: pricingModel, url: 'https://deno.com/deploy/pricing', checkedAt: 2026-07-31 }
figure:
  emoji: 🦕
  color: rgb(77, 77, 157)
  textColor: rgb(234, 234, 245)
  text: The runtime, hosted by its authors.
ai: authored
---

Deno Deploy is the hosting service built by the company that makes the Deno runtime, which gives it an unusual property: the platform and the language runtime are the same project, so what runs locally and what runs in production are the same binary. Node and npm compatibility means most existing JavaScript works, and the framework list covers Fresh, Next.js, Astro, Vue, React and others, with server-side rendering, static generation, incremental regeneration, subprocesses and foreign-function calls all supported.

Plans run from a permanent free tier through a paid individual tier to one aimed at customers reselling the platform to their own users, with a negotiated enterprise arrangement above them. Each tier carries an allowance of requests and CPU time, and the rates charged beyond that allowance are published rather than quoted.

## Worth knowing

Free accounts carry community support only, with no data-processing agreement and no SOC 2 report attached to the tier.
