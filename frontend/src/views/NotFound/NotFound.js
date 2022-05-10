import React from 'react';
import { Link } from 'react-router-dom';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Wrapper } from './NotFound.style.js';

const NotFound = () => {
  return (
    <ViewWrapper>
      <Wrapper>
        <h1>404 - Not Found!</h1>
        <p>Check other sites of our App</p>
        <Link to="/">Dashboard page</Link>
      </Wrapper>
    </ViewWrapper>
  );
};

export default NotFound;
