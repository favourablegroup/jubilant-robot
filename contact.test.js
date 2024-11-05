import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('renders contact component without crashing', () => {
  render(<Contact />);
  const linkElement = screen.getByText(/send a message or feedback/i);
  expect(linkElement).toBeInTheDocument();
});
