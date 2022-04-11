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

export const ClientsList = ({ searchTerm }) => {
  const { data, isLoading } = useGetClientsQuery();
  const [filteredResults, setFilteredResults] = useState();
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
    if (searchTerm.replace(/\s/g, '') !== '') {
      const results = data.data.filter((client) =>
        client.name
          .toLowerCase()
          .includes(searchTerm.trim().toLocaleLowerCase())
      );
      setFilteredResults(results);
    } else if (isLoading) {
      setFilteredResults([]);
    } else setFilteredResults(data.data);
  }, [searchTerm, isLoading]);

  return (
    <Wrapper>
      <Modal isOpen={modalIsOpen} handleClose={handleCloseModal}>
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
          {!isLoading
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
      {isLoading ? (
        <SpinnerWrapper>
          <Spinner />
        </SpinnerWrapper>
      ) : null}
    </Wrapper>
  );
};
