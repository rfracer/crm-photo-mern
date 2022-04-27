import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render } from 'test-utils';
import { TaskItem } from './TaskItem';
import { tasks } from 'mocks/data/tasks';

const setup = () => {
  const utils = render(<TaskItem data={tasks[0]} />);
  return { utils };
};

describe('Task item', () => {
  test('Render component correctly', async () => {
    setup();
    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/low/i)).toBeInTheDocument();
    //Query variants don't throw error while not found
    expect(screen.queryByText(/No name/i)).not.toBeInTheDocument();
  });

  test('Empty name task', async () => {
    render(<TaskItem data={{ id: '1', name: '', priority: 'medium' }} />);
    expect(screen.getByText(/no name/i)).toBeInTheDocument();
  });

  test('Should change status while cliked - visual effect on task name and icon change', async () => {
    const utils = render(<TaskItem data={tasks[0]} />);
    const user = userEvent.setup();

    const updateButton = screen.getByTestId('update-task');
    expect(await screen.findByText(tasks[0].name)).toHaveStyle(
      `text-decoration: none`
    );
    expect(screen.getByTitle('checkmark icon')).toBeInTheDocument();
    await user.click(updateButton);

    //After delete click, item is removed from mocked array
    utils.rerender(<TaskItem data={tasks[0]} />);
    expect(await screen.findByText(tasks[0].name)).toHaveStyle(
      `text-decoration: line-through`
    );
    expect(screen.getByTitle('arrow-up icon')).toBeInTheDocument();
  });

  test('Should delete task while click', async () => {
    const { utils } = setup();
    const user = userEvent.setup();

    const deleteButton = screen.getByTestId('delete-task');
    await user.click(deleteButton);

    utils.rerender(<TaskItem data={tasks[0]} />);

    //After delete click, item is removed from mocked array
    expect(screen.queryByText(/Task 1/i)).not.toBeInTheDocument();
  });
});
