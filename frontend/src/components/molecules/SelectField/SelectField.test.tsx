import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'test-utils';
import { SelectField } from './SelectField';

const data = {
  label: 'test label',
  name: 'testname',
  id: 'testname',
  options: ['1', '2', '3'],
};

const setup = () => {
  const { label, name, id, options } = data;
  render(<SelectField label={label} name={name} id={id} options={options} />);
};

describe('Select Input Field', () => {
  test('Render select input field', () => {
    setup();
  });

  test('Has correct label name', () => {
    setup();
    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument();
  });
});
