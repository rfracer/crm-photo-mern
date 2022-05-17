import React, { useState, useRef, useEffect } from 'react';
import moment from 'moment';
import { Client } from 'types/types';
import { ShowMoreOptions } from 'components/molecules/ShowMoreOptions/ShowMoreOptions';
import { Wrapper } from 'components/molecules/ClientItem/ClientItem.styles';

type Props = {
  data: Client;
  handleOpenCurrentClient: (id: string) => void;
};

export const ClientItem = ({
  data: { _id, name, category, date, value, status },
  handleOpenCurrentClient,
}: Props) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const ref = useRef<HTMLTableCellElement>(null);
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
      setIsShowMore(false);
    }
  };

  const handleShowMore = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsShowMore(!isShowMore);
  };
  if (_id) {
    return (
      <Wrapper onClick={() => handleOpenCurrentClient(_id)}>
        <td>{name}</td>
        <td>{moment(date).format('MMMM Do YYYY, H:MM ')}</td>
        <td>{category}</td>
        <td>{value}</td>
        <td>{status}</td>
        <ShowMoreOptions
          id={_id}
          isActive={isShowMore}
          handleOpen={handleShowMore}
          ref={ref}
        />
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <td>Client loading error</td>
      </Wrapper>
    );
  }
};
