import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper, CloseModalBtn, ModalHeader } from './Modal.styles';
import { IoCloseOutline } from 'react-icons/io5';

const Modal = ({ isOpen, children, handleClose, modalHeader }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper
      appElement={document.getElementById('root')}
      isOpen={isOpen}
      onRequestClose={handleClose}
    >
      <ModalHeader>
        <h1>{modalHeader}</h1>
        <CloseModalBtn onClick={handleClose}>
          <IoCloseOutline title="Close icon" />
        </CloseModalBtn>
      </ModalHeader>
      {children}
    </ModalWrapper>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  isOpen: PropTypes.bool,
  children: PropTypes.element,
  modalHeader: PropTypes.string,
};

export default Modal;
