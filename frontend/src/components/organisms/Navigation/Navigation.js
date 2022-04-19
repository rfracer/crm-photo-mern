import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/state/authSlice';
import { useLogoutUserMutation, baseApi } from 'store';
import { ReactComponent as Logo } from 'assets/image/logo.svg';
import { ReactComponent as LogoWhite } from 'assets/image/logo-white.svg';
import {
  LogOutButton,
  OuterWrapper,
  StyledBurger,
  TopBarWrapper,
  Wrapper,
  StyledLogo,
  StyledNavigation,
  StyledLink,
  DesktopLogo,
} from 'components/organisms/Navigation/Navigation.styles';
import {
  IoBriefcaseOutline,
  IoBuildOutline,
  IoListOutline,
  IoPeopleOutline,
  IoReorderThreeOutline,
  IoCloseOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();

  const dispatch = useDispatch();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logoutUser();
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ user: null }));
      dispatch(baseApi.util.resetApiState());
    }
  }, [isSuccess]);

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

      <Wrapper isOpen={isOpen}>
        <DesktopLogo>
          <Link to="/">
            <LogoWhite />
          </Link>
        </DesktopLogo>
        <StyledNavigation>
          <ul>
            <li>
              <StyledLink
                style={({ isActive }) =>
                  isActive ? { color: 'red' } : { color: 'blue' }
                }
                to="/"
                onClick={toggleNav}
              >
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
              <StyledLink to="/settings" onClick={toggleNav}>
                <IoBuildOutline className="nav-icon" />
                Settings
              </StyledLink>
            </li>
          </ul>
        </StyledNavigation>
        <LogOutButton onClick={handleLogout}>Logout</LogOutButton>
      </Wrapper>
    </OuterWrapper>
  );
};
