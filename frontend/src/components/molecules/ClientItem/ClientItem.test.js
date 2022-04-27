import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'test-utils';
import { ClientItem } from './ClientItem';
import { clients as data } from 'mocks/data/clients';

describe('Client Item Test', () => {
  test('Render Client Item', () => {
    render(<ClientItem data={data[0]} />);
  });

  test('Display Client Item Info', async () => {
    render(<ClientItem data={data[0]} />);
    await screen.findByRole('cell', { name: /kinga/i });
    await screen.findByRole('cell', { name: /november/i });
    await screen.findByRole('cell', { name: /event/i });
    await screen.findByRole('cell', { name: /4000/i });
    await screen.findByRole('cell', { name: /completed/i });
  });

  test('Open options list by button click', async () => {
    render(<ClientItem data={data[0]} />);
    const user = userEvent.setup();

    expect(await screen.findByText(/edit/i)).not.toBeVisible();
    expect(await screen.findByText(/delete/i)).not.toBeVisible();

    await user.click(screen.getByRole('button'));

    expect(await screen.findByText(/edit/i)).toBeVisible();
    expect(await screen.findByText(/delete/i)).toBeVisible();
  });
});
