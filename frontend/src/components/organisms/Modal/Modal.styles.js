import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalWrapper = styled(ReactModal)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  min-height: 230px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  box-shadow: 0px -5px 25px -10px rgba(0, 0, 0, 0.3);
  z-index: 9999;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 500px;
    min-width: 300px;
  }

  &:focus {
    outline: none;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 15px 15px 0px 0px;

  h1 {
    font-size: 2.2rem;
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }
`;

export const CloseModalBtn = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 5px;
  right: 0;
  color: ${({ theme }) => theme.colors.white};
  transition: color 0.1s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }

  svg {
    width: 100%;
    height: 100%;
  }
`;
