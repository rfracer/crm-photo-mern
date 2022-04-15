import styled from 'styled-components';
import { Select } from 'components/atoms/Select/Select';
import { Card } from 'components/molecules/Card/Card';

export const StyledList = styled.ul`
  margin-top: 3rem;
  padding-left: 0;
  list-style: none;
`;

export const SelectFilter = styled(Select)`
  margin-bottom: 3rem;
  font-size: ${({ theme }) => theme.fontSize.small};
`;

export const StyledMessage = styled(Card)`
  padding: 1.5rem 2rem;
`;
