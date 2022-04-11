import React from 'react';
import { ClientAddForm } from 'components/organisms/ClientAddForm/ClientAddForm';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';

export const AddClient = () => {
  return (
    <ViewWrapper>
      <Title>Add Client</Title>
      <ClientAddForm />
    </ViewWrapper>
  );
};
