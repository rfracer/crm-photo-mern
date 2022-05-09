import React, { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UserLogo } from 'components/atoms/UserLogo/UserLogo';
import {
  UserInfoWrapper,
  Wrapper,
  UserName,
  UserMenuClickWrapper,
} from './TopBar.styles';
import { UserMenu } from 'components/molecules/UserMenu/UserMenu';
import { IoCaretDownOutline } from 'react-icons/io5';

export const TopBar = () => {
  const [listStatus, setListStatus] = useState();
  const ref = useRef(null);

  const user = useSelector((state) => state.auth.user);
  const getFirstLetter = (user) => {
    return user[0];
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        listStatus &&
        ref.current &&
        !ref.current.contains(e.target) &&
        !e.target.closest('.user-menu-button')
      ) {
        setListStatus(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [listStatus]);

  const handleOpenUserMenu = () => {
    setListStatus(!listStatus);
  };
  return (
    <Wrapper>
      <UserInfoWrapper>
        <UserMenuClickWrapper
          className="user-menu-button"
          onClick={handleOpenUserMenu}
          role="button"
        >
          <UserLogo icon={getFirstLetter(user)} />
          <UserName>{user}</UserName>
          <IoCaretDownOutline />
        </UserMenuClickWrapper>

        <UserMenu
          ref={ref}
          isOpen={listStatus}
          handleMenuStatus={setListStatus}
        />
      </UserInfoWrapper>
    </Wrapper>
  );
};
