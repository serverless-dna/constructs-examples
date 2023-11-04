interface WebSocketConnectEvent {
  requestContext: {
    connectionId: string;
  };
  body: string;
  headers: Record<string, string>;
  isBase64Encoded: boolean;
}

type WebSocketResponse = Record<string, any>;

export const connectHandler = async (
  event: WebSocketConnectEvent,
): Promise<WebSocketResponse> => {
  console.log(
    '$connect route processed for connection: ',
    event.requestContext.connectionId,
  );
  console.log(JSON.stringify(event));
  return {
    statusCode: 200,
  };
};

export const noopHandler = async (
  event: WebSocketConnectEvent,
): Promise<WebSocketResponse> => {
  console.log('noOp route processed');
  return {
    statusCode: 200,
    body: JSON.stringify({ connectionId: event.requestContext.connectionId }),
  };
};

export enum IntegrationHandlers {
  onConnect = 'connectHandler',
  noOp = 'noopHandler',
}
