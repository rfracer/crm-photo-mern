import styled from 'styled-components';

export const Label = styled.label.attrs(({ htmlFor }) => ({
  htmlFor: htmlFor,
}))`
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.colors.black};

  ${({ theme }) => theme.mq.desktop} {
    margin-bottom: 1.5rem;
  }
`;
