import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('confirmation.dialog component specs', () => {
  it('should show the buttons with the texts passed by props ', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Test Title',
      labels: { acceptButton: 'Test Accept', closeButton: 'Test Close' },
      children: 'Test Children Content',
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const buttonElementA = screen.getByRole('button', {
      name: 'Test Accept',
    });
    const buttonElementB = screen.getByRole('button', {
      name: 'Test Close',
    });
    // Assert
    expect(buttonElementA).toBeInTheDocument();
    expect(buttonElementB).toBeInTheDocument();
  });
  it('should call onClose when clicks on "Close" button', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: () => {},
      onClose: jest.fn(),
      title: 'Test Title',
      labels: { acceptButton: 'Test Accept', closeButton: 'Test Close' },
      children: 'Test Children Content',
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const buttonElement = screen.getByRole('button', {
      name: 'Test Close',
    });
    await userEvent.click(buttonElement);
    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });
  it('should call onAcept and onClose when clicks on "Accept" button', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test Title',
      labels: { acceptButton: 'Test Accept', closeButton: 'Test Close' },
      children: 'Test Children Content',
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const buttonElement = screen.getByRole('button', {
      name: 'Test Accept',
    });
    await userEvent.click(buttonElement);
    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
  it('should should close dialog when clicks on close button "Close" button', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test Title',
      labels: { acceptButton: 'Test Accept', closeButton: 'Test Close' },
      children: 'Test Children Content',
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const buttonElement = screen.getByRole('button', {
      name: 'Test Close',
    });
    await userEvent.click(buttonElement);
    const dialogElement = screen.queryByRole('dialog')
    // Assert
    expect(dialogElement).toBeInTheDocument();
  });
  it('should should close dialog when clicks on close button "Accept" button', async () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Test Title',
      labels: { acceptButton: 'Test Accept', closeButton: 'Test Close' },
      children: 'Test Children Content',
    };
    // Act
    render(<ConfirmationDialogComponent {...props} />);
    const buttonElement = screen.getByRole('button', {
      name: 'Test Accept',
    });
    await userEvent.click(buttonElement);
    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});
