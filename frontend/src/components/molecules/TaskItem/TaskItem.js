import React, { useState } from 'react';
import { useRemoveTaskMutation, useUpdateTaskMutation } from 'store';
import {
  Wrapper,
  TaskName,
  TaskPriority,
  ButtonsWrapper,
  StyledButton,
} from 'components/molecules/TaskItem/TaskItem.style';
import { IoCheckmarkDoneOutline, IoTrash, IoArrowUp } from 'react-icons/io5';

export const TaskItem = ({ data }) => {
  const { _id: id, name, priority, checked } = data;
  const [removeTask, { isSuccess, isError }] = useRemoveTaskMutation();
  const [updateTask, { isSuccess: isUpdated, isError: isUpdateError }] =
    useUpdateTaskMutation();

  const [isShowMore, setIsShowMore] = useState(false);

  const handleDeleteTask = () => {
    removeTask(id);
  };

  const handleUpdateTask = (data) => {
    const { checked } = data;
    const updated = { ...data, checked: !checked };
    updateTask({ id, updated });
  };

  return (
    <Wrapper checked={checked}>
      <TaskName checked={checked}>{name}</TaskName>
      <TaskPriority value={priority}>{priority}</TaskPriority>
      <ButtonsWrapper>
        <StyledButton onClick={() => handleUpdateTask(data)} type="check">
          {checked ? <IoArrowUp /> : <IoCheckmarkDoneOutline />}
        </StyledButton>
        <StyledButton onClick={handleDeleteTask} type="trash">
          <IoTrash />
        </StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};
