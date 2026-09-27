---
description: Hosting providers that rent out GPUs to run your own model — as a server, as a container billed only while it runs, or behind a managed endpoint.
lead: Your weights, their accelerator.
faq:
  - q: 'Do I need a GPU cloud to use an AI model?'
    a: 'Only to run a model yourself. An app that calls a hosted model over an API needs no GPU, and an ordinary [web app](/use-cases/web-app/) host will do. GPU clouds rent accelerators for training, fine-tuning or serving model weights, usually by the hour.'
---

Three ways to put your own model on someone else's GPU, and each record says which it sells. **GPU instances** are servers with a card in them, virtual or dedicated, and everything above the driver is yours, including the bill while the machine sits idle. **Serverless GPU** runs your container only while requests arrive, at the price of a cold start. **Managed inference** takes the weights, yours or from Hugging Face, and hands back an endpoint. A token API over the provider's own models does not count here: the model there is theirs. An application that only calls a model belongs under [AI apps](/use-cases/ai-app/).
