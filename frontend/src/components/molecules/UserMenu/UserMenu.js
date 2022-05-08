import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/state/authSlice';
import { Wrapper, OptionsList, OptionItem } from './UserMenu.style';
import { useLogoutUserMutation, baseApi } from 'store';
import { IoLogOutOutline, IoBuildOutline } from 'react-icons/io5';

export const UserTab = React.forwardRef(({ handleTabStatus, isOpen }, ref) => {
  const [logoutUser, { isSuccess }] = useLogoutUserMutation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    logoutUser();
  };

  const handleCloseTab = () => {
    handleTabStatus(false);
  };
  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser({ user: null }));
      dispatch(baseApi.util.resetApiState());
    }
  }, [isSuccess, dispatch]);

  return (
    <Wrapper isOpen={isOpen} ref={ref}>
      <OptionsList>
        <OptionItem>
          <Link onClick={handleCloseTab} to="settings">
            <IoBuildOutline /> Settings
          </Link>
        </OptionItem>
        <OptionItem onClick={handleLogout}>
          <IoLogOutOutline /> Logout
        </OptionItem>
      </OptionsList>
    </Wrapper>
  );
});
