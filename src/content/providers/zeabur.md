---
id: zeabur
name: Zeabur
urls:
  home: https://zeabur.com
  pricing: https://zeabur.com/pricing
  terms: https://zeabur.com/docs/legal/terms
  docs: https://zeabur.com/docs
category: paas
description: Taiwanese platform that detects a repository's project type and deploys it in one click, covering Node, Python, PHP, Go, Rust, Java, .NET, Bun and Deno.
whoManagesOs: container
useCases:
  - saas
  - api
  - static-site
  - side-project
  - ai-app
audience:
  - indie-hacker
  - startup
  - freelancer
  - smb
software:
  - astro
  - express
  - nextjs
  - nuxt
  - remix
  - sveltekit
  - django
  - laravel
  - symfony
  - hugo
runtimes:
  - node
  - python
  - php
  - go
  - rust
  - java
  - dotnet
  - static
  - docker
deployMethods:
  - git-integration
  - docker-image
  - cli
pricingModel: fixed-tier
entryPriceBand: free-tier
freeTier: permanent
apiAvailable: public
cliTool: official
hqCountry: US
social:
  github: https://github.com/zeabur
  x: https://x.com/zeaburapp
checkedAt: 2026-08-01
sources:
  - { field: hqCountry, url: 'https://zeabur.com/about', checkedAt: 2026-08-01 }
  - { field: social, url: 'https://zeabur.com', checkedAt: 2026-08-01 }
  - { field: urls, url: 'https://zeabur.com/docs/legal/terms', checkedAt: 2026-08-01 }
figure:
  emoji: 🧩
  color: rgb(25, 30, 55)
  textColor: rgb(185, 200, 250)
  text: It guesses your stack, usually right.
ai: authored
---

## About Zeabur

Zeabur takes a repository, works out what kind of project it is, and deploys it without a configuration file. The documented framework list is unusually wide for a platform this size — Astro, Express, NestJS, Next.js, Nuxt, Remix, SvelteKit and Vite on the Node side, Django, Flask and Reflex for Python, Spring Boot for Java, Laravel and Symfony for PHP, plus Go, Rust, Bun, Deno, Swift with Vapor, .NET and the static generators. A Dockerfile covers anything not recognised.

Plans run from a free tier through Dev at five dollars a month and Pro at nineteen to Team at seventy-nine with three seats. The tiers are graded by the number of manageable servers, build specification, log retention and the monthly allowance of advanced-model agent messages, with a fourteen-day trial on the paid ones.

Beyond the CLI there are Chrome, VS Code and Raycast extensions, and a deploy button for templates.

## Reservations

Server locations are published nowhere in the documentation or on the pricing page, which is a problem for anyone with a data-residency requirement or a latency target. The plan ladder mixes deployment capacity with AI-agent quota, so the tier that gives more servers also gives more model messages whether or not those are wanted. Support response is quoted in working days on the lower tiers.
