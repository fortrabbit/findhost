---
description: The languages and runtimes each provider says it can run, from PHP and Node.js to Docker and "anything".
lead: What the platform will actually execute.
---

A runtime here is a claim a provider makes about its own product: this language runs, and there is documentation saying so. It is not a measure of how well it runs, how current the version is, or whether the tooling around it is pleasant. Versions move every few months and this dataset does not record them, because a number that is wrong within a quarter is worse than no number.

Two values are shaped differently from the rest. **Docker** means an image is the unit of deployment rather than a language being detected and built. **Anything** means arbitrary processes are allowed, which is normally a machine with root rather than a platform with a buildpack — [who manages the operating system](/os-managed-by/) is the field that says which.
