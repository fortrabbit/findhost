---
description: Hosting that deploys from a git commit — a remote the provider hands over, a repository it watches on GitHub, or both.
lead: Deploying means pushing a commit.
---

Two shapes, one answer. The provider can be the remote — `git push provider main`, no third party, nothing to authorise — or it can watch a repository on GitHub or GitLab and build when it changes, which needs an account elsewhere, a webhook and permissions granted once. Most hosts offering either offer both. Where they differ is in failure: a watched repository is the arrangement that stops working silently, because the thing that broke belongs to a service the provider does not run, whereas a remote either accepts the push or refuses it.
