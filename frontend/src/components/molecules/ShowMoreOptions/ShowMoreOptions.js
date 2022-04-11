import React from 'react';
import { IoEllipsisVertical, IoPencil, IoTrash } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import {
  ShowMoreList,
  ShowMoreWrapper,
  ShowMoreButton,
} from 'components/molecules/ShowMoreOptions/ShowMoreOptions.style';

export const ShowMoreOptions = ({ id, isActive, handleOpen }) => {
  return (
    <ShowMoreWrapper>
      <ShowMoreButton onClick={handleOpen}>
        <IoEllipsisVertical />
      </ShowMoreButton>
      <ShowMoreList show={isActive}>
        <li>
          <Link key={id} to={`/clients/edit/${id}`}>
            <IoPencil /> Edit
          </Link>
        </li>
        <li>
          <IoTrash /> Delete
        </li>
      </ShowMoreList>
    </ShowMoreWrapper>
  );
};
