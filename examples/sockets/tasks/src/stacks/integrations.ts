export const taskHandlerFunc = async (event: any): Promise<any> => {
  console.log(event);

  const response = {
    output: 'completed task data',
  };

  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};

export const taskFailFunc = async (event: any): Promise<void> => {
  console.log(event);
  throw new Error('Task Processing failed');
};

export enum IntegrationHandlers {
  taskHandler = 'taskHandlerFunc',
  taskFail = 'taskFailFunc',
}
