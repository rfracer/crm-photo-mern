import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import {
  Wrapper,
  ButtonWrapper,
} from 'components/molecules/DeleteConfirm/DeleteConfirm.styles';

export const DeleteConfirm = ({ handleRemoveClient, handleClose }) => {
  return (
    <Wrapper>
      <p>Are you sure you want to remove this client?</p>
      <ButtonWrapper>
        <Button onClick={handleRemoveClient}>YES</Button>
        <Button onClick={handleClose} $secondary>
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
