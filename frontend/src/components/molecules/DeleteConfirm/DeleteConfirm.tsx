import React from 'react';
import { Button } from 'components/atoms/Button/Button';
import {
  Wrapper,
  ButtonWrapper,
} from 'components/molecules/DeleteConfirm/DeleteConfirm.styles';

type Props = {
  handleRemoveClient: (e: React.MouseEvent<HTMLElement>) => void;
  handleClose: (e: React.MouseEvent<HTMLElement>) => void;
};

export const DeleteConfirm = ({ handleRemoveClient, handleClose }: Props) => {
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
