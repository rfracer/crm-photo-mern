import React, { useEffect, useState } from 'react';
import { useGetTasksQuery } from 'store';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import { TaskItem } from 'components/molecules/TaskItem/TaskItem';
import {
  StyledList,
  SelectFilter,
  StyledMessage,
} from 'components/organisms/TasksList/TasksList.styles';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { Task } from 'types/types';

export const TasksList = () => {
  const { data, error, isFetching, isSuccess, isError, isLoading } =
    useGetTasksQuery();

  const [selectedFilter, setSelectedFilter] = useState('all');
  const [results, setResults] = useState<Task[] | null>(null);

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  const setBooleanStatus = (status: string) => {
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
      ) : isError && 'status' in error && error.status !== 404 ? null : (
        <StyledMessage>No tasks</StyledMessage>
      )}
      {isError && 'status' in error && error.status !== 404 ? (
        <FormMessage>{error.data.error.message}</FormMessage>
      ) : null}
    </StyledList>
  );
};
