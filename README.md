# Serverless DNA Constructs Examples

This repository contains example projects showing how you can use the various constructs published in the Serverless DNA Constructs AWS CDK Library.  All the examples can be found in the **examples** folder of the repo.  Please feel free to explore and use the content provided in this repo to help accelerate your AWS CDK journey.

## Getting started

This repository is organized as a monorepo containing multiple example projects demonstrating the use of Serverless DNA Constructs. Each example project is self-contained and can be built and deployed independently.

For more information about AWS CDK, refer to the [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html).

### Quick Start

This project is managed as a monorepo using [pnpm workspaces](https://pnpm.io/workspaces) and [nx](https://nx.dev/) for build orchestration. The monorepo structure allows for efficient management of multiple related example projects while maintaining clear separation between them.

The example projects are all logically named following the folders the example code is stored in.  For example, the example project for SocketTasks Construct can be found in the **"examples/sockets/tasks"** folder, so its name will be "examples/sockets/tasks".  This naming convention is deliberate so that when working with the repo you can easily identify which project you're targeting.

#### Building Projects

To build all example projects:

```bash
pnpm build
```

To build a specific project (e.g., **examples/sockets/tasks**):

```bash
npx nx run examples/sockets/tasks:build
```

Or navigate to the project directory and build directly:

```bash
cd examples/sockets/tasks
npm run build
```

#### Deploying Projects

To deploy a project using nx:

```bash
npx nx run examples/sockets/tasks:deploy --require-approval never
```

Or navigate to the project directory and use standard AWS CDK commands:

```bash
cd examples/sockets/tasks
npm run deploy
```

#### Destroying Deployed Stacks

To destroy a deployed stack using nx:

```bash
npx nx run examples/sockets/tasks:destroy
```

Or using standard CDK commands from the project directory:

```bash
cd examples/sockets/tasks
npm run destroy
```
