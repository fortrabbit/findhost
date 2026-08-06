---
description: Strapi hosting — a Node application with a database and an uploads directory, not a static site.
lead: A headless CMS is still an application.
---

Strapi is a Node.js application: it needs a process kept alive, a database, and persistent storage for uploads, since the default local provider writes to disk and a redeploy on an ephemeral platform loses it. It is usually deployed as the backend to a separate frontend, which means two things to host rather than one.
