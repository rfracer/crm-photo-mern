import { Button } from 'components/atoms/Button/Button';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 450px;
  padding: 1rem 5rem;
  overflow-y: scroll;
`;

export const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 4rem;
  margin-bottom: 1rem;

  ${Button} {
    ${({ theme }) => theme.mq.desktop} {
      display: inline-block;
    }
  }
`;
