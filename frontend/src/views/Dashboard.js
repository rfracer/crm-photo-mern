import React from 'react';
import styled, { withTheme } from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { IoFileTrayFull, IoCheckbox, IoCash } from 'react-icons/io5';
import { Card, CardContent } from 'components/molecules/Card/Card';
import chartMockup from 'assets/chart-mock.png';

const BasicInfoRowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
`;

const CardHeader = styled.h3`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fontSize.normal};
  margin: 0;
  padding: 20px 10px;
  text-align: center;
  background: ${({ background }) => background};
  color: ${({ theme, nofill }) =>
    nofill ? theme.colors.black : theme.colors.white};
  border-bottom: 1px solid
    ${({ theme, nofill }) =>
      nofill ? theme.colors.lightGrey : theme.colors.white};

  svg {
    margin-right: 1rem;
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const ActivitesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 3rem;
  gap: 3rem;
`;

const ComingEvents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  table {
    margin-bottom: 4rem;

    td {
      padding: 0.4rem;
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }
`;

const ChartWrapper = styled.div`
  img {
    width: 100%;
  }
`;

const Dashboard = ({ theme }) => {
  return (
    <ViewWrapper>
      <Title>Dashboard</Title>
      <BasicInfoRowWrapper>
        <Card>
          <CardHeader background={theme.colors.lightSecondary}>
            <IoFileTrayFull /> LEADS
          </CardHeader>
          <CardContent>50</CardContent>
        </Card>
        <Card>
          <CardHeader background={theme.colors.secondary}>
            <IoCheckbox /> CONTRACTS
          </CardHeader>
          <CardContent>50</CardContent>
        </Card>
        <Card>
          <CardHeader background={theme.colors.lightMain}>
            <IoCash /> EARNINGS
          </CardHeader>
          <CardContent>50</CardContent>
        </Card>
      </BasicInfoRowWrapper>

      <ActivitesWrapper>
        <Card>
          <CardHeader nofill>Upcoming Activities</CardHeader>
          <ComingEvents>
            <table>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            </table>
            <Button as="a" isOutline>
              SHOW ALL
            </Button>
          </ComingEvents>
        </Card>
        <Card>
          <ChartWrapper>
            <img src={chartMockup} alt="" />
          </ChartWrapper>
        </Card>
      </ActivitesWrapper>
    </ViewWrapper>
  );
};
export default withTheme(Dashboard);
