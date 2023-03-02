import { fireEvent, render, screen } from '@testing-library/react';
import Grid from './Grid';

it('should print an X as the first move', () => {
  render(<Grid />);
  const tile1 = screen.getByTestId('tile-1');
  fireEvent.click(tile1);
  expect(tile1).toHaveTextContent('X');
});

it('should alternate between X and O each move', () => {
  render(<Grid />);

  const tile1 = screen.getByTestId('tile-1');
  fireEvent.click(screen.getByTestId('tile-1'));
  expect(tile1).toHaveTextContent('X');

  const tile2 = screen.getByTestId('tile-2');
  fireEvent.click(screen.getByTestId('tile-2'));
  expect(tile2).toHaveTextContent('O');

  const tile9 = screen.getByTestId('tile-9');
  fireEvent.click(screen.getByTestId('tile-9'));
  expect(tile9).toHaveTextContent('X');
});

it('should not be able to change a tile once it has been clicked', () => {
  render(<Grid />);
  const tile1 = screen.getByTestId('tile-1');
  fireEvent.click(tile1);
  expect(tile1).toHaveTextContent('X');

  fireEvent.click(tile1);
  expect(tile1).toHaveTextContent('X');
});
