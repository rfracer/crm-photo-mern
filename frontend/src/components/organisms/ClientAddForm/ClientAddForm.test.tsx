import React from 'react';
import { rest } from 'msw';
import { server } from 'mocks/server';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render } from 'test-utils';
import { ClientAddForm } from './ClientAddForm';

const setup = () => {
  const utils = render(<ClientAddForm />);
  const user = userEvent.setup();
  return { utils, user };
};

describe('Client add form component', () => {
  test('Render component correctly', async () => {
    setup();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/value/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Already Paid/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/info/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ADD/i })).toBeInTheDocument();
  });

  test('Should display error messages on empty fields', async () => {
    const { user } = setup();

    const valueInput = screen.getByLabelText(/value/i);
    await user.type(valueInput, '-1');
    await user.click(screen.getByRole('button', { name: /ADD/i }));

    expect(
      await screen.findByText(/Please fill name field/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Please fill field with positive value/i)
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/Please fill address field/i)
    ).toBeInTheDocument();
    expect(await screen.findByText(/Please set a date/i)).toBeInTheDocument();
  });

  test('Should display user typed value in input textbox', async () => {
    const { user } = setup();
    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    await user.type(nameInput, 'Test');

    const valueInput = screen.getByLabelText(/value/i) as HTMLInputElement;
    await user.type(valueInput, '30');

    const alreadyPaidInput = screen.getByLabelText(
      /already paid/i
    ) as HTMLInputElement;
    await user.type(alreadyPaidInput, '20');

    const addressInput = screen.getByLabelText(/Address/i) as HTMLInputElement;
    await user.type(addressInput, 'Kalisz');

    const dateInput = screen.getByLabelText(/date/i) as HTMLInputElement;
    fireEvent.change(dateInput, { target: { value: '2018-06-12T19:30' } });

    const infoInput = screen.getByLabelText(
      /Additional information/i
    ) as HTMLInputElement;
    await user.type(infoInput, 'This is info');

    expect(nameInput.value).toBe('Test');
    expect(valueInput.value).toBe('30');
    expect(alreadyPaidInput.value).toBe('20');
    expect(addressInput.value).toBe('Kalisz');
    expect(dateInput.value).toBe('2018-06-12T19:30');
    expect(infoInput.value).toBe('This is info');
  });

  test('Should display button loading spinner while submit and then successfull message', async () => {
    const { user } = setup();
    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'Test');

    const valueInput = screen.getByLabelText(/value/i);
    await user.type(valueInput, '30');

    const alreadyPaidInput = screen.getByLabelText(/already paid/i);
    await user.type(alreadyPaidInput, '20');

    const addressInput = screen.getByLabelText(/Address/i);
    await user.type(addressInput, 'Kalisz');

    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: '2018-06-12T19:30' } });

    const infoInput = screen.getByLabelText(/Additional information/i);
    await user.type(infoInput, 'This is info');

    await user.click(screen.getByRole('button', { name: /ADD/i }));
    expect(screen.getByTestId('button-spinner')).toBeVisible();
    expect(await screen.findByText(/Added/i)).toBeInTheDocument();
  });

  test('Should display eror message while server error', async () => {
    const { user } = setup();

    //Simulate error on server
    server.use(
      rest.post('http://localhost:5000/api/clients', (req, res, ctx) => {
        return res(ctx.status(500), ctx.json({ error: 'error' }));
      })
    );

    const nameInput = screen.getByLabelText(/name/i);
    await user.type(nameInput, 'Test');

    const valueInput = screen.getByLabelText(/value/i);
    await user.type(valueInput, '30');

    const alreadyPaidInput = screen.getByLabelText(/already paid/i);
    await user.type(alreadyPaidInput, '20');

    const addressInput = screen.getByLabelText(/Address/i);
    await user.type(addressInput, 'Kalisz');

    const dateInput = screen.getByLabelText(/date/i);
    fireEvent.change(dateInput, { target: { value: '2018-06-12T19:30' } });

    const infoInput = screen.getByLabelText(/Additional information/i);
    await user.type(infoInput, 'This is info');

    await user.click(screen.getByRole('button', { name: /ADD/i }));
    expect(await screen.findByText(/Server Error/i)).toBeInTheDocument();
  });
});
