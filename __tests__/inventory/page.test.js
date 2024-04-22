import Page from '@/app/inventory/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Mock useRouter:
jest.mock('next/navigation', () => {
  return {
    usePathname: () => '/inventory',
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      isFallback: false,
    }),
    useSearchParams: () => ({
      get: () => {},
      query: {},
    }),
  };
});

jest.mock('../../app/lib/data', () => ({
  fetchSurvivors: jest.fn().mockReturnValue({
    survivors: [
      {
        id: 1,
        name: 'John Doe',
        inventory: [
          { id: 2, item_name: 'Water' },
          { id: 3, item_name: 'Medicine' },
        ],
      },
      {
        id: 2,
        name: 'Jane Smith',
        inventory: [
          { id: 1, item_name: 'Food' },
          { id: 3, item_name: 'Medicine' },
        ],
      },
    ],
    totalPages: 3,
    survivorsLength: 15,
  }),
}));

describe('Page function', () => {
  test('renders page components correctly', async () => {
    // Render the Page component
    render(<Page searchParams={{ page: '1' }} />);

    // Check if the page components are rendered correctly
    const subheadTitle = screen.getByText('List of Survivors Inventories');
    expect(subheadTitle).toBeInTheDocument();
  });

  test('renders survivor items in the table', async () => {
    // Render the Page component
    render(<Page searchParams={{ page: '1' }} />);

    // Check if the survivor items are rendered correctly
    const johnDoeName = screen.getByText('John Doe');
    expect(johnDoeName).toBeInTheDocument();

    const janeSmithName = screen.getByText('Jane Smith');
    expect(janeSmithName).toBeInTheDocument();

    const foodItem = screen.getByText('Food, Medicine');
    expect(foodItem).toBeInTheDocument();

    const waterItem = screen.getByText('Water, Medicine');
    expect(waterItem).toBeInTheDocument();
  });
});
