import React, { useState } from 'react';
import { ShowMoreOptions } from '../ShowMoreOptions/ShowMoreOptions';
import { Wrapper } from 'components/molecules/ClientItem/ClientItem.styles';

export const ClientItem = ({
  data: { _id, name, category, date, value, status },
}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const handleShowMore = () => {
    setIsShowMore(!isShowMore);
  };
  return (
    <Wrapper>
      <td>{name}</td>
      <td>{date}</td>
      <td>{category}</td>
      <td>{value}</td>
      <td>{status}</td>
      <ShowMoreOptions
        id={_id}
        isActive={isShowMore}
        handleOpen={handleShowMore}
      />
    </Wrapper>
  );
};
