import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders home component without crashing', () => {
  render(<Home />);
  const linkElement = screen.getByText(/welcome/i);
  expect(linkElement).toBeInTheDocument();
});
