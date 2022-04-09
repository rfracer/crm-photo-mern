import styled from 'styled-components';

export const Wrapper = styled.tr`
  font-size: ${({ theme }) => theme.fontSize.small};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;

  td {
    padding: 2rem 1rem;
  }

  svg {
    color: ${({ theme }) => theme.colors.main};
  }
`;
