---
layout: ../layouts/Article.astro
title: For providers
updated: 2026-08-31
description: How to correct a record, how to get a missing provider added, and the badge a listed provider can display.
lead: What a hosting company can do here.
figure:
  emoji: 🤝
  color: rgb(255, 233, 163)
  textColor: rgb(90, 66, 0)
  text: Corrections welcome, including yours.
---

Nothing here is for sale. A record exists because a provider meets the scope test, and it reports what that provider's own public pages say.

## Correcting a record

Every record is one markdown file. The **Edit on GitHub** link at the bottom of a record page opens it, GitHub forks the repository, and saving the change opens a pull request. No checkout, no build.

What makes a correction quick to merge:

- **Cite it.** Anything not obvious from the home page needs a `sources` entry with a URL and the date it was read. A provider's own documentation is a fine source about its own product.
- **Leave unknowns blank.** An absent field means nobody has checked. It renders as `?` and is a designed state.
- **Disclose the relationship.** Contributors paid by a provider say so in the pull request. That applies to us as well.

Some things do not change on request: the alphabetical order, the absence of ratings, and the ♥️, which is the publisher's opinion rather than a field. Records are never deleted. A provider that would rather not appear can say so, and the record moves beside the register, keeping its page.

- [Every record, one file each](https://github.com/fortrabbit/findhost/tree/main/src/content/providers)
- [The full contributing rules](https://github.com/fortrabbit/findhost/blob/main/CONTRIBUTING.md)

## Adding a provider

The register is incomplete, and a missing name usually means nobody has got to it yet.

Write the record — one file under `src/content/providers/`, four required fields (`id`, `name`, `urls.home`, `category`), one pull request. Or name it in an issue and leave the fields to whoever picks it up.

A provider that fails one of the six criteria still gets a record, carrying the number it failed on. Most of those rulings reverse once the missing evidence appears.

- [The six criteria a record is held to](/about/#who-is-listed)
- [Name a provider we are missing](https://github.com/fortrabbit/findhost/issues/new?template=add-provider.yml)

## The badge

Listed providers are welcome to display a small **Listed on FindHost** badge. It says a record exists and nothing else: no tier, no score, no year, and no way to buy one. The artwork is inline markup, so it never calls this server and no install count exists.

We would be glad if you took it. The snippet also sits at the bottom of your own record.

- [The badge, its three forms and its terms](/badge/)
