import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'components/atoms/Label/Label';
import { DateInput } from 'components/atoms/DateInput/DateInput';
import { Wrapper } from 'components/molecules/DateField/DateField.styles';

export const DateField = React.forwardRef(
  ({ label, name, id, type, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <DateInput {...props} ref={ref} name={name} id={id} />
      </Wrapper>
    );
  }
);

DateField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
};
