---
id: render
name: Render
urls:
  home: https://render.com
  pricing: https://render.com/pricing
  status: https://status.render.com
category: paas
description: Platform-as-a-service that builds services from a git repository, with native runtimes for several languages, a Docker runtime for the rest, and managed Postgres.
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
  - bun
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
billingPeriods:
  - monthly
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
  - { field: priceFrom, url: 'https://render.com/docs/free', checkedAt: 2026-07-31 }
  - { field: persistentStorage, url: 'https://render.com/docs/free', checkedAt: 2026-07-31 }
  - { field: billingPeriods, url: 'https://render.com/docs/free', checkedAt: 2026-08-02 }
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
  text: Git push to a managed container.
---

## About Render

Render is a venture-backed platform-as-a-service headquartered in San Francisco. Services deploy from a linked GitHub, GitLab or Bitbucket repository, from a public git URL, or from a prebuilt Docker image, and the whole account can be driven through a public REST API and an official CLI. The provider runs the operating system; SSH exists but reaches into the running service rather than onto a machine.

Native runtimes cover Node, Bun, Python, Ruby, Go, Rust and Elixir, and anything outside that set runs through the Docker runtime, which means bringing and maintaining a Dockerfile. Managed data services are Render Postgres and a Redis-compatible key-value store, persistent disks can be attached to paid services, and regions span North America, Europe and Asia. A free instance type is permanent rather than a trial, and it spins down after a stretch without inbound traffic and takes about a minute to come back.

## Worth knowing

The free tier is limited in kind rather than only in size: free services cannot attach a persistent disk or run more than one instance, filesystem changes are lost when they spin down, free databases are small and expire a set time after creation, and SSH is not available on them.
