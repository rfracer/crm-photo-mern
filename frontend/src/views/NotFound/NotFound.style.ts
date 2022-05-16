import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  text-align: center;

  h1 {
    font-size: 3rem;

    ${({ theme }) => theme.mq.desktop} {
      font-size: 4.5rem;
    }
  }

  p {
    font-size: 1.8rem;
  }
`;
