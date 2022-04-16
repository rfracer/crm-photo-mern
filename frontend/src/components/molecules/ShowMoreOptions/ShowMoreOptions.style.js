import styled from 'styled-components';

export const ShowMoreWrapper = styled.td`
  position: relative;
`;

export const ShowMoreList = styled.ul`
  position: absolute;
  list-style: none;
  top: 40px;
  right: 10px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  border: 1px solid grey;
  font-weight: 600;
  display: ${({ show }) => (show ? 'block' : 'none')};
  box-shadow: ${({ theme }) => theme.inputShadow};
  z-index: 2;

  li {
    display: flex;
    padding: 8px 6px 8px 6px;
    color: ${({ theme }) => theme.colors.main};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

    svg {
      margin-right: 5px;
    }
  }
  li:last-child {
    border-bottom: none;
  }
  a {
    display: flex;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const ShowMoreButton = styled.button`
  cursor: pointer;
  text-align: center;
  padding: 0.2rem;
  background-color: transparent;
  border-radius: 50px;
  border: none;
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.colors.main};
  }
`;
