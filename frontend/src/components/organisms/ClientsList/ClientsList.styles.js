import styled from 'styled-components';
import { Card } from 'components/molecules/Card/Card';

export const Wrapper = styled(Card)`
  padding: 20px;
  margin-top: 4rem;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 100%;
  overflow-x: auto;

  th {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 500;
    text-align: left;
    padding: 0rem 1rem 2rem 1rem;
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  tbody {
    tr {
      font-size: ${({ theme }) => theme.fontSize.small};
      border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
      font-weight: 500;
    }
  }
`;
