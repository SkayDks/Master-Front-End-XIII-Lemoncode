import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as api from './name-api';
import { NameCollection } from './name-collection-router';
import { UserEdit } from './user-edit';

const renderWithRoter = (component) =>
  render(
    <HashRouter>
      <Routes>
        <Route path="/" element={component} />
        <Route path="users/:name" element={<UserEdit />} />
      </Routes>
    </HashRouter>
  );

describe('NameCollection component specs', () => {
  it('should display a list with one item when it mounts the component and it resolve the async call', async () => {
    // Arrange
    const users = ['John Doe'];
    //spy
    //stub
    const getStub = jest
      .spyOn(api, 'getNameColletcion')
      .mockResolvedValue(users);
    // Act
    renderWithRoter(<NameCollection />);
    const item = await screen.findByRole('listitem');

    // Assert
    expect(item).toBeInTheDocument();
  });
  it('should display a list with one item when it mounts the component and it resolve the async call', async () => {
    // Arrange
    const users = ['John Doe'];
    //spy
    //stub
    const getStub = jest
      .spyOn(api, 'getNameColletcion')
      .mockResolvedValue(users);
    // Act
    renderWithRoter(<NameCollection />);
    //const itemsBeforeWait = screen.getAllByRole('listem'); se rompe y no se puede comprobare
    const itemsBeforeWait = screen.queryAllByRole('listitem');
    const items = await screen.findAllByRole('listitem');

    // Assert
    expect(itemsBeforeWait).toEqual(null);
    expect(items).toHaveLength(1);
    expect(getStub).toHaveBeenCalled();
  });
  it('should remove initial list when it mounts the component and it resolve the async call', async () => {
    // Arrange
    const initialUsers = ['initial-user'];
    const users = ['John Doe'];
    //spy
    //stub
    const getStub = jest
      .spyOn(api, 'getNameColletcion')
      .mockResolvedValue(users);
    // Act
    renderWithRoter(<NameCollection initialNameCollection={initialUsers} />);

    const initialItems = screen.getAllByRole('listitem');

    // Assert

    expect(initialItems).toHaveLength(1);
    await waitFor(() => {
      expect(screen.queryByText('initial-user')).not.toBeInTheDocument();
    });
  });
  it('should navigate to second user edit page when click in second user name', async () => {
    // Arrange
    const users = ['John Doe', 'Jane Doe'];
    //spy
    //stub
    const getStub = jest
      .spyOn(api, 'getNameColletcion')
      .mockResolvedValue(users);
    // Act
    renderWithRoter(<NameCollection />);
    const links = await screen.findAllByRole('link');
    const secondUser = links[1];
    await userEvent.click(secondUser);
    // Assert
    const userEditElement = screen.getByRole('heading', {
      name: 'User name: Jane Doo',
    });
    expect(userEditElement).toBeInTheDocument();
  });
});
