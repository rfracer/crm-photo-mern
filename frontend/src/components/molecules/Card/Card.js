import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.cardShadow};
  border-radius: 15px;
  overflow: hidden;
`;

export const CardContent = styled.p`
  padding: 10px 10px;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: 600;
`;

export const CardHeader = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin: 0;
  padding: 20px 10px;
  text-align: center;
  background: ${({ background }) => background};
  color: ${({ theme, nofill }) =>
    nofill ? theme.colors.black : theme.colors.white};
  border-bottom: 1px solid
    ${({ theme, nofill }) =>
      nofill ? theme.colors.lightGrey : theme.colors.white};

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  svg {
    margin-right: 1rem;
    width: 1.8rem;
    height: 1.8rem;
  }
`;
