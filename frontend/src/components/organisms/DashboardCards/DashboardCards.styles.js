import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  ${({ theme }) => theme.mq.desktop} {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;
