import styled from 'styled-components';

export const FormWrapper = styled.form`
  padding: 2rem 3rem;
  background-color: ${({ theme }) => theme.colors.background};

  select {
    width: 100%;
  }

  button {
    width: 100%;
    margin-top: 3rem;
  }
`;
