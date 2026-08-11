---
description: Static hosting — files served as they are, with the build having happened somewhere else.
lead: Nothing runs on the server.
---

Static hosting serves what it is given — HTML, CSS, images and JavaScript, from disk or a CDN edge — with no process to keep alive and nothing to crash. It is the cheapest and most reliable shape of hosting there is, and it belongs in this register because somebody still has to choose one: the code ran on a laptop or in a pipeline rather than on the server, and the result has to live somewhere. The interesting questions move to either end — where the build runs, and what happens when a site needs something a file cannot do, which is where [serverless](/categories/serverless/) and [PaaS](/categories/paas/) start to matter.
