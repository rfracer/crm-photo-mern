import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { CardHeader } from 'components/molecules/Card/Card';
import { Button } from 'components/atoms/Button/Button';
import {
  TableWrapper,
  StyledCard,
  ButtonWrapper,
} from 'components/organisms/DashboardActivities/DashboardActivities.style';
import { Spinner } from 'components/atoms/Spinner/Spinner';

export const DashboardActivities = ({
  data,
  isSuccess,
  isLoading,
  isError,
  error,
}) => {
  const [sortedData, setSortedData] = useState();
  const calcLastAcitivies = (clients) => {
    const sortedArray = [...clients];
    sortedArray.sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    return sortedArray.slice(0, 5);
  };
  useEffect(() => {
    if (isSuccess) {
      console.log(data);
      setSortedData(calcLastAcitivies(data));
    }
  }, [isSuccess, data]);

  return (
    <StyledCard>
      <CardHeader nofill>UPCOMING ACTIVITIES</CardHeader>
      <TableWrapper>
        {isLoading ? (
          <Spinner />
        ) : isSuccess && sortedData ? (
          <table>
            <tbody>
              {sortedData.map((client) => (
                <tr key={client._id}>
                  <td>{client.name}</td>
                  <td style={{ textTransform: 'capitalize' }}>
                    {client.category}
                  </td>
                  <td>{moment(client.date).format('MMMM Do YYYY ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : isError && error.status !== 404 ? null : (
          'No tasks'
        )}
      </TableWrapper>
      <ButtonWrapper>
        <Button isOutline as={Link} to="/clients">
          SHOW MORE
        </Button>
      </ButtonWrapper>
    </StyledCard>
  );
};
