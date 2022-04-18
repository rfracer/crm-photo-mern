import React from 'react';
import { ClientEditForm } from 'components/organisms/ClientEditForm/ClientEditForm';
import { Title } from 'components/atoms/Title/Title';
import { FormViewWrapper } from 'components/molecules/FormViewWrapper/FormViewWrapper';

const EditClient = () => {
  return (
    <FormViewWrapper>
      <Title>Edit Client</Title>
      <ClientEditForm />
    </FormViewWrapper>
  );
};

export default EditClient;
