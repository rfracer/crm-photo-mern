import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.cardShadow};
  border-radius: 15px;
  overflow: hidden;
`;

export const CardContent = styled.div`
  margin: 1em 0;
  padding: 1rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: 600;
`;

export const CardHeader = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 2rem 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  text-align: center;
  background: ${({ background }) => background};
  color: ${({ theme, nofill }) =>
    nofill ? theme.colors.black : theme.colors.white};
  border-bottom: 1px solid
    ${({ theme, nofill }) =>
      nofill ? theme.colors.lightGrey : theme.colors.white};

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }

  svg {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 1rem;

    ${({ theme }) => theme.mq.desktop} {
      width: 2rem;
      height: 2rem;
    }
  }
`;
