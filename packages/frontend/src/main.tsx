import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TRPC, TRPCClient } from './common/api';

import { App } from './App.tsx';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TRPC.Provider client={TRPCClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </TRPC.Provider>
  </React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
