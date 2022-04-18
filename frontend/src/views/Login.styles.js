import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';
import { Button } from 'components/atoms/Button/Button';

export const Wrapper = styled.div`
  svg {
    display: none;
    width: 170px;
  }

  ${({ theme }) => theme.mq.desktop} {
    height: 100%;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    svg {
      display: block;
    }
  }
`;

export const StyledForm = styled.form`
  margin-top: 2rem;

  label {
    font-weight: 400;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.mq.desktop} {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSize.normal};
      font-weight: 500;
    }
  }
  input {
    box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 0.7rem;
  }

  ${Button} {
    width: 100%;
    margin-top: 3rem;

    ${({ theme }) => theme.mq.desktop} {
      width: 150px;
    }
  }
`;

export const FormTitle = styled.h1`
  margin: 2rem 0;
  font-weight: 500;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mq.desktop} {
    color: ${({ theme }) => theme.colors.black};
    font-weight: 500;
  }
`;

export const Info = styled.p`
  margin-top: 2rem;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.small};

  a {
    text-decoration: none;
  }
  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.mq.desktop} {
      color: ${({ theme }) => theme.colors.black};
      &:hover {
        color: ${({ theme }) => theme.colors.main};
      }
    }
  }

  ${({ theme }) => theme.mq.desktop} {
    color: ${({ theme }) => theme.colors.black};
  }
`;
