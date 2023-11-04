import { SocketApi } from '@serverless-dna/constructs';
import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
import { IntegrationHandlers } from './integrations';

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const handler = new NodejsFunction(this, `test-func`, {
      entry: `${__dirname}/integrations.ts`,
      handler: IntegrationHandlers.noOp,
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(3),
    });

    new SocketApi(this, 'socket-api', {
      routes: [{ route: 'test', integration: handler, returnResponse: true }],
    });
  }
}
