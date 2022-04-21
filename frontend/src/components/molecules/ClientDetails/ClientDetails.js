import React from 'react';
import PropTypes from 'prop-types';
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

export const ClientDetails = ({ client }) => {
  const { data, isLoading } = useGetClientQuery(client);

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Wrapper>
          <Label>Name:</Label>
          <StyledInfo>{data.name}</StyledInfo>
          <Label>Category:</Label>
          <StyledInfo>{data.category}</StyledInfo>
          <Label>Date:</Label>
          <StyledInfo>{data.date}</StyledInfo>
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

ClientDetails.propTypes = {
  client: PropTypes.string,
};
