---
description: How code gets onto a hosting platform — a git push, a watched repository, a container image, a file upload, or a control panel.
---

**Git push** is a remote the provider hands over and needs nothing but git; a **connected repo** is one they watch on GitHub or GitLab, which is a different workflow with a different failure mode and an account somewhere else. A **container image** means the unit of deployment is built before the provider ever sees it, **file transfer** is upload over SFTP or plain FTP — still the normal route on shared hosting, and still the thing that makes a deployment unrepeatable — and a **control panel** is a button. Most providers offer several, and the one worth filtering on is the one a team would actually use. Two things are deliberately elsewhere: a shell is a way in once code has landed rather than a way of deploying, recorded as [shell access](/shell/), and a CLI or an API belongs to [automation](/automation/).
