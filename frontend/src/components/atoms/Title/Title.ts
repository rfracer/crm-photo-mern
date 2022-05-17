import styled from 'styled-components';

export const Title = styled.h1`
  margin: 30px 0;
  font-size: ${({ theme }) => theme.fontSize.headingSmall};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.heading};
  }
`;
