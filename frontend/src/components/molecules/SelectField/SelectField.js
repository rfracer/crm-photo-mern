import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from 'components/molecules/SelectField/SelectField.styles';
import { Label } from 'components/atoms/Label/Label';
import { Select } from 'components/atoms/Select/Select';

export const SelectField = React.forwardRef(
  ({ label, name, id, type, options = [], ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Select
          as="select"
          name={name}
          id={id}
          {...props}
          ref={ref}
          autocomplete="off"
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

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  options: PropTypes.array,
};
