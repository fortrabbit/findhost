---
description: Directus hosting — a Node application wrapped around an existing database, plus file storage.
lead: Node, a database and a place for files.
---

Directus runs as a Node process over a SQL database it can also adopt from an existing schema, and it stores uploaded files either on disk or in object storage. Hosting it is application hosting with the same persistence caveat as any headless CMS: local file storage on an ephemeral platform does not survive a deploy.
