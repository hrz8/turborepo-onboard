import { GrpcTransport } from '@protobuf-ts/grpc-transport';
import { GreeterServiceClient } from '@proto/greeter/v1';
import type { SayHelloRequest } from '@proto/greeter/v1';
import * as grpc from '@grpc/grpc-js';

const transport = new GrpcTransport({
  host: 'localhost:50051',
  channelCredentials: grpc.ChannelCredentials.createInsecure(), // Use insecure credentials for local development
});

const client = new GreeterServiceClient(transport);

const request: SayHelloRequest = { name: 'Hirzi' };

void (async (): Promise<void> => {
  try {
    const response = await client.sayHello(request);
    console.info(`Response: ${response.response.message}`);
  } catch (error) {
    console.error(error);
  }
})();
