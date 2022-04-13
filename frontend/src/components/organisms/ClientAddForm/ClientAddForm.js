import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddClientMutation } from 'store';
import { StyledForm } from 'components/organisms/ClientAddForm/ClientAddForm.styles';
import { Button } from 'components/atoms/Button/Button';
import { ClientFormSchema } from 'types/ClientFormSchema';
import { FormInputError } from 'components/atoms/FormInputError/FormInputError';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { TextField } from 'components/molecules/TextField/TextField';
import { SelectField } from 'components/molecules/SelectField/SelectField';
import { DateField } from 'components/molecules/DateField/DateField';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';

export const ClientAddForm = () => {
  const [addClient, { isSuccess, isError, isLoading }] = useAddClientMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({
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

  const handleAddClient = (data, isSuccess) => {
    console.log(data);
    addClient(data);
    if (isSuccess) reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(handleAddClient, isSuccess)}>
      <TextField
        {...register('name', { required: true })}
        label="Name"
        name="name"
        id="name"
      />

      {errors.name ? (
        <FormInputError>Please fill name field</FormInputError>
      ) : null}
      <SelectField
        {...register('category', { required: true })}
        label="Category"
        name="category"
        id="category"
        options={['event', 'wedding', 'family']}
      />
      {errors.category ? (
        <FormInputError>Please fill category field</FormInputError>
      ) : null}
      <SelectField
        {...register('status', { required: true })}
        label="Status"
        name="status"
        id="status"
        options={['lead', 'contract', 'completed']}
      />
      {errors.status ? (
        <FormInputError>Please set status</FormInputError>
      ) : null}
      <TextField
        {...register('value', { required: true })}
        label="Contract value"
        name="value"
        id="value"
        type="number"
      />
      {errors.value ? (
        <FormInputError>Please fill field with positive value</FormInputError>
      ) : null}
      <TextField
        {...register('alreadyPaid', { required: true })}
        label="Already paid"
        name="alreadyPaid"
        id="alreadyPaid"
        type="number"
      />
      {errors.alreadyPaid ? (
        <FormInputError>Please fill field with positive value</FormInputError>
      ) : null}
      <TextField
        {...register('address', { required: true })}
        label="Address"
        name="address"
        id="address"
        type="text"
      />
      {errors.address ? (
        <FormInputError>Please fill address field</FormInputError>
      ) : null}

      <DateField {...register('date')} label="Date" name="date" id="date" />
      {errors.category ? (
        <FormInputError>Please set a date</FormInputError>
      ) : null}
      <TextField
        {...register('info', { required: true })}
        label="Additional information"
        name="info"
        id="info"
        isTextarea
      />

      <Button type="submit">{isLoading ? <ButtonSpinner /> : 'SEND'}</Button>
      {isSuccess && !isDirty ? <FormMessage success>Added</FormMessage> : null}
      {isError ? <FormMessage>Server Error</FormMessage> : null}
    </StyledForm>
  );
};
