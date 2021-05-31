import { render, screen } from '@testing-library/react';
import Filter from './Filter';

test('renders search textbox', () => {
  render(<Filter />);
  const textboxElement = screen.getByRole('textbox');
  expect(textboxElement).toBeInTheDocument();
});
