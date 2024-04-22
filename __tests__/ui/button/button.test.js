import Button from '@/app/ui/button/button';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Button component', () => {
  test('renders button with text only', () => {
    // Render the Button component with text
    render(<Button text='Click me' />);

    // Check if the button text is rendered
    const buttonText = screen.getByText('Click me');
    expect(buttonText).toBeInTheDocument();

    // Check if the button is disabled by default
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  test('renders button with icon and text', () => {
    // Render the Button component with icon and text
    render(<Button text='Click me' iconPath='/path/to/icon.png' />);

    // Check if the button icon is rendered
    const buttonIcon = screen.getByAltText('button icon');
    expect(buttonIcon).toBeInTheDocument();

    // Check if the button text is rendered
    const buttonText = screen.getByText('Click me');
    expect(buttonText).toBeInTheDocument();

    // Check if the button is disabled
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });

  test('calls onClick function when button is clicked', () => {
    // Define a mock onClick function
    const mockOnClick = jest.fn();

    // Render the Button component with onClick function
    render(<Button text='Click me' onClick={mockOnClick} />);

    // Simulate a button click
    fireEvent.click(screen.getByText('Click me'));

    // Check if the onClick function is called
    expect(mockOnClick).toHaveBeenCalled();

    // Check if the button is enabled
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toBeDisabled();
  });

  test('disables button when onClick function is not provided', () => {
    // Render the Button component without onClick function
    render(<Button text='Click me' />);

    // Check if the button is disabled
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeDisabled();
  });
});
