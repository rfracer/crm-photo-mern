import styled from 'styled-components';

export const FormInputError = styled.p`
  color: ${({ theme }) => theme.colors.error};
  margin-bottom: 0;
  margin-top: 1rem;

  &::before {
    display: inline;
    content: '⚠ ';
  }
`;
