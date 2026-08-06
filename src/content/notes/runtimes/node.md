---
description: Hosting that runs Node.js — a long-lived process rather than a script per request, which not every shared host will keep alive.
lead: A process that has to stay running.
---

Node.js is a long-lived process, and that is the whole difference. Shared hosting built for PHP starts a script per request and stops it again; a Node app has to be kept alive, restarted when it dies and put behind a proxy. Hosts answer that with a process manager, a container, or a platform that does it invisibly. Where a provider lists Node support, the useful follow-up is what happens after a crash at four in the morning.
