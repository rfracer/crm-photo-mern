import React from 'react';
import { rest } from 'msw';
import { server } from 'mocks/server';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render } from 'test-utils';
import TaskAddForm from './TaskAddForm';

const setup = () => {
  const utils = render(<TaskAddForm />);
  const user = userEvent.setup();
  return { utils, user };
};

describe('Task add form component', () => {
  test('Render component correctly', async () => {
    setup();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/priority/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ADD/i })).toBeInTheDocument();
  });

  test('Should display error message when user dont type task name', async () => {
    const { user } = setup();
    await user.click(screen.getByRole('button', { name: /ADD/i }));
    expect(
      await screen.findByText(/Please fill name field/i)
    ).toBeInTheDocument();
  });

  test('Should display user typed value in input textbox', async () => {
    const { user } = setup();
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'Test');
    expect(nameInput.value).toBe('Test');
  });

  test('Should display button loading spinner while submit', async () => {
    const { user } = setup();
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'Test');
    await user.click(screen.getByRole('button', { name: /ADD/i }));
    expect(screen.getByTestId('button-spinner')).toBeVisible();
  });

  test('Should display successfull message when all is ok', async () => {
    const { user } = setup();
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'Test');
    expect(screen.queryByText(/Added/i)).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /ADD/i }));
    expect(await screen.findByText(/Added/i)).toBeInTheDocument();
  });
  test('Should display eror message while server error', async () => {
    const { user } = setup();

    //Simulate error on server
    server.use(
      rest.post('http://localhost:5000/api/tasks', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'error' }));
      })
    );

    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'Test');

    expect(screen.queryByText(/Server Error/i)).not.toBeInTheDocument();
    await user.click(screen.getByRole('button', { name: /ADD/i }));
    expect(await screen.findByText(/Server Error/i)).toBeInTheDocument();
  });
});
