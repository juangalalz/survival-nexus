import Header from '@/app/ui/header/header';
import styles from '@/app/ui/header/styles.module.scss';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

jest.mock('next/navigation', () => {
  return {
    usePathname: () => '/survivors',
  };
});

describe('Header component', () => {
  test('renders logo and navigation links', () => {
    // Render the Header component
    render(<Header />);

    // Check if the logo is rendered
    const logoElement = screen.getByAltText('Application logo');
    expect(logoElement).toBeInTheDocument();

    // Check if navigation links are rendered
    const survivorsLink = screen.getByText('Survivors');
    expect(survivorsLink).toBeInTheDocument();

    const inventoryLink = screen.getByText('Inventory');
    expect(inventoryLink).toBeInTheDocument();
  });

  test('activates selected style for current page link', () => {
    // Render the Header component
    render(<Header />);

    // Check if the Survivors link has the selected style class
    const survivorsLink = screen.getByText('Survivors').parentElement;
    expect(survivorsLink).toHaveClass(styles.linkSelected);

    // Check if the Inventory link does not have the selected style class
    const inventoryLink = screen.getByText('Inventory').parentElement;
    expect(inventoryLink).not.toHaveClass(styles.linkSelected);
  });
});
