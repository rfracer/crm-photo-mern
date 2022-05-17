import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'components/molecules/SelectField/SelectField.styles';
import { Label } from 'components/atoms/Label/Label';
import { Select } from 'components/atoms/Select/Select';

type Props = {
  id: string;
  label: string;
  name: string;
  options: string[];
};
type Ref = HTMLSelectElement;

export const SelectField = React.forwardRef<Ref, Props>(
  ({ label, name, id, options, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Select
          as="select"
          name={name}
          id={id}
          {...props}
          ref={ref}
          autoComplete="off"
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Select>
      </Wrapper>
    );
  }
);
