import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';

export const OuterWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 3;
  ${({ theme }) => theme.mq.desktop} {
    position: relative;
    width: auto;
    height: auto;
  }
`;

export const Wrapper = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 10%;
  background-color: ${({ theme }) => theme.colors.main};

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    width: 100%;
    height: 100vh;
  }
`;

export const TopBarWrapper = styled.div`
  border-bottom: 1px solid #dcdcdc;

  a {
    z-index: 100;
    text-decoration: none;
  }
`;

export const TopBarInnerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  height: 70px;

  padding: 1rem 2rem 0 1rem;
`;

export const StyledBurger = styled.button<{ isOpen: boolean }>`
  width: 4rem;
  height: 4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  svg {
    width: 3rem;
    height: 3rem;
    color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.white : theme.colors.main};
  }

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

export const StyledNavigation = styled.div`
  ul {
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7rem;
    list-style: none;

    ${({ theme }) => theme.mq.desktop} {
      align-items: flex-start;
      align-content: center;
      padding-left: 2rem;
    }

    li {
      margin-bottom: 1rem;
      text-align: center;
    }
  }
`;

export const StyledLogo = styled.div<{ isSmall: boolean; isMobile: boolean }>`
  width: ${({ isSmall }) => (isSmall ? '90px' : '100px')};

  ${({ theme }) => theme.mq.desktop} {
    display: ${({ isMobile }) => (isMobile ? 'none' : 'initial')};
  }
  display: block;
  margin: 0 auto;

  svg {
    width: 100%;
    z-index: 100;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
  margin: 2rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.8rem;
  opacity: 0.77;
  transition: opacity 0.1s ease-in-out;

  ${({ theme }) => theme.mq.tablet} {
    font-size: 2.2rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin: 2rem 0;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.normal};
  }

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;

    &::before {
      content: '';
      position: absolute;
      top: -15%;
      left: -15px;
      width: 2px;
      height: 130%;
      background: #fff;
    }
  }

  .nav-icon {
    margin-right: 10px;
    height: 2rem;
    width: 2rem;
  }
`;

export const LogOutButton = styled(Button)`
  margin-top: auto;
  margin-bottom: 2rem;
  align-self: center;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main};

  &:hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
  }

  ${({ theme }) => theme.mq.desktop} {
    width: auto;
    margin-bottom: 4rem;
  }
`;

export const DesktopLogo = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    width: 100px;
    display: block;
    margin: 0 auto;
  }

  svg {
    width: 100%;
    z-index: 100;
    position: relative;
    display: inline-block;
  }
`;

export const UserMobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }

  svg {
    margin-left: 1rem;
  }
`;
