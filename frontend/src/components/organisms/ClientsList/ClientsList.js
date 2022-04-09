import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useGetClientsQuery } from 'store';
import { StyledTable, Wrapper } from './ClientsList.styles';
import { ClientItem } from 'components/molecules/ClientItem/ClientItem';
import { Spinner } from 'components/atoms/Spinner/Spinner';

const SpinnerWrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;

export const ClientsList = ({ searchTerm }) => {
  const { data, isLoading } = useGetClientsQuery();
  const [filteredResults, setFilteredResults] = useState();

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
                  <ClientItem key={clientData._id} data={clientData} />
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
