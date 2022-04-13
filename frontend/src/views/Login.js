import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/state/authSlice';
import { ReactComponent as BackgroundImage } from 'assets/image/login-image.svg';
import { ReactComponent as Logo } from 'assets/logo-white.svg';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { useLoginUserMutation } from 'store';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  height: 100vh;
  padding: 4rem 3rem 3rem 3rem;
  background: ${({ theme }) => theme.colors.main};
`;

const StyledForm = styled.form`
  margin-top: 4rem;

  ${Input} {
    box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
  }

  ${Button} {
    width: 100%;
    margin-top: 2rem;
  }
`;
const ImageWrapper = styled.div`
  width: 60%;
  margin: 0 auto;

  svg {
    width: 100%;
    height: auto;
  }
`;

const FormTitle = styled.h1`
  margin: 2rem 0;
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};
`;

const Info = styled.p`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.small};

  a {
    text-decoration: none;
  }
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};
  }
`;

const StyledLogo = styled.div`
  width: 100px;
  height: auto;
  margin-left: auto;
  margin-bottom: 4rem;
  svg {
    height: 100%;
    width: 100%;
  }
`;
const Login = () => {
  const [loginUser, { data, isSuccess }] = useLoginUserMutation();

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleLogin = (data) => {
    loginUser(data);
  };

  if (isSuccess) {
    console.log(data.user.email);
    dispatch(setUser({ email: data.user.email }));
  }

  return (
    <Wrapper>
      <StyledLogo>
        <Logo />
      </StyledLogo>

      <ImageWrapper>
        <BackgroundImage />
      </ImageWrapper>
      <FormTitle>Login</FormTitle>

      <StyledForm onSubmit={handleSubmit(handleLogin)}>
        <Input
          {...register('email', { required: true })}
          placeholder="E-MAIL "
        />
        <Input
          {...register('password', { required: true })}
          type="password"
          placeholder="PASSWORD "
        />
        <Button>LOGIN</Button>
      </StyledForm>
      <Info>
        DON'T HAVE AN ACCOUNT YET?{' '}
        <Link to="/register">
          <span>SING UP</span>
        </Link>
      </Info>
    </Wrapper>
  );
};

export default Login;
