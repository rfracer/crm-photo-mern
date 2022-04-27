import { rest } from 'msw';
import { tasks as data } from 'mocks/data/tasks';

export const tasks = [
  rest.get('http://localhost:5000/api/tasks', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        data: [data],
      })
    );
  }),
  rest.post('http://localhost:5000/api/tasks', (req, res, ctx) => {
    const { name, priority } = req.body;
    if (!name || !priority) {
      return res(ctx.status(400));
    }
    data.push({ name: name, priority: priority });
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
      })
    );
  }),
  rest.delete('http://localhost:5000/api/tasks/:id', (req, res, ctx) => {
    const removeIndex = data.map((item) => item._id).indexOf(req.params.id);
    data.splice(removeIndex, 1);
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        id: req.params.id,
      })
    );
  }),
  rest.put('http://localhost:5000/api/tasks/:id', (req, res, ctx) => {
    const itemIndex = data.map((item) => item._id).indexOf(req.params.id);
    data[itemIndex].checked = !data[itemIndex].checked;

    const { name, priority } = req.body;
    if (!name || !priority) {
      return res(ctx.status(400));
    }
    return res(ctx.status(200), ctx.json({ id: req.params.id }));
  }),
];
