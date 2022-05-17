import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentWrapper,
  Wrapper,
} from 'components/templates/MainTemplate/MainTemplate.styles';
import { Navigation } from 'components/organisms/Navigation/Navigation';
import { TopBar } from 'components/organisms/TopBar/TopBar';

type Props = {
  children: React.ReactNode;
};

export const MainTemplate = ({ children }: Props) => {
  return (
    <Wrapper>
      <Navigation />
      <TopBar />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
