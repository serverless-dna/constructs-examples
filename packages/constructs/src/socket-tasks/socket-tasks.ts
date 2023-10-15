import { IEventBus, EventBus, Rule } from 'aws-cdk-lib/aws-events';
import { LambdaFunction as LambdaFunctionTarget } from 'aws-cdk-lib/aws-events-targets';
import { PolicyStatement, Effect } from 'aws-cdk-lib/aws-iam';
import { Runtime, IFunction, EventSourceMapping } from 'aws-cdk-lib/aws-lambda';
import { SqsDestination } from 'aws-cdk-lib/aws-lambda-destinations';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { IQueue, Queue } from 'aws-cdk-lib/aws-sqs';
import { Construct } from 'constructs';
import { SocketApi, SocketApiConfig } from '../socketapi';

export interface TaskFunctionConfig {
  readonly func: IFunction;
  readonly type: string[];
}

export interface SocketTasksConfig {
  readonly socketApiConfig?: SocketApiConfig;
  readonly eventBus?: IEventBus;
  readonly taskFunctions: TaskFunctionConfig[];
}

export class SocketTasks extends SocketApi {
  readonly eventBus: IEventBus;

  constructor(scope: Construct, id: string, config: SocketTasksConfig) {
    super(scope, id, config?.socketApiConfig);

    this.eventBus = this.createEventBus(config?.eventBus);
    this.createSubmitHandler(this.eventBus);
    this.configureTasks(config);
  }

  protected configureTasks(config: SocketTasksConfig): void {
    const notifyQueue = this.createNotifySQS();

    this.createNotifyHandler(notifyQueue);

    config?.taskFunctions.forEach(
      (task) => {
        task.func.configureAsyncInvoke({
          onSuccess: new SqsDestination(notifyQueue),
          onFailure: new SqsDestination(notifyQueue),
        });
        const rule = new Rule(this, `${this.namePrefix}-${task.type}-rule`, {
          eventBus: this.eventBus,
          eventPattern: {
            detailType: task.type,
          },
        });

        rule.addTarget(new LambdaFunctionTarget(task.func));
      },
    );
  }

  protected createNotifySQS(): IQueue {
    return new Queue(this, 'notify-queue', {});
  }

  protected createEventBus(theBus?: IEventBus): IEventBus {
    return theBus ?? new EventBus(this, 'task-bus', {});
  }

  protected createSubmitHandler(theBus: IEventBus): void {
    // Function handler construct must be relative to the JS transpiled structure and code
    const submitHandler = new NodejsFunction(this, 'submit', {
      entry: `${__dirname}/functions/task-submit.js`,
      handler: 'taskSubmitHandler',
      runtime: Runtime.NODEJS_18_X,
      environment: {
        TASK_BUS: theBus.eventBusName,
      },
    });

    theBus.grantPutEventsTo(submitHandler);
    this.addFunctionRoute('task-submit', submitHandler, false);
  }

  protected createNotifyHandler(theQueue: IQueue): void {
    // SocketApi WebSocket Notify Permission
    const socketApiPolicy = new PolicyStatement({
      actions: ['execute-api:ManageConnections'],
      resources: [this.arnForExecuteApi()],
      effect: Effect.ALLOW,
    });

    // Function handler construct must be relative to the JS transpiled structure and code
    const notifyHandler = new NodejsFunction(this, 'notify', {
      entry: `${__dirname}/functions/task-notify.js`,
      handler: 'taskNotifyHandler',
      runtime: Runtime.NODEJS_18_X,
      initialPolicy: [socketApiPolicy],
      environment: {
        WEBSOCKET_API: this.socketStage.callbackUrl,
      },
    });


    // Create SQS Event Source mapping for Notify Handler
    new EventSourceMapping(this, 'notify-source', {
      target: notifyHandler,
      eventSourceArn: theQueue.queueArn,
    });

    theQueue.grantConsumeMessages(notifyHandler);
  }
}