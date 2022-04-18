import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  text-decoration: none;
  cursor: pointer;
  text-align: center;
  padding: 8px 30px;
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ isOutline, isSecondary, theme: { colors } }) =>
    isOutline ? 'transparent' : isSecondary ? colors.secondary : colors.main};
  border-radius: 50px;
  border: 2px solid
    ${({ isOutline, isSecondary, theme: { colors } }) =>
      isOutline
        ? isSecondary
          ? colors.secondary
          : colors.main
        : colors.white};
  font-weight: 500;
  color: ${({ isOutline, isSecondary, theme: { colors } }) =>
    isOutline ? (isSecondary ? colors.secondary : colors.main) : colors.white};

  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ isOutline, isSecondary, theme: { colors } }) =>
      isOutline
        ? colors.main
        : isSecondary
        ? colors.darkSecondary
        : colors.darkMain};
    color: ${({ theme, isOutline }) => {
      if (isOutline) return theme.colors.white;
    }};
  }
`;
