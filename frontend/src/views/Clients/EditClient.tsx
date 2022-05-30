import React from 'react';
import { ClientEditForm } from 'components/organisms/ClientEditForm/ClientEditForm';
import { Title } from 'components/atoms/Title/Title';
import { FormViewWrapper } from 'components/molecules/FormViewWrapper/FormViewWrapper';
import { FormattedMessage } from 'react-intl';

const EditClient = () => {
  return (
    <FormViewWrapper>
      <Title>
        <FormattedMessage
          id="clients.edit_client"
          description="Edit client header"
          defaultMessage="Edit client"
        />
      </Title>
      <ClientEditForm />
    </FormViewWrapper>
  );
};

export default EditClient;
