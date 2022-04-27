import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardHeader } from 'components/molecules/Card/Card';
import { DashCardSpinner } from 'components/molecules/DashboardCard/DashboardCard.styles';

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

DashboardCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
  symbol: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default DashboardCard;
