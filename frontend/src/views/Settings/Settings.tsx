import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useChangeUserPasswordMutation } from 'store';
import { FormattedMessage, useIntl } from 'react-intl';
import { Title } from 'components/atoms/Title/Title';
import { TextField } from 'components/molecules/TextField/TextField';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { Button } from 'components/atoms/Button/Button';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { FormInputError } from 'components/atoms/FormInputError/FormInputError';
import { StyledForm } from 'views/Settings/Settings.styles';
import { PasswordChangeType } from 'types/types';

const Settings = () => {
  const [changeUserPassword, { error, isSuccess, isError, isLoading }] =
    useChangeUserPasswordMutation();
  const intl = useIntl();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<PasswordChangeType>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  useEffect(() => {
    reset();
  }, [isSuccess, reset]);

  const handleUpdatePassword = (data: PasswordChangeType): void => {
    changeUserPassword(data);
  };

  return (
    <ViewWrapper narrow>
      <Title>
        <FormattedMessage
          id="settings.title"
          description="Settings page title"
          defaultMessage="Settings"
        />
      </Title>
      <StyledForm onSubmit={handleSubmit(handleUpdatePassword)}>
        <TextField
          {...register('password', { required: true, minLength: 5 })}
          label={intl.formatMessage({ id: 'settings.new_password' })}
          name="password"
          id="password"
          type="password"
        />
        {errors.password?.type === 'required' ? (
          <FormInputError>
            <FormattedMessage
              id="settings.fill_password_field"
              description="Confirm password empty error"
              defaultMessage="Please fill password field"
            />
          </FormInputError>
        ) : null}

        {errors.password?.type === 'minLength' ? (
          <FormInputError>
            <FormattedMessage
              id="settings.min_length_password"
              description="Password min 5 characters error mesage"
              defaultMessage="Password must be at least 5 characters long"
            />
          </FormInputError>
        ) : null}

        <TextField
          {...register('confirmPassword', { required: true })}
          label={intl.formatMessage({ id: 'settings.confirm_password' })}
          name="confirmPassword"
          id="confirmPassword"
          type="password"
        />
        {errors.confirmPassword ? (
          <FormInputError>
            {' '}
            <FormattedMessage
              id="settings.fill_confirm_password_field"
              description="Confirm password empty error"
              defaultMessage="Please fill confirm password field"
            />
          </FormInputError>
        ) : null}

        <Button $outline type="submit">
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <FormattedMessage
              id="settings.btn_update_password"
              description="Update password button"
              defaultMessage="UPDATE PASSWORD"
            />
          )}
        </Button>

        {isSuccess && !isDirty ? (
          <FormMessage success>
            {' '}
            <FormattedMessage
              id="settings.success_password_update"
              description="Update password success message"
              defaultMessage="User password updated"
            />
          </FormMessage>
        ) : null}
        {isError && typeof error !== 'undefined' ? (
          <FormMessage>
            {'data' in error && error.status === 400
              ? error.data.error.message
              : null}
          </FormMessage>
        ) : null}
      </StyledForm>
    </ViewWrapper>
  );
};

export default Settings;
