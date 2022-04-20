import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: block;
    width: 100%;
    height: 100%;
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    margin-left: auto;
    box-shadow: 0 2px 2px 1px #f0f0f0;
    z-index: 1;
  }
`;

export const UserInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  margin-right: 5%;
  padding: 0 2rem;

  ${({ theme }) => theme.mq.huge} {
    margin-right: 5%;
  }
`;

export const UserName = styled.p`
  font-size: ${({ theme }) => theme.fontSize.small};
  margin-left: 1rem;
`;
