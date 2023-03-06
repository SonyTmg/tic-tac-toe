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

it('should show game over if there are 3 X in a row', () => {
  render(<Grid/>);
  expect(screen.queryByText('Game over!')).toBeFalsy();
  const tile1 = screen.getByTestId('tile-1');
  fireEvent.click(tile1);
  expect(screen.queryByText('Game over!')).toBeFalsy();

  const tile4 = screen.getByTestId('tile-4');
  fireEvent.click(tile4);
  expect(screen.queryByText('Game over!')).toBeFalsy();

  const tile2 = screen.getByTestId('tile-2');
  fireEvent.click(tile2);
  expect(screen.queryByText('Game over!')).toBeFalsy();

  const tile5 = screen.getByTestId('tile-5');
  fireEvent.click(tile5);
  expect(screen.queryByText('Game over!')).toBeFalsy();

  const tile3 = screen.getByTestId('tile-3');
  fireEvent.click(tile3);

  expect(screen.getByText('Game over!')).toBeTruthy();
});
