import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { TasksList } from 'components/organisms/TasksList/TasksList';
import Modal from 'components/organisms/Modal/Modal';
import { TextField } from 'components/molecules/TextField/TextField';
import { SelectField } from 'components/molecules/SelectField/SelectField';
import TaskAddForm from 'components/organisms/TaskAddForm/TaskAddForm';

const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    margin-top: 3rem;
  }
`;

const Tasks = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const handleCloseModal = () => {
    setModalStatus(false);
  };

  const handleOpenModal = () => {
    setModalStatus(true);
  };

  return (
    <ViewWrapper>
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
          <Button onClick={handleOpenModal} isSecondary>
            ADD
          </Button>
        </div>
      </HeadingWrapper>
      <TasksList />
    </ViewWrapper>
  );
};

export default Tasks;
