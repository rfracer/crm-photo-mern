import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';

export const Wrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 90%;
    width: 80%;
    margin: 4rem auto 4rem auto;
  }

  ${FormMessage} {
    width: 90%;
  }

  svg {
    display: none;

    ${({ theme }) => theme.mq.desktop} {
      display: block;
      width: 135px;
    }
    ${({ theme }) => theme.mq.huge} {
      width: 160px;
    }
  }
`;

export const StyledForm = styled.form`
  margin-top: 2rem;

  label {
    font-weight: 400;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.mq.desktop} {
      color: ${({ theme }) => theme.colors.black};
      font-size: ${({ theme }) => theme.fontSize.normal};
      font-weight: 500;
      margin-bottom: 0.8rem;
      margin-top: 1rem;
    }

    ${({ theme }) => theme.mq.huge} {
      margin-top: 1.3rem;
    }
  }

  input {
    box-shadow: 5px 5px 20px 1px rgba(0, 0, 0, 0.1);
    margin-bottom: 0.7rem;

    ${({ theme }) => theme.mq.desktop} {
      width: 90%;
    }
  }

  ${Button} {
    width: 100%;
    margin-top: 3rem;

    ${({ theme }) => theme.mq.tablet} {
      width: 150px;
    }
  }
`;

export const FormTitle = styled.h1`
  margin: 1rem 0 0 0;
  font-weight: 500;
  font-size: 30px;
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
