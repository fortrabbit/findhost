---
description: Statamic hosting — a Laravel application first, whose content may be flat files rather than a database.
lead: Laravel underneath, sometimes without a database.
---

Statamic is built on Laravel, so hosting it is Laravel hosting: a build step, a queue if the site uses one, and PHP kept current. The difference is content, which can live in flat files rather than a database — that makes deployment simpler and makes the writable content directory the thing that must survive a deploy. Providers listing Statamic almost always list [Laravel](/software/laravel/) too.
