import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ReactComponent as BackgroundImage } from 'assets/image/login-image.svg';
import { ReactComponent as Logo } from 'assets/image/logo-white.svg';

import {
  Wrapper,
  StyledLogo,
  ImageWrapper,
  FormWrapper,
  DecorWrapper,
} from 'components/templates/AuthTemplate/AuthTemplate.styles';
import LanguagesAuthSelect from 'components/molecules/LanguagesAuthSelect/LanguagesAuthSelect';

type Props = {
  children: React.ReactNode;
};

const AuthTemplate = ({ children }: Props) => {
  return (
    <Wrapper>
      <DecorWrapper>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <ImageWrapper>
          <BackgroundImage />
        </ImageWrapper>
        <h2>
          <FormattedMessage
            id="auth.heading"
            description="App auth heading part without decor"
            defaultMessage="Make your Photographer life"
          />{' '}
          <span>
            <FormattedMessage
              id="auth.heading_decor"
              description="App auth heading part with decor underline"
              defaultMessage="easier"
            />
          </span>
        </h2>
        <p>
          <FormattedMessage
            id="auth.subheading"
            description="Check how we changed life of thousands photographers in few steps"
            defaultMessage="easier"
          />
        </p>
      </DecorWrapper>
      <LanguagesAuthSelect />
      <FormWrapper>{children}</FormWrapper>
    </Wrapper>
  );
};

export default AuthTemplate;
