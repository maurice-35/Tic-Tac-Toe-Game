import './App.css'
import {useState} from 'react'    
import Grid from './components/Grid'


const App = ()  => {
  const [gridarea, setGridarea] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState('X')

  const chooseGrid = (grid) => {
    setGridarea(
      gridarea.map((val, idx) => {
      if (idx === grid && val === '') {
        return player;
      }
      return val
    })
    )

    if (player === 'X') {
      setPlayer('Y')
    } else {
      setPlayer('X')
    }
  }


  return (
    <div className="App">
      <div className="gridarea">
        <div className="row">
          <Grid
          val={gridarea[0]} 
          chooseGrid={() => {
            chooseGrid(0)
          }}
        />
        <Grid
          val={gridarea[1]} 
          chooseGrid={() => {
            chooseGrid(1)
          }}
        />
        <Grid
          val={gridarea[2]} 
          chooseGrid={() => {
            chooseGrid(2)
          }}
        />
        </div>
        <div className="row">
        <Grid
          val={gridarea[3]} 
          chooseGrid={() => {
            chooseGrid(3)
          }}
        />
        <Grid
          val={gridarea[4]} 
          chooseGrid={() => {
            chooseGrid(4)
          }}
        />
        <Grid
          val={gridarea[5]} 
          chooseGrid={() => {
            chooseGrid(5)
          }}
        />
        </div>
        <div className="row">
        <Grid
          val={gridarea[6]} 
          chooseGrid={() => {
            chooseGrid(6)
          }}
        />
        <Grid
          val={gridarea[7]} 
          chooseGrid={() => {
            chooseGrid(7)
          }}
        />
        <Grid
          val={gridarea[8]} 
          chooseGrid={() => {
            chooseGrid(8)
          }}
        />
        </div>
      </div>
    </div>
  )
}

export default App
