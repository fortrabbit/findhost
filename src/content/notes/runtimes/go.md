---
description: Hosting that runs Go — a single compiled binary, which asks less of a host than almost anything else.
lead: One binary, few demands.
---

Go compiles to a single static binary with no runtime to install, which makes it easy to host and unusual to advertise. On a platform, the interesting question is whether the build happens there or elsewhere; on a machine, there is barely a question at all, since the binary runs next to anything else. Providers listing Go usually mean a buildpack or a container image rather than a managed runtime in any deeper sense.
