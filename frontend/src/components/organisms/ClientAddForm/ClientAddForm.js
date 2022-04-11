import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAddClientMutation } from 'store';
import { Button } from 'components/atoms/Button/Button';
import { ClientFormSchema } from 'types/ClientFormSchema';
import { FormInputError } from 'components/atoms/FormInputError/FormInputError';
import { FormMessage } from 'components/atoms/FormMessage/FormMessage';
import { TextField } from 'components/molecules/TextField/TextField';
import { SelectField } from 'components/molecules/SelectField/SelectField';
import { DateField } from 'components/molecules/DateField/DateField';
import { ButtonSpinner } from 'components/atoms/ButtonSpinner/ButtonSpinner';

const StyledForm = styled.form`
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${Button} {
    margin-top: 3rem;
  }
`;

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

  const handleAddNote = (data, isSuccess) => {
    addClient(data);
    if (isSuccess) reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(handleAddNote, isSuccess)}>
      <TextField
        {...register('name', { required: true })}
        label="Name"
        name="name"
        id="name"
      />
      <FormInputError>
        {errors.name ? 'Please fill name field' : null}
      </FormInputError>
      <SelectField
        {...register('category', { required: true })}
        label="Category"
        name="category"
        id="category"
        options={['event', 'wedding', 'family']}
      />
      <FormInputError>
        {errors.category ? 'Please fill category field' : null}
      </FormInputError>
      <SelectField
        {...register('status', { required: true })}
        label="Status"
        name="status"
        id="status"
        options={['lead', 'contract', 'completed']}
      />
      <FormInputError>
        {errors.category ? 'Please set status' : null}
      </FormInputError>
      <TextField
        {...register('value', { required: true })}
        label="Contract value"
        name="value"
        id="value"
        type="number"
      />
      <FormInputError>
        {errors.value ? 'Please fill with positive value' : null}
      </FormInputError>
      <TextField
        {...register('alreadyPaid', { required: true })}
        label="Already paid"
        name="alreadyPaid"
        id="alreadyPaid"
        type="number"
      />
      <FormInputError>
        {errors.alreadyPaid ? 'Please fill with positive value' : null}
      </FormInputError>
      <TextField
        {...register('address', { required: true })}
        label="Address"
        name="address"
        id="address"
        type="text"
      />
      <FormInputError>
        {errors.address ? 'Please fill address field' : null}
      </FormInputError>

      <DateField {...register('date')} label="Date" name="date" id="date" />
      <FormInputError>
        {errors.date ? 'Please fill date field' : null}
      </FormInputError>
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
