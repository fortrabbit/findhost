---
description: Laravel hosting — PHP with a build step, a queue worker and a scheduler, which is more than a web process.
lead: More than a web process.
---

Laravel asks for the parts around the request: a Composer install and asset build at deploy time, a queue worker for jobs, and a scheduler running every minute. A host that serves PHP and nothing else will run the site and silently drop the mail, the exports and anything queued. Providers documenting Laravel usually mean those extra process types are available and supervised, which is the difference worth filtering on. Everything here also runs [PHP](/runtimes/php/), and most of it runs [Symfony](/software/symfony/), which Laravel is built on.
