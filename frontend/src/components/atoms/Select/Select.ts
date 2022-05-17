import { Input } from 'components/atoms/Input/Input';
import styled from 'styled-components';

export const Select = styled(Input)`
  width: 50%;
  text-transform: capitalize;
  background-color: ${({ theme }) => theme.colors.white};
`;
