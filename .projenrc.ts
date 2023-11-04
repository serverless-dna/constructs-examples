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
  deps: ['@serverless-dna/constructs'],
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
  deps: ['@serverless-dna/constructs'],
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

project.synth();
