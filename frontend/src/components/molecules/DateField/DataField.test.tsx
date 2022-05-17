import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'test-utils';
import { DateField } from './DateField';

const data = {
  label: 'test label',
  name: 'testname',
  id: 'testname',
};

const setup = () => {
  const { label, name, id } = data;
  render(<DateField label={label} name={name} id={id} />);
};

describe('Data Input Field', () => {
  test('Render data field', () => {
    setup();
  });

  test('Has correct label name', () => {
    setup();
    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument();
  });

  test('Has correct date value - selected by user', () => {
    setup();
    const input = screen.getByLabelText(/test label/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: '2018-06-12T19:30' } });
    expect(input.value).toBe('2018-06-12T19:30');
  });
});
