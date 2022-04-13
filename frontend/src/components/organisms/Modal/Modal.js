import React from 'react';
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
          <IoCloseOutline />
        </CloseModalBtn>
      </ModalHeader>
      {children}
    </ModalWrapper>
  );
};

export default Modal;
