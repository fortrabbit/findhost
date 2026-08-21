---
id: pico-sh
name: pico.sh
urls:
  home: https://pico.sh
category:
  - static
  - vanity-hosting
description: Static sites, blogs and tunnels deployed over SSH — rsync a directory and it is live, with no dashboard and no client to install.
ownership: independent
deployMethods:
  - file-transfer
collaboration: none
status: active
checkedAt: 2026-08-14
sources:
  - { field: category, url: 'https://pico.sh', checkedAt: 2026-08-14 }
  - { field: deployMethods, url: 'https://pico.sh', checkedAt: 2026-08-14 }
  - { field: ownership, url: 'https://pico.sh/about', checkedAt: 2026-08-21 }
figure:
  emoji: 🐚
  color: rgb(28, 28, 34)
  textColor: rgb(236, 236, 240)
  text: rsync, and you are live.
ai: authored
---

pico.sh is a set of services that all speak SSH and nothing else. Pages hosts a static site pushed with `rsync`, Prose turns markdown sent the same way into a blog, Tuns exposes something running on a laptop at a public address, and Pipe moves data between machines over the same connection. There is no dashboard, no account panel and no tool to install: the client is the SSH already on the machine.

## Worth knowing

The deploy method is the whole point rather than a detail. A workflow that never leaves the terminal is a real preference, and almost nothing else in this register is built for it.

Shell access is left unrecorded rather than answered. SSH is how a file gets there, which is not the same as being given a shell on the machine that serves it, and the row would say the wrong thing either way.

It is small, opinionated and clearly a labour of love. That is worth knowing in both directions before a site that matters is put on it.
