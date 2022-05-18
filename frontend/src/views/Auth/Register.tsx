import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRegisterUserMutation } from 'store';
import { useNavigate } from 'react-router-dom';
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
    registerUser(data);
  };

  useEffect(() => {
    if (isSuccess) {
      handleMessage('User created successfully. You can sign in now!');
      navigate('/login');
    }
  }, [isSuccess, handleMessage, navigate]);

  return (
    <Wrapper>
      <Logo />
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
          label="Password"
          autocomplete="new-password"
          placeholder="Enter your password"
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
          label="Confirm password"
          autocomplete="new-password"
          placeholder="Type password again"
          borderStyle={{
            border: errors.confirmPassword ? '2px solid #e53935' : 'none',
          }}
        />

        {errors.email ? (
          <FormMessage>
            {errors.email.message ? errors.email.message : 'Enter e-mail'}
          </FormMessage>
        ) : null}
        {errors.password?.type === 'required' ? (
          <FormMessage>Enter password</FormMessage>
        ) : null}

        {errors.password?.type === 'minLength' ? (
          <FormMessage>Password must be at least 5 characters long</FormMessage>
        ) : null}

        {errors.confirmPassword ? (
          <FormMessage>Confirm your password</FormMessage>
        ) : null}

        {isError && typeof error !== 'undefined' ? (
          <FormMessage>
            {'data' in error && error.status === 400
              ? error.data.error.message
              : 'Server error - contact with page administration'}
          </FormMessage>
        ) : null}

        <Button>{isLoading ? <ButtonSpinner /> : 'REGISTER'}</Button>
      </StyledForm>
      <Info>
        YOU HAVE AN ACCOUNT?{' '}
        <Link to="/login">
          <span>SIGN IN</span>
        </Link>
      </Info>
    </Wrapper>
  );
};

export default Register;
