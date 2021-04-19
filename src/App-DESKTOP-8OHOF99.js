import { useState } from 'react'
import './App.css';


const Square = (props) => {
  console.log({ props })
  return <button className="square" onClick={() => true}>{props.hi}</button>;
};


const Board = (props) => {
  // const [xisNext, setxIsNext] = useState(true)
  const renderSquare = (i) => {
    return (
      <Square
        value={i}
        hi={props.squares[i]}
        bye={i}
        onSquareClicked={onSquareClicked}
      />
    );
  };


  const onSquareClicked = (i) => {
    // setxIsNext(!xisNext)

  }

  const status = "Next player: X"


  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};


const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  console.log({ squares })

  return (
    <div className="game">
      <div className="d-flex flex-column">
        <h1> Tic tac toe </h1>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </div>

      <div className="game-board">
        <Board squares={squares} setSquares={setSquares} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}


function App() {

  return (
    <div className="App">
      <Game />
    </div>
  );
}

export default App;
