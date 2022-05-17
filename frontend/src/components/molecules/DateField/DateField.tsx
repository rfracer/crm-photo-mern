import React from 'react';
import { Label } from 'components/atoms/Label/Label';
import { DateInput } from 'components/atoms/DateInput/DateInput';
import { Wrapper } from 'components/molecules/DateField/DateField.styles';

type Props = {
  id: string;
  label: string;
  name: string;
};
type Ref = HTMLInputElement;

export const DateField = React.forwardRef<Ref, Props>(
  ({ label, name, id, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <DateInput {...props} ref={ref} name={name} id={id} />
      </Wrapper>
    );
  }
);
