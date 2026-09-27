---
description: Hosting that runs Node.js — a long-lived process rather than a script per request, which not every shared host will keep alive.
lead: A process that has to stay running.
faq:
  - q: 'Can I run Node.js on shared hosting?'
    a: 'Sometimes. Shared hosting was built for languages that answer a request and exit, like PHP, and a long-running Node.js process fits it poorly; some control panels support it, many do not. [PaaS](/categories/paas/), [containers](/categories/caas/) and a [VPS](/categories/vps/) run Node.js as a matter of course.'
---

Node.js is a long-lived process, and that is the whole difference. Shared hosting built for PHP starts a script per request and stops it again; a Node app has to be kept alive, restarted when it dies and put behind a proxy. Hosts answer that with a process manager, a container, or a platform that does it invisibly. Where a provider lists Node support, the useful follow-up is what happens after a crash at four in the morning. It is what [Ghost](/software/ghost/), [Next.js](/software/nextjs/), [Nuxt](/software/nuxt/) and [Express](/software/express/) all need underneath them.
