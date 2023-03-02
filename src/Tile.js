import { useState } from "react";

function Tile(props) {

  const [piece, setPiece] = useState();
  const onClick = () => {
    setPiece(props.nextPiece);
    props.toggleNextPiece();
  }
  // Option of having X or O
  // The first click will always represent X
  // After the first click, every other click should alternate until everything is filled
  return (
    <div className="grid-tile" onClick={onClick}>
      {piece}
    </div>
  )

}


export default Tile;
