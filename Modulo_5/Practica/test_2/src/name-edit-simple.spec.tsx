import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NameEdit } from 'name-edit-simple';

describe('NameEdit component specs', () => {
  it('should display heading and input element with empty userName value', () => {
    // Arrange
    // Act
    render(<NameEdit />);
    // Assert
    const h3Element = screen.getByRole('heading', {
      level: 3,
    });
    const inputElement = screen.getByRole('textbox') as HTMLInputElement; //Necesario hacer casteo para distintas cosas, en este caso reconocer el value

    expect(h3Element).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
  it('should update h3 text when input change ', async () => {
    // Arrange
    // Act
    render(<NameEdit />);
    const inputElement = screen.getByRole('textbox') as HTMLInputElement; //Necesario hacer casteo para distintas cosas, en este caso reconocer el value
    await userEvent.type(inputElement, 'John');
    // Assert

    expect(inputElement.value).toEqual('John');
    expect(screen.getByRole('heading').textContent).toEqual('John');
  });
});
