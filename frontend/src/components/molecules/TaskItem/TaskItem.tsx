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
import { Task } from 'types/types';

type Props = {
  data: Task;
};

export const TaskItem = ({ data }: Props) => {
  const { _id: id, name, priority, checked } = data;
  const [removeTask] = useRemoveTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleDeleteTask = () => {
    if (id) removeTask(id);
  };

  const handleUpdateTask = (data: Task) => {
    const { checked } = data;
    const updated = { ...data, checked: !checked };
    if (id) updateTask({ id, updated });
  };

  return (
    <Wrapper checked={checked}>
      <TaskName checked={checked}>{!name.length ? 'No name' : name}</TaskName>
      <TaskPriority value={priority}>{priority}</TaskPriority>
      <ButtonsWrapper>
        <StyledButton
          data-testid="update-task"
          onClick={() => handleUpdateTask(data)}
          mark="check"
        >
          {checked ? (
            <IoArrowUp title="arrow-up icon" />
          ) : (
            <IoCheckmarkDoneOutline title="checkmark icon" />
          )}
        </StyledButton>
        <StyledButton
          data-testid="delete-task"
          onClick={handleDeleteTask}
          mark="trash"
        >
          <IoTrash />
        </StyledButton>
      </ButtonsWrapper>
    </Wrapper>
  );
};
