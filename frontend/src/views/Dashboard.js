import React, { useEffect, useState } from 'react';
import styled, { withTheme } from 'styled-components';
import { useGetClientsQuery } from 'store';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { Card, CardHeader } from 'components/molecules/Card/Card';
import DashboardCards from 'components/organisms/DashboardCards/DashboardCards';
import { DashboardActivities } from 'components/organisms/DashboardActivities/DashboardActivities';
import { DashboardChart } from 'components/organisms/DashboardChart/DashboardChart';

const ActivitesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin-top: 3rem;
  gap: 3rem;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
  }
`;

const Dashboard = ({ theme }) => {
  const { data, error, isFetching, isSuccess, isLoading, isError } =
    useGetClientsQuery();
  return (
    <ViewWrapper>
      <Title>Dashboard</Title>
      <DashboardCards data={data} isSuccess={isSuccess} isLoading={isLoading} />
      <ActivitesWrapper>
        <DashboardActivities
          isSuccess={isSuccess}
          isLoading={isLoading}
          data={data}
          isError={isError}
          error={error}
        />

        <DashboardChart
          isSuccess={isSuccess}
          isLoading={isLoading}
          isFetching={isFetching}
          baseData={data}
          title="EARNINGS STATISTICS"
        />
      </ActivitesWrapper>
    </ViewWrapper>
  );
};
export default withTheme(Dashboard);
