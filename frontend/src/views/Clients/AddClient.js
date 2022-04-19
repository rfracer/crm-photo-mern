import React from 'react';
import { ClientAddForm } from 'components/organisms/ClientAddForm/ClientAddForm';
import { Title } from 'components/atoms/Title/Title';
import { FormViewWrapper } from 'components/molecules/FormViewWrapper/FormViewWrapper';

const AddClient = () => {
  return (
    <FormViewWrapper>
      <Title>Add Client</Title>
      <ClientAddForm />
    </FormViewWrapper>
  );
};

export default AddClient;
