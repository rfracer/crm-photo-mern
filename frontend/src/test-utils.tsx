import React, { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import AppProviders from 'providers/AppProviders';
import { IntlProvider } from 'react-intl';
import { languages } from 'i18n/messages/index';

type Props = {
  children?: React.ReactNode;
};

const AllTheProviders: React.FC<Props> = ({ children }) => {
  return (
    <AppProviders>
      <IntlProvider locale={'en'} messages={languages['en']} defaultLocale="en">
        {children}
      </IntlProvider>
    </AppProviders>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };
