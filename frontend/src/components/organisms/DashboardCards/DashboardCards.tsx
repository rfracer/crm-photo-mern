import React, { useEffect, useState } from 'react';
import { DefaultTheme, withTheme } from 'styled-components';
import { CardsWrapper } from 'components/organisms/DashboardCards/DashboardCards.styles';
import { IoFileTrayFull, IoCheckbox, IoCash } from 'react-icons/io5';
import DashboardCard from 'components/molecules/DashboardCard/DashboardCard';
import { Client } from 'types/types';

type Props = {
  theme: DefaultTheme;
  data: Client[];
  isSuccess: boolean;
  isLoading: boolean;
};

const DashboardCards = ({ theme, data, isSuccess, isLoading }: Props) => {
  const [leadsAmount, setLeadsAmount] = useState(0);
  const [contractsAmount, setContractsAmount] = useState(0);
  const [earnings, setEarnings] = useState(0);

  const calculateLeads = (data: Client[]) => {
    const results = data.filter((client) => client.status === 'lead');
    setLeadsAmount(results.length);
  };

  const calculateContracts = (data: Client[]) => {
    const results = data.filter((client) => client.status === 'contract');
    setContractsAmount(results.length);
  };

  const calculateEarnings = (data: Client[]) => {
    const earnings: number = Object.values(data).reduce(
      (t, { value }) => t + value,
      0
    );
    setEarnings(earnings);
  };

  useEffect(() => {
    if (isSuccess) {
      calculateLeads(data);
      calculateContracts(data);
      calculateEarnings(data);
    }
  }, [isSuccess, data]);

  return (
    <CardsWrapper>
      <DashboardCard
        title="LEADS"
        icon={<IoFileTrayFull title="icon" />}
        value={leadsAmount}
        isLoading={isLoading}
        background={theme.colors.lightSecondary}
      />
      <DashboardCard
        title="CONTRACTS"
        icon={<IoCheckbox title="icon" />}
        value={contractsAmount}
        isLoading={isLoading}
        background={theme.colors.secondary}
      />
      <DashboardCard
        title="PREDICTED EARNINGS"
        icon={<IoCash title="icon" />}
        value={earnings}
        isLoading={isLoading}
        symbol="$"
        background={theme.colors.lightMain}
      />
    </CardsWrapper>
  );
};

export default withTheme(DashboardCards);
