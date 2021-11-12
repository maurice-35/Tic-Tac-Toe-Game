import './App.css'
import { useState, useEffect } from 'react'
import Grid from './components/Grid'
import { Patterns } from './components/Patterns'


const App = () => {
  const [gridarea, setGridarea] = useState(['', '', '', '', '', '', '', '', ''])
  const [player, setPlayer] = useState('X')
  const [outcome, setOutcome] = useState({ winner: 'none', state: 'none' })


  useEffect(() => {
    checkOutcome()
    checkIfTie()

    if (player === 'X') {
      setPlayer('Y')
    } else {
      setPlayer('X')
    }
  }, [gridarea])

  useEffect(() => {
    if (outcome.state !== 'none') {
      alert(`Game over! Winner is ${outcome.winner}`)
      restartGame()
    }
  }, [outcome])

  const chooseGrid = (grid) => {
    setGridarea(
      gridarea.map((val, idx) => {
        if (idx === grid && val === '') {
          return player;
        }
        return val
      })
    )


  }

  const checkOutcome = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = gridarea[currPattern[0]]
      if (firstPlayer === '') return
      let correctPattern = true
      currPattern.forEach((idx) => {
        if (gridarea[idx] !== firstPlayer) {
          correctPattern = false
        }
      })

      if (correctPattern) {
        setOutcome({ winner: player, state: 'won' })
      }
    })
  }

  const checkIfTie = () => {
    let completed = true
    gridarea.forEach((grid) => {
      if (grid === '') {
        completed = false
      }
    })

    if (completed) {
      setOutcome({ winner: 'No One', state: 'Tie' })
    }
  }

  const restartGame = () => {
    setGridarea(['', '', '', '', '', '', '', '', ''])
    setPlayer('Y')
  }


  return (
    <>
      {/* <h2>tic-tac-toe game</h2> */}
      <div className="gridarea">
      <h2>tic-tac-toe game</h2>
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
    </>
  )
}

export default App
