import { javascript } from 'projen';
import { awscdk } from 'projen';

const packageManager = javascript.NodePackageManager.PNPM;

const project = new awscdk.AwsCdkTypeScriptApp({
  name: 'constructs-examples',
  cdkVersion: '2.104.0',
  packageManager,
  projenrcTs: true,
  projenVersion: '^0.76',
  defaultReleaseBranch: 'main',
  deps: ['@aws-cdk/aws-cognito-identitypool-alpha@latest', 'cdk-nag@^2.27.183'],
  // This is a workaround to make it a monorepo
  parent: undefined,
});
const eslintJson = project.tryFindObjectFile('.eslintrc.json');
eslintJson?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

const sockApiExample = new awscdk.AwsCdkTypeScriptApp({
  name: 'examples/sockets/api',
  outdir: 'examples/sockets/api',
  parent: project,
  packageManager: packageManager,
  defaultReleaseBranch: 'main',
  cdkVersion: '2.1.0',
  devDeps: ['@serverless-dna/constructs@^0.0.6'],
  deps: ['@aws-cdk/aws-cognito-identitypool-alpha@latest'],
});

// override default Projen construct config for Prettier to make ALL projects the same
const sockApiExampleEslint = sockApiExample.tryFindObjectFile('.eslintrc.json');
sockApiExampleEslint?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

const sockTaskExample = new awscdk.AwsCdkTypeScriptApp({
  name: 'examples/sockets/tasks',
  outdir: 'examples/sockets/tasks',
  parent: project,
  packageManager: packageManager,
  defaultReleaseBranch: 'main',
  cdkVersion: '2.1.0',
  devDeps: ['@serverless-dna/constructs@^0.0.6'],
  deps: ['@aws-cdk/aws-cognito-identitypool-alpha@latest'],
});

// override default Projen construct config for Prettier to make ALL projects the same
const sockTaskExampleEslint =
  sockTaskExample.tryFindObjectFile('.eslintrc.json');
sockTaskExampleEslint?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

const privVpcExample = new awscdk.AwsCdkTypeScriptApp({
  name: 'examples/vpc/private',
  outdir: 'examples/vpc/private',
  parent: project,
  packageManager: packageManager,
  defaultReleaseBranch: 'main',
  cdkVersion: '2.1.0',
  deps: ['@serverless-dna/constructs@^0.0.6', '@aws-sdk/client-s3'],
});

// override default Projen construct config for Prettier to make ALL projects the same
const privVpcExampleEslint = privVpcExample.tryFindObjectFile('.eslintrc.json');
privVpcExampleEslint?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

project.synth();
