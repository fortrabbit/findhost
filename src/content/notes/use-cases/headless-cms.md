---
description: Hosting marketed for headless CMS work — a content API on one side, a separately deployed frontend on the other.
lead: Two things to host, not one.
---

A headless setup separates the content from the site that reads it, so the hosting question doubles, and where the content lives decides which half this register can answer. **Self-hosted** — Directus, Strapi, Payload — and both halves are hosting: a database, persistent uploads and a process that stays up, plus somewhere to serve the frontend. **Content as a service** — Contentful, Sanity, Storyblok — and one half is not hosting at all, which is why those are [out of scope](/contentful/) here and only the frontend is left to place. It is usually [static](/categories/static/), rebuilt when an editor publishes. The frequent surprise is on the self-hosted side: uploads written to local disk on an ephemeral platform are gone at the next deploy.
