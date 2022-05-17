import styled from 'styled-components';

export const FormInputError = styled.p`
  margin-bottom: 0;
  margin-top: 1rem;
  color: ${({ theme }) => theme.colors.error};

  &::before {
    display: inline;
    content: '⚠ ';
  }
`;
