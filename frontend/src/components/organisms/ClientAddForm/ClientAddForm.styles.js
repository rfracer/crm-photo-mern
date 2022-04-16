import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Input } from 'components/atoms/Input/Input';

export const StyledForm = styled.form`
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${Button} {
    margin-top: 3rem;
  }

  ${Input} {
    ${({ theme }) => theme.mq.desktop} {
      max-width: 50%;
    }
  }
`;
