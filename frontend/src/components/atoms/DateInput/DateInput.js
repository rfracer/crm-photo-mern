import styled from 'styled-components';

export const DateInput = styled.input.attrs((props) => ({
  // we can define static props
  type: 'datetime-local',

  // or we can define dynamic ones
  size: props.size || '1em',
}))`
  padding: 10px 12px;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.inputShadow};
  border-radius: ${({ isRounded }) => (isRounded ? '50px' : '10px')};
  font-size: ${({ theme }) => theme.fontSize.normal};
  resize: none;

  &:focus {
    outline: none;
    box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.3);
  }
`;
