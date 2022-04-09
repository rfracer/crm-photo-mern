import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
`;

export const ContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100%;
`;
