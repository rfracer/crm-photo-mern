import React, { useState } from 'react';
import { ShowMoreOptions } from 'components/molecules/ShowMoreOptions/ShowMoreOptions';
import { Wrapper } from 'components/molecules/ClientItem/ClientItem.styles';

export const ClientItem = ({
  data: { _id, name, category, date, value, status },
  handleOpenCurrentClient,
}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const handleShowMore = (e) => {
    e.stopPropagation();
    setIsShowMore(!isShowMore);
  };

  return (
    <Wrapper onClick={() => handleOpenCurrentClient(_id)}>
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
