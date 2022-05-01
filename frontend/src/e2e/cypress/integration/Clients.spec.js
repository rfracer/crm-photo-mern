import { faker } from '@faker-js/faker';

const client = {
  name: faker.name.findName(),
  category: 'wedding',
  status: 'lead',
  value: faker.random.number({ min: 1, max: 3000 }),
  alreadyPaid: faker.random.number({ min: 1, max: 3000 }),
  address: faker.address.city(),
  date: '2022-06-12T19:30',
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
      url: Cypress.config('backendBaseURL') + '/users/login',
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

  it('Click add button, should redirect to add page, click add button without fill fields should show error messages', () => {
    cy.findByRole('link', { name: /add/i }).click();
    cy.url().should('include', '/clients/add');
    cy.findByText(/add client/i).should('exist');

    cy.findByRole('button', { name: /add/i }).click();

    cy.findByText(/Please fill name field/i).should('exist');
    cy.findByText(/Please fill address field/i).should('exist');
    cy.findByText(/Please set a date/i).should('exist');
  });

  it('Can add new client with correct fields', () => {
    cy.findByRole('link', { name: /add/i }).click();

    cy.findByLabelText(/name/i).click().type(client.name);
    cy.findByLabelText(/category/i).select(client.category);
    cy.findByLabelText(/status/i).select(client.status);
    cy.findByLabelText(/value/i).click().clear().type(client.value);
    cy.findByLabelText(/already paid/i)
      .clear()
      .type(client.alreadyPaid);
    cy.findByLabelText(/address/i)
      .click()
      .type(client.address);
    cy.findByLabelText(/date/i).click().type(client.date);
    cy.findByLabelText(/information/i)
      .click()
      .type(client.info);

    cy.findByRole('button', { name: /add/i }).click();
    cy.findByText(/added/i).should('exist');

    cy.visit('/clients');

    cy.findByText(client.name).should('exist');
  });

  it('Can delete client from client list', () => {
    cy.findByText(client.name).parent().findByRole('button').click();

    cy.findByRole('button', { name: /delete/i }).click();

    cy.findByText(/are you sure/i).should('exist');

    //Check if click 'NO'
    cy.findByRole('button', { name: /no/i }).click();
    cy.findByText(client.name).should('exist');

    //Check if click 'YES'
    cy.findByText(client.name).parent().findByRole('button').click();
    cy.findByRole('button', { name: /delete/i }).click();

    cy.findByRole('button', { name: /yes/i }).click();
    cy.findByText(client.name).should('not.exist');
  });
});

// describe('Clients delete and edit functionality testing', () => {
//   beforeEach(() => {
//     cy.request({
//       method: 'POST',
//       url: Cypress.config('backendBaseURL') + '/users/login',
//       body: {
//         email: 'test@test.pl',
//         password: '12345',
//       },
//     });
//     cy.visit('/clients');
//   });

//   it('Should display user', () => {
//     //
//   });
// });
