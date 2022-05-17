import { rest } from 'msw';
import { clients as data } from 'mocks/data/clients';
import { Client } from 'types/types';

export const clients = [
  rest.get<Client>('http://localhost:5000/api/clients', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        data: [data],
      })
    );
  }),
  rest.get<Client>('http://localhost:5000/api/clients/:id', (req, res, ctx) => {
    const client = data.find((client) => client._id === req.params.id);
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        data: client,
      })
    );
  }),
  rest.post<Client>('http://localhost:5000/api/clients', (req, res, ctx) => {
    const { name } = req.body;
    if (!name) {
      return res(ctx.status(400));
    }
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
      })
    );
  }),
];
