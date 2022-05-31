import React from 'react';
import { Wrapper } from 'components/molecules/SelectField/SelectField.styles';
import { Label } from 'components/atoms/Label/Label';
import { Select } from 'components/atoms/Select/Select';

type Props = {
  id: string;
  label: string;
  // eslint-disable-next-line no-restricted-globals
  name: string;
  options: { [key: string]: string }[] | string[];
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
            <option key={Object.keys(option)[0]} value={Object.keys(option)[0]}>
              {Object.values(option)[0]}
            </option>
          ))}
        </Select>
      </Wrapper>
    );
  }
);
