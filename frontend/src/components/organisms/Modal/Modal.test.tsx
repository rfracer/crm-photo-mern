import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import { render } from 'test-utils';
import Modal from './Modal';

const setup = (isOpen: boolean) => {
  const title = 'Title';
  const handleCloseMock = jest.fn();
  const rootDiv = document.createElement('div');
  const utils = render(
    <Modal isOpen={isOpen} modalHeader={title} handleClose={handleCloseMock} />,
    { container: document.body.appendChild(rootDiv) }
  );
  const user = userEvent.setup();
  return { utils, user, title, handleCloseMock };
};

describe('Modal component', () => {
  test('Renders component correctly - display title and close icon', () => {
    const { title } = setup(true);
    expect(screen.getByRole('heading', { name: title })).toBeInTheDocument();
    expect(screen.getByTitle(/close icon/i)).toBeInTheDocument();
  });

  test('Should not display while prop isOpen is false', () => {
    const { title } = setup(false);

    expect(
      screen.queryByRole('heading', { name: title })
    ).not.toBeInTheDocument();
    expect(screen.queryByTitle(/close icon/i)).not.toBeInTheDocument();
  });

  test('Should fire close function on close button click', async () => {
    const { user, handleCloseMock } = setup(true);

    const closeButton = screen.getByRole('button');
    await user.click(closeButton);

    expect(handleCloseMock).toBeCalledTimes(1);
  });
});
