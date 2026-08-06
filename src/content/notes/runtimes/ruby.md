---
description: Hosting that runs Ruby — Rails applications, their asset builds, and the background jobs that come with them.
lead: Rails, and everything Rails expects.
---

Ruby support in practice means Rails support, and Rails asks for more than a runtime: an asset build at deploy time, a database, and somewhere to run Sidekiq or a similar worker. Providers that list Ruby without a way to run a second process type will host the site and not the half of it that sends the mail. Deployment is usually a git push or a container, and the build step is where the time goes. [Ruby on Rails](/software/rails/) is what a provider means when it lists Ruby.
