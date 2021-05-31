import { render, screen } from '@testing-library/react';
import Coin from './Coin';

test('renders coin image', () => {
  render(<Coin />);
  const imgElement = screen.getByRole('img');
  expect(imgElement).toBeInTheDocument();
});
