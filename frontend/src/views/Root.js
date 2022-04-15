import React, { useEffect } from 'react';
import AuthenticatedApp from 'views/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/state/authSlice';
import { useGetUserQuery } from 'store';
import { useSelector } from 'react-redux';
import { Spinner } from 'components/atoms/Spinner/Spinner';

const Root = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const { data, isSuccess, isLoading, isError } = useGetUserQuery({ user });

  useEffect(() => {
    if (!user && isSuccess) {
      dispatch(setUser(data.user));
    }
  }, [data]);

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
