import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

test('renders navigation component without crashing', () => {
  render(<Navigation />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
});
