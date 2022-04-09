import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useAddClientMutation } from 'store';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { TextField } from 'components/molecules/TextField/TextField';
import { SelectField } from 'components/molecules/SelectField/SelectField';
import { DateField } from 'components/molecules/DateField/DateField';
import { Spinner } from 'components/atoms/Spinner/Spinner';

const StyledForm = styled.form`
  margin-top: 3rem;
  margin-bottom: 3rem;

  ${Button} {
    margin-top: 3rem;
  }
`;

const FormMessage = styled.p`
  width: 100%;
  background-color: ${({ success, theme: { colors } }) =>
    success ? colors.lightSuccess : colors.lightError};
  color: ${({ success, theme: { colors } }) =>
    success ? colors.success : colors.error};
  padding: 0.4rem 0.4rem 0.4rem 3rem;
  border-left: 1rem solid
    ${({ success, theme: { colors } }) =>
      success ? colors.success : colors.error};
`;

const FormError = styled.p`
  color: ${({ theme }) => theme.colors.error};
`;
const schema = yup
  .object({
    name: yup.string().required(),
    category: yup.string().required(),
    value: yup.number().min(0).required(),
    alreadyPaid: yup.number().required(),
    address: yup.string().required(),
    date: yup.date(),
  })
  .required();

export const AddClient = () => {
  const [addClient, { isSuccess, isError, isLoading }] = useAddClientMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      value: 0,
      alreadyPaid: 0,
      address: '',
      date: '',
      info: '',
    },
  });

  const handleAddNote = (data) => {
    addClient(data);
    reset();
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ViewWrapper>
      <Title>Add Client</Title>
      <StyledForm onSubmit={handleSubmit(handleAddNote)}>
        {isSuccess ? <FormMessage success>Added</FormMessage> : null}
        {isError ? <FormMessage>Server Error</FormMessage> : null}
        <TextField
          {...register('name', { required: true })}
          label="Name"
          name="name"
          id="name"
        />
        <FormError>{errors.name ? 'Please fill name field' : null}</FormError>
        <SelectField
          {...register('category', { required: true })}
          label="Category"
          name="category"
          id="category"
          options={['event', 'wedding', 'family']}
        />
        <FormError>
          {errors.category ? 'Please fill category field' : null}
        </FormError>
        <SelectField
          {...register('status', { required: true })}
          label="Status"
          name="status"
          id="status"
          options={['lead', 'contract', 'completed']}
        />
        <FormError>{errors.category ? 'Please set status' : null}</FormError>
        <TextField
          {...register('value', { required: true })}
          label="Contract value"
          name="value"
          id="value"
          type="number"
        />
        <FormError>
          {errors.value ? 'Please fill with positive value' : null}
        </FormError>
        <TextField
          {...register('alreadyPaid', { required: true })}
          label="Already paid"
          name="alreadyPaid"
          id="alreadyPaid"
          type="number"
        />
        <FormError>
          {errors.alreadyPaid ? 'Please fill with positive value' : null}
        </FormError>
        <TextField
          {...register('address', { required: true })}
          label="Address"
          name="address"
          id="address"
          type="text"
        />
        <FormError>
          {errors.address ? 'Please fill address field' : null}
        </FormError>

        <DateField {...register('date')} label="Date" name="date" id="date" />
        <FormError>
          {errors.date ? 'Please fill address field' : null}
        </FormError>
        <TextField
          {...register('info', { required: true })}
          label="Additional information"
          name="info"
          id="info"
          isTextarea
        />

        <Button type="submit">SEND</Button>
      </StyledForm>
      {isLoading ? <Spinner /> : null}
    </ViewWrapper>
  );
};
