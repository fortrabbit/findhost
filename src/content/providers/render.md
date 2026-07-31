---
id: render
name: Render
url: https://render.com
category: paas
pricingUrl: https://render.com/pricing
statusUrl: https://status.render.com
description: Render is a polyglot PaaS with native runtimes for Node, Python, Ruby, Go, Rust and Elixir, a Docker runtime for everything else, and managed Postgres.
hqCountry: US
ownership: vc-backed
whoManagesOs: provider
useCases:
  - static-site
  - background-jobs
audience:
  - startup
social:
  x: https://x.com/render
  linkedin: https://www.linkedin.com/company/renderco/
  github: https://github.com/render-oss
  youtube: https://www.youtube.com/@render-inc
  discord: https://discord.gg/kt5namUTqb
runtimes:
  - node
  - python
  - ruby
  - go
  - rust
  - elixir
  - docker
deployMethods:
  - git-integration
  - docker-image
  - cli
sshAccess: limited
persistentStorage: true
managedDatabases:
  - postgres
  - redis
entryPriceBand: free-tier
freeTier: permanent
regions:
  - US
  - DE
  - SG
apiAvailable: public
cliTool: official
status: active
checkedAt: 2026-07-31
sources:
  - { field: hqCountry, url: 'https://render.com/about', checkedAt: 2026-07-31 }
  - { field: ownership, url: 'https://render.com/about', checkedAt: 2026-07-31 }
  - { field: runtimes, url: 'https://render.com/docs/language-support', checkedAt: 2026-07-31 }
  - { field: deployMethods, url: 'https://render.com/docs/web-services', checkedAt: 2026-07-31 }
  - { field: sshAccess, url: 'https://render.com/docs/ssh', checkedAt: 2026-07-31 }
  - { field: freeTier, url: 'https://render.com/docs/free', checkedAt: 2026-07-31 }
  - { field: entryPriceBand, url: 'https://render.com/docs/free', checkedAt: 2026-07-31 }
  - { field: persistentStorage, url: 'https://render.com/docs/free', checkedAt: 2026-07-31 }
  - { field: regions, url: 'https://render.com/docs/regions', checkedAt: 2026-07-31 }
  - { field: managedDatabases, url: 'https://render.com/docs/databases', checkedAt: 2026-07-31 }
  - { field: apiAvailable, url: 'https://render.com/docs/api', checkedAt: 2026-07-31 }
  - { field: cliTool, url: 'https://render.com/docs/api', checkedAt: 2026-07-31 }
  - { field: useCases, url: 'https://render.com/', checkedAt: 2026-07-31 }
  - { field: social, url: 'https://render.com/', checkedAt: 2026-07-31 }
  - { field: audience, url: 'https://render.com/', checkedAt: 2026-07-31 }
figure:
  emoji: 🎨
  color: rgb(72, 209, 204)
  textColor: rgb(10, 50, 10)
  text: Beautiful UI, complex reality.
ai: co-authored
---

## About Render

Render is a venture-backed platform-as-a-service headquartered in San Francisco, which states it has raised $258M from outside investors. Services deploy from a linked GitHub, GitLab or Bitbucket repository, from a public git URL, or from a prebuilt Docker image, and can be managed through a public REST API and an official CLI.

Native runtimes cover Node.js, Bun, Python, Ruby, Go, Rust and Elixir. Anything outside that set — PHP, .NET, Java — runs through the Docker runtime, which means bringing and maintaining a Dockerfile. Managed data services are Render Postgres and Render Key Value, a Redis-compatible store. Regions are Oregon, Ohio, Virginia, Frankfurt and Singapore.

A free instance type exists and is permanent rather than a trial: 750 free instance hours a month, spinning down after fifteen minutes without inbound traffic and taking about a minute to spin back up.

## Reservations

The free tier is genuinely limited rather than merely small. Free web services cannot use persistent disks or scale past one instance, filesystem changes are lost on spin-down, free Postgres databases are capped at 1 GB and expire thirty days after creation, and free Key Value instances hold nothing on disk. SSH is unavailable on free instances too.

PHP is not a native runtime. Running it means owning the container image — PHP version, extensions, web server configuration and their upgrades — which moves work back to the customer that a PHP-specific platform would absorb.
