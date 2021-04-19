import { useState } from 'react'
import './App.css';


const Square = (props) => {

  return <button className="square" onClick={() => props.onSquareClicked(props.value)}>{props.hi}</button>;
};


const Board = (props) => {
  const [xIsNext, setxIsNext] = useState(true)
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
    if (props.squares[i]) {
      return
    }
    const newSquares = props.squares
    newSquares[i] = xIsNext ? 'X' : 'O'
    props.setSquares(newSquares)
    setxIsNext(!xIsNext)

  }

  const status = xIsNext ? "Next player: X" : "Next player: O"

  // const calculateWinner = () => {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (props.squares[a] && props.squares[a] === props.squares[b] && props.squares[a] === props.squares[c]) {
  //       return props.squares[a];
  //     }
  //   }
  //   return null;
  // }

  // const winner = calculateWinner(props.squares)

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
