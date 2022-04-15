import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/state/authSlice';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from 'store';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { TextField } from 'components/molecules/TextField/TextField';

import { Info, StyledForm, FormTitle } from 'views/Login.style';

const Login = ({ message }) => {
  const [loginUser, { data, error, isLoading, isSuccess, isError }] =
    useLoginUserMutation();
  console.log(message);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onSubmit',
    reValidateMode: 'onChange',
  });

  const handleLogin = (data) => {
    loginUser(data);
  };

  if (isSuccess) {
    console.log(data.user.email);
    dispatch(setUser({ email: data.user.email }));
  }

  return (
    <>
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
            border: errors.email
              ? '2px solid #e53935'
              : '2px solid transparent',
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
          style={{
            border: errors.password
              ? '2px solid #e53935'
              : '2px solid transparent',
          }}
        />

        {errors.email ? (
          <FormMessage>
            {errors.email.message ? errors.email.message : 'Enter e-mail'}
          </FormMessage>
        ) : null}
        {errors.password ? <FormMessage>Enter password</FormMessage> : null}

        {isError ? (
          <FormMessage>
            {error.status === 404
              ? 'Either your email or password is wrong - User not found'
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
      {message ? <FormMessage success>{message}</FormMessage> : null}
    </>
  );
};

export default Login;
