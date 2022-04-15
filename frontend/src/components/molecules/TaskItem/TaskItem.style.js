import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.5rem 2rem;
  background-color: ${({ theme, checked }) =>
    checked ? theme.colors.lightGrey : theme.colors.white};
  box-shadow: ${({ theme }) => theme.cardShadow};
  border-radius: 15px;
  margin-bottom: 2rem;
`;

export const TaskName = styled.span`
  flex: 1 1 45%;
  font-weight: 500;
  text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  margin-right: auto;
  word-break: break-word;
`;

export const TaskPriority = styled.span`
  flex: 1 1 20%;
  margin-right: auto;
  font-size: ${({ theme }) => theme.fontSize.small};
  text-transform: uppercase;
  color: ${({ theme, value }) => {
    if (value === 'low') return theme.colors.success;
    if (value === 'medium') return theme.colors.warning;
    if (value === 'high') return theme.colors.error;
  }};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
`;

export const StyledButton = styled.button`
  display: inline-block;
  margin-left: 1.5rem;
  padding: 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ theme, type }) => {
    if (type === 'check') return theme.colors.success;
    if (type === 'trash') return theme.colors.error;
  }};

  svg {
    width: 2rem;
    height: 2rem;
  }
`;
