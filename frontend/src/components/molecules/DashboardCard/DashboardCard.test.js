import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { render } from 'test-utils';
import DashboardCard from 'components/molecules/DashboardCard/DashboardCard';
import { IoFileTrayFull } from 'react-icons/io5';

const data = {
  title: 'Example title',
  icon: <IoFileTrayFull title="icon" />,
  value: '100',
  background: 'red',
  symbol: '$',
  isLoading: false,
};

const setup = () =>
  render(
    <DashboardCard
      title={data.title}
      icon={data.icon}
      value={data.value}
      background={data.background}
      symbol={data.symbol}
      isLoadin={data.isLoading}
    />
  );

describe('Dashboard Card', () => {
  test('Render dashboard card', () => {
    setup();
  });

  test('Should display spinner while loading', () => {
    render(<DashboardCard title="" isLoading={true} />);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  test('Should contain title, value and symbol', () => {
    setup();
    expect(screen.getByText(/example title/i)).toBeInTheDocument();
    expect(screen.getByText(/100/i)).toBeInTheDocument();
    expect(screen.getByText(/\$/i)).toBeInTheDocument();
  });

  test('Should display icon', () => {
    setup();
    expect(screen.getByTitle('icon')).toBeInTheDocument();
  });
});
