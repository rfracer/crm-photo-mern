import React from 'react';
import { ReactComponent as BackgroundImage } from 'assets/image/login-image.svg';
import { ReactComponent as Logo } from 'assets/logo-white.svg';

import {
  Wrapper,
  StyledLogo,
  ImageWrapper,
  FormWrapper,
  DecorWrapper,
} from 'components/templates/AuthTemplate/AuthTemplate.styles';

const AuthTemplate = ({ children }) => {
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
          Make your Photographer life <span>easier</span>
        </h2>
        <p>Check how we changed life of thousands photographers in few steps</p>
      </DecorWrapper>
      <FormWrapper>{children}</FormWrapper>
    </Wrapper>
  );
};

export default AuthTemplate;