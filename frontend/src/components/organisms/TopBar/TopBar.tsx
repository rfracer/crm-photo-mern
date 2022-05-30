import React, { useState, useRef, useEffect } from 'react';
import { UserLogo } from 'components/atoms/UserLogo/UserLogo';
import {
  UserInfoWrapper,
  Wrapper,
  UserName,
  UserMenuClickWrapper,
} from './TopBar.styles';
import { UserMenu } from 'components/molecules/UserMenu/UserMenu';
import { IoCaretDownOutline } from 'react-icons/io5';
import { useAppSelector } from 'hooks/store';

export const TopBar = () => {
  const [listStatus, setListStatus] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const user = useAppSelector((state) => state.auth.user);

  const getFirstLetter = (user: string) => {
    return user[0];
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        listStatus &&
        ref.current &&
        e.target &&
        !ref.current.contains(target) &&
        !target.closest('.user-menu-button')
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
          {user && (
            <>
              <UserLogo icon={getFirstLetter(user.email)} />
              <UserName>{user.email}</UserName>{' '}
            </>
          )}
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
