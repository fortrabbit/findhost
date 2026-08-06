---
description: Gatsby hosting — a build that produces static files, and a build that is the expensive part.
lead: The build is the hosting question.
---

Gatsby produces a directory of static files, so serving the result is trivial and the interesting part is where the build runs: it is memory-hungry and slow on large sites, and a provider that builds on a small container will fail on a site that builds fine on a laptop. Hosting it is otherwise static hosting.
