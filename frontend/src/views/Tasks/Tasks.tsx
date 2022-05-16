import React, { useState } from 'react';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { TasksList } from 'components/organisms/TasksList/TasksList';
import Modal from 'components/organisms/Modal/Modal';
import TaskAddForm from 'components/organisms/TaskAddForm/TaskAddForm';
import { HeadingWrapper } from 'views/Tasks/Tasks.styles';

const Tasks = () => {
  const [modalStatus, setModalStatus] = useState(false);

  const handleCloseModal = (): void => {
    setModalStatus(false);
  };

  const handleOpenModal = (): void => {
    setModalStatus(true);
  };

  return (
    <ViewWrapper narrow>
      <Modal
        isOpen={modalStatus}
        handleClose={handleCloseModal}
        modalHeader={'Add Task'}
      >
        <TaskAddForm />
      </Modal>
      <HeadingWrapper>
        <div>
          <Title>Tasks</Title>
        </div>
        <div>
          <Button onClick={handleOpenModal} $secondary>
            ADD
          </Button>
        </div>
      </HeadingWrapper>
      <TasksList />
    </ViewWrapper>
  );
};

export default Tasks;
