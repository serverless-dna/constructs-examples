# Socket Tasks Example

This example demonstrates the use of the SocketTasks Construct from the Serverless DNA Constructs AWS CDK Library.

For more information about the Serverless DNA Constructs, please visit the main repository at [github.com/serverless-dna/constructs](https://github.com/serverless-dna/constructs/).

## Getting started

This project demonstrates how to use the SocketTasks construct to build serverless applications with AWS CDK.

For more information about AWS CDK, refer to the [AWS CDK Developer Guide](https://docs.aws.amazon.com/cdk/v2/guide/home.html).

### Building and Deploying

To build this project:

```bash
npm run build
```

To deploy this project:

```bash
npm run deploy
```

To destroy the deployed stack:

```bash
npm run destroy
```

### Running from the Repository Root

If you prefer to use the monorepo tooling from the root directory, you can use nx:

To build this specific project:

```bash
npx nx run examples/sockets/tasks:build
```

To deploy this project:

```bash
npx nx run examples/sockets/tasks:deploy
```

To destroy the deployed stack:

```bash
npx nx run examples/sockets/tasks:destroy
```
