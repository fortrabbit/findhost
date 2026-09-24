---
description: Hosting providers that rent out GPUs to run your own model — as a server, as a container billed only while it runs, or behind a managed endpoint.
lead: Your weights, their accelerator.
---

Three ways to put your own model on someone else's GPU, and each record says which it sells. **GPU instances** are servers with a card in them, virtual or dedicated, and everything above the driver is yours, including the bill while the machine sits idle. **Serverless GPU** runs your container only while requests arrive, at the price of a cold start. **Managed inference** takes the weights, yours or from Hugging Face, and hands back an endpoint. A token API over the provider's own models does not count here: the model there is theirs. An application that only calls a model belongs under [AI apps](/use-cases/ai-app/).
