import { render, screen } from '@testing-library/react';
import About from './About';

test('renders about component without crashing', () => {
  render(<About />);
  const linkElement = screen.getByText(/purpose of the application/i);
  expect(linkElement).toBeInTheDocument();
});
