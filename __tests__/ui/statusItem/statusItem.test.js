import StatusItem from '@/app/ui/statusItem/statusItem';
import styles from '@/app/ui/statusItem/styles.module.scss';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('StatusItem component', () => {
  test('renders "Healthy" status when status is false', () => {
    // Render the StatusItem component with status false (Healthy)
    render(<StatusItem status={false} />);

    // Check if the Healthy status text is rendered
    const healthyStatusText = screen.getByText('Healthy');
    expect(healthyStatusText).toBeInTheDocument();

    // Check if the status item does not have the red style class
    const statusItem = screen.getByText('Healthy').parentElement;
    expect(statusItem).not.toHaveClass(styles.red);
  });

  test('renders "Infected" status when status is true', () => {
    // Render the StatusItem component with status true (Infected)
    render(<StatusItem status={true} />);

    // Check if the Infected status text is rendered
    const infectedStatusText = screen.getByText('Infected');
    expect(infectedStatusText).toBeInTheDocument();

    // Check if the status item has the red style class
    const statusItem = screen.getByText('Infected').parentElement;
    expect(statusItem).toHaveClass(styles.red);
  });
});
