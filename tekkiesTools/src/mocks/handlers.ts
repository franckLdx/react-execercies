import { rest } from 'msw';

export const handlers = [
  rest.post('/user/login', (req, res, ctx) => {
    const payload = ctx.json({
      token: {
        role: 'advisor',
      },
    });
    return res(payload);
  }),
];
