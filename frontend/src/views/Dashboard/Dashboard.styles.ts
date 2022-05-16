import styled from 'styled-components';

export const ActivitesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  height: auto;
  margin-top: 3rem;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
  }
`;
