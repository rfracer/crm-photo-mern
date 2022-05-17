import React from 'react';
import { Card, CardContent, CardHeader } from 'components/molecules/Card/Card';
import { DashCardSpinner } from 'components/molecules/DashboardCard/DashboardCard.styles';

type Props = {
  title: string;
  icon?: React.ReactNode;
  value: string | number;
  background?: string;
  symbol?: string;
  isLoading: boolean;
};

const DashboardCard = ({
  title,
  icon,
  value,
  background,
  symbol,
  isLoading,
}: Props) => {
  return (
    <Card>
      <CardHeader background={background}>
        {icon} {title}
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <DashCardSpinner data-testid="spinner" />
        ) : (
          <>
            {value}
            {symbol ? ' ' + symbol : null}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
