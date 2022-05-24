import React from 'react';
import { FormattedMessage } from 'react-intl';
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
      <p>
        <FormattedMessage
          id="clients.modal.are_you_sure"
          description="Delete modal header"
          defaultMessage="Are you sure you want to remove this client?"
        />
      </p>
      <ButtonWrapper>
        <Button onClick={handleRemoveClient}>
          <FormattedMessage id="global.yes" defaultMessage="Yes" />
        </Button>
        <Button onClick={handleClose} $secondary>
          <FormattedMessage id="global.no" defaultMessage="No" />
        </Button>
      </ButtonWrapper>
    </Wrapper>
  );
};
