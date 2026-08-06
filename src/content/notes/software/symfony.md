---
description: Symfony hosting — PHP with a Composer build, a cache warm-up and often a worker beside the web process.
lead: A framework deployed, not uploaded.
---

Symfony deployments run Composer, warm a cache and expect a writable var directory, which makes them a poor fit for hosting designed around uploading files. Anything more than a simple site also wants Messenger consumers running alongside the web process. Providers listing Symfony are usually the same ones listing [Laravel](/software/laravel/): [PHP](/runtimes/php/) platforms with a build step rather than shared hosting with an installer.
