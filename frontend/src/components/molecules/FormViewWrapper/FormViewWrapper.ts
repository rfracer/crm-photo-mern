import styled from 'styled-components';
import { ViewWrapper } from '../ViewWrapper/ViewWrapper';

export const FormViewWrapper = styled(ViewWrapper)`
  ${({ theme }) => theme.mq.desktop} {
    width: 50%;
  }
`;
