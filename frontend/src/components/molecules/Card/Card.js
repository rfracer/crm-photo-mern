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
