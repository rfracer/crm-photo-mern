import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from 'store';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';

import { Info, StyledForm, FormTitle } from 'views/Login.style';
import { TextField } from 'components/molecules/TextField/TextField';

const Register = ({ handleMessage }) => {
  const [registerUser, { error, isSuccess, isError }] =
    useRegisterUserMutation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const handleRegister = (data) => {
    registerUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      handleMessage('User created successfully. You can sign in now!');
      navigate('/login');
    }
  }, [isSuccess, handleMessage, navigate]);

  return (
    <>
      <FormTitle>Sing up</FormTitle>
      <StyledForm onSubmit={handleSubmit(handleRegister)}>
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
          autocomplete="new-password"
          placeholder="Enter your password"
          style={{
            border: errors.password
              ? '2px solid #e53935'
              : '2px solid transparent',
          }}
        />
        <TextField
          {...register('confirmPassword', {
            required: true,
          })}
          type="password"
          id="cofirmPassword"
          label="Confirm password"
          autocomplete="new-password"
          placeholder="Type password again"
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

        {errors.confirmPassword ? (
          <FormMessage>Confirm your password</FormMessage>
        ) : null}

        {isError ? (
          <FormMessage>
            {error.status === 400
              ? error.data.error.message
              : 'Server error - contact with page administration'}
          </FormMessage>
        ) : null}

        <Button>{isSuccess ? <ButtonSpinner /> : 'REGISTER'}</Button>
      </StyledForm>
      <Info>
        YOU HAVE AN ACCOUNT?{' '}
        <Link to="/login">
          <span>SIGN IN</span>
        </Link>
      </Info>
    </>
  );
};

export default Register;
