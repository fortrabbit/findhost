---
description: Where to run a model of your own on rented GPUs — as a server, as a container billed by the second, or behind a managed endpoint.
---

Three ways to put your own weights on someone else's accelerator. **GPU instances** are servers with a card in them, virtual or dedicated, and everything above the driver is yours. **Serverless GPU** runs your container only while requests arrive and bills for that time alone. **Managed inference** takes the weights, yours or from Hugging Face, and hands back an endpoint. A token API over the provider's own model catalogue is shown on the record and not offered here, since the model there is theirs. An application that only calls a model belongs under [AI apps](/use-cases/ai-app/).
