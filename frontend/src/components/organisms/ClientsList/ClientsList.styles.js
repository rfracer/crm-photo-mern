import styled from 'styled-components';
import { Card } from 'components/molecules/Card/Card';

export const Wrapper = styled(Card)`
  padding: 2rem;
  margin-top: 4rem;
  overflow: initial;
  overflow-x: auto;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow-x: auto;

  th {
    padding: 0rem 1rem 2rem 1rem;
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 500;
    text-align: left;
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

export const SpinnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const NoClientsMessage = styled.p`
  font-weight: 500;
  padding-left: 1rem;
`;
