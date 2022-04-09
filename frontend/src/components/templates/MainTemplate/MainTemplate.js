import React from 'react';
import PropTypes from 'prop-types';
import {
  ContentWrapper,
  Wrapper,
} from 'components/templates/MainTemplate/MainTemplate.styles';
import { Navigation } from 'components/organisms/Navigation/Navigation';

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <ContentWrapper>{children}</ContentWrapper>
    </Wrapper>
  );
};

MainTemplate.propTypes = {
  children: PropTypes.node.isRequired,
};
