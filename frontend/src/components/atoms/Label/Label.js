import styled from 'styled-components';

export const Label = styled.label`
  font-weight: 600;
  font-size: ${({ theme }) => theme.colors.normal};
  color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
