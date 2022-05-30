import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hooks/store';
import { setUser } from 'store/state/authSlice';
import { setSettings } from 'store/state/settingsSlice';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from 'store';
import { FormattedMessage, useIntl } from 'react-intl';
import { ReactComponent as Logo } from 'assets/image/logo.svg';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { TextField } from 'components/molecules/TextField/TextField';
import { Info, StyledForm, FormTitle, Wrapper } from 'views/Auth/Login.styles';
import { User } from 'types/types';

type LoginProps = {
  message: string;
};

const Login = ({ message }: LoginProps) => {
  const [loginUser, { data, error, isLoading, isSuccess, isError }] =
    useLoginUserMutation();
  const intl = useIntl();

  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const handleLogin = (data: User): void => {
    loginUser(data);
  };

  useEffect(() => {
    if (isSuccess && typeof data !== 'undefined') {
      dispatch(setUser({ email: data?.user.email }));
      dispatch(
        setSettings({
          language: data.user.settings.language,
          currency: data.user.settings.currency,
        })
      );
      if (location.pathname === '/login') {
        navigate('/');
      }
    }
  }, [data, isSuccess, dispatch, navigate]);

  return (
    <Wrapper>
      <Logo />
      <FormTitle>
        <FormattedMessage
          id="auth.login_title"
          description="Login title"
          defaultMessage="Login"
        />
      </FormTitle>
      <StyledForm onSubmit={handleSubmit(handleLogin)}>
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
          })}
          type="password"
          id="password"
          label={intl.formatMessage({ id: 'auth.password' })}
          placeholder={intl.formatMessage({ id: 'auth.password_placeholder' })}
          borderStyle={{
            border: errors.password ? '2px solid #e53935' : 'none',
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
        {errors.password && (
          <FormMessage>
            <FormattedMessage
              id="auth.password_empty"
              description="Empty password input - message"
              defaultMessage="Enter your password"
            />
          </FormMessage>
        )}

        {isError && typeof error !== 'undefined' ? (
          <FormMessage>
            {'data' in error && error.status === 404 ? (
              <FormattedMessage
                id="auth.wrong_inputs"
                description="Wrong inputs - message"
                defaultMessage="Either your email or password is wrong"
              />
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
              id="auth.login_btn"
              description="Login button"
              defaultMessage="LOGIN"
            />
          )}
        </Button>
      </StyledForm>
      <Info>
        <FormattedMessage
          id="auth.no_account_info"
          description="No account info message"
          defaultMessage="DON'T HAVE AN ACCOUNT YET?"
        />{' '}
        <Link to="/register">
          <span>
            <FormattedMessage
              id="auth.sign_up"
              description="sing up link"
              defaultMessage="SING UP"
            />
          </span>
        </Link>
      </Info>
      <Info>
        <strong>
          <FormattedMessage
            id="auth.demo_account"
            description="Demo account - heading"
            defaultMessage="DEMO ACCOUNT"
          />
          :{' '}
        </strong>{' '}
        <FormattedMessage
          id="auth.demo_account_info"
          description="Demo account data"
          defaultMessage="login: test@test.com || password: 12345"
        />
      </Info>
      {message ? <FormMessage success>{message}</FormMessage> : null}
    </Wrapper>
  );
};

export default Login;
