import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'hooks/store';
import { setUser } from 'store/state/authSlice';
import { Wrapper, OptionsList, OptionItem } from './UserMenu.style';
import { useLogoutUserMutation, baseApi } from 'store';
import { IoLogOutOutline, IoBuildOutline } from 'react-icons/io5';
import { FormattedMessage } from 'react-intl';

type Props = {
  handleMenuStatus: (value: boolean) => void;
  isOpen: boolean;
};
type Ref = HTMLDivElement;

export const UserMenu = React.forwardRef<Ref, Props>(
  ({ handleMenuStatus, isOpen }, ref) => {
    const [logoutUser, { isSuccess }] = useLogoutUserMutation();
    const dispatch = useAppDispatch();

    const handleLogout = () => {
      logoutUser();
    };

    const handleCloseMenu = () => {
      handleMenuStatus(false);
    };
    useEffect(() => {
      if (isSuccess) {
        dispatch(setUser({ email: null }));
        dispatch(baseApi.util.resetApiState());
      }
    }, [isSuccess, dispatch]);

    return (
      <Wrapper isOpen={isOpen} ref={ref}>
        <OptionsList>
          <OptionItem>
            <Link onClick={handleCloseMenu} to="settings">
              <IoBuildOutline />{' '}
              <FormattedMessage
                id="topbar.settings"
                description="User menu settings link name"
                defaultMessage="Settings"
              />
            </Link>
          </OptionItem>
          <OptionItem onClick={handleLogout}>
            <IoLogOutOutline />{' '}
            <FormattedMessage
              id="topbar.logout"
              description="User menu logout button"
              defaultMessage="Logout"
            />
          </OptionItem>
        </OptionsList>
      </Wrapper>
    );
  }
);
