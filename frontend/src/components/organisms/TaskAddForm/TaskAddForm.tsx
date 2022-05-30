import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAddTaskMutation } from 'store';
import { FormattedMessage, useIntl } from 'react-intl';
import { TextField } from 'components/molecules/TextField/TextField';
import { SelectField } from 'components/molecules/SelectField/SelectField';
import { FormWrapper } from 'components/organisms/TaskAddForm/TaskAddForm.styles';
import { Button } from 'components/atoms/Button/Button';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { FormInputError } from 'components/atoms/FormInputError/FormInputError';
import { Task } from 'types/types';

const TaskAddForm = () => {
  const [addTask, { isSuccess, isError, isLoading }] = useAddTaskMutation();
  const intl = useIntl();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<Task>({
    defaultValues: {
      name: '',
      priority: 'low',
    },
  });

  useEffect(() => {
    reset();
  }, [isSuccess, reset]);

  const handleAddTask = (data: Task) => {
    addTask(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(handleAddTask)}>
      <TextField
        {...register('name', { required: true })}
        name="name"
        id="name"
        label={intl.formatMessage({ id: 'tasks.modal.task_name_label' })}
      />
      {errors.name ? (
        <FormInputError>
          <FormattedMessage
            id="tasks.modal.task_name_fill_error"
            description="Please fill name field"
            defaultMessage="Please fill name field"
          />
        </FormInputError>
      ) : null}

      <SelectField
        {...register('priority', { required: true })}
        label={intl.formatMessage({ id: 'tasks.modal.task_priority' })}
        name="priority"
        id="priority"
        options={[
          { low: intl.formatMessage({ id: 'tasks.low' }) },
          { medium: intl.formatMessage({ id: 'tasks.medium' }) },
          { high: intl.formatMessage({ id: 'tasks.high' }) },
        ]}
      />

      <Button type="submit">
        {isLoading ? (
          <ButtonSpinner data-testid="button-spinner" />
        ) : (
          <FormattedMessage id="global.add" defaultMessage="Add" />
        )}
      </Button>
      {isSuccess && !isDirty ? (
        <FormMessage success>
          <FormattedMessage
            id="tasks.added"
            description="Added task message"
            defaultMessage="Added"
          />
        </FormMessage>
      ) : null}
      {isError ? (
        <FormMessage>
          <FormattedMessage
            id="tasks.server_error"
            description="Server errror message"
            defaultMessage="Server error"
          />
        </FormMessage>
      ) : null}
    </FormWrapper>
  );
};

export default TaskAddForm;
