import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { CardHeader } from 'components/molecules/Card/Card';
import { Button } from 'components/atoms/Button/Button';
import {
  TableWrapper,
  StyledCard,
  ButtonWrapper,
} from 'components/organisms/DashboardActivities/DashboardActivities.styles';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import { Client, FetchCustomError } from 'types/types';
import { FormattedMessage } from 'react-intl';

type Props = {
  data: Client[];
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
  error: FetchCustomError;
};

export const DashboardActivities = ({
  data,
  isSuccess,
  isLoading,
  isError,
  error,
}: Props) => {
  const [sortedData, setSortedData] = useState<Client[]>();

  const calcLastAcitivies = (clients: Client[]) => {
    const sortedArray = [...clients];
    sortedArray.sort((a, b) => {
      return +new Date(a.date) - +new Date(b.date);
    });
    return sortedArray.slice(0, 5);
  };

  useEffect(() => {
    if (isSuccess) {
      setSortedData(calcLastAcitivies(data));
    }
  }, [isSuccess, data]);

  return (
    <StyledCard>
      <CardHeader nofill>
        <FormattedMessage
          id="dashboard.card_upcoming_activities_title"
          description="Upcoming activites card title"
          defaultMessage="Upcoming activites"
        />
      </CardHeader>
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
        ) : isError && error.status === 404 ? (
          <FormattedMessage
            id="dashboard.card_upcoming_activities_no_acitivities"
            description="Dashboard upcoming acitivites no acitivites text"
            defaultMessage="No activities yet"
          />
        ) : (
          <FormattedMessage
            id="dashboard.card_upcoming_activities_error"
            description="Dashboard upcoming acitivites server error"
            defaultMessage="Server error - contact page admin"
          />
        )}
      </TableWrapper>
      <ButtonWrapper>
        {isError && error.status === 404 ? (
          <Button $outline as={Link} to="/clients/add">
            <FormattedMessage
              id="dashboard.card_upcoming_activities_button_title"
              description="Dashboard upcoming acitivites card add btn name"
              defaultMessage="ADD"
            />
          </Button>
        ) : (
          <Button $outline as={Link} to="/clients">
            <FormattedMessage
              id="dashboard.card_upcoming_activities_show_more"
              description="Dashboard upcoming acitivites show more btn name"
              defaultMessage="SHOW MORE"
            />
          </Button>
        )}
      </ButtonWrapper>
    </StyledCard>
  );
};
