import { faker } from '@faker-js/faker';

const fakeName = faker.name.findName();

describe('User tasks testing', () => {
  before(() => {
    //Clear 'tasks' and 'clients' colecction before tests
    cy.exec('npm run e2e:dropDB');
  });
  beforeEach(() => {
    cy.request({
      method: 'POST',
      url: Cypress.env('backendBaseURL') + '/users/login',
      body: {
        email: 'test@test.pl',
        password: '12345',
      },
    });
    cy.visit('/tasks');
  });

  it('Should open tasks list and display no tasks message', () => {
    cy.url().should('include', '/tasks');

    cy.contains(/No tasks/i).should('exist');
  });

  it('Can open modal and add new task', () => {
    cy.findByRole('button', { name: /add/i }).click();
    cy.findByText(/add task/i).should('exist');

    cy.findByLabelText(/task name/i)
      .click()
      .type(fakeName);
    cy.findByLabelText(/priority/i).select('medium');

    cy.findByRole('button', { name: /add/i }).click();

    cy.findByText(/added/i).should('exist');
    cy.findByText(fakeName).should('exist');
    cy.findByTitle(/close icon/i)
      .parent()
      .click();
  });

  it('Can change status of task', () => {
    cy.findByTitle('checkmark icon').parent().click();

    cy.findByTitle('arrow-up icon').should('exist');

    cy.findByTitle('arrow-up icon').parent().click();

    cy.findByTitle('checkmark icon').should('exist');
  });

  it('Can be deleted by clicking trash icon - button', () => {
    cy.get('li span')
      .contains(fakeName)
      .parent()
      .findByTestId('delete-task')
      .click();

    cy.contains(fakeName).should('not.exist');
  });

  it('Can add multiple tasks and filter tasks by status', () => {
    const fakeName2 = faker.name.findName();

    //Add two tasks
    cy.findByRole('button', { name: /add/i }).click();

    cy.findByLabelText(/task name/i)
      .click()
      .type(fakeName);
    cy.findByLabelText(/priority/i).select('medium');
    cy.findByRole('button', { name: /add/i }).click();

    cy.findByLabelText(/task name/i)
      .click()
      .type(fakeName2);
    cy.findByLabelText(/priority/i).select('medium');
    cy.findByRole('button', { name: /add/i }).click();

    cy.findByTitle(/close icon/i)
      .parent()
      .click();

    //Change status of first task
    cy.get('li span')
      .contains(fakeName)
      .parent()
      .findByTitle('checkmark icon')
      .parent()
      .click();

    //Filter tasks by diffrent status
    cy.findByRole('combobox').select('completed');
    cy.contains(fakeName).should('exist');
    cy.contains(fakeName2).should('not.exist');

    cy.findByRole('combobox').select('uncompleted');
    cy.contains(fakeName2).should('exist');
    cy.contains(fakeName).should('not.exist');

    cy.findByRole('combobox').select('all');
    cy.contains(fakeName2).should('exist');
    cy.contains(fakeName).should('exist');
  });
});
