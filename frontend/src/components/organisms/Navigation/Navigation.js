import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from 'store/state/authSlice';
import { useLogoutUserMutation, baseApi } from 'store';
import { ReactComponent as LogoWhite } from 'assets/image/logo-white.svg';
import {
  LogOutButton,
  OuterWrapper,
  StyledBurger,
  TopBarWrapper,
  TopBarInnerWrapper,
  Wrapper,
  StyledLogo,
  StyledNavigation,
  StyledLink,
  DesktopLogo,
  UserMobileMenuButton,
} from 'components/organisms/Navigation/Navigation.styles';
import {
  IoBriefcaseOutline,
  IoBuildOutline,
  IoListOutline,
  IoPeopleOutline,
  IoReorderThreeOutline,
  IoCloseOutline,
  IoCaretDownOutline,
} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { UserLogo } from 'components/atoms/UserLogo/UserLogo';
import { UserMenu } from 'components/molecules/UserMenu/UserMenu';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();

  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logoutUser();
  };

  const handleOpenUserMenu = () => {
    setUserMenu(!userMenu);
  };

  const getFirstLetter = (user) => {
    return user[0];
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ user: null }));
      dispatch(baseApi.util.resetApiState());
    }
  }, [isSuccess, dispatch]);

  return (
    <OuterWrapper>
      <TopBarWrapper>
        <TopBarInnerWrapper>
          <StyledBurger isOpen={isOpen} onClick={toggleNav}>
            {isOpen ? <IoCloseOutline /> : <IoReorderThreeOutline />}
          </StyledBurger>
          {!isOpen ? (
            <>
              <UserMobileMenuButton onClick={handleOpenUserMenu}>
                <UserLogo icon={getFirstLetter(user)} /> <IoCaretDownOutline />
              </UserMobileMenuButton>
              <UserMenu
                mobile
                isOpen={userMenu}
                handleMenuStatus={setUserMenu}
              />
            </>
          ) : (
            <Link to="/">
              <StyledLogo isMobile isSmall>
                {isOpen ? <LogoWhite /> : null}
              </StyledLogo>
            </Link>
          )}
        </TopBarInnerWrapper>
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
