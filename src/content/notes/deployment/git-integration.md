---
description: Hosting that deploys from a repository it watches on GitHub or GitLab, building on every push.
lead: They watch the repo you already have.
---

The provider connects to a repository hosted elsewhere and builds when it changes. It is the least work to set up and the most moving parts: it needs an account with a third party, a webhook that has to keep working, and permissions someone granted once. When a deploy silently stops happening, this is usually why. The alternative is [git push](/deployment/git-push/), where the provider is the remote and nobody else is involved.
