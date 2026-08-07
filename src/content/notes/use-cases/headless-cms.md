---
description: Hosting marketed for headless CMS work — a content API on one side, a separately deployed frontend on the other.
lead: Two things to host, not one.
---

A headless setup separates the content from the site that reads it, so the hosting question doubles. Where the content lives decides which half this register can answer. **Self-hosted** — Directus, Strapi, Payload — and both halves are hosting: the CMS wants a database, persistent uploads and a process that stays up, and the frontend wants somewhere to be served. **Content as a service** — Contentful, Sanity, Storyblok and the growing list behind them — and one half is not hosting at all. Nothing of yours runs there, which is why those products are [out of scope](/contentful/) here, and why the only question left is the one this register is for: where does the frontend go.

That frontend is usually [static](/categories/static/), rebuilt when an editor publishes, which makes this the use case where a static host and a webhook beat a server. The frequent surprise is on the self-hosted side: a CMS writing uploads to local disk on an ephemeral platform loses them at the next deploy.
