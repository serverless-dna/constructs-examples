import * as cdk from 'aws-cdk-lib';
import { ApplicationStack } from './stacks/application-stack';

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new cdk.App();

new ApplicationStack(app, 'socket-tasks-example', { env: devEnv });

app.synth();
