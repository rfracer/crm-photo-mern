import styled from 'styled-components';

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 70px;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid #dcdcdc;
  border-bottom: 1px solid #dcdcdc;
  box-shadow: 0px 8px 6px -5px rgb(0 0 0 / 20%);

  ${({ theme }) => theme.mq.desktop} {
    top: 60px;
    left: auto;
    width: auto;
    min-width: 210px;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
      rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
      rgba(255, 255, 255, 0.5) 0px 0px 0px 1px inset;
  }
`;

export const OptionsList = styled.ul`
  padding: 1rem 1.5rem;
  list-style: none;
`;

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:last-child {
    margin-bottom: 0rem;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  a {
    display: flex;
    align-items: center;
    width: 100%;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
    transition: color 0.2s ease-in-out;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  svg {
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors.lightGrey};
    border-radius: 50%;
    font-size: 30px;
    margin-right: 1rem;
  }
`;
