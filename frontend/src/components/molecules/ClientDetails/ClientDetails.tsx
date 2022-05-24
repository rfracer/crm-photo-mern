import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { FormattedMessage } from 'react-intl';
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
          <Label>
            <FormattedMessage id="clients.form.name" defaultMessage="Name" />:
          </Label>
          <StyledInfo>{data.name}</StyledInfo>
          <Label>
            <FormattedMessage
              id="clients.form.category"
              defaultMessage="Category"
            />
            :
          </Label>
          <StyledInfo>{data.category}</StyledInfo>
          <Label>
            <FormattedMessage id="clients.form.date" defaultMessage="Date" />:
          </Label>
          <StyledInfo>
            {moment(data.date).format('MMMM Do YYYY, H:MM ')}
          </StyledInfo>
          <Label>
            <FormattedMessage
              id="clients.form.status"
              defaultMessage="Status"
            />
            :
          </Label>
          <StyledInfo>{data.status}</StyledInfo>
          <Label>
            <FormattedMessage
              id="clients.form.address"
              defaultMessage="Address"
            />
            :
          </Label>
          <StyledInfo>{data.address}</StyledInfo>
          <Label>
            <FormattedMessage
              id="clients.form.contract_value"
              defaultMessage="Value"
            />
            :
          </Label>
          <StyledInfo>{data.value} $</StyledInfo>
          <Label>
            <FormattedMessage
              id="clients.form.contract_already_paid"
              defaultMessage="Already paid"
            />
            :
          </Label>
          <StyledInfo>{data.alreadyPaid} $</StyledInfo>
          <Label>
            <FormattedMessage
              id="clients.form.additional_info"
              defaultMessage="Additional information"
            />
            :
          </Label>
          <StyledInfo>{data.info}</StyledInfo>
          <ButtonWrapper>
            <Button $secondary as={Link} to={`/clients/edit/${data._id}`}>
              <FormattedMessage id="global.edit" defaultMessage="Edit" />
            </Button>
          </ButtonWrapper>
        </Wrapper>
      )}
    </>
  );
};
