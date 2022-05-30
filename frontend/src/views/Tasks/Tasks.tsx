import React, { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { TasksList } from 'components/organisms/TasksList/TasksList';
import Modal from 'components/organisms/Modal/Modal';
import TaskAddForm from 'components/organisms/TaskAddForm/TaskAddForm';
import { HeadingWrapper } from 'views/Tasks/Tasks.styles';

const Tasks = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const intl = useIntl();

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
        modalHeader={intl.formatMessage({ id: 'tasks.modal.title_add_task' })}
      >
        <TaskAddForm />
      </Modal>
      <HeadingWrapper>
        <div>
          <Title>
            <FormattedMessage
              id="tasks.title"
              description="Task page title"
              defaultMessage="Tasks"
            />
          </Title>
        </div>
        <div>
          <Button onClick={handleOpenModal} $secondary>
            <FormattedMessage id="global.add" defaultMessage="Add" />
          </Button>
        </div>
      </HeadingWrapper>
      <TasksList />
    </ViewWrapper>
  );
};

export default Tasks;
