import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders serachbox', () => {
  render(<Home />);
  const textboxElement = screen.getByRole('textbox');
  expect(textboxElement).toBeInTheDocument();
});


test('renders coins table', () => {
    render(<Home />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });
  