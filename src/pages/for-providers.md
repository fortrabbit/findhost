---
layout: ../layouts/Article.astro
title: For providers
updated: 2026-08-31
description: How to correct your record, how to get a missing provider added, and the badge you are welcome to display.
lead: If you run a hosting company, this page is the whole of what you can do here.
figure:
  emoji: 🤝
  color: rgb(255, 233, 163)
  textColor: rgb(90, 66, 0)
  text: Your record, and what you can do about it.
---

There is nothing to buy, no listing fee and no application. A record exists because a provider meets [the scope test](/about/#who-is-listed), and it says what the provider's own public pages say. What follows is how to change one, how to ask for one, and what to do if you would like to link back.

## Correcting your record

Every record is one markdown file, and every record page carries an **Edit on GitHub** link at the bottom that opens it. GitHub forks the repository for you, and saving the change opens a pull request. No local checkout, no build.

A few things make a correction quick to merge:

- **Cite it.** Anything that is not obvious from your home page needs a `sources` entry with a URL and the date it was read. Your own documentation is a fine source about your own product.
- **Leave the unknowns blank.** An absent field means nobody has checked, which renders as `?` and is a designed state. A guessed value costs somebody an hour to undo.
- **Say who you are.** Contributors paid by a provider disclose it in the pull request. That is not an obstacle — it lets a reviewer weigh the change, and it applies to us as much as to you.

What cannot be changed by asking: the alphabetical order, the absence of ratings, and the ♥️, which marks the handful of records the publisher finds interesting and is an opinion rather than a field. A record is never deleted either. If you would rather not be in the register, say so and the record moves beside it, keeping its page — that is what `delisted-on-request` means.

The full contributing rules are in [CONTRIBUTING.md](https://github.com/fortrabbit/findhost/blob/main/CONTRIBUTING.md).

## Adding a provider we have missed

The register is far from complete, and a missing name is a bug rather than a verdict. Two ways in, depending on how much time you have.

**Write the record.** One file under `src/content/providers/`, four required fields — `id`, `name`, `urls.home`, `category` — and a pull request. Copy an existing record for the shape; the build tells you what is wrong before a person looks at it.

**Or just name it.** [Open an issue from the template](https://github.com/fortrabbit/findhost/issues/new?template=add-provider.yml), answer what is obvious and leave the rest blank. Whoever picks it up reads the provider's own pages for the fields nobody filled in.

If a provider misses one of the six criteria, the record still goes in — carrying the number it failed on, so the decision has a page somebody can argue with. Most of those rulings reverse the moment the missing evidence appears.

## The badge, if you want it

There is a small **Listed on FindHost** badge that any listed provider is welcome to put on their own site. It says that a record exists here and nothing beyond that: no tier, no score, no year. It was not paid for and cannot be.

Displaying it costs nothing and loads nothing — the artwork is inline markup, so it never calls this server and no install count exists anywhere. Taking it down again changes nothing about the record.

We would be glad if you did. The snippet is at the bottom of your own record under *Are you …?*, and [the badge page](/badge/) has the three forms of it, the terms in plain words, and somewhere other than your homepage to put it.
