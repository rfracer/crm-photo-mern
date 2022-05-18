import React from 'react';
import { Label } from 'components/atoms/Label/Label';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from 'components/molecules/TextField/TextField.styles';
import { Textarea } from 'components/atoms/Textarea/Textarea';

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

type Ref = HTMLInputElement | HTMLTextAreaElement;

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
          <Textarea
            rows={7}
            name={name}
            id={id}
            {...props}
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
          ></Textarea>
        ) : (
          <Input
            name={name}
            id={id}
            type={type ? type : 'text'}
            borderStyle={borderStyle}
            {...props}
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            autoComplete={autocomplete ? autocomplete : 'on'}
          />
        )}
      </Wrapper>
    );
  }
);
