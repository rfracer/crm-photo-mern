import React from 'react';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'components/molecules/TextField/TextField.styles';

type Props = {
  label: string;
  // eslint-disable-next-line no-restricted-globals
  name: string;
  placeholder?: string;
  id: string;
  type?: string;
  isTextarea?: boolean;
  autocomplete?: string;
  borderStyle?: {
    border: string;
  };
};

type Ref = HTMLInputElement;

export const TextField = React.forwardRef<Ref, Props>(
  (
    {
      autocomplete,
      label,
      name,
      placeholder,
      id,
      type = 'text',
      isTextarea,
      borderStyle,
      ...props
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        {isTextarea ? (
          <Input
            // as="textarea"
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
