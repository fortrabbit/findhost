---
description: Ruby on Rails hosting — an asset build, a database and the background jobs almost every Rails app grows.
lead: The framework the deploy tooling was built for.
---

Rails wants an asset build at deploy time, a database, and a place to run Sidekiq or Solid Queue — the jobs half of the application is not optional in practice. Its deployment conventions are old enough that most platforms support them directly, which is why Rails hosting looks straightforward compared to newer stacks. Providers listing it generally offer the worker process type as well as the web one.
