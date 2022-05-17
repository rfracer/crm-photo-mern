import React, { useEffect, useState } from 'react';
import { useGetClientsQuery } from 'store';
import {
  StyledTable,
  Wrapper,
  NoClientsMessage,
  SpinnerWrapper,
} from './ClientsList.styles';
import { Client } from 'types/types';
import { ClientItem } from 'components/molecules/ClientItem/ClientItem';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import Modal from 'components/organisms/Modal/Modal';
import { ClientDetails } from 'components/molecules/ClientDetails/ClientDetails';

type Props = {
  searchTerm: string;
};

export const ClientsList = ({ searchTerm }: Props) => {
  const { data, isFetching, isSuccess } = useGetClientsQuery();

  const [filteredResults, setFilteredResults] = useState<Client[]>([]);
  const [currentClient, setCurrentClient] = useState<string>();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenCurrentClient = (id: string) => {
    setCurrentClient(id);
    setModalIsOpen(true);
  };

  useEffect(() => {
    if (isSuccess && searchTerm.replace(/\s/g, '') !== '') {
      const results = data.filter((client) =>
        client.name
          .toLowerCase()
          .includes(searchTerm.trim().toLocaleLowerCase())
      );
      setFilteredResults(results);
    } else if (isSuccess) {
      setFilteredResults(data);
    } else {
      setFilteredResults([]);
    }
  }, [searchTerm, data, isSuccess]);

  return (
    <Wrapper>
      <Modal
        isOpen={modalIsOpen}
        handleClose={handleCloseModal}
        modalHeader={'Client Info'}
      >
        {currentClient && <ClientDetails client={currentClient} />}
      </Modal>
      <StyledTable>
        <thead>
          <tr>
            <th>CLIENT NAME</th>
            <th>DATE</th>
            <th>CATEGORY</th>
            <th>VALUE</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data
            ? filteredResults
              ? filteredResults.map((clientData) => (
                  <ClientItem
                    handleOpenCurrentClient={handleOpenCurrentClient}
                    key={clientData._id}
                    data={clientData}
                  />
                ))
              : null
            : null}
        </tbody>
      </StyledTable>
      {!isFetching && !filteredResults.length ? (
        <NoClientsMessage>No clients</NoClientsMessage>
      ) : null}
      {isFetching ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : null}
    </Wrapper>
  );
};
