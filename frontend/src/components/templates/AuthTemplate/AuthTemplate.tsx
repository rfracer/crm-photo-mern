import React from 'react';
import { ReactComponent as BackgroundImage } from 'assets/image/login-image.svg';
import { ReactComponent as Logo } from 'assets/image/logo-white.svg';

import {
  Wrapper,
  StyledLogo,
  ImageWrapper,
  FormWrapper,
  DecorWrapper,
} from 'components/templates/AuthTemplate/AuthTemplate.styles';

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
          Make your Photographer life <span>easier</span>
        </h2>
        <p>Check how we changed life of thousands photographers in few steps</p>
      </DecorWrapper>
      <FormWrapper>{children}</FormWrapper>
    </Wrapper>
  );
};

export default AuthTemplate;
