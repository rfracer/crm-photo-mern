import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;

  ${({ theme }) => theme.mq.desktop} {
    justify-content: space-between;
  }
`;
