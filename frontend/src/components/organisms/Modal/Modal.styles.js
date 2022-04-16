import styled from 'styled-components';
import ReactModal from 'react-modal';
import { theme } from 'assets/styles/theme';

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

  ${({ theme }) => theme.mq.desktop} {
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
  background-color: ${({ theme }) => theme.colors.main};
  border-radius: 15px 15px 0px 0px;
  width: 100%;
  height: 60px;
  h1 {
    font-size: 22px;
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

  svg {
    width: 100%;
    height: 100%;
  }
`;
