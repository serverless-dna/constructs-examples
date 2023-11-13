import { PrivateVpc } from '@serverless-dna/constructs';
import { Stack, StackProps, Duration } from 'aws-cdk-lib';
import { GatewayVpcEndpointAwsService } from 'aws-cdk-lib/aws-ec2';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import {
  BlockPublicAccess,
  Bucket,
  BucketEncryption,
} from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import { IntegrationHandlers } from './integrations';

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'test-bucket', {
      enforceSSL: true,
      encryption: BucketEncryption.S3_MANAGED,
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
    });

    const vpc = new PrivateVpc(this, 'privateVpc', {
      endpointServices: [
        { name: 's3', service: GatewayVpcEndpointAwsService.S3 },
      ],
    });

    const handler = new NodejsFunction(this, `handler`, {
      entry: `${__dirname}/integrations.ts`,
      handler: IntegrationHandlers.taskHandler,
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(3),
      environment: {
        BUCKET: bucket.bucketName,
      },
      vpc: vpc.vpc,
    });

    bucket.grantReadWrite(handler);
  }
}
