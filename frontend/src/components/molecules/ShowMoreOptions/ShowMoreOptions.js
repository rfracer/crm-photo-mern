import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IoEllipsisVertical, IoPencil, IoTrash } from 'react-icons/io5';
import { useRemoveClientMutation } from 'store';
import { Link } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';
import Modal from 'components/organisms/Modal/Modal';
import {
  ShowMoreList,
  ShowMoreWrapper,
  ShowMoreButton,
} from 'components/molecules/ShowMoreOptions/ShowMoreOptions.styles';
import { DeleteConfirm } from '../DeleteConfirm/DeleteConfirm';

export const ShowMoreOptions = React.forwardRef(
  ({ id, isActive, handleOpen }, ref) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleCloseModal = (e) => {
      e.stopPropagation();
      setModalIsOpen(false);
    };

    const handleOpenDeleteClient = (e, id) => {
      e.stopPropagation();
      setModalIsOpen(true);
    };

    const [removeClient] = useRemoveClientMutation();

    const handleRemoveClient = (e) => {
      e.stopPropagation();
      removeClient(id);
    };

    return (
      <ShowMoreWrapper onClick={(e) => e.stopPropagation()} ref={ref}>
        <Modal
          isOpen={modalIsOpen}
          handleClose={handleCloseModal}
          modalHeader={'Confirm Deletion'}
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
              <IoPencil /> Edit
            </Link>
          </li>
          <li onClick={handleOpenDeleteClient}>
            <IoTrash /> Delete
          </li>
        </ShowMoreList>
      </ShowMoreWrapper>
    );
  }
);

ShowMoreOptions.propTypes = {
  id: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  handleOpen: PropTypes.func,
};
