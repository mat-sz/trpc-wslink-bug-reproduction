import { createTRPCClient, createWSClient, wsLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';

import type { Router } from '@trpc-wslink-bug-reproduction/backend/trpc';

declare global {
  interface Window {
    dataDir?: string;
    wsOnOpen?: () => void;
    wsOnClose?: () => void;
  }
}

const link = wsLink({
  client: createWSClient({
    url: 'ws://127.0.0.1:5001/trpc',
    onOpen: () => {
      window.wsOnOpen?.();
    },
    onClose: () => {
      window.wsOnClose?.();
    },
  }),
});
export const API = createTRPCClient<Router>({
  links: [link],
});

export const TRPC = createTRPCReact<Router>();
export const TRPCClient = TRPC.createClient({
  links: [link],
});
