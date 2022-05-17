import React from 'react';
import { StyledUserLogo } from './UserLogo.style';

type Props = {
  icon: string;
};

export const UserLogo = ({ icon }: Props) => {
  return <StyledUserLogo>{icon}</StyledUserLogo>;
};
