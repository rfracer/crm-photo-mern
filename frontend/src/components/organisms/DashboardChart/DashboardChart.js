import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import {
  ChartWrapper,
  ChartCard,
  ErrorMessage,
  SelectFilter,
} from 'components/organisms/DashboardChart/DashboardChart.styles';
import { CardHeader } from 'components/molecules/Card/Card';
import { Spinner } from 'components/atoms/Spinner/Spinner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const DashboardChart = ({
  baseData,
  isSuccess,
  isLoading,
  isError,
  title,
  error,
}) => {
  const thisYear = new Date().getFullYear();
  const [selectedFilter, setSelectedFilter] = useState(thisYear);
  const [years, setYears] = useState([thisYear]);

  const handleFilterChange = (e) => {
    setSelectedFilter(+e.target.value);
  };

  const [chartData, setChartData] = useState([]);
  const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Get all data from specific year
  const sortByYear = (data, year) => {
    const filteredData = data.filter((client) => {
      return moment(client.date).year() === year;
    });
    return filteredData;
  };

  // Connect data to specific month of the year
  const arrayByMonth = (data) => {
    const dataByMonth = [];
    labels.forEach((label) => {
      let sum = 0;
      data.forEach((client) => {
        if (moment(client.date).format('MMMM') === label) {
          sum += client.value;
        }
      });
      dataByMonth.push(sum);
    });
    return dataByMonth;
  };

  useEffect(() => {
    if (isSuccess && baseData) {
      setYears([...new Set(baseData.map((obj) => moment(obj.date).year()))]);
    }
  }, [baseData, isSuccess]);

  useEffect(() => {
    if (baseData) {
      const selectedYearData = sortByYear(baseData, selectedFilter);
      setChartData(arrayByMonth(selectedYearData));
    }
  }, [baseData, isLoading, selectedFilter]);

  const data = {
    labels,
    datasets: [
      {
        label: selectedFilter,
        data: chartData,
        borderColor: '#FFB74D',
        backgroundColor: '#FFB74D',
      },
    ],
  };
  const options = {
    responsive: true,
    legend: {
      display: false,
    },
  };

  return (
    <ChartCard>
      <CardHeader nofill>{title}</CardHeader>{' '}
      {isLoading ? (
        <Spinner />
      ) : isSuccess && baseData ? (
        <>
          <SelectFilter
            value={selectedFilter}
            onChange={handleFilterChange}
            as="select"
          >
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </SelectFilter>

          <ChartWrapper>
            <Line options={options} data={data} />{' '}
          </ChartWrapper>
        </>
      ) : isError && error.status !== 404 ? null : (
        <ErrorMessage>No data to show a chart</ErrorMessage>
      )}
    </ChartCard>
  );
};

DashboardChart.propTypes = {
  isSuccess: PropTypes.bool,
  isLoading: PropTypes.bool,
  isError: PropTypes.bool,
  title: PropTypes.string.isRequired,
  error: PropTypes.object,
};
