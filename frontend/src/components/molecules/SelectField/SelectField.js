import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Select } from 'components/atoms/Select/Select';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

export const SelectField = React.forwardRef(
  ({ label, name, id, type, options = 'text', isTextarea, ...props }, ref) => {
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
