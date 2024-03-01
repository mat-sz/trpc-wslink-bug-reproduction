import Fastify from 'fastify';
import fastifyWebsocket from '@fastify/websocket';
import {
  fastifyTRPCPlugin,
  FastifyTRPCPluginOptions,
} from '@trpc/server/adapters/fastify';
import { router, Router } from './trpc.js';

const host = '127.0.0.1';
const port = 5001;

const app = Fastify({ maxParamLength: 5000 });

app.register(fastifyWebsocket);

app.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  useWSS: true,
  trpcOptions: {
    router: router,
    onError({ path, error }) {
      // report to error monitoring
      console.error(`Error in tRPC handler on path '${path}':`, error);
    },
  } satisfies FastifyTRPCPluginOptions<Router>['trpcOptions'],
});

app.listen({ host, port });

console.log(`Server running on ${host}:${port}`);
