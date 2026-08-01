---
id: gigalixir
name: Gigalixir
urls:
  home: https://www.gigalixir.com
  pricing: https://www.gigalixir.com/pricing/
category: paas
description: Platform built around Elixir and Phoenix, keeping hot upgrades, remote observer and clustering intact, with a permanently free tier and per-second billing.
whoManagesOs: container
specialisation:
  - elixir
useCases:
  - saas
  - api
  - background-jobs
  - side-project
audience:
  - indie-hacker
  - startup
  - smb
runtimes:
  - elixir
  - ruby
  - python
  - node
  - go
  - java
  - rust
  - php
deployMethods:
  - git-push
  - cli
  - git-integration
sshAccess: full
managedDatabases:
  - postgres
pricingModel: per-resource
entryPriceBand: free-tier
freeTier: permanent
regions:
  - US
figure:
  emoji: 💧
  color: rgb(45, 25, 60)
  textColor: rgb(225, 190, 250)
  text: The one that lets the BEAM be the BEAM.
ai: authored
---

## About Gigalixir

Gigalixir exists because general-purpose platforms tend to break the things that make Elixir worth using. Hot upgrades, remote observer, distributed clustering and remote consoles all survive here, where elsewhere they are casualties of the container model. Other runtimes are supported — Ruby, Python, Node, Go, Java, Rust, PHP and Clojure all deploy — but the platform is shaped around the BEAM.

The free tier is permanent rather than a trial: one replica with half a gigabyte of memory, a PostgreSQL database capped at ten thousand rows, custom domains and SSL, with apps sleeping after thirty days of inactivity rather than after thirty minutes. Standard starts at $10 a month and scales memory and replicas independently, billed prorated to the second, with SSH and remote console included. Regions are AWS in the eastern and western United States and Google Cloud in the US and Europe.

## Reservations

The free database limit is a row count, not a size, which is an unusual and easily-exceeded shape of cap. High availability doubles the database cost, and a dedicated ingress is $250 a month — a step that arrives suddenly for anyone needing a static IP. Isolated clusters and priority support are enterprise-only and quoted rather than published.
