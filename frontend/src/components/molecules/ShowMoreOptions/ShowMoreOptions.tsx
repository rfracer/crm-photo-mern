import React, { useState } from 'react';
import { IoEllipsisVertical, IoPencil, IoTrash } from 'react-icons/io5';
import { useRemoveClientMutation } from 'store';
import { Link } from 'react-router-dom';
import { useIntl, FormattedMessage } from 'react-intl';
import Modal from 'components/organisms/Modal/Modal';
import {
  ShowMoreList,
  ShowMoreWrapper,
  ShowMoreButton,
} from 'components/molecules/ShowMoreOptions/ShowMoreOptions.styles';
import { DeleteConfirm } from '../DeleteConfirm/DeleteConfirm';

type Props = {
  id: string;
  isActive: boolean;
  handleOpen: (e: React.MouseEvent<HTMLElement>) => void;
};
type Ref = HTMLTableCellElement;

export const ShowMoreOptions = React.forwardRef<Ref, Props>(
  ({ id, isActive, handleOpen }, ref) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [removeClient] = useRemoveClientMutation();
    const intl = useIntl();

    const handleCloseModal = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      setModalIsOpen(false);
    };

    const handleOpenDeleteClient = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      setModalIsOpen(true);
    };

    const handleRemoveClient = (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      removeClient(id);
    };

    return (
      <ShowMoreWrapper ref={ref} onClick={(e) => e.stopPropagation()}>
        <Modal
          isOpen={modalIsOpen}
          handleClose={handleCloseModal}
          modalHeader={intl.formatMessage({
            id: 'clients.modal.confirm_deletion',
          })}
        >
          <DeleteConfirm
            handleRemoveClient={handleRemoveClient}
            handleClose={handleCloseModal}
          />
        </Modal>
        <ShowMoreButton onClick={handleOpen}>
          <IoEllipsisVertical />
        </ShowMoreButton>
        <ShowMoreList show={isActive}>
          <li>
            <Link key={id} to={`/clients/edit/${id}`}>
              <IoPencil title="pencil icon" />{' '}
              <FormattedMessage id="global.edit" defaultMessage="Edit" />
            </Link>
          </li>
          <li role="button" onClick={handleOpenDeleteClient}>
            <IoTrash title="trash icon" />{' '}
            <FormattedMessage id="global.delete" defaultMessage="Delete" />
          </li>
        </ShowMoreList>
      </ShowMoreWrapper>
    );
  }
);
