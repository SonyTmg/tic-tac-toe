function Tile(props) {
  return (
    <div data-testid={props.testID} className="grid-tile" onClick={props.onClick}>
      {props.piece}
    </div>
  )

}


export default Tile;
