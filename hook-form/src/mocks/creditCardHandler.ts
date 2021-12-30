import { rest } from 'msw'

const wait = <T>(ms: number): Promise<void> =>
  new Promise(resolve =>
    setTimeout(
      () => resolve(),
      ms
    )
  );

const getBrand = (creditCardBin: string): string | undefined => {
  switch (creditCardBin) {
    case '411111':
    case '4111111':
    case '41111111':
      return creditCardBin;
    case '5111111':
      return 'Master card';
    default:
      return undefined;
  }
}

export const creditCardHandlers = [
  rest.get('/creditCard/brand', async (req, res, ctx) => {
    const creditCardBin = req.url.searchParams.get('bin');
    if (creditCardBin === null) {
      return res(ctx.status(400));
    }
    await wait((8 - creditCardBin.length) * 10000);
    const brand = getBrand(creditCardBin);
    if (!brand) {
      return res(
        ctx.status(404),
        ctx.json({ message: 'unknown brand' })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({ brand })
    );
  })
];
