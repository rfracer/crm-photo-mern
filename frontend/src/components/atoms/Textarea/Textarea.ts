import styled from 'styled-components';

interface TextareaInterface {
  isRounded?: boolean;
  borderStyle?: {
    border?: string;
  };
}

export const Textarea = styled.textarea<TextareaInterface>`
  width: 100%;
  padding: 10px 12px;
  border: ${({ borderStyle }) =>
    borderStyle
      ? borderStyle.border === 'none'
        ? '2px solid transparent'
        : borderStyle.border
      : '2px solid transparent'};
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.inputShadow};
  border-radius: ${({ isRounded }) => (isRounded ? '50px' : '10px')};
  font-size: ${({ theme }) => theme.fontSize.normal};
  resize: none;

  &:focus {
    border: ${({ borderStyle }) =>
      borderStyle
        ? borderStyle.border === 'none'
          ? '2px solid #7685D8'
          : borderStyle.border
        : '2px solid transparent'};
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.31);
  }

  &::placeholder {
    font-size: ${({ theme }) => theme.fontSize.normal};
    color: ${({ theme }) => theme.colors.inputPlacholder};
  }
`;
