import { useEffect, useState } from 'react';
import './App.css';
import Tile from './Tile';


function Grid() {

  const [gameOver, setGameOver] = useState(false);
  const [tileValues, setTileValues] = useState(['', '', '', '', '', '', '', '', '']);
  const [nextPiece, setNextPiece] = useState('X');
  const toggleNextPiece = () => {
    if (nextPiece === 'X') {
      setNextPiece('O');
    } else {
      setNextPiece('X');
    }
  }
  useEffect(() => {
    if (tileValues[0] === 'X'
        && tileValues[1] === 'X'
        && tileValues[2] === 'X') {
      setGameOver(true);
    }
  }, [tileValues])
  const onClick = (tileID) => {
    // If this is second click, don't run code below
    if (tileValues[tileID] === 'X' || tileValues[tileID] === 'O') {
      return;
    }
    // prevState: ['', '', '', '', '', '', '', '', '']
    // prevState: ['X', '', '', '', '', '', '', '', '']
    // prevState: ['X', '', '', '', '', '', '', '', 'O']
    // prevState: ['X', 'X', '', '', '', '', '', '', '']
    setTileValues((prevState) => {
      // Copy old state
      const newState = prevState.slice();
      // Set value of tile that was clicked to 'X' or 'O'
      newState[tileID] = nextPiece;
      return newState;
    });
    toggleNextPiece();
  }

  return (
    <div>
      {
        gameOver ? <h1 className={!gameOver ? 'game-over-hidden' : ''}>Game over!</h1>
        : <></>
      }
      <div className="grid-row" >
        <Tile testID="tile-1" piece={tileValues[0]} onClick={() => onClick(0)} />
        <div className="grid-border-right" ></div>
        <Tile testID="tile-2" piece={tileValues[1]} onClick={() => onClick(1)} />
        <div className="grid-border-right" ></div>
        <Tile testID="tile-3" piece={tileValues[2]} onClick={() => onClick(2)} />
      </div>
      <div className="grid-border-top"></div>
      <div className="grid-row" >
        <Tile testID="tile-4" piece={tileValues[3]} onClick={() => onClick(3)} />
        <div className="grid-border-right" ></div>
        <Tile testID="tile-5" piece={tileValues[4]} onClick={() => onClick(4)} />
        <div className="grid-border-right" ></div>
        <Tile testID="tile-6" piece={tileValues[5]} onClick={() => onClick(5)} />
      </div>
      <div className="grid-border-top"></div>
      <div className="grid-row" >
        <Tile testID="tile-7" piece={tileValues[6]} onClick={() => onClick(6)} />
        <div className="grid-border-right" ></div>
        <Tile testID="tile-8" piece={tileValues[7]} onClick={() => onClick(7)} />
        <div className="grid-border-right" ></div>
        <Tile testID="tile-9" piece={tileValues[8]} onClick={() => onClick(8)} />
      </div>
    </div>
  );
}

export default Grid;
