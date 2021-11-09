import './App.css'
import {useState} from 'react'    
import Grid from './components/Grid'


function App() {
  const [gridarea, setGridarea] = useState(['', '', '', '', '', '', '', '', ''])


  return (
    <div className="App">
      <div className="gridarea">
        <div className="row">
          <Grid
          val={gridarea[0]} 
          chooseGrid={() => {
            alert(0)
          }}
        />
        <Grid
          val={gridarea[1]} 
          chooseGrid={() => {
            alert(1)
          }}
        />
        <Grid
          val={gridarea[2]} 
          chooseGrid={() => {
            alert(2)
          }}
        />
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
