import './App.css';

function Grid() {
  return (
    <div>
      <div className="grid-row" >
        <div className="grid-tile" >X</div>
        <div className="grid-border-right" ></div>
        <div className="grid-tile">X</div>
        <div className="grid-border-right" ></div>
        <div className="grid-tile">X</div>
      </div>
      <div className="grid-border-top"></div>
      <div className="grid-row" >
        <div className="grid-tile">X</div>
        <div className="grid-border-right" ></div>
        <div className="grid-tile">X</div>
        <div className="grid-border-right" ></div>
        <div className="grid-tile">X</div>
      </div>
      <div className="grid-border-top"></div>
      <div className="grid-row" >
        <div className="grid-tile">X</div>
        <div className="grid-border-right" ></div>
        <div className="grid-tile">X</div>
        <div className="grid-border-right" ></div>
        <div className="grid-tile">X</div>
      </div>
    </div>
  );
}

export default Grid;
