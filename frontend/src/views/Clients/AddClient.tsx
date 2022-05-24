import React from 'react';
import { ClientAddForm } from 'components/organisms/ClientAddForm/ClientAddForm';
import { Title } from 'components/atoms/Title/Title';
import { FormViewWrapper } from 'components/molecules/FormViewWrapper/FormViewWrapper';
import { FormattedMessage } from 'react-intl';

const AddClient = () => {
  return (
    <FormViewWrapper>
      <Title>
        <FormattedMessage
          id="clients.add_client"
          description="Add client header"
          defaultMessage="Add client"
        />
      </Title>
      <ClientAddForm />
    </FormViewWrapper>
  );
};

export default AddClient;
