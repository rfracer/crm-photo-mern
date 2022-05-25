import React, { useEffect, useState } from 'react';
import AuthenticatedApp from 'views/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { setUser } from 'store/state/authSlice';
import { useGetUserQuery } from 'store';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import { IntlProvider } from 'react-intl';
import { languages } from 'i18n/messages/index';

const Root = () => {
  const [language, setLanguage] = useState('en');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { data, isSuccess, isLoading, isError } = useGetUserQuery();

  useEffect(() => {
    if (!user && isSuccess) {
      dispatch(setUser(data.user));
      setLanguage(data.user.settings.language);
    } else if (user) {
      setLanguage(user.settings.language);
    }
  }, [user, data, isSuccess, dispatch]);

  return (
    <IntlProvider
      locale={language}
      messages={languages[language]}
      defaultLocale="en"
    >
      {user ? (
        isLoading ? (
          <Spinner />
        ) : (
          <AuthenticatedApp />
        )
      ) : isError && !user ? (
        <UnauthenticatedApp />
      ) : null}
    </IntlProvider>
  );
};

export default Root;
