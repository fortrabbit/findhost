---
description: Hosting for static files — no runtime at all, served from disk or a CDN edge.
lead: No runtime to speak of.
---

Static hosting runs nothing: HTML, CSS, images and JavaScript are served as they are, usually from a CDN edge rather than a single machine. It is the cheapest and most reliable thing to host, because there is no process to crash. The build that produced the files has to happen somewhere, though, and that is the real difference between providers — some run the site generator on every push, others expect a finished directory.
