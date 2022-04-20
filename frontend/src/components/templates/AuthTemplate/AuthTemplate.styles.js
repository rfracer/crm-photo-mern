import styled from 'styled-components';
import underline from 'assets/image/underline.svg';

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 4rem 3rem 3rem 3rem;
  background: ${({ theme }) => theme.colors.main};

  ${({ theme }) => theme.mq.desktop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-flow: dense;
    padding: 0;
  }
`;

export const FormWrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black};
    overflow: auto;
  }
`;

export const DecorWrapper = styled.div`
  h2,
  p {
    display: none;
  }

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6rem 4rem;
    width: 70%;
    margin: 0 auto;

    h2 {
      display: block;
      margin: 0;
      font-size: 2.8rem;
      line-height: 1.4;
      color: ${({ theme }) => theme.colors.white};

      span {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          width: 100%;
          height: 1rem;
          background-image: url(${underline});
          background-repeat: no-repeat;
          background-size: cover;
          z-index: 1;
        }
      }
    }

    p {
      display: block;
      line-height: 1.8;
      color: ${({ theme }) => theme.colors.white};
      text-align: left;
    }
  }

  ${({ theme }) => theme.mq.huge} {
    width: 65%;
    padding: 6rem 3rem;
    margin-bottom: 1rem;

    h2 {
      font-size: 32px;
    }
  }
`;

export const ImageWrapper = styled.div`
  width: 60%;
  margin: 0 auto;

  ${({ theme }) => theme.mq.tablet} {
    max-width: 45%;
  }

  ${({ theme }) => theme.mq.desktop} {
    min-width: 70%;
    max-width: 100%;
    margin-bottom: 2rem;
  }

  ${({ theme }) => theme.mq.huge} {
    min-width: 70%;
  }
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

  ${({ theme }) => theme.mq.desktop} {
    width: 110px;
    position: absolute;
    left: 5rem;
    top: 4rem;
  }

  ${({ theme }) => theme.mq.huge} {
    width: 120px;
  }

  svg {
    height: auto;
    width: 100%;
  }
`;
