import { ApiGatewayManagementApiClient, PostToConnectionCommand } from '@aws-sdk/client-apigatewaymanagementapi';

const { WEBSOCKET_API } = process.env;
if (!(WEBSOCKET_API)) {
  throw new Error('Missing required environment variables [WEBSOCKET_API]');
}
const client = new ApiGatewayManagementApiClient({
  endpoint: WEBSOCKET_API,
});

export const taskNotifyHandler = async (event: any) => {
  for (const record of event.Records) {
    const body = JSON.parse(record.body);
    console.log(body);

    const taskStatus = body.requestContext.condition === 'Success';

    const [taskId, connectionId] = body.requestPayload.source.split(':::');
    const taskResponse = {
      task_id: taskId,
      status: taskStatus ? 'Success' : 'Fail',
      response: body.responsePayload,
    };

    const input = {
      Data: JSON.stringify(taskResponse),
      ConnectionId: connectionId,
    };
    const command = new PostToConnectionCommand(input);
    const response = await client.send(command);

    console.log(response);
  }
};
