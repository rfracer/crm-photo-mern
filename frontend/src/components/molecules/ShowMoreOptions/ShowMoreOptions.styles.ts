import styled from 'styled-components';

export const ShowMoreWrapper = styled.td`
  position: relative;
`;

export const ShowMoreList = styled.ul<{ show: boolean }>`
  position: absolute;
  top: 0px;
  right: 40px;
  list-style: none;
  padding: 0;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  border: 1px solid grey;
  font-weight: 600;
  display: ${({ show }) => (show ? 'block' : 'none')};
  box-shadow: ${({ theme }) => theme.inputShadow};
  z-index: 2;
  overflow: hidden;

  ${({ theme }) => theme.mq.desktop} {
    top: -30%;
    right: 90%;
  }

  li {
    display: flex;
    padding: 1.2rem 1.6rem 1.2rem 1.6rem;
    color: ${({ theme }) => theme.colors.main};
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};

    &:hover {
      background: ${({ theme }) => theme.colors.lightGrey};
    }

    svg {
      margin-right: 0.5rem;
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
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 50px;
  border: none;
  font-weight: 500;
  transition: background-color 0.1s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGrey};
  }

  svg {
    color: ${({ theme }) => theme.colors.main};
  }
`;
