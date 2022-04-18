import React from 'react';
import { useSelector } from 'react-redux';
import { UserLogo } from 'components/atoms/UserLogo/UserLogo';
import { UserInfoWrapper, Wrapper, UserName } from './TopBar.styles';

export const TopBar = () => {
  const user = useSelector((state) => state.auth.user);
  const getFirstLetter = (user) => {
    return user[0];
  };

  return (
    <Wrapper>
      <UserInfoWrapper>
        <UserLogo icon={getFirstLetter(user)} />
        <UserName>{user}</UserName>
      </UserInfoWrapper>
    </Wrapper>
  );
};
