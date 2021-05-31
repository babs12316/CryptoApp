import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders app heading text', () => {
  render(<Header />);
  const textElement = screen.getByText('CryptoHome');
  expect(textElement).toBeInTheDocument();
});
