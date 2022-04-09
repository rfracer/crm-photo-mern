import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, Link } from 'react-router-dom';
import { ReactComponent as Logo } from 'assets/logo.svg';
import { ReactComponent as LogoWhite } from 'assets/logo-white.svg';
import { Button } from 'components/atoms/Button/Button';
import {
  IoBriefcaseOutline,
  IoBuildOutline,
  IoStatsChartOutline,
  IoListOutline,
  IoPeopleOutline,
  IoReorderThreeOutline,
  IoCloseOutline,
} from 'react-icons/io5';

const OuterWrapper = styled.div`
  position: fixed;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
`;

const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  height: 70px;
  border-bottom: 1px solid #dcdcdc;
  padding: 10px 20px 0px 10px;
  a {
    z-index: 100;
  }
`;

const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  padding: 10%;
  background-color: ${({ theme }) => theme.colors.main};
`;

const StyledBurger = styled.button`
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

const StyledNavigation = styled.div`
  ul {
    height: 100%;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    list-style: none;
    margin-top: 7rem;

    li {
      margin-bottom: 10px;
      text-align: center;
    }
  }
`;

const StyledLogo = styled.div`
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

const activeClassName = 'active-link';
export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  margin: 20px;
  font-size: ${({ theme }) => theme.fontSize.meneLinks};

  .nav-icon {
    margin-right: 10px;
    height: 2rem;
    width: 2rem;
  }
`;

const LogOutButton = styled(Button)`
  margin-top: auto;
  align-self: center;
  width: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main};
`;

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return (
    <OuterWrapper>
      <TopBarWrapper>
        <StyledBurger isOpen={isOpen} onClick={toggleNav}>
          {isOpen ? <IoCloseOutline /> : <IoReorderThreeOutline />}
        </StyledBurger>
        <Link to="/">
          <StyledLogo isMobile isSmall>
            {isOpen ? <LogoWhite /> : <Logo />}
          </StyledLogo>
        </Link>
      </TopBarWrapper>
      {/* <a href="" className="logo"></a> */}

      <Wrapper isOpen={isOpen}>
        <StyledNavigation>
          <ul>
            <li>
              <StyledLink to="/" onClick={toggleNav}>
                <IoBriefcaseOutline className="nav-icon" />
                Dashboard
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/clients" onClick={toggleNav}>
                <IoPeopleOutline className="nav-icon" />
                Clients
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/tasks" onClick={toggleNav}>
                <IoListOutline className="nav-icon" />
                Tasks
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/statistics" onClick={toggleNav}>
                <IoStatsChartOutline className="nav-icon" />
                Statistics
              </StyledLink>
            </li>
            <li>
              <StyledLink to="/settings" onClick={toggleNav}>
                <IoBuildOutline className="nav-icon" />
                Settings
              </StyledLink>
            </li>
          </ul>
        </StyledNavigation>
        <LogOutButton>Logout</LogOutButton>
      </Wrapper>
    </OuterWrapper>
  );
};
