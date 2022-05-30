import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppSelector } from 'hooks/store';
import { useRegisterUserMutation } from 'store';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from 'react-intl';
import { ReactComponent as Logo } from 'assets/image/logo.svg';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { Info, StyledForm, FormTitle, Wrapper } from 'views/Auth/Login.styles';
import { TextField } from 'components/molecules/TextField/TextField';
import { UserRegister } from 'types/types';

type Props = {
  handleMessage: (message: string) => void;
};

const Register = ({ handleMessage }: Props) => {
  const [registerUser, { error, isSuccess, isError, isLoading }] =
    useRegisterUserMutation();
  const language = useAppSelector((state) => state.settings.language);
  const intl = useIntl();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegister>({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleRegister = (data: UserRegister) => {
    if (language) {
      registerUser({ ...data, language });
    } else {
      registerUser({ ...data, language: 'en' });
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const message = intl.formatMessage({
        id: 'auth.register_success_message',
      });
      handleMessage(message);
      navigate('/login');
    }
  }, [isSuccess, handleMessage, navigate]);

  return (
    <Wrapper>
      <Logo />
      <FormTitle>
        <FormattedMessage
          id="auth.register_title"
          description="Register view title"
          defaultMessage="Sing up"
        />
      </FormTitle>
      <StyledForm onSubmit={handleSubmit(handleRegister)}>
        <TextField
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: intl.formatMessage({
                id: 'auth.email_invalid',
              }),
            },
          })}
          placeholder={intl.formatMessage({ id: 'auth.email_placeholder' })}
          id="email"
          label={intl.formatMessage({ id: 'auth.email' })}
          borderStyle={{
            border: errors.email ? '2px solid #e53935' : 'none',
          }}
        />
        <TextField
          {...register('password', {
            required: true,
            minLength: 5,
          })}
          type="password"
          id="password"
          label={intl.formatMessage({ id: 'auth.password' })}
          autocomplete="new-password"
          placeholder={intl.formatMessage({ id: 'auth.password_placeholder' })}
          borderStyle={{
            border: errors.password ? '2px solid #e53935' : 'none',
          }}
        />
        <TextField
          {...register('confirmPassword', {
            required: true,
          })}
          type="password"
          id="cofirmPassword"
          label={intl.formatMessage({ id: 'auth.confirm_password' })}
          autocomplete="new-password"
          placeholder={intl.formatMessage({
            id: 'auth.confirm_password_placeholder',
          })}
          borderStyle={{
            border: errors.confirmPassword ? '2px solid #e53935' : 'none',
          }}
        />

        {errors.email ? (
          <FormMessage>
            {errors.email.message ? (
              errors.email.message
            ) : (
              <FormattedMessage
                id="auth.email_empty"
                description="Empty email input - message"
                defaultMessage="Enter e-mail"
              />
            )}
          </FormMessage>
        ) : null}
        {errors.password?.type === 'required' ? (
          <FormMessage>
            <FormattedMessage
              id="auth.password_empty"
              description="Empty password input - message"
              defaultMessage="Enter your password"
            />
          </FormMessage>
        ) : null}

        {errors.password?.type === 'minLength' ? (
          <FormMessage>
            <FormattedMessage
              id="auth.password_length_error"
              description="Password length error message"
              defaultMessage="Password must be at least 5 characters long"
            />
          </FormMessage>
        ) : null}

        {errors.confirmPassword ? (
          <FormMessage>
            <FormattedMessage
              id="auth.confirm_password_empty"
              description="Confirm password input empty -message"
              defaultMessage="Confirm your password"
            />
          </FormMessage>
        ) : null}

        {isError && typeof error !== 'undefined' ? (
          <FormMessage>
            {'data' in error && error.status === 400 ? (
              error.data.error.message
            ) : (
              <FormattedMessage
                id="auth.server_error"
                description="Server error - message"
                defaultMessage="Server error - contact with page administration"
              />
            )}
          </FormMessage>
        ) : null}

        <Button>
          {isLoading ? (
            <ButtonSpinner />
          ) : (
            <FormattedMessage
              id="auth.register_btn"
              description="Register button"
              defaultMessage="REGISTER"
            />
          )}
        </Button>
      </StyledForm>
      <Info>
        <FormattedMessage
          id="auth.have_account"
          description="Already have account info - message"
          defaultMessage="YOU HAVE AN ACCOUNT?"
        />{' '}
        <Link to="/login">
          <span>
            <FormattedMessage
              id="auth.sing_in"
              description="sing in link"
              defaultMessage="SIGN IN"
            />
          </span>
        </Link>
      </Info>
    </Wrapper>
  );
};

export default Register;
