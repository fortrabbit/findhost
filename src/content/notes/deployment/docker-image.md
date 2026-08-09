---
description: Hosting that runs a container image built somewhere else — anything can run, and everything inside it is yours.
lead: Built before the provider sees it.
---

Handing over an image moves the build off the platform entirely: any language, any system package, any version. The trade is responsibility, since nothing inside the image is patched by anyone but its author — the security updates a managed runtime would have applied are now a rebuild somebody has to remember. It is the most portable arrangement in this register, and the least looked after by default.

## What this is not

A container is two different things in hosting, and only one of them is a deployment method.

This page is the first: the image is the deliverable. It is built elsewhere, pushed to a registry or pulled from one, and run as it arrives. The platform never sees the source, which is what makes it portable — the same image runs on a laptop, a competitor, or a machine in a cupboard.

The second is a container as the *environment*: the platform runs each customer's application in one, and code still arrives by git push or over SSH. Almost every managed platform here works that way now, and it says nothing about how anybody deploys. That shape is recorded as the [containers as a service](/categories/caas/) category and under [who manages the operating system](/operating-system/), not here.

A Dockerfile committed to a repository and built by the platform is [git](/deployment/git/), by the same test: what was handed over was a commit.

Both together is common rather than contradictory. Clever Cloud, Render, Koyeb and others will build a commit or run an image you already built, and which door a reader wants open depends on whether the build belongs to them.
