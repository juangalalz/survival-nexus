import Pagination from '@/app/ui/pagination/pagination';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

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

describe('Pagination component', () => {
  test('renders pagination info correctly', () => {
    // Render the Pagination component with mock props
    const { container } = render(
      <Pagination totalPages={5} survivorsLength={50} />
    );

    const p = container.querySelector('p');

    // Check if the pagination info is rendered correctly
    expect(p.textContent).toBe('Showing 1 to 10 of 50 Results');
  });

  test('disables Previous button on first page', () => {
    // Render the Pagination component on the first page
    render(<Pagination totalPages={5} survivorsLength={50} />);

    // Check if the Previous button is disabled
    const previousButton = screen.getByText('Previous');
    expect(previousButton).toBeDisabled();
  });
});
