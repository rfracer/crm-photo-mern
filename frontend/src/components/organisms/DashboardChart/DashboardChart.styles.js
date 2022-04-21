import { Select } from 'components/atoms/Select/Select';
import { Card } from 'components/molecules/Card/Card';
import styled from 'styled-components';

export const ChartWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0 0.5rem;
  height: auto;

  canvas {
    width: 100% !important;
    height: auto !important;
  }
`;

export const SelectFilter = styled(Select)`
  width: auto;
  margin: 1rem;
  padding: 0.8rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.small};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.grey};
  box-shadow: -2px 4px 11px rgb(114 124 142 / 8%);

  &:focus {
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.grey};
  }
`;

export const ChartCard = styled(Card)`
  ${({ theme }) => theme.mq.desktop} {
    min-width: 400px;
    max-width: 500px;
  }
  ${({ theme }) => theme.mq.desktop} {
    flex-shrink: 2;
  }
`;

export const ErrorMessage = styled.p`
  padding: 1rem;
  text-align: center;
`;
