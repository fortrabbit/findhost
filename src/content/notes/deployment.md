---
description: How code gets onto the platform — a git push, a watched repository, a CI pipeline, an image, SFTP, or a control panel.
lead: How the code gets there.
---

A separate question from what may be done once it has arrived. **Git push** is a remote the provider hands over; **git integration** is a repository they watch, which is a different workflow with a different failure mode. **Docker image** means the unit of deployment is built elsewhere. **SFTP** and **FTP** are file upload, still the normal route on shared hosting and still the thing that makes a deployment unrepeatable. **Control panel** is a button.

Most providers offer several, and the one worth filtering on is the one a team would actually use. **CLI** and **API** appear here as ways to trigger a deploy; whether a provider *has* either at all is [automation](/automation/), which is a different question with a different answer.
