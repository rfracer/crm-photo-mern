import styled from 'styled-components';

export const ViewWrapper = styled.div`
  width: 100%;
  min-height: 100%;
  padding: 20px 20px;
  padding-top: 70px;

  ${({ theme }) => theme.mq.desktop} {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 5rem;
  }
`;
