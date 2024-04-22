import Subhead from '@/app/ui/subhead/subhead';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('Subhead component', () => {
  test('renders title and description correctly', () => {
    // Render the Subhead component with mock props
    render(<Subhead title='Title' description='Description' />);

    // Check if the title is rendered correctly
    const titleElement = screen.getByText('Title');
    expect(titleElement).toBeInTheDocument();

    // Check if the description is rendered correctly
    const descriptionElement = screen.getByText('Description');
    expect(descriptionElement).toBeInTheDocument();
  });

  test('renders exclamation icon', () => {
    // Render the Subhead component with mock props
    render(<Subhead title='Title' description='Description' />);

    // Check if the exclamation icon is rendered
    const iconElement = screen.getByAltText('Exclamation icon');
    expect(iconElement).toBeInTheDocument();
  });
});
