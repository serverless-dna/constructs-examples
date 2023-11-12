import { monorepo } from '@aws/pdk';
import { InfrastructureTsProject } from '@aws/pdk/infrastructure';
import { javascript } from 'projen';

const packageManager = javascript.NodePackageManager.PNPM;

const project = new monorepo.MonorepoTsProject({
  devDeps: ['@aws/pdk'],
  name: 'constructs-examples',
  packageManager,
  projenrcTs: true,
  projenVersion: '^0.76',
});
const eslintJson = project.tryFindObjectFile('.eslintrc.json');
eslintJson?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

const sockApiExample = new InfrastructureTsProject({
  devDeps: ['@serverless-dna/constructs@^0.0.6'],
  gitignore: ['cdk.context.json', '__snapshots__;'],
  name: 'examples/sockets/api',
  outdir: 'examples/sockets/api',
  parent: project,
  packageManager: packageManager,
  defaultReleaseBranch: 'main',
});

// override default Projen construct config for Prettier to make ALL projects the same
const sockApiExampleEslint = sockApiExample.tryFindObjectFile('.eslintrc.json');
sockApiExampleEslint?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

const sockTaskExample = new InfrastructureTsProject({
  devDeps: ['@serverless-dna/constructs@^0.0.6'],
  gitignore: ['cdk.context.json', '__snapshots__;'],
  name: 'examples/sockets/tasks',
  outdir: 'examples/sockets/tasks',
  parent: project,
  packageManager: packageManager,
});

// override default Projen construct config for Prettier to make ALL projects the same
const sockTaskExampleEslint =
  sockTaskExample.tryFindObjectFile('.eslintrc.json');
sockTaskExampleEslint?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

const privVpcExample = new InfrastructureTsProject({
  deps: ['@serverless-dna/constructs@^0.0.6', '@aws-sdk/client-s3'],
  gitignore: ['cdk.context.json', '__snapshots__;'],
  name: 'examples/vpc/private',
  outdir: 'examples/vpc/private',
  parent: project,
  packageManager: packageManager,
});

// override default Projen construct config for Prettier to make ALL projects the same
const privVpcExampleEslint = privVpcExample.tryFindObjectFile('.eslintrc.json');
privVpcExampleEslint?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

project.synth();
