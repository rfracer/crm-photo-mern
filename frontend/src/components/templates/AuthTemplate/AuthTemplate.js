import React from 'react';
import { ReactComponent as BackgroundImage } from 'assets/image/login-image.svg';
import { ReactComponent as Logo } from 'assets/logo-white.svg';

import {
  Wrapper,
  StyledLogo,
  ImageWrapper,
} from 'components/templates/AuthTemplate/AuthTemplate.style';

const AuthTemplate = ({ children }) => {
  return (
    <Wrapper>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <ImageWrapper>
        <BackgroundImage />
      </ImageWrapper>
      {children}
    </Wrapper>
  );
};

export default AuthTemplate;
