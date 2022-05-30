import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  width: 80px;
  margin: 0 auto;
  position: absolute;
  left: 3rem;
  top: 4rem;

  ${({ theme }) => theme.mq.desktop} {
    right: 5rem;
    left: auto;
  }

  svg {
    box-shadow: ${({ theme }) => theme.cardShadow};
    cursor: pointer;
  }
`;
