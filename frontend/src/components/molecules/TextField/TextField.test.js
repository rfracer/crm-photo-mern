import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'test-utils';
import { TextField } from './TextField';
import userEvent from '@testing-library/user-event';

const data = {
  label: 'test label',
  name: 'testname',
  id: 'testname',
  autocomplete: 'off',
  type: 'test',
};

const setup = (isTextarea) => {
  const { label, name, id, autocomplete } = data;
  render(
    <TextField
      label={label}
      isTextarea={isTextarea}
      name={name}
      id={id}
      autocomplete={autocomplete}
    />
  );
};

describe('Render Text Input Field', () => {
  test('Render data field', () => {
    setup(false);
    expect(screen.getByLabelText(data.label)).toBeInTheDocument();
  });

  test('Render textarea field', () => {
    setup(true);
    expect(screen.getByLabelText(data.label)).toBeInTheDocument();
  });

  test('Should display label', () => {
    setup(false);
    expect(screen.getByLabelText(data.label)).toBeInTheDocument();
  });

  test('Should show input html element value equal to user typed value', async () => {
    setup(false);
    const user = userEvent.setup();

    const input = screen.getByLabelText(data.label);
    await user.type(input, '12345');

    expect(input.value).toBe('12345');
  });
});
