import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'test-utils';
import { TaskItem } from './TaskItem';

const mockedTask = {
  id: '1',
  name: 'Task 1',
  priority: 'medium',
  completed: false,
};

describe('Task item', () => {
  test('Render component correctly', async () => {
    render(<TaskItem data={mockedTask} />);
    expect(screen.getByText(/Task 1/i)).toBeInTheDocument();
    expect(screen.getByText(/medium/i)).toBeInTheDocument();
    //Query variants don't throw error while not found
    expect(screen.queryByText(/No name/i)).not.toBeInTheDocument();
  });

  test('Empty name task', async () => {
    render(<TaskItem data={{ id: '1', name: '', priority: 'medium' }} />);
    expect(screen.getByText(/no name/i)).toBeInTheDocument();
  });
});
