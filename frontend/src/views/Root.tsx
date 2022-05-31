import React, { useEffect, useState } from 'react';
import AuthenticatedApp from 'views/AuthenticatedApp';
import UnauthenticatedApp from 'views/UnauthenticatedApp';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { setUser } from 'store/state/authSlice';
import { setLanguage } from 'store/state/settingsSlice';
import { useGetUserQuery } from 'store';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import { IntlProvider } from 'react-intl';
import { languages } from 'i18n/messages/index';

const Root = () => {
  const [localLanguage, setLocalLanguage] = useState('en');
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const language = useAppSelector((state) => state.settings.language);
  const { data, isSuccess, isLoading, isError } = useGetUserQuery();

  useEffect(() => {
    if (!user && isSuccess) {
      dispatch(setUser(data.user));
      dispatch(setLanguage(data.settings.language));
      setLocalLanguage(data.settings.language);
    } else if (language) {
      setLocalLanguage(language);
    } else {
      setLocalLanguage(navigator.language);
      dispatch(setLanguage(navigator.language.split('-')[0]));
    }
  }, [user, language, data, isSuccess, dispatch]);

  return (
    <IntlProvider
      locale={localLanguage}
      messages={languages[localLanguage]}
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
