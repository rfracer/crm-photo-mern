import { Card } from 'components/molecules/Card/Card';
import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const TableWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  width: 100%;
  overflow-x: auto;

  table {
    display: block;
    width: 100%;
    max-width: 100%;

    td {
      padding: 1rem 1.5rem;
      font-size: ${({ theme }) => theme.fontSize.small};
      word-wrap: break-word;
    }
  }
`;

export const StyledCard = styled(Card)`
  align-self: flex-start;
  overflow-x: auto;

  ${({ theme }) => theme.mq.desktop} {
    flex-shrink: 0;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;
  text-align: center;

  ${Button} {
    display: inline-block;
  }
`;
