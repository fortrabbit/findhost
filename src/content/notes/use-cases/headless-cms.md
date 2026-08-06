---
description: Hosting marketed for headless CMS work — a content API on one side, a separately deployed frontend on the other.
lead: Two things to host, not one.
---

A headless setup separates the content API from the site that reads it, so the hosting question doubles: the CMS needs a database, persistent uploads and a process that stays up, while the frontend may be static files rebuilt on publish. Some providers sell both halves and some only one. The frequent surprise is storage — a headless CMS writing uploads to local disk on an ephemeral platform loses them at the next deploy.
