import styled from 'styled-components';

export const ViewWrapper = styled.div<{ narrow?: boolean }>`
  width: 100%;
  min-height: 100%;
  padding: 2rem;
  padding-top: 7rem;

  ${({ theme }) => theme.mq.desktop} {
    width: ${({ narrow }) => (narrow ? '70%' : '90%')};
    margin: 0 auto;
    padding-bottom: 5rem;
    padding-top: 3rem;
  }

  ${({ theme }) => theme.mq.bigDesktop} {
    width: ${({ narrow }) => (narrow ? '70%' : '80%')};
    margin: 0 auto;
    padding-bottom: 5rem;
  }

  ${({ theme }) => theme.mq.huge} {
    width: ${({ narrow }) => (narrow ? '60%' : '70%')};
    margin: 0 auto;
    padding-bottom: 5rem;
  }
`;
