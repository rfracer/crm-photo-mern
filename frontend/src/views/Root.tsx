import React, { useEffect } from 'react';
import AuthenticatedApp from 'views/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { setUser } from 'store/state/authSlice';
import { useGetUserQuery } from 'store';
import { Spinner } from 'components/atoms/Spinner/Spinner';

const Root = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { data, isSuccess, isLoading, isError } = useGetUserQuery();

  useEffect(() => {
    if (!user && isSuccess) {
      dispatch(setUser(data.user));
    }
  }, [user, data, isSuccess, dispatch]);

  return (
    <>
      {user ? (
        isLoading ? (
          <Spinner />
        ) : (
          <AuthenticatedApp />
        )
      ) : isError && !user ? (
        <UnauthenticatedApp />
      ) : null}
    </>
  );
};

export default Root;
