import styled from 'styled-components';

export const FormMessage = styled.p`
  width: 100%;
  background-color: ${({ success, theme: { colors } }) =>
    success ? colors.lightSuccess : colors.lightError};
  color: ${({ success, theme: { colors } }) =>
    success ? colors.success : colors.error};
  padding: 0.6rem 0.4rem 0.6rem 3rem;
  border-left: 1rem solid
    ${({ success, theme: { colors } }) =>
      success ? colors.success : colors.error};
`;
