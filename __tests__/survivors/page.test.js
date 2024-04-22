import Page from '@/app/survivors/page';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

// Mock useRouter:
jest.mock('next/navigation', () => {
  return {
    usePathname: () => '/survivors',
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
      { id: 1, name: 'John Doe', infected: false },
      { id: 2, name: 'Jane Smith', infected: true },
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
    const subheadTitle = screen.getByText('List of Survivors');
    expect(subheadTitle).toBeInTheDocument();

    const addButton = screen.getByText('Add Survivor');
    expect(addButton).toBeInTheDocument();

    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('renders survivor items in the table', async () => {
    // Render the Page component
    render(<Page searchParams={{ page: '1' }} />);

    // Check if the survivor items are rendered correctly
    const johnDoeName = screen.getByText('John Doe');
    expect(johnDoeName).toBeInTheDocument();

    const janeSmithName = screen.getByText('Jane Smith');
    expect(janeSmithName).toBeInTheDocument();

    const healthyStatus = screen.getByText('Healthy');
    expect(healthyStatus).toBeInTheDocument();

    const infectedStatus = screen.getByText('Infected');
    expect(infectedStatus).toBeInTheDocument();
  });
});
