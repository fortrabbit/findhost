---
description: Hosting with an MCP server — the platform exposed to language models directly, which almost nobody offers yet.
lead: Agent automation, new, and rare.
updated: 2026-10-10
faq:
  - q: 'Is a hosting MCP server read-only?'
    a: 'No. A hosting MCP server may expose tools that change or delete resources as well as the ones that read. What an agent may do depends on the access granted to the server, such as an [API](/automation/api/) token or OAuth grant limited to one project or to read access. The register does not record how far that access can be limited.'
---

Model Context Protocol servers let an agent operate a platform the way a person would: create an app, read logs, work out why a deployment failed. Very few providers have one, so this is the thinnest column in the register and the one most likely to change.
