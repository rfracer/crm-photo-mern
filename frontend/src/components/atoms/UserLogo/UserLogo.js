import React from 'react';
import styled from 'styled-components';

const StyledUserLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  font-weight: 600;
  text-transform: uppercase;
`;

export const UserLogo = ({ icon }) => {
  return <StyledUserLogo>{icon}</StyledUserLogo>;
};
