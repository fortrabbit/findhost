---
description: Hosting that runs a container image built somewhere else — anything can run, and everything inside it is yours.
lead: Built before the provider sees it.
---

The image is the deliverable: built elsewhere, pushed to a registry, run as it arrives. That moves the build off the platform entirely — any language, any system package, any version — and the trade is responsibility, since nothing inside the image is patched by anyone but its author. Only that arrangement is recorded here. A platform that merely runs each application in a container while code arrives by git push is [containers as a service](/categories/caas/) instead, and a Dockerfile the platform builds from a commit is [git](/deployment/git/) — what was handed over was a commit.
