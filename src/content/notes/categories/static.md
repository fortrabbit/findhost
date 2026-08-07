---
description: Static hosting — files served as they are, with the build having happened somewhere else.
lead: Nothing runs on the server.
---

Static hosting serves what it is given: HTML, CSS, images and JavaScript, from disk or a CDN edge, with no process to keep alive and nothing to crash. It is the cheapest and most reliable shape of hosting there is, and the reason it belongs in this register is that somebody still has to choose one — the code ran on a laptop or in a pipeline rather than on the server, and the result has to live somewhere.

The interesting questions move to either end. At the front: where the build runs, whether the provider does it on every push or expects a finished directory. At the back: what happens when the site needs something a file cannot do — a form, a search, a session — which is where the [serverless](/categories/serverless/) and [PaaS](/categories/paas/) products next to it start to matter. Providers here range from pure static hosts to platforms that serve static output as one product among several.
