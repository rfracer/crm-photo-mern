import React from 'react';
import styled from 'styled-components';
import { IoEllipsisVertical } from 'react-icons/io5';

const ShowMoreWrapper = styled.td`
  position: relative;
`;

const ShowMoreList = styled.ul`
  position: absolute;
  list-style: none;
  top: 40px;
  right: 10px;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 10px;
  border: 1px solid grey;
  font-weight: 600;
  z-index: 100;
  display: ${({ show }) => (show ? 'block' : 'none')};
  box-shadow: ${({ theme }) => theme.inputShadow};

  li {
    padding-bottom: 0.5rem;
  }
`;

const ShowMoreButton = styled.button`
  cursor: pointer;
  text-align: center;
  padding: 0.2rem;
  background-color: transparent;
  border-radius: 50px;
  border: none;
  font-weight: 500;

  svg {
    color: ${({ theme }) => theme.colors.main};
  }
`;

export const ShowMoreOptions = ({ id, isActive, handleOpen }) => {
  return (
    <ShowMoreWrapper>
      <ShowMoreButton onClick={handleOpen}>
        <IoEllipsisVertical />
      </ShowMoreButton>
      <ShowMoreList show={isActive}>
        <li>SHOW</li>
        <li>EDIT</li>
        <li>DELTE</li>
      </ShowMoreList>
    </ShowMoreWrapper>
  );
};
