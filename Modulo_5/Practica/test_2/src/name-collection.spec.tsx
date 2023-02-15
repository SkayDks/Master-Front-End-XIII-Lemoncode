import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import * as api from './name-api';
import { NameCollection } from 'name-collection';

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
    render(<NameCollection />);
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
    render(<NameCollection />);
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
    render(<NameCollection initialNameCollection={initialUsers} />);

    const initialItems = screen.getAllByRole('listitem');

    // Assert

    expect(initialItems).toHaveLength(1);
    await waitFor(() => {
      expect(screen.queryByText('initial-user')).not.toBeInTheDocument();
    });
  });
});
