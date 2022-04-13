import React from 'react';
import { ClientEditForm } from 'components/organisms/ClientEditForm/ClientEditForm';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';

const EditClient = () => {
  return (
    <ViewWrapper>
      <Title>Edit Client</Title>
      <ClientEditForm />
    </ViewWrapper>
  );
};

export default EditClient;
