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
  padding: 8px 10px;
  font-size: ${({ theme }) => theme.fontSize.small};
  border-color: ${({ theme }) => theme.colors.grey};
`;

export const ChartCard = styled(Card)`
  ${({ theme }) => theme.mq.desktop} {
    min-width: 450px;
    max-width: 800px;
  }
`;
