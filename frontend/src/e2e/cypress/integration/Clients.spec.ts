import { faker } from '@faker-js/faker';
import { Client } from '../../../types/types';

const client: Client = {
  name: faker.name.findName(),
  category: 'wedding',
  status: 'lead',
  value: faker.random.number({ min: 1, max: 3000 }),
  alreadyPaid: faker.random.number({ min: 1, max: 3000 }),
  address: faker.address.city(),
  date: '2022-06-12T19:30',
  info: faker.lorem.paragraph(),
};

const editedClient: Client = {
  name: faker.name.findName(),
  category: 'event',
  status: 'contract',
  value: faker.random.number({ min: 1, max: 3000 }),
  alreadyPaid: faker.random.number({ min: 1, max: 3000 }),
  address: faker.address.city(),
  date: '2022-08-12T19:30',
  info: faker.lorem.paragraph(),
};

describe('Clients add functionality testing', () => {
  before(() => {
    //Clear 'tasks' and 'clients' colecction before tests
    cy.exec('npm run e2e:dropDB');
  });

  //Login user with request to API
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: Cypress.env('backendBaseURL') + '/users/login',
      body: {
        email: 'test@test.pl',
        password: '12345',
      },
    });
    cy.visit('/clients');
  });

  it('Should open clinets list and display no client message', () => {
    cy.url().should('include', '/clients');

    cy.contains(/No client/i).should('exist');
  });

  it('Click add button, should redirect to add page then click add button on Add page without fill fields should show error messages', () => {
    cy.findByRole('link', { name: /add/i }).click();
    cy.url().should('include', '/clients/add');
    cy.findByText(/add client/i).should('exist');

    cy.findByRole('button', { name: /add/i }).click();

    cy.findByText(/Please fill name field/i).should('exist');
    cy.findByText(/Please fill address field/i).should('exist');
    cy.findByText(/Please set a date/i).should('exist');
  });

  it('Can add new client with correct fields. Open modal with client info, close button should close modal', () => {
    cy.findByRole('link', { name: /add/i }).click();

    cy.findByLabelText(/name/i).click().type(client.name);
    cy.findByLabelText(/category/i).select(client.category);
    cy.findByLabelText(/status/i).select(client.status);
    cy.findByLabelText(/value/i).click().clear().type(client.value.toString());
    cy.findByLabelText(/already paid/i)
      .clear()
      .type(client.alreadyPaid.toString());
    cy.findByLabelText(/address/i)
      .click()
      .type(client.address);
    cy.findByLabelText(/date/i).click().type(client.date.toString());
    cy.findByLabelText(/information/i)
      .click()
      .type(client.info);

    cy.findByRole('button', { name: /add/i }).click();
    cy.findByText(/added/i).should('exist');

    cy.visit('/clients');

    // Client info modal
    cy.findByText(client.name).should('exist').click();

    cy.findByRole('dialog').findByText(client.name).should('exist');
    cy.findByRole('dialog').findByText(client.category).should('exist');
    cy.findByRole('dialog').findByText(client.status).should('exist');
    cy.findByRole('dialog').findByText(client.address).should('exist');
    cy.findByRole('dialog').findByText(client.info).should('exist');

    cy.findByTitle(/close icon/i)
      .parent()
      .click();
    cy.findByRole('dialog').should('not.exist');
  });

  it('Can edit client with new values', () => {
    cy.findByText(client.name).parent().findByRole('button').click();
    cy.findByRole('link', { name: /edit/i }).click();

    //Check if inputs have correct values from DB
    cy.findByLabelText(/name/i).should('have.value', client.name);
    cy.findByLabelText(/status/i).should('have.value', client.status);
    cy.findByLabelText(/category/i).should('have.value', client.category);
    cy.findByLabelText(/address/i).should('have.value', client.address);
    cy.findByLabelText(/info/i).should('have.value', client.info);

    //Change value of few inputs
    cy.findByLabelText(/name/i).click().clear().type(editedClient.name);
    cy.findByLabelText(/category/i).select(editedClient.category);
    cy.findByLabelText(/status/i).select(editedClient.status);

    cy.findByRole('button', { name: /edit/i }).click();

    //Check if values are correctly updated
    cy.visit('/clients');
    cy.findByText(editedClient.name).should('exist');
    cy.findByText(editedClient.status).should('exist');
    cy.findByText(editedClient.category).should('exist');
  });

  it('Can delete client from client list', () => {
    cy.findByText(editedClient.name).parent().findByRole('button').click();

    cy.findByRole('button', { name: /delete/i }).click();

    cy.findByText(/are you sure/i).should('exist');

    //Check if click 'NO'
    cy.findByRole('button', { name: /no/i }).click();
    cy.findByText(editedClient.name).should('exist');

    //Check if click 'YES'
    cy.findByText(editedClient.name).parent().findByRole('button').click();
    cy.findByRole('button', { name: /delete/i }).click();

    cy.findByRole('button', { name: /yes/i }).click();
    cy.findByText(editedClient.name).should('not.exist');
  });
});
