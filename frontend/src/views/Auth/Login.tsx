import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAppDispatch } from 'hooks/store';
import { setUser } from 'store/state/authSlice';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from 'store';
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
      if (location.pathname === '/login') {
        navigate('/');
      }
    }
  }, [data, isSuccess, dispatch, navigate]);

  return (
    <Wrapper>
      <Logo />
      <FormTitle>Login</FormTitle>
      <StyledForm onSubmit={handleSubmit(handleLogin)}>
        <TextField
          {...register('email', {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address',
            },
          })}
          placeholder="Enter your e-mail"
          id="email"
          label="E-mail"
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
          label="Password"
          placeholder="Enter your password"
          borderStyle={{
            border: errors.password ? '2px solid #e53935' : 'none',
          }}
        />

        {errors.email ? (
          <FormMessage>
            {errors.email.message ? errors.email.message : 'Enter e-mail'}
          </FormMessage>
        ) : null}
        {errors.password && <FormMessage>Enter password</FormMessage>}

        {isError && typeof error !== 'undefined' ? (
          <FormMessage>
            {'data' in error && error.status === 404
              ? 'Either your email or password is wrong'
              : 'Server error - contact with page administration'}
          </FormMessage>
        ) : null}

        <Button>{isLoading ? <ButtonSpinner /> : 'LOGIN'}</Button>
      </StyledForm>
      <Info>
        DON'T HAVE AN ACCOUNT YET?{' '}
        <Link to="/register">
          <span>SING UP</span>
        </Link>
      </Info>
      <Info>
        <strong>DEMO ACCOUNT: </strong> login: test@test.com || password: 12345
      </Info>
      {message ? <FormMessage success>{message}</FormMessage> : null}
    </Wrapper>
  );
};

export default Login;
