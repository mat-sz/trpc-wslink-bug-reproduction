import { initTRPC } from '@trpc/server';
import { z } from 'zod';

export const t = initTRPC.context().create();

export const router = t.router({
  example: t.procedure.input(z.string()).mutation(async ({ input }) => {
    console.log(input);
    return { ok: true };
  }),
});

export type Router = typeof router;
