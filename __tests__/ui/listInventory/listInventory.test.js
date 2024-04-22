import ListInventory from '@/app/ui/listInventory/listInventory';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('ListInventory component', () => {
  test('renders list of survivor item names', () => {
    // Define mock survivor items
    const mockSurvivorItems = [
      { id: 1, item_name: 'Food' },
      { id: 2, item_name: 'Water' },
      { id: 3, item_name: 'Medicine' },
    ];

    // Render the ListInventory component with mock survivor items
    render(<ListInventory survivorItems={mockSurvivorItems} />);

    // Check if the list of survivor item names is rendered
    const inventoryList = screen.getByText('Food, Water, Medicine');
    expect(inventoryList).toBeInTheDocument();
  });

  test('renders empty list if survivorItems is empty', () => {
    // Render the ListInventory component with an empty array of survivor items
    const { container } = render(<ListInventory survivorItems={[]} />);

    const div = container.querySelector('div');

    // Check if the list of survivor item names is rendered
    expect(div).toBeInTheDocument();
    // Check if the empty list message is rendered
    expect(div).toBeEmpty();
  });
});
