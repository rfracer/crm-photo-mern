import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useRemoveTaskMutation, useUpdateTaskMutation } from 'store';
import {
  Wrapper,
  TaskName,
  TaskPriority,
  ButtonsWrapper,
  StyledButton,
} from 'components/molecules/TaskItem/TaskItem.styles';
import { IoCheckmarkDoneOutline, IoTrash, IoArrowUp } from 'react-icons/io5';

export const TaskItem = ({ data }) => {
  const { _id: id, name, priority, checked } = data;
  const [removeTask] = useRemoveTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleDeleteTask = () => {
    removeTask(id);
  };

  const handleUpdateTask = (data) => {
    const { checked, id } = data;
    const updated = { ...data, checked: !checked };
    updateTask({ id, updated });
  };

  return (
    <Wrapper checked={checked}>
      <TaskName checked={checked}>{!name.length ? 'No name' : name}</TaskName>
      <TaskPriority value={priority}>{priority}</TaskPriority>
      <ButtonsWrapper>
        <StyledButton
          data-testid="update-task"
          onClick={() => handleUpdateTask(data)}
          type="check"
        >
          {checked ? <IoArrowUp /> : <IoCheckmarkDoneOutline />}
        </StyledButton>
        <StyledButton
          data-testid="delete-task"
          onClick={handleDeleteTask}
          type="trash"
        >
          <IoTrash />
        </StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};

TaskItem.propTypes = {
  data: PropTypes.object,
};
