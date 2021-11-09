import './App.css'
import {useState} from 'react'


function App() {
  const [grid, setGrid] = useState(['', '', '', '', '', '', '', '', ''])


  return (
    <div className="App">
      <div className="grid">
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default App;
