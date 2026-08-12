---
id: gatsby-cloud
name: Gatsby Cloud
category:
  - static
description: The build and hosting platform for Gatsby sites, from the company that made the framework. Sunset after Netlify bought it in 2023.
hqCountry: US
ownership: subsidiary
parent: netlify
whoManagesOs: managed
runtimes:
  - static
  - node
deployMethods:
  - git
useCases:
  - static-site
  - cms
status: discontinued
checkedAt: 2026-08-08
sources:
  - { field: status, url: 'https://www.netlify.com/blog/gatsby-cloud-evolution/', checkedAt: 2026-08-08 }
  - { field: parent, url: 'https://www.netlify.com/press/netlify-acquires-gatsby-inc-to-accelerate-adoption-of-composable-web-architectures/', checkedAt: 2026-08-08 }
figure:
  emoji: ⚡
  color: rgb(108, 44, 155)
  textColor: rgb(246, 242, 250)
  text: Gatsby's own platform, sunset by Netlify.
ai: authored
---

Gatsby Cloud was hosting built by the people who made the framework it hosted — incremental builds that understood a Gatsby site's data layer, and preview environments wired to a headless CMS. For a few years it was the fastest way to build a large Gatsby site, because nobody else knew where the build could be cut short.

[Netlify](/netlify/) acquired Gatsby Inc. in February 2023 and sunset the platform over the following year; free instances stopped on 29 September 2023 and paid ones ended with their contracts. The framework is still open source and still maintained.

The pattern is one this register keeps recording, and this is its purest form: a framework company selling hosting for its own framework, bought by a hosting company that already ran it. The framework survives the acquisition. The hosting is what gets folded in.
