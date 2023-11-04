# Serverless DNA Constructs Examples

This repository contains example projects showing how you can use the various constructs published in the Serverless DNA Constructs AWS CDK Library.  All the examples can be found in the **examples** folder of the repo.  Please feel free to explore and use the content provided in this repo to help accelerate your AWS CDK journey.

## Getting started

This repo is managed by the AWS Project Development Kit (PDK), for help in getting started take a look at the [Developer Guide](https://aws.github.io/aws-pdk/developer_guides/infrastructure/index.html).

### Quick Start

This project uses the AWS Project Development kit to manage a complete collection of example projects as a mono-repo.  AWS PDK uses [Projen](https://projen.io) to manage the mono-repo using a custom projen template which wraps up mono-repo management with typescript and [nx](https://nx.dev/).  Follow the getting started guide for the [aws-pdk](https://aws.github.io/aws-pdk/getting_started/index.html).

The example projects are all logically named following the folders the example code is stored in.  For example, the example project for SocketTasks Construct can be found in the **"examples/sockets/tasks"** folder, so its name will be "examples/sockets/tasks".  This naming convention is deliberate since the repo is a mono-repo and the name of the sub-projects enables you to run commands to build, deploy and destroy each of the projects in your own AWS account.

To build the example projects (all of them):

```bash
pdk build
```

To build the **examples/sockets/tasks** project:

```bash
pdk nx run examples/sockets/tasks:build
```

Deploying a project using "nx":

```bash
pdk nx run examples/sockets/tasks:deploy --require-approval never
```

Deployment requires the `--require-approval never` flag since the actual `cdk deploy` is executed in a sub-process with an interactive shell.

Destroying a deployed stack using "nx":

```bash
pdk nx run examples/sockets/tasks::destroy -f 
```
