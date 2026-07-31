---
id: fly
name: Fly.io
url: https://fly.io
category: paas
description: Fly.io runs Firecracker microVMs across many regions worldwide, configured via CLI and Dockerfile.
figure:
  emoji: ✈️
  color: rgb(100, 180, 220)
  textColor: rgb(75, 75, 112)
  text: Fly high.
ai: co-authored
---

## About Fly.io

Fly.io distributes Firecracker microVMs across 30+ regions worldwide. Apps deploy from a Dockerfile or a framework template, while registration and configuration run through Fly's CLI tool, flyctl. The CLI workflow is comfortable for small setups; as complexity grows — multiple processes, volumes, private networking — the configuration surface grows with it. Since October 2024, Fly.io bills purely usage-based; the earlier free allowances are gone for new accounts.

Fly's standout feature is global distribution: run the same app close to users on several continents. PHP works in this model — flyctl detects Laravel and generates a Dockerfile — but the platform manages machines, not the application stack: PHP version, extensions and web server config live in the app's own Docker image. Without a hard requirement for multi-region deployment, that flexibility is mostly complexity to carry, and alternatives above and below Fly are worth considering.
