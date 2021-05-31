import { render, screen } from '@testing-library/react';
import CoinList from './CoinList';

test('renders coin list table', () => {
  render(<CoinList />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
});
