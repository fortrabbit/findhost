---
description: Hosting that accepts a Docker image — the unit of deployment is a container, not a language the provider detects.
lead: Not a language, a delivery format.
---

Docker is not a runtime in the sense the other values are: it says the unit of deployment is an image rather than source the provider inspects and builds. That trades convenience for control — anything can run, and everything inside the image is the customer's responsibility, including the security updates a managed runtime would have applied. Providers accepting images range from platforms that build them to machines where the container is simply a process.
