import UserItem from '@/app/ui/userItem/userItem';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('UserItem component', () => {
  test('renders user name correctly', () => {
    // Render the UserItem component with a mock user name
    render(<UserItem name='John Doe' />);

    // Check if the user name is rendered correctly
    const nameElement = screen.getByText('John Doe');
    expect(nameElement).toBeInTheDocument();
  });

  test('renders avatar icon', () => {
    // Render the UserItem component with a mock user name
    render(<UserItem name='John Doe' />);

    // Check if the avatar icon is rendered
    const iconElement = screen.getByAltText('avatar icon');
    expect(iconElement).toBeInTheDocument();
  });
});
