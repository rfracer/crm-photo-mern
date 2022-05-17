import React from 'react';
import { ModalWrapper, CloseModalBtn, ModalHeader } from './Modal.styles';
import { IoCloseOutline } from 'react-icons/io5';

type Props = {
  isOpen: boolean;
  children?: React.ReactNode;
  handleClose: (e: React.MouseEvent<HTMLElement>) => void;
  modalHeader: string;
};

const Modal = ({ isOpen, children, handleClose, modalHeader }: Props) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper
      appElement={document.getElementById('root') as HTMLElement}
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

export default Modal;
