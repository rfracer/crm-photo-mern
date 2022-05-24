import React from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { languages } from 'i18n/messages/index';
type Props = {
  children: React.ReactNode;
};

const locale = navigator.language.split('-')[0];

const AppProviders = ({ children }: Props) => {
  return (
    <IntlProvider locale={locale} messages={languages['pl']} defaultLocale="en">
      <Provider store={store}>
        <Router>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </Router>
      </Provider>
    </IntlProvider>
  );
};

export default AppProviders;
