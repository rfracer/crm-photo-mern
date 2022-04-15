import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAddTaskMutation } from 'store';
import { TextField } from 'components/molecules/TextField/TextField';
import { SelectField } from 'components/molecules/SelectField/SelectField';
import { FormWrapper } from 'components/organisms/TaskAddForm/TaskAddForm.style';
import { Button } from 'components/atoms/Button/Button';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { FormInputError } from 'components/atoms/FormInputError/FormInputError';

const TaskAddForm = () => {
  const [addTask, { isSuccess, isError, isLoading }] = useAddTaskMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      name: '',
      priority: 'low',
    },
  });

  useEffect(() => {
    reset();
  }, [isSuccess]);

  const handleAddTask = (data) => {
    addTask(data);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(handleAddTask)}>
      <TextField
        {...register('name', { required: true })}
        name="name"
        id="name"
        label="Task Name"
      />
      {errors.name ? (
        <FormInputError>Please fill name field</FormInputError>
      ) : null}
      <SelectField
        {...register('priority', { required: true })}
        label="Priority"
        name="priority"
        id="priority"
        options={['low', 'medium', 'high']}
      />
      <Button type="submit">{isLoading ? <ButtonSpinner /> : 'ADD'}</Button>
      {isSuccess && !isDirty ? <FormMessage success>Added</FormMessage> : null}
      {isError ? <FormMessage>Server Error</FormMessage> : null}
    </FormWrapper>
  );
};

export default TaskAddForm;
