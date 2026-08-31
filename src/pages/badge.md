---
layout: ../layouts/Article.astro
title: Badge
updated: 2026-08-31
description: A copy-paste snippet a listed provider can put on their own site, linking back to their record.
lead: A link back, for providers with a record here.
---

Every provider in the register is welcome to put this on their own site. One artwork for all of them — the market this project answers is full of seals that imply a ranking and are sold by the year. It loads nothing from this server, so no install count exists.

<svg xmlns="http://www.w3.org/2000/svg" width="120" height="44" viewBox="0 0 120 44" role="img" fill="currentColor">
  <title>Listed on FindHost</title>
  <rect x="0.5" y="0.5" width="119" height="43" rx="3" fill="none" stroke="currentColor" />
  <text x="60" y="17" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="8" letter-spacing="1.5">LISTED ON</text>
  <text x="60" y="35" text-anchor="middle" font-family="Charter, 'Bitstream Charter', Cambria, Georgia, serif" font-size="18" font-weight="600">FindHost</text>
</svg>

## What it means

- The badge means this provider has a record on FindHost.
- It is not a rating, a rank, or an endorsement.
- It cannot be bought.
- A record exists whether the badge is displayed or not.

## The snippets

Replace `your-record` with your own, or take the one already filled in at the bottom of your record.

```html
<a href="https://www.findhost.app/your-record/">
  <svg xmlns="http://www.w3.org/2000/svg" width="120" height="44" viewBox="0 0 120 44" role="img" fill="currentColor">
    <title>Listed on FindHost</title>
    <rect x="0.5" y="0.5" width="119" height="43" rx="3" fill="none" stroke="currentColor" />
    <text x="60" y="17" text-anchor="middle" font-family="ui-sans-serif, system-ui, sans-serif" font-size="8" letter-spacing="1.5">LISTED ON</text>
    <text x="60" y="35" text-anchor="middle" font-family="Charter, 'Bitstream Charter', Cambria, Georgia, serif" font-size="18" font-weight="600">FindHost</text>
  </svg>
</a>
```

```html
<a href="https://www.findhost.app/your-record/">Listed on FindHost</a>
```

```markdown
[Listed on FindHost](https://www.findhost.app/your-record/)
```

`currentColor` takes the colour of the text around it. Swap it for a hex, or change `width` and `height` to scale it.

## Where to put it

It does not have to be the homepage. A footer, an about page, a colophon, a trust page, a README.
