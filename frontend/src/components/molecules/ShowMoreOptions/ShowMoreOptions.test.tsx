import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render } from 'test-utils';
import { ShowMoreOptions } from './ShowMoreOptions';

const data = {
  id: '1',
  isActive: true,
};

const setup = () => {
  const mockFunc = jest.fn();

  const rootDiv = document.createElement('div');
  rootDiv.id = 'root';
  const table = document.createElement('table');
  const tbody = document.createElement('tbody');
  const row = document.createElement('tr');
  table.appendChild(tbody);
  tbody.appendChild(row);
  rootDiv.appendChild(table);
  document.body.appendChild(rootDiv);

  const utils = render(
    <ShowMoreOptions
      id={data.id}
      isActive={data.isActive}
      handleOpen={mockFunc}
    />,
    {
      container: row,
    }
  );
  return { utils, mockFunc };
};

describe('ShowMoreOptions', () => {
  test('Display edit and delete options', async () => {
    setup();
    expect(await screen.findByText(/edit/i)).toBeInTheDocument();
    expect(await screen.findByText(/delete/i)).toBeInTheDocument();
  });

  test('Redirect to client edit page - by props id', async () => {
    setup();
    const user = userEvent.setup();
    const editLink = screen.getByRole('link', { name: /edit/i });
    await user.click(editLink);
    expect(global.window.location.pathname).toEqual(`/clients/edit/${data.id}`);
  });

  test('Should open modal to confirm delete process when user click delete button', async () => {
    setup();
    const user = userEvent.setup();
    const deleteLink = screen.getByRole('button', { name: /delete/i });
    await user.click(deleteLink);
    expect(await screen.findByText(/are you sure/i)).toBeVisible();
  });
});
