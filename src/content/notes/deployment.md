---
description: How code gets onto the platform — a git push, a watched repository, a container image, a file upload, or a control panel.
lead: How the code gets there.
---

A separate question from what may be done once it has arrived. **Git push** is a remote the provider hands over, and needs nothing but git; a **connected repo** is one they watch on GitHub or GitLab, which is a different workflow with a different failure mode and an account somewhere else. A **container image** means the unit of deployment is built before the provider ever sees it. **File transfer** is upload, SFTP or plain FTP — still the normal route on shared hosting and still the thing that makes a deployment unrepeatable. A **control panel** is a button.

Most providers offer several, and the one worth filtering on is the one a team would actually use. Two things are deliberately not here. A shell is not a way of deploying but a way in once the code has landed, and it is recorded as [shell access](/ssh/). A CLI and an API belong to [automation](/automation/), because creating an app, reading a log and triggering a deploy are one capability answering a different question.
