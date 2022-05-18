import React from 'react';
import { useGetClientsQuery } from 'store';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import DashboardCards from 'components/organisms/DashboardCards/DashboardCards';
import { DashboardActivities } from 'components/organisms/DashboardActivities/DashboardActivities';
import { DashboardChart } from 'components/organisms/DashboardChart/DashboardChart';
import { ActivitesWrapper } from 'views/Dashboard/Dashboard.styles';
import { FetchCustomError } from 'types/types';
import { FormattedMessage } from 'react-intl';

const Dashboard = () => {
  const { data, error, isSuccess, isLoading, isError } = useGetClientsQuery();

  const errorData = error as FetchCustomError;
  return (
    <ViewWrapper>
      <Title>
        <FormattedMessage id="dashboard.title" />
      </Title>
      <DashboardCards
        data={data ? data : []}
        isSuccess={isSuccess}
        isLoading={isLoading}
      />
      <ActivitesWrapper>
        <DashboardActivities
          isSuccess={isSuccess}
          isLoading={isLoading}
          data={data ? data : []}
          isError={isError}
          error={errorData}
        />

        <DashboardChart
          isSuccess={isSuccess}
          isLoading={isLoading}
          isError={isError}
          error={errorData}
          baseData={data ? data : []}
          title="EARNINGS STATISTICS"
        />
      </ActivitesWrapper>
    </ViewWrapper>
  );
};
export default Dashboard;
