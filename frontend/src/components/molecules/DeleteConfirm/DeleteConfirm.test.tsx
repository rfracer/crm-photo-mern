import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'test-utils';
import { DeleteConfirm } from './DeleteConfirm';

const setup = () => {
  const mockDelete = jest.fn();
  const mockClose = jest.fn();
  const utils = render(
    <DeleteConfirm handleRemoveClient={mockDelete} handleClose={mockClose} />
  );
  return { utils, mockClose, mockDelete };
};

describe('Delete Confirm Item - Modal content', () => {
  test('Render component successfully', () => {
    setup();
  });

  test('Display modal title correctly', () => {
    setup();
    expect(screen.getByText(/are you sure/i)).toBeInTheDocument();
  });

  test('Displays button yes and no', () => {
    setup();
    expect(screen.getByRole('button', { name: /yes/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /no/i })).toBeInTheDocument();
  });

  test('Click yes button and fire delete function', async () => {
    const { mockClose, mockDelete } = setup();
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: /YES/i });
    await user.click(button);
    expect(mockDelete).toHaveBeenCalled();
    expect(mockClose).not.toHaveBeenCalled();
  });

  test('Click NO button and fire close function', async () => {
    const { mockClose, mockDelete } = setup();
    const user = userEvent.setup();
    const button = screen.getByRole('button', { name: /NO/i });
    await user.click(button);
    expect(mockDelete).not.toHaveBeenCalled();
    expect(mockClose).toHaveBeenCalled();
  });
});
