import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';

const Wrapper = styled.div`
  padding: 2rem;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-top: 2rem;
`;

export const DeleteConfirm = ({ handleRemoveClient, handleClose }) => {
  return (
    <Wrapper>
      <p>Are you sure you want to remove this client?</p>
      <ButtonWrapper>
        <Button onClick={handleRemoveClient}>YES</Button>
        <Button onClick={handleClose} isSecondary>
          NO
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};

DeleteConfirm.propTypes = {
  handleRemoveClient: PropTypes.func,
  handleClose: PropTypes.func,
};
