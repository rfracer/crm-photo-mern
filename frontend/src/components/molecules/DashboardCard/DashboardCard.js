import React from 'react';
import { Card, CardContent, CardHeader } from 'components/molecules/Card/Card';
import { DashCardSpinner } from 'components/molecules/DashboardCard/DashboardCard.style';

const DashboardCard = ({
  title,
  icon,
  value,
  background,
  symbol,
  isLoading,
}) => {
  return (
    <Card>
      <CardHeader background={background}>
        {icon} {title}
      </CardHeader>
      <CardContent>
        {isLoading ? (
          <DashCardSpinner />
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
