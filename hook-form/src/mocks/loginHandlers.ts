import { rest } from 'msw'

export const loginHandlers = [
  rest.post('/login', (req, res, ctx) => {
    const email = (req.body as any)?.email;
    switch (email) {
      case 'fldx@yahoo.com':
        return res(
          ctx.status(200),
          ctx.json({ token: '123' })
        )
      case 'foo@bar.fr':
        return res(
          ctx.status(500),
        )
      default:
        return res(
          ctx.status(401),
          ctx.json({ message: 'who re you ?' })
        )
    }
  })
]
