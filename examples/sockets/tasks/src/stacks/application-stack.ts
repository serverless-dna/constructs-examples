import { SocketTasks } from "@serverless-dna/constructs";
import { Duration, Stack, StackProps } from "aws-cdk-lib";
import { Runtime } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { IntegrationHandlers } from "./integrations";

export class ApplicationStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const handlerOne = new NodejsFunction(this, `handler-one`, {
      entry: `${__dirname}/integrations.ts`,
      handler: IntegrationHandlers.taskHandler,
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(3),
    });
    const handlerTwo = new NodejsFunction(this, `handler-two`, {
      entry: `${__dirname}/integrations.ts`,
      handler: IntegrationHandlers.taskFail,
      runtime: Runtime.NODEJS_18_X,
      timeout: Duration.seconds(3),
    });

    new SocketTasks(this, `tasks`, {
      taskFunctions: [
        {
          type: ["task-type"],
          func: handlerOne,
        },
        {
          type: ["task-type-2"],
          func: handlerTwo,
        },
      ],
    });
  }
}
