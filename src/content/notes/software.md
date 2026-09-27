---
description: Named applications and frameworks a provider documents support for — a one-click installer, an official guide, a maintained buildpack.
faq:
  - q: 'Do I need special hosting for {label}?'
    a: 'In most cases, no. {label} runs on any host that supports its [runtime](/runtimes/). This list is shorter than that: it holds the providers that document {label} themselves, with an installer, a guide or a maintained image. Other hosts may run it without mentioning it.'
  - q: 'What should I check before hosting {label}?'
    a: 'The runtime versions on offer, how [deploys](/deployment/) work, whether there is a [shell](/shell/) for command-line tools, where cron jobs run, and which [databases](/databases/) come managed. Check backups too, and how to [move away](/exit/) later.'
---

A provider appears under a piece of software when it documents support for it: an installer in the control panel, a guide in its own documentation, a maintained buildpack or image. That is a lower bar than "runs well" and a higher one than "is technically possible" — almost any host can run almost any PHP application, and listing every combination would say nothing. The list mixes content management systems, shop software, frameworks and self-hosted applications, because providers market across all four and a reader looking for a Kirby host and one looking for a Mattermost host are asking the same question. Where a provider supports the language but names no application, it appears under [stack](/runtimes/) instead.
