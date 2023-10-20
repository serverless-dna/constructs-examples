import { monorepo } from '@aws/pdk';
import { InfrastructureTsProject } from '@aws/pdk/infrastructure';
import { awscdk, javascript } from 'projen';

const packageManager = javascript.NodePackageManager.PNPM;

const project = new monorepo.MonorepoTsProject({
  devDeps: ['@aws/pdk'],
  name: 'constructs',
  packageManager,
  projenrcTs: true,
});
const eslintJson = project.tryFindObjectFile('.eslintrc.json');
eslintJson?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

const constructsLib = new awscdk.AwsCdkConstructLibrary({
  parent: project,
  packageManager,
  outdir: 'packages/constructs',
  author: 'walmsles',
  authorAddress: '2704782+walmsles@users.noreply.github.com',
  cdkVersion: '2.100.0',
  constructsVersion: '10.3.0',
  defaultReleaseBranch: 'main',
  jsiiVersion: '~5.0.0',
  name: '@serverless-dna/constructs',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/2704782+walmsles/constructs.git',
  bundledDeps: [
    '@aws-sdk/client-eventbridge',
    '@aws-sdk/client-apigatewaymanagementapi',
  ],
  devDeps: [
    '@aws-cdk/aws-apigatewayv2-alpha@2.100.0-alpha.0',
    '@aws-cdk/aws-apigatewayv2-integrations-alpha@2.100.0-alpha.0',
  ],
  peerDeps: [
    '@aws-cdk/aws-apigatewayv2-alpha@^2.100.0-alpha.0',
    '@aws-cdk/aws-apigatewayv2-integrations-alpha@^2.100.0-alpha.0',
  ],
  description:
    'A collection of useful CDK constructs of known, repeatable patterns that are easily consumable.',
});

const sockApiExample = new InfrastructureTsProject({
  defaultReleaseBranch: 'main',
  deps: [constructsLib.package.packageName],
  gitignore: ['cdk.context.json', '__snapshots__;'],
  name: 'SocketApiExample',
  outdir: 'examples/sockets/api',
  parent: project,
  packageManager: packageManager,
});
const sockApiExampleEslint = sockApiExample.tryFindObjectFile('.eslintrc.json');
sockApiExampleEslint?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

// add example/sockets
const sockTaskExample = new InfrastructureTsProject({
  defaultReleaseBranch: 'main',
  deps: [constructsLib.package.packageName],
  gitignore: ['cdk.context.json', '__snapshots__;'],
  name: 'SocketTasksExample',
  outdir: 'examples/sockets/tasks',
  parent: project,
  packageManager: packageManager,
});
const sockTaskExampleEslint =
  sockTaskExample.tryFindObjectFile('.eslintrc.json');
sockTaskExampleEslint?.addOverride('rules', {
  'prettier/prettier': ['error', { singleQuote: true }],
});

project.synth();
