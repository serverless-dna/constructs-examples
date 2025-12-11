import { RemovalPolicy, Stack } from 'aws-cdk-lib';
import {
  Distribution,
  GeoRestriction,
  ViewerProtocolPolicy,
  OriginAccessIdentity,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3Origin } from 'aws-cdk-lib/aws-cloudfront-origins';
import {
  UserPool,
  UserPoolClient,
  AccountRecovery,
} from 'aws-cdk-lib/aws-cognito';
import { IdentityPool } from '@aws-cdk/aws-cognito-identitypool-alpha';
import { BlockPublicAccess, Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Construct } from 'constructs';
// import { ApiConstruct } from "./api";

/**
 * User Identity construct to replace PDK UserIdentity
 */
export class UserIdentity extends Construct {
  public readonly userPool: UserPool;
  public readonly userPoolClient: UserPoolClient;
  public readonly identityPool: IdentityPool;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Create Cognito User Pool
    this.userPool = new UserPool(this, 'UserPool', {
      selfSignUpEnabled: true,
      autoVerify: { email: true },
      accountRecovery: AccountRecovery.EMAIL_ONLY,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    // Create User Pool Client
    this.userPoolClient = this.userPool.addClient('UserPoolClient', {
      authFlows: {
        userPassword: true,
        userSrp: true,
      },
    });

    // Create Identity Pool
    this.identityPool = new IdentityPool(this, 'IdentityPool', {
      allowUnauthenticatedIdentities: true,
      authenticationProviders: {
        userPools: [
          {
            userPool: this.userPool,
            userPoolClient: this.userPoolClient,
          },
        ],
      },
    });
  }
}

/**
 * Static Website construct to replace PDK StaticWebsite
 */
export class StaticWebsite extends Construct {
  public readonly bucket: Bucket;
  public readonly distribution: Distribution;

  constructor(
    scope: Construct,
    id: string,
    props: {
      websiteContentPath: string;
      runtimeOptions?: {
        jsonPayload: Record<string, any>;
      };
      distributionProps?: {
        geoRestriction?: GeoRestriction;
      };
    }
  ) {
    super(scope, id);

    // Create S3 bucket for website content
    this.bucket = new Bucket(this, 'WebsiteBucket', {
      encryption: BucketEncryption.S3_MANAGED,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    // Create Origin Access Identity for CloudFront
    const originAccessIdentity = new OriginAccessIdentity(
      this,
      'OriginAccessIdentity'
    );
    this.bucket.grantRead(originAccessIdentity);

    // Create CloudFront Distribution
    this.distribution = new Distribution(this, 'Distribution', {
      defaultBehavior: {
        origin: new S3Origin(this.bucket, { originAccessIdentity }),
        viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      },
      defaultRootObject: 'index.html',
      geoRestriction: props.distributionProps?.geoRestriction,
    });

    // Deploy website content if path is provided (skip if "false")
    if (props.websiteContentPath && props.websiteContentPath !== 'false') {
      new BucketDeployment(this, 'WebsiteDeployment', {
        sources: [Source.asset(props.websiteContentPath)],
        destinationBucket: this.bucket,
        distribution: this.distribution,
        distributionPaths: ['/*'],
      });
    }

    // If runtime options are provided, they would typically be deployed as a config file
    // For now, we skip this as the websiteContentPath is "false" in the current usage
  }
}

/**
 * Website construct props
 */
export interface WebsiteConstructProps {
  /**
   * Instance of an API to configure the website to integrate with
   */
  // readonly apiConstruct: ApiConstruct;

  /**
   * Instance of the UserIdentity.
   */
  readonly userIdentity: UserIdentity;
}

/**
 * Construct to deploy a Static Website
 */
export class WebsiteConstruct extends Construct {
  constructor(scope: Construct, id: string, props?: WebsiteConstructProps) {
    super(scope, id);

    new StaticWebsite(this, id, {
      websiteContentPath: 'false',
      runtimeOptions: {
        jsonPayload: {
          region: Stack.of(this).region,
          identityPoolId: props?.userIdentity.identityPool.identityPoolId,
          userPoolId: props?.userIdentity.userPool?.userPoolId,
          userPoolWebClientId:
            props?.userIdentity.userPoolClient?.userPoolClientId,
          // apiUrl: props?.apiConstruct.api.api.urlForPath(),
        },
      },
      distributionProps: {
        geoRestriction: GeoRestriction.allowlist(
          'AU',
          'ID',
          'IN',
          'JP',
          'KR',
          'SG',
          'US'
        ),
      },
    });
  }
}
