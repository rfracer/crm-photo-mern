import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { FormattedMessage, useIntl } from 'react-intl';
import { useGetClientQuery, useUpdateClientMutation } from 'store';
import { StyledForm } from 'components/organisms/ClientAddForm/ClientAddForm.styles';
import { Button } from 'components/atoms/Button/Button';
import { ClientFormSchema } from 'types/yup/ClientFormSchema';
import { FormInputError } from 'components/atoms/FormInputError/FormInputError';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { TextField } from 'components/molecules/TextField/TextField';
import { SelectField } from 'components/molecules/SelectField/SelectField';
import { DateField } from 'components/molecules/DateField/DateField';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import { Client } from 'types/types';

export const ClientEditForm = () => {
  const { id } = useParams() as { id: string };

  const { data, isSuccess: isClientLoaded } = useGetClientQuery(id);
  const [updateClient, { isLoading, isSuccess, isError }] =
    useUpdateClientMutation();
  const intl = useIntl();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<Client>({
    resolver: yupResolver(ClientFormSchema),
  });

  useEffect(() => {
    if (data) {
      reset({
        name: data.name,
        value: data.value,
        alreadyPaid: data.alreadyPaid,
        address: data.address,
        status: data.status,
        category: data.category,
        date: moment(data.date).format('yyyy-MM-DDThh:mm'),
        info: data.info,
      });
    }
  }, [data, reset]);

  const handleUpdateClient = (data: Client) => {
    updateClient({ id, data });
    if (isSuccess) reset();
  };

  return (
    <>
      {!isClientLoaded ? (
        <Spinner />
      ) : (
        <StyledForm onSubmit={handleSubmit(handleUpdateClient)}>
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
              {
                wedding: intl.formatMessage({ id: 'clients.category.wedding' }),
              },
              { family: intl.formatMessage({ id: 'clients.category.family' }) },
            ]}
          />
          {errors.category ? (
            <FormInputError>
              {' '}
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
              {
                contract: intl.formatMessage({ id: 'clients.status.contract' }),
              },
              {
                completed: intl.formatMessage({
                  id: 'clients.status.completed',
                }),
              },
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
              {' '}
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
              <ButtonSpinner />
            ) : (
              <FormattedMessage id="global.edit" defaultMessage="Edit" />
            )}
          </Button>
          {isSuccess && !isDirty ? (
            <FormMessage success>
              <FormattedMessage
                id="clients.form_messages.updated"
                description="Updated success message"
                defaultMessage="Updated"
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
      )}
    </>
  );
};
