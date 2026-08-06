---
description: n8n hosting — a long-running automation service with a queue, a database and webhooks that must stay reachable.
lead: Always on, by definition.
---

n8n is a workflow runner, so it has to be running for anything to happen: scheduled triggers fire on its clock and webhooks arrive on its URL. Self-hosting it means a persistent process, a database, and for anything serious a queue mode with separate workers. A platform that sleeps idle applications will silently stop the automations it was installed for.
