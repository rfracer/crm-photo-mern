import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'test-utils';
import { ClientDetails } from './ClientDetails';

describe('Client Details', () => {
  test('Render component correctly', async () => {
    render(<ClientDetails client="1" />);
  });

  test('Display loading spinner', () => {
    render(<ClientDetails client="1" />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(screen.queryByLabelText('Name:')).not.toBeInTheDocument();
  });

  test('Display labels correctly', async () => {
    render(<ClientDetails client="1" />);

    await waitFor(() => {
      expect(
        screen.getByRole('heading', { name: 'Name:' })
      ).toBeInTheDocument();
    });
    expect(
      screen.getByRole('heading', { name: 'Category:' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Date:' })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: 'Address:' })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /value/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Already Paid/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /information/i })
    ).toBeInTheDocument();
  });

  test('Display client data from API', async () => {
    render(<ClientDetails client="1" />);

    expect(await screen.findByText(/Kinga/i)).toBeInTheDocument();
    expect(screen.getByText(/event/i)).toBeInTheDocument();
    expect(screen.getByText(/November 20th 2021, 12:11/i)).toBeInTheDocument();
    expect(screen.getByText(/4000/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
    expect(screen.getByText(/completed/i)).toBeInTheDocument();
    expect(screen.getByText(/Kalisz/i)).toBeInTheDocument();
    expect(screen.getByText(/To sa dodatkowe informacje/i)).toBeInTheDocument();
  });

  test('Redirect to edit page on button click', async () => {
    render(<ClientDetails client="1" />);
    const link = await screen.findByRole('link', { name: /edit/i });
    await userEvent.click(link);
    expect(global.window.location.pathname).toEqual('/clients/edit/1');
  });
});
