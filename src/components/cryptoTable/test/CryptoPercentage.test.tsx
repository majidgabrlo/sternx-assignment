import { render, screen } from '@testing-library/react';
import CryptoPercentage from '../recordFieldsComponents/CryptoPercentage';

test('Percentage field is red and arrow is down', () => {
  render(<CryptoPercentage percentage={-2.464654} />);
  const percentage = screen.getByText(/2.46%/i);
  const arrow=screen.getByRole("arrow")

  expect(percentage).toHaveClass("text-red-400");
  expect(arrow).toHaveClass("rotate-180 fill-red-400")
});
