import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { useGetClientQuery } from 'store';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import { Button } from 'components/atoms/Button/Button';
import {
  Wrapper,
  ButtonWrapper,
  Label,
  StyledInfo,
} from 'components/molecules/ClientDetails/ClientDetails.styles';

type Props = {
  client: string;
};

export const ClientDetails = ({ client }: Props) => {
  const { data, isLoading, isFetching } = useGetClientQuery(client);

  return (
    <>
      {!data ? (
        <Spinner data-testid="spinner" />
      ) : (
        <Wrapper>
          <Label>Name:</Label>
          <StyledInfo>{data.name}</StyledInfo>
          <Label>Category:</Label>
          <StyledInfo>{data.category}</StyledInfo>
          <Label>Date:</Label>
          <StyledInfo>
            {moment(data.date).format('MMMM Do YYYY, H:MM ')}
          </StyledInfo>
          <Label>Status:</Label>
          <StyledInfo>{data.status}</StyledInfo>
          <Label>Address:</Label>
          <StyledInfo>{data.address}</StyledInfo>
          <Label>Value:</Label>
          <StyledInfo>{data.value}</StyledInfo>
          <Label>Already Paid:</Label>
          <StyledInfo>{data.alreadyPaid}</StyledInfo>
          <Label>Notes:</Label>
          <StyledInfo>{data.info}</StyledInfo>
          <ButtonWrapper>
            <Button $secondary as={Link} to={`/clients/edit/${data._id}`}>
              EDIT
            </Button>
          </ButtonWrapper>
        </Wrapper>
      )}
    </>
  );
};
