import React, { useEffect, useState } from 'react';
import { useGetTasksQuery } from 'store';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import { TaskItem } from 'components/molecules/TaskItem/TaskItem';
import {
  StyledList,
  SelectFilter,
  StyledMessage,
} from 'components/organisms/TasksList/TasksList.style';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';

export const TasksList = () => {
  const { data, error, isFetching, isSuccess, isError, isLoading } =
    useGetTasksQuery();

  const [selectedFilter, setSelectedFilter] = useState('all');

  const [results, setResults] = useState();

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };
  const setBooleanStatus = (status) => {
    if (status === 'completed') return true;
    if (status === 'uncompleted') return false;
  };

  useEffect(() => {
    if (isSuccess && !isFetching && selectedFilter !== 'all') {
      const value = setBooleanStatus(selectedFilter);
      const filteredTasks = data.filter((task) => task.checked === value);
      filteredTasks.length > 0 ? setResults(filteredTasks) : setResults(null);
    } else if (isSuccess && selectedFilter === 'all') {
      setResults(data);
    } else {
      setResults(null);
    }
  }, [data, isSuccess, isFetching, selectedFilter]);

  return (
    <StyledList>
      <SelectFilter
        value={selectedFilter}
        onChange={handleFilterChange}
        as="select"
      >
        <option value="all">ALL</option>
        <option value="completed">COMPLETED</option>
        <option value="uncompleted">UNCOMPLETED</option>
      </SelectFilter>
      {isLoading ? (
        <Spinner />
      ) : isSuccess && results ? (
        results.map((client) => <TaskItem key={client._id} data={client} />)
      ) : isError && error.status !== 404 ? null : (
        <StyledMessage>No tasks</StyledMessage>
      )}
      {isError && error.status !== 404 ? (
        <FormMessage>{error}</FormMessage>
      ) : null}
    </StyledList>
  );
};
