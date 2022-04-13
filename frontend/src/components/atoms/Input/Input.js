import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  border: ${({ borderStyle, theme }) =>
    borderStyle ? borderStyle.border : '1px solid #F0F0F0'};

  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.inputShadow};
  border-radius: ${({ isRounded }) => (isRounded ? '50px' : '10px')};
  font-size: ${({ theme }) => theme.fontSize.normal};
  resize: none;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.colors.inputPlaceholder};
  }
`;
