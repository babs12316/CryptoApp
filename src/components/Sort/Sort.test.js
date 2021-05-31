import { render, screen } from '@testing-library/react';
import Sort from './Sort';

test('renders ascending and descending icons', () => {
  render(<Sort />);
  const upIconElement = screen.getByText('↑');
  expect(upIconElement).toBeInTheDocument();
  const downIconElement = screen.getByText('↓');
  expect(downIconElement).toBeInTheDocument();
});
