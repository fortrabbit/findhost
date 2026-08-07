---
description: Hosting that deploys from a git commit — a remote the provider hands over, a repository it watches on GitHub, or both.
lead: Deploying means pushing a commit.
---

Two shapes, one answer. The provider can be the remote — `git push provider main`, no third party, nothing to authorize — or it can watch a repository on GitHub or GitLab and build when it changes, which needs an account elsewhere, a webhook and permissions somebody granted once. Most hosts offering either offer both, and the reader's question is the same for both: does deploying mean pushing a commit, or does it mean uploading files?

Where it matters, it matters in failure. A watched repository is the arrangement that stops working silently, because the thing that broke — a token, a webhook, an app permission — belongs to a service the provider does not run. A remote either accepts the push or refuses it.
