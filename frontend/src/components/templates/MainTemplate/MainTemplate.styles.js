import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  ${({ theme }) => theme.mq.desktop} {
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    display: grid;
    grid-template-columns: 200px 1fr;
  }
`;

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100%;

  ${({ theme }) => theme.mq.desktop} {
    overflow-y: auto;
  }
`;
