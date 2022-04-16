import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TextField = React.forwardRef(
  (
    { autocomplete, label, name, id, type = 'text', isTextarea, ...props },
    ref
  ) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        {isTextarea ? (
          <Input
            as="textarea"
            rows="7"
            name={name}
            id={id}
            {...props}
            ref={ref}
            type={type ? type : 'text'}
          />
        ) : (
          <Input
            name={name}
            id={id}
            type={type ? type : 'text'}
            {...props}
            ref={ref}
            autoComplete={autocomplete ? autocomplete : 'on'}
          />
        )}
      </Wrapper>
    );
  }
);
