---
description: Next.js hosting — where the framework's server features work, and where the deployment quietly becomes static.
lead: Which half of the framework actually runs.
---

Next.js is two things: a static site generator and a server framework with rendering, image optimization and route handlers. A host can support the first and call it Next.js support. Whether the second works — server components, incremental regeneration, middleware — depends on the platform's adapter and is the question worth asking. Providers documenting it usually name which parts they run, and the ones that do not are usually serving a build output.
