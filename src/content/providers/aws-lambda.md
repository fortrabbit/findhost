---
id: aws-lambda
name: AWS Lambda
url: https://aws.amazon.com/lambda/
category: serverless
description: AWS Lambda is the function-as-a-service primitive most serverless PHP runs on.
figure:
  emoji: ⚙️
  color: rgb(35, 43, 60)
  textColor: rgb(255, 178, 102)
  text: The raw serverless primitive.
ai: co-authored
---

## About AWS Lambda

Lambda is the primitive most serverless PHP ends up running on. It runs a handler on demand in an isolated, short-lived environment and bills per invocation. The hard edges come with it. A 15-minute limit. A 250 MB unzipped package. 512 MB of ephemeral `/tmp` by default. No state between invocations. Lambda is a building block, nothing more. The database, storage, gateway, and session handling are separate services you bolt on.

PHP is not a built-in Lambda language. It runs through a custom runtime, a `bootstrap` executable that implements the Lambda runtime loop. Almost nobody writes that by hand.

## Running PHP on Lambda: Bref

Bref is how it actually gets done. It is open-source software, not a host of its own: the runtimes and layers that turn Lambda into a PHP platform, across PHP 8.2 to 8.5. Three shapes. An FPM runtime for a normal web app behind PHP-FPM. A function runtime for event-driven handlers without FPM. A console runtime for Artisan and Symfony commands.

Deployment runs through the Serverless Framework, on a free v3 fork Bref keeps alive after the upstream tool went paid. The docs are good and the project is widely used. But it is still a layer on AWS, so the app has to adapt to Lambda: sessions moved out, storage treated as throwaway, no persistent database connections.
