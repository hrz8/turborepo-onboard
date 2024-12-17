import * as grpc from '@grpc/grpc-js';
import type { SayHelloResponse } from '@proto/greeter/v1';
import { GreeterService, type SayHelloRequest } from '@proto/greeter/v1';
import { createDefinition } from '@protobuf-ts/grpc-backend';
import express from 'express';
import type { Request, Response } from 'express';
import { generate } from '@onboarding/rando';
import { logger } from '@onboarding/logger';

const app = express();
const PORT = process.env.PORT || 3101;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  logger.info('Hello, there!');
  res.send(`Hello, ${generate()}`);
});

app.listen(PORT, () => {
  console.info(`Server is running on http://localhost:${PORT}`);
});

export interface IGreeterService extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<SayHelloRequest, SayHelloResponse>;
}

const GreeterServer: IGreeterService = {
  sayHello: (call, callback) => {
    void (async (): Promise<void> => {
      try {
        await new Promise((res) => setTimeout(res, 10));

        const request = call.request;
        const name = request.name || 'World';

        console.info('haloooo', name);
        const response: SayHelloResponse = { message: `Hello, ${name}!` };

        callback(null, response);
      } catch (error) {
        callback(error as grpc.ServiceError, null);
      }
    })();
  },
};

const server = new grpc.Server();
server.addService(createDefinition(GreeterService), GreeterServer);
server.bindAsync(
  '0.0.0.0:50051',
  grpc.ServerCredentials.createInsecure(),
  (err: Error | null, port: number) => {
    if (err) {
      console.error(`Server error: ${err.message}`);
    } else {
      console.info(`Server bound on port: ${port}`);
    }
  },
);
