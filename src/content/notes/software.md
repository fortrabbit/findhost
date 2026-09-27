---
description: Named applications and frameworks a provider documents support for — a one-click installer, an official guide, a maintained buildpack.
faq:
  - q: 'Do I need special hosting for {label}?'
    a: 'Usually not. {label} runs wherever its language runs, so a host that supports the [runtime](/runtimes/) can serve it. This list is narrower on purpose: it holds the providers that document {label} themselves, with an installer, a guide or a maintained image. A host missing here may run it just as well and simply not say so.'
  - q: 'What should I check before hosting {label}?'
    a: 'Whether the runtime version it needs is offered, how you [deploy](/deployment/), whether you get a [shell](/shell/) for its command-line tools, where scheduled jobs run, and which [databases](/databases/) are managed for you. How backups work and how you [leave](/exit/) matter as much as what the host installs.'
---

A provider appears under a piece of software when it documents support for it: an installer in the control panel, a guide in its own documentation, a maintained buildpack or image. That is a lower bar than "runs well" and a higher one than "is technically possible" — almost any host can run almost any PHP application, and listing every combination would say nothing. The list mixes content management systems, shop software, frameworks and self-hosted applications, because providers market across all four and a reader looking for a Kirby host and one looking for a Mattermost host are asking the same question. Where a provider supports the language but names no application, it appears under [stack](/runtimes/) instead.
