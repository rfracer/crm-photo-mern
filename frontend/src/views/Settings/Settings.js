import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useChangeUserPasswordMutation } from 'store';
import { Title } from 'components/atoms/Title/Title';
import { TextField } from 'components/molecules/TextField/TextField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { Button } from 'components/atoms/Button/Button';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { FormInputError } from 'components/atoms/FormInputError/FormInputError';
import { StyledForm } from 'views/Settings/Settings.styles';

const Settings = () => {
  const [changeUserPassword, { error, isSuccess, isError, isLoading }] =
    useChangeUserPasswordMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    reset();
  }, [isSuccess]);

  const handleUpdatePassword = (data) => {
    changeUserPassword(data);
  };

  return (
    <ViewWrapper narrow>
      <Title>Settings</Title>
      <StyledForm onSubmit={handleSubmit(handleUpdatePassword)}>
        <TextField
          {...register('password', { required: true, minLength: 5 })}
          label="New Password"
          name="password"
          id="password"
          type="password"
        />
        {errors.password?.type === 'required' ? (
          <FormInputError>Please fill password field</FormInputError>
        ) : null}

        {errors.password?.type === 'minLength' ? (
          <FormInputError>
            Password must be at least 5 characters long
          </FormInputError>
        ) : null}

        <TextField
          {...register('confirmPassword', { required: true })}
          label="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
          type="password"
        />
        {errors.confirmPassword ? (
          <FormInputError>Please fill confirm password field</FormInputError>
        ) : null}

        <Button $outline type="submit">
          {isLoading ? <ButtonSpinner /> : 'UPDATE PASSWORD'}
        </Button>

        {isSuccess && !isDirty ? (
          <FormMessage success>User password updated</FormMessage>
        ) : null}
        {isError ? <FormMessage>{error.data.error.message}</FormMessage> : null}
      </StyledForm>
    </ViewWrapper>
  );
};

export default Settings;
