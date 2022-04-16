import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetClientsQuery } from 'store';
import { StyledTable, Wrapper } from './ClientsList.styles';
import { ClientItem } from 'components/molecules/ClientItem/ClientItem';
import { Spinner } from 'components/atoms/Spinner/Spinner';
import Modal from 'components/organisms/Modal/Modal';
import { ClientDetails } from 'components/molecules/ClientDetails/ClientDetails';

const SpinnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const NoClientsMessage = styled.p`
  font-weight: 500;
  padding-left: 1rem;
`;

export const ClientsList = ({ searchTerm }) => {
  const { data, isFetching, isSuccess, isLoading, isError } =
    useGetClientsQuery();

  console.log('succefss' + ' ' + isSuccess);
  console.log('error' + isError);
  console.log('fetching d' + isFetching);
  console.log(data);
  const [filteredResults, setFilteredResults] = useState([]);
  const [currentClient, setCurrentClient] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleOpenCurrentClient = (id) => {
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
        <ClientDetails client={currentClient} />
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
