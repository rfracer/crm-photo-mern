import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { DateInput } from 'components/atoms/DateInput/DateInput';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  ${Label} {
    margin: 10px 0;
  }
`;

export const DateField = React.forwardRef(
  ({ label, name, id, type, options = 'text', ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <DateInput {...props} ref={ref} name={name} id={id} />
      </Wrapper>
    );
  }
);
