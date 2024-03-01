import React, { useState } from 'react';

import { TRPC } from './common/api';

export const App: React.FC = () => {
  const mutation = TRPC.example.useMutation();
  const [sent, setSent] = useState(0);
  const [received, setReceived] = useState(0);

  return (
    <div>
      <button
        onClick={async () => {
          setSent(count => count + 1);
          const result = await mutation.mutateAsync('A'.repeat(8192));
          if (result.ok) {
            setReceived(count => count + 1);
          }
        }}
      >
        Send mutation
      </button>
      <div>Sent: {sent}</div>
      <div>Received: {received}</div>
    </div>
  );
};
