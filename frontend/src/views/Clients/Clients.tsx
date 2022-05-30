import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { HeadingWrapper, SearchBar } from 'views/Clients/Clients.styles';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { Input } from 'components/atoms/Input/Input';
import { ClientsList } from 'components/organisms/ClientsList/ClientsList';
import { FormattedMessage, useIntl } from 'react-intl';

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const intl = useIntl();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <ViewWrapper>
      <HeadingWrapper>
        <div>
          <Title>
            <FormattedMessage
              id="clients.title"
              description="Clients page title"
              defaultMessage="Clients"
            />
          </Title>
          <SearchBar>
            <Input
              type="search"
              placeholder={intl.formatMessage({
                id: 'clients.search_placeholder',
              })}
              value={searchTerm}
              onChange={handleSearch}
            />
          </SearchBar>
        </div>
        <div>
          <Button as={Link} to="/clients/add" $secondary>
            <FormattedMessage
              id="global.add"
              description="Add button name"
              defaultMessage="Add"
            />
          </Button>
        </div>
      </HeadingWrapper>
      <ClientsList searchTerm={searchTerm} />
    </ViewWrapper>
  );
};

export default Clients;
