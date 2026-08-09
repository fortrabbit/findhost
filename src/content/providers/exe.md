---
id: exe
name: exe.dev
urls:
  home: https://exe.dev
  pricing: https://exe.dev/pricing
  docs: https://exe.dev/docs
category:
  - vps
description: Ubuntu VMs in seconds over SSH, sold as a pool of capacity rather than as machines, and aimed as much at agents as at people.
founded: 2026
hqCountry: US
ownership: vc-backed
whoManagesOs: self-managed
runtimes:
  - docker
  - any
deployMethods:
  - docker-image
sshAccess: root
persistentStorage: true
entryPrice: { amount: 20, currency: USD, period: month }
priceFrom: md
currencies:
  - USD
billingPeriods:
  - monthly
pricingModel: plan-plus-overage
useCases:
  - side-project
  - web-app
  - learning
  - ai-app
audience:
  - solo
  - startup
apiAvailable: public
favorite: true
favoriteNote: Betting that a machine should cost about what a process costs.
status: active
checkedAt: 2026-08-08
sources:
  - { field: entryPrice, url: 'https://exe.dev/pricing', checkedAt: 2026-08-08 }
  - { field: pricingModel, url: 'https://exe.dev/pricing', checkedAt: 2026-08-08 }
  - { field: sshAccess, url: 'https://exe.dev', checkedAt: 2026-08-08 }
  - { field: category, url: 'https://exe.dev', checkedAt: 2026-08-08 }
  - { field: apiAvailable, url: 'https://exe.dev', checkedAt: 2026-08-08 }
ai: authored
---

exe.dev sells Ubuntu virtual machines that start in seconds, reached over SSH, with root, `apt`, `systemd`, Docker, a persistent disk and an HTTPS address. It launched in April 2026 and raised a $25 million Series A shortly after. Its own headline is "computers for developers and agents".

## What is actually different

Nothing in the list above is new, which is the first thing to say plainly: a VPS with root and a public address has been purchasable for twenty years and costs less elsewhere.

**The unit of purchase is capacity, not a machine.** Twenty dollars a month buys a pool — 2 vCPU, 8 GB of RAM, 100 GB of disk — and up to fifty VMs may be spawned from it. Everywhere else, a second machine is a second bill. Here a machine is closer to a process: make one to try something, destroy it, make eleven more.

**It refuses the managed abstraction on purpose.** After fifteen years of platforms competing to hide the operating system, this one sells the operating system back, at a moment when the thing typing the commands is increasingly not a person. An agent that can be given a computer, allowed to break it, and handed another one is a better fit for a root shell than for a deploy pipeline it has to be taught.

## What to be sceptical about

The moat is ergonomics, and ergonomics are copyable. DigitalOcean, Hetzner and Fly.io can all price against a $20 pool, and the per-second sandbox is a product several GPU and agent-infrastructure companies already sell. What is worth watching is whether "a computer per idea" turns out to be how people work once an agent is writing most of the code. If it is, the pool is the right unit and this was early. If not, it is a nicer VPS.
