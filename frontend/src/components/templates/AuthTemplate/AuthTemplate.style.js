import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 4rem 3rem 3rem 3rem;
  background: ${({ theme }) => theme.colors.main};
`;

export const ImageWrapper = styled.div`
  width: 60%;
  margin: 0 auto;

  svg {
    width: 100%;
    height: auto;
  }
`;

export const StyledLogo = styled.div`
  width: 100px;
  height: auto;
  margin-left: auto;
  margin-bottom: 4rem;
  svg {
    height: 100%;
    width: 100%;
  }
`;
