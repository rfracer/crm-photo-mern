import styled from 'styled-components';

export const Wrapper = styled.tr`
  font-size: ${({ theme }) => theme.fontSize.small};
  border-top: 1px solid ${({ theme }) => theme.colors.lightGrey};
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f8f8f8;
  }

  td {
    padding: 2rem 1rem;
    cursor: pointer;
  }

  svg {
    color: ${({ theme }) => theme.colors.main};
  }
`;
