# Private VPC Construct

This example project demonstrates the use of the `PrivateVPC` construct from the [Serverless DNA Constructs library](https://github.com/serverless-dna/constructs/).

## Getting started

This project demonstrates how to use the PrivateVPC construct to create isolated VPC environments with AWS CDK.

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
npx nx run examples/vpc/private:build
```

To deploy this project:

```bash
npx nx run examples/vpc/private:deploy
```

To destroy the deployed stack:

```bash
npx nx run examples/vpc/private:destroy
```
