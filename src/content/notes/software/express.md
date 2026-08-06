---
description: Express hosting — the plainest kind of Node.js hosting, since Express adds nothing a host has to know about.
lead: Node.js, essentially.
---

Express is a thin layer over Node's own HTTP server, so hosting it is hosting [Node.js](/runtimes/node/): a process kept alive behind a proxy, restarted when it exits. There is no build step to speak of and no framework-specific machinery for a provider to support. A host naming Express is describing its audience rather than a capability the others lack.
