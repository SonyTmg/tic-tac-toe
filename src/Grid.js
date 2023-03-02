import { useState } from 'react';
import './App.css';
import Tile from './Tile';


function Grid() {

  const [nextPiece, setNextPiece] = useState('X');
  const toggleNextPiece = () => {
    if (nextPiece === 'X') {
      setNextPiece('O');
    } else {
      setNextPiece('X');
    }
  }

  return (
    <div>
      <div className="grid-row" >
        <Tile testID="tile-1" nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile testID="tile-2" nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile testID="tile-3" nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
      </div>
      <div className="grid-border-top"></div>
      <div className="grid-row" >
        <Tile testID="tile-4" nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile testID="tile-5" nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile testID="tile-6" nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
      </div>
      <div className="grid-border-top"></div>
      <div className="grid-row" >
        <Tile testID="tile-7" nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile testID="tile-8" nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile testID="tile-9" nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
      </div>
    </div>
  );
}

export default Grid;
