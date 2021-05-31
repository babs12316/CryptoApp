import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header compoenent', () => {
  render(<App />);
  const linkElement = screen.getByRole('banner');
  expect(linkElement).toBeInTheDocument();
});

test('renders home link', () => {
  render(<App />);
  const linkElement = screen.getByRole('link');
  expect(linkElement).toBeInTheDocument();
});
