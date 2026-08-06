---
description: Hosting that runs Rust — a single compiled binary, with the cost moved from runtime to build time.
lead: Cheap to run, slow to build.
---

Like Go, Rust produces a binary that needs nothing installed alongside it, so running one is undemanding. The cost moves to the build: a cold compile is slow enough that where it happens matters, and building on the provider can turn a deploy into a coffee break. Hosts listing Rust generally mean a buildpack or, more often, that a container image is accepted and its contents are nobody's business.
