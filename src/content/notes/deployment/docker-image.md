---
description: Hosting that runs a container image built somewhere else — anything can run, and everything inside it is yours.
lead: Built before the provider sees it.
---

Handing over an image moves the build off the platform entirely: any language, any system package, any version. The trade is responsibility, since nothing inside the image is patched by anyone but its author — the security updates a managed runtime would have applied are now a rebuild somebody has to remember. It is the most portable arrangement in this register, and the least looked after by default.
