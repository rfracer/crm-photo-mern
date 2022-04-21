import styled from 'styled-components';

export const DateInput = styled.input.attrs((props) => ({
  type: 'datetime-local',
  size: props.size || '1rem',
}))`
  padding: 10px 12px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.inputShadow};
  border-radius: ${({ isRounded }) => (isRounded ? '50px' : '10px')};
  font-size: ${({ theme }) => theme.fontSize.normal};
  resize: none;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.33);
  }
`;
