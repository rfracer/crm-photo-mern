import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 8px 30px;
  text-decoration: none;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.small};
  background-color: ${({ $outline, $secondary, theme: { colors } }) =>
    $outline ? 'transparent' : $secondary ? colors.secondary : colors.main};
  border-radius: 50px;
  border: 2px solid
    ${({ $outline, $secondary, theme: { colors } }) =>
      $outline ? ($secondary ? colors.secondary : colors.main) : colors.white};
  font-weight: 500;
  color: ${({ $outline, $secondary, theme: { colors } }) =>
    $outline ? ($secondary ? colors.secondary : colors.main) : colors.white};
  cursor: pointer;
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ $outline, $secondary, theme: { colors } }) =>
      $outline
        ? colors.main
        : $secondary
        ? colors.darkSecondary
        : colors.darkMain};
    color: ${({ theme, $outline }) => {
      if ($outline) return theme.colors.white;
    }};
  }
`;
