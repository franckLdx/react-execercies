import { rest } from 'msw';
import { LoginParam } from '../features/users/useLogin';

export const handlers = [
  rest.post<LoginParam>('/user/login', (req, res, ctx) => {
    const { email } = req.body;

    switch (email.toLowerCase()) {
      case 'hacker':
        return res(ctx.status(401), ctx.delay(300));

      case 'john':
        return res(ctx.status(404), ctx.delay(300));

      case 'daniel':
      case 'bianca':
        return res(
          ctx.json({
            token: {
              role: 'admin',
            },
          }),
        );

      default:
        return res(
          ctx.json({
            token: {
              role: 'advisor',
            },
          }),
        );
    }
  }),
];
