import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { Input } from 'components/atoms/Input/Input';
import { ClientsList } from 'components/organisms/ClientsList/ClientsList';
import Modal from 'components/organisms/Modal/Modal';

const HeadingWrapper = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;

  a {
    margin-top: 3rem;
  }
`;

const SearchBar = styled.div``;

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <ViewWrapper>
      <HeadingWrapper>
        <div>
          <Title>Clients</Title>
          <SearchBar>
            <Input
              type="search"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch}
            />
          </SearchBar>
        </div>
        <div>
          <Button as={Link} to="/clients/add" isSecondary>
            ADD
          </Button>
        </div>
      </HeadingWrapper>
      <ClientsList searchTerm={searchTerm} />
    </ViewWrapper>
  );
};

export default Clients;
