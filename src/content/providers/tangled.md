---
id: tangled
name: Tangled
urls:
  home: https://tangled.org
  docs: https://docs.tangled.org
category:
  - git-hosting
description: A git forge built on the AT Protocol, where repositories live on self-hostable servers and one site shows them all.
founded: 2025
hqCountry: FI
runtimes: null
deployMethods: null
sshAccess: null
regions: null
wikidata: Q139961350
status: active
addedAt: 2026-09-14
checkedAt: 2026-09-14
sources:
  - { field: wikidata, url: 'https://www.wikidata.org/wiki/Q139961350', checkedAt: 2026-09-14 }
  - { field: founded, url: 'https://blog.tangled.org/intro/', checkedAt: 2026-09-14 }
  - { field: hqCountry, url: 'https://tangled.org/terms', checkedAt: 2026-09-14 }
  - { field: category, url: 'https://blog.tangled.org/intro/', checkedAt: 2026-09-14 }
figure:
  emoji: 🧶
  color: rgb(40, 36, 48)
  textColor: rgb(238, 234, 246)
  text: A forge that signs in with a Bluesky account.
ai: authored
---

Tangled is a git collaboration platform run by Tangled Labs Oy, a Finnish company per its [terms of service](https://tangled.org/terms), and built on the AT Protocol, the protocol behind Bluesky. Users sign in with an AT Protocol account. Repositories live on "knots", small servers anyone may run, and the tangled.org site shows repositories from every knot in one place, so a pull request can be opened against a repository whichever server holds it. As the [launch blog post](https://blog.tangled.org/intro/) describes, Tangled runs managed knots on which repositories are hosted for free.

CI runs on "spindles", NixOS microVMs that Tangled operates and that a user may also run on their own machines, as the [documentation](https://docs.tangled.org) covers alongside self-hosting a knot.

## Worth knowing

No plans or prices are published, which is why the pricing rows are empty rather than filled with a zero. Nothing of a customer's site runs here, so runtimes, deploy methods and shell access are not applicable, and no region is offered as a choice.
