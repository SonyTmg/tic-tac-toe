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
        <Tile nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
      </div>
      <div className="grid-border-top"></div>
      <div className="grid-row" >
        <Tile nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
      </div>
      <div className="grid-border-top"></div>
      <div className="grid-row" >
        <Tile nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
        <div className="grid-border-right" ></div>
        <Tile nextPiece={nextPiece} toggleNextPiece={toggleNextPiece}/>
      </div>
    </div>
  );
}

export default Grid;
