import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import { ShowMoreOptions } from 'components/molecules/ShowMoreOptions/ShowMoreOptions';
import { Wrapper } from 'components/molecules/ClientItem/ClientItem.styles';

export const ClientItem = ({
  data: { _id, name, category, date, value, status },
  handleOpenCurrentClient,
}) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShowMore(false);
    }
  };

  const handleShowMore = (e) => {
    e.stopPropagation();
    setIsShowMore(!isShowMore);
  };

  return (
    <Wrapper onClick={() => handleOpenCurrentClient(_id)}>
      <td>{name}</td>
      <td>{moment(date).format('MMMM Do YYYY, H:MM ')}</td>
      <td>{category}</td>
      <td>{value}</td>
      <td>{status}</td>
      <ShowMoreOptions
        ref={ref}
        id={_id}
        isActive={isShowMore}
        handleOpen={handleShowMore}
      />
    </Wrapper>
  );
};
