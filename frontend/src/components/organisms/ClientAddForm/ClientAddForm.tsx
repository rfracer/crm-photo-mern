import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddClientMutation } from 'store';
import { StyledForm } from 'components/organisms/ClientAddForm/ClientAddForm.styles';
import { Button } from 'components/atoms/Button/Button';
import { ClientFormSchema } from 'types/yup/ClientFormSchema';
import { FormInputError } from 'components/atoms/FormInputError/FormInputError';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { TextField } from 'components/molecules/TextField/TextField';
import { SelectField } from 'components/molecules/SelectField/SelectField';
import { DateField } from 'components/molecules/DateField/DateField';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { Client } from 'types/types';
import { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

export const ClientAddForm = () => {
  const [addClient, { isSuccess, isError, isLoading }] = useAddClientMutation();
  const intl = useIntl();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<Client>({
    resolver: yupResolver(ClientFormSchema),
    defaultValues: {
      name: '',
      value: 0,
      alreadyPaid: 0,
      address: '',
      date: '',
      info: '',
    },
  });

  useEffect(() => {
    reset();
  }, [isSuccess, reset]);

  const handleAddClient = (data: Client) => {
    addClient(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleAddClient)}>
      <TextField
        {...register('name', { required: true })}
        label={intl.formatMessage({ id: 'clients.form.name' })}
        name="name"
        id="name"
      />
      {errors.name ? (
        <FormInputError>
          <FormattedMessage
            id="clients.form_messages.fill_name"
            description="Name input error message"
            defaultMessage="Please fill name field"
          />
        </FormInputError>
      ) : null}

      <SelectField
        {...register('category', { required: true })}
        label={intl.formatMessage({ id: 'clients.form.category' })}
        name="category"
        id="category"
        options={[
          { event: intl.formatMessage({ id: 'clients.category.event' }) },
          { wedding: intl.formatMessage({ id: 'clients.category.wedding' }) },
          { family: intl.formatMessage({ id: 'clients.category.family' }) },
        ]}
      />
      {errors.category ? (
        <FormInputError>
          <FormattedMessage
            id="clients.form_messages.fill_category"
            description="Please fill category field"
            defaultMessage="Please fill category field"
          />
        </FormInputError>
      ) : null}

      <SelectField
        {...register('status', { required: true })}
        label={intl.formatMessage({ id: 'clients.form.status' })}
        name="status"
        id="status"
        options={[
          { lead: intl.formatMessage({ id: 'clients.status.lead' }) },
          { contract: intl.formatMessage({ id: 'clients.status.contract' }) },
          { completed: intl.formatMessage({ id: 'clients.status.completed' }) },
        ]}
      />
      {errors.status ? (
        <FormInputError>
          <FormattedMessage
            id="clients.form_messages.fill_status"
            description="Please set status - error"
            defaultMessage="Please set status"
          />
        </FormInputError>
      ) : null}

      <TextField
        {...register('value', { required: true })}
        label={intl.formatMessage({ id: 'clients.form.contract_value' })}
        name="value"
        id="value"
        type="number"
      />
      {errors.value ? (
        <FormInputError>
          <FormattedMessage
            id="clients.form_messages.positive_value"
            description="Please fill field with positive value"
            defaultMessage="Please fill field with positive value"
          />
        </FormInputError>
      ) : null}

      <TextField
        {...register('alreadyPaid', { required: true })}
        label={intl.formatMessage({ id: 'clients.form.already_paid' })}
        name="alreadyPaid"
        id="alreadyPaid"
        type="number"
      />
      {errors.alreadyPaid ? (
        <FormInputError>
          <FormattedMessage
            id="clients.form_messages.positive_value"
            description="Please fill field with positive value"
            defaultMessage="Please fill field with positive value"
          />
        </FormInputError>
      ) : null}

      <TextField
        {...register('address', { required: true })}
        label={intl.formatMessage({ id: 'clients.form.address' })}
        name="address"
        id="address"
        type="text"
      />
      {errors.address ? (
        <FormInputError>
          <FormattedMessage
            id="clients.form_messages.fill_address"
            description="Please fill address field - error message"
            defaultMessage="Please fill address field"
          />
        </FormInputError>
      ) : null}

      <DateField
        {...register('date')}
        label={intl.formatMessage({ id: 'clients.form.date' })}
        name="date"
        id="date"
      />
      {errors.date ? (
        <FormInputError>
          <FormattedMessage
            id="clients.form_messages.fill_date"
            description="Please set a date"
            defaultMessage="Please set a date"
          />
        </FormInputError>
      ) : null}

      <TextField
        {...register('info', { required: true })}
        label={intl.formatMessage({ id: 'clients.form.additional_info' })}
        name="info"
        id="info"
        isTextarea
      />

      <Button type="submit">
        {isLoading ? (
          <ButtonSpinner data-testid="button-spinner" />
        ) : (
          <FormattedMessage id="global.add" defaultMessage="Add" />
        )}
      </Button>
      {isSuccess && !isDirty ? (
        <FormMessage success>
          <FormattedMessage
            id="clients.form_messages.addedd"
            description="Addedd success message"
            defaultMessage="Addedd"
          />
        </FormMessage>
      ) : null}
      {isError ? (
        <FormMessage>
          <FormattedMessage
            id="clients.form_messages.server_error"
            description="Server error - message"
            defaultMessage="Server error"
          />
        </FormMessage>
      ) : null}
    </StyledForm>
  );
};
