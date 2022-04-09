import styled, { keyframes } from 'styled-components';

const spinner = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 auto;
  border: 6px solid ${({ theme }) => theme.colors.lightGrey}; /* Light grey */
  border-top: 6px solid ${({ theme }) => theme.colors.main}; /* Black */
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;
