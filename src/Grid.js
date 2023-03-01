import './App.css';

function Grid() {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{padding: 20}}>X</div>
        <div style={{borderRight: '1px solid white'}}></div>
        <div style={{padding: 20}}>X</div>
        <div style={{borderRight: '1px solid white'}}></div>
        <div style={{padding: 20}}>X</div>
      </div>
      <div style={{borderTop: '1px solid white'}}></div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{padding: 20}}>X</div>
        <div style={{borderRight: '1px solid white'}}></div>
        <div style={{padding: 20}}>X</div>
        <div style={{borderRight: '1px solid white'}}></div>
        <div style={{padding: 20}}>X</div>
      </div>
      <div style={{borderTop: '1px solid white'}}></div>
      <div style={{display: 'flex', flexDirection: 'row'}}>
        <div style={{padding: 20}}>X</div>
        <div style={{borderRight: '1px solid white'}}></div>
        <div style={{padding: 20}}>X</div>
        <div style={{borderRight: '1px solid white'}}></div>
        <div style={{padding: 20}}>X</div>
      </div>
    </div>
  );
}

export default Grid;
